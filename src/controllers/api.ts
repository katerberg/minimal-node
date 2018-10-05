import { Request, Response } from 'express';
import { mongoose } from '../config/database';
import { users } from '../models/users';
import { surveyInfo } from '../models/surveyInfo'

const db = mongoose.connection;

export let employees = (req: Request, res: Response) => {
	const query = users.find({}, (err: Error, data: object[]) => {
		const userData: object[] = data;
		res.status(200).send(userData);
	});
};

export let postInfo = (req: Request, res: Response) => {
	 const newUserInfo = new surveyInfo(req.body);
	 newUserInfo.save()
	 .then(item => {
	 	res.send({status: 200, message: "success"});
	 })
	 .catch(err => {
	 	res.status(400).send("unable to save to database");
	 });
};
