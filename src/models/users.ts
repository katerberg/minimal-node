import { mongoose } from '../config/database';
// import { Document, Model, Schema } from "mongoose";

const Schema = mongoose.Schema;

const users = mongoose.model(
	'users',
	new Schema({
		email: String,
		name: String,
		phone: String,
	})
);

export { users };
