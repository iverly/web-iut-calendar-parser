const http = require('http');
const debug = require('debug')('iut-calendar-parser:http');
const server = require('./server');

async function bootstrap() {
    return http.createServer(server.callback()).listen(process.env.KOA_PORT);
}

bootstrap()
    .then(server => debug(`🚀 Server listening on port ${server.address().port}!`))
    .catch(err => {
        debug('❌ Unable to run the server because of the following error:')
        debug(err)
        process.exit(1)
    });