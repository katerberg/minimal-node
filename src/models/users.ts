import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const users = mongoose.model(
	'users',
	new Schema({ email: String, name: String, phone: String })
);

export { users };
