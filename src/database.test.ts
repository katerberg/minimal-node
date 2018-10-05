import * as request from 'supertest';
import { mongoose } from './config/database';

describe('Make sure database is connecting to mongo', () => {
	it('should return 2', () => {
		const ready: number = mongoose.connection.readyState;
		expect(ready).toEqual(2);
	});
});

// describe('Make sure user-info collection updates when sent a post request with user info',() =>{
// 	it('return the info retrieved from the database after posting it to the new collection', () => {
//
//
// 	});
// });
