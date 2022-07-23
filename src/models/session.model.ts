import { UserDocument } from "./user.model";
import bcrypt from "bcrypt";
import config from "config";
import mongoose from "mongoose";
export interface SchemaDocument extends mongoose.Document {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: String,
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
    {
        user: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
        valid: { type:Boolean, default: true},
        password: {type:String, required: true},
        userAgent: {type: String},
    },
    {
        timestamps: true,
    }
);

const SessionModel = mongoose.model("Session", sessionSchema)

export default SessionModel