import * as mongoose from 'mongoose';
import { users } from '../models/users';

mongoose.connect(
	'mongodb://localhost/directory',
	{ useNewUrlParser: true }
);

mongoose.connection.on(
	'error',
	console.error.bind(console, 'connection error:')
);

export { mongoose };
