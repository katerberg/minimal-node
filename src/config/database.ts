const mongoose = require("mongoose");
import { users } from '../models/users';

mongoose.connect('mongodb://localhost/directory', { useNewUrlParser: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));




// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	var query = users.findOne({ name : "Charlie Harris" }, function(err : Error, data : any) {
// 		console.log(data);
// 	});
// 	console.log('it works!!');
// 	});


export { mongoose };
