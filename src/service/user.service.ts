import UserModel, { UserDocument } from '../models/user.model'

import {DocumentDefinition} from 'mongoose'
export async function createUser(input : DocumentDefinition<UserDocument>){
    try{
        return UserModel.create(input);
    }catch(e: any){
        throw new Error(e);
    }
}