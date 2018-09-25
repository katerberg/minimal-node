import { Request, Response } from 'express';
import { mongoose } from '../config/database';
import { users } from '../models/users';

const db = mongoose.connection;



export let api = (req: Request, res: Response) => {

  var query = users.find({}, function(err : Error, data : any) {
    let userData : [object] = data;
    res.status(200).send(userData);
  });
};
