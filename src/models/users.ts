import { mongoose } from "../config/database";
// import { Document, Model, Schema } from "mongoose";


var Schema = mongoose.Schema;

var users = mongoose.model('users', new Schema({

	name: String,
	phone: String,
	email: String,
  
}));

export {users};
