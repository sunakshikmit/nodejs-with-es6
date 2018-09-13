import mongoose from 'mongoose';

// user schema
const userSchema = mongoose.Schema({
	name :{type:String},
	password:{type:String},
	email:{type:String}
}, {collection : 'users'});

let usersModel = mongoose.model('users', userSchema);

export default usersModel