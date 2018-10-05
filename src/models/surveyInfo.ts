import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const surveyInfo = mongoose.model(
	'surveyInfo',
	new Schema({
        email: String,
        pronoun: String,
        madLib: [String],
      })
  );

export { surveyInfo };
