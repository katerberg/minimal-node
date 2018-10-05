import * as mongoose from 'mongoose';

// mongoose.Promise = global.Promise;


mongoose.connect(
	'mongodb://localhost/directory',
	{ useNewUrlParser: true }
);

mongoose.connection.on(
	'error',
	console.error.bind(console, 'connection error:')
);

export { mongoose };
