
import mongoose, {Schema ,  Document} from "mongoose";

export interface IUser extends Document {
    name:string,
    email:string,
    age:number
}

const UserSchema : Schema = new Schema({
    name: {type: String, require:true },
    email: {type: String, require:true},
    age: {type:String, require:true}
})

export default mongoose.model<IUser>('User', UserSchema)