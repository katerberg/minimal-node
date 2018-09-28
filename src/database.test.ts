import * as request from 'supertest';
import { mongoose } from './config/database';

describe('Make sure database is connecting to mongo', () => {
	it('should return 2', () => {
		const ready: number = mongoose.connection.readyState;
		expect(ready).toEqual(2);
	});
});
