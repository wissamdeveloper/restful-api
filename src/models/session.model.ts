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

const sessionSchema = new mongoose.Schema(
    {
        email: {type:String, required: true, unique:true},
        name: { type:String, required: true},
        password: {type:String, required: true},
    },
    {
        timestamps: true,
    }
);

const SessionModel = mongoose.model("Session", sessionSchema)

export default SessionModel