import { Request, Response } from 'express';
import { mongoose } from '../config/database';

import { users } from '../models/users';

export let index = (req: Request, res: Response) => {
	res.status(200).send({ status: 200, message: 'Your server works' });
};
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var query = users.findOne({ name : "Charlie Harris" }, function(err : Error, data : any) {
		console.log(data);
	});
	console.log('it works!!');
	});
