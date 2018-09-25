import { mongoose } from "../config/database";
// import { Document, Model, Schema } from "mongoose";


var Schema = mongoose.Schema;

var users = mongoose.model('users', new Schema({

	number: String,
	telephone: String,
	phoneNumber: String,
	title: String,
	organization: String,
	orgPhoneNumber: String,

}));
