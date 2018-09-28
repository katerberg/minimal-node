import { Request, Response } from 'express';
import { mongoose } from '../config/database';
import { users } from '../models/users';

const db = mongoose.connection;

export let employees = (req: Request, res: Response) => {
	const query = users.find({}, (err: Error, data: object[]) => {
		const userData: object[] = data;
		res.status(200).send(userData);
	});
};
