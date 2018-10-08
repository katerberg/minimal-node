import * as bodyParser from 'body-parser';
import * as compression from 'compression'; // compresses requests
import * as express from 'express';
import * as expressValidator from 'express-validator';
import * as path from 'path';

// Controllers (route handlers)
import * as apiController from './controllers/api';
import * as homeController from './controllers/home';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/api/database/employees', apiController.employees);

export default app;
