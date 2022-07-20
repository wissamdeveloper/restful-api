import bcrypt from "bcrypt";
import config from "config";
import mongoose from "mongoose";
export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema(
    {
        email: {type:String, required: true, unique:true},
        name: { type:String, required: true},
        password: {type:String, required: true},
    },
    {
        timestamps: true,
    }
);
userSchema.pre("save", async function(next){
    let user = this as UserDocument
    if(!user.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))
    const hash = await bcrypt.hashSync(user.password, salt);
    user.password = hash;
    return next();
});
userSchema.methods.comparePassword = async function 
(condidatePassword: string) : Promise<boolean>
{
    const user = this as UserDocument;
    return bcrypt.compare(condidatePassword,user.password).catch((e) => false)
}
const UserModel = mongoose.model("User", userSchema)

export default UserModel