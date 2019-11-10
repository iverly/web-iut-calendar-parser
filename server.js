const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const indexRouter = require('./routes/index.route');
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
    .use(indexRouter.allowedMethods());

module.exports = server;