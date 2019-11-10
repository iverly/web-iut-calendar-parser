const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const indexRouter = require('./routes/index.route');
const publisherRouter = require('./routes/publisher.route');
const calendarRouter = require('./routes/calendar.route');
const render = require('koa-ejs');
const path = require('path');

const server = new Koa();

render(server, {
    root: path.join(__dirname, 'views'),
    layout: false,
    async: true,
    viewExt: 'ejs',
    cache: process.env.NODE_ENV == 'production' ? true : false,
    debug: process.env.NODE_ENV == 'production' ? false : true
});

server
    .use(logger())
    .use(helmet())
    .use(cors())
    .use(bodyParser())
    .use(indexRouter.routes())
    .use(indexRouter.allowedMethods())
    .use(publisherRouter.routes())
    .use(publisherRouter.allowedMethods())
    .use(calendarRouter.routes())
    .use(calendarRouter.allowedMethods());

module.exports = server;