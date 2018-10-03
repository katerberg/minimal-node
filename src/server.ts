import app from './app';

const server = app.listen(app.get('port'), () => {
	console.log(` App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`); // tslint:disable-line
	console.log('  Press CTRL-C to stop\n'); // tslint:disable-line
});

export default server;
