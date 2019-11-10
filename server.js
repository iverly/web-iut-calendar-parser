const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const indexRouter = require('./routes/index.route');
const server = new Koa();

server
    .use(logger())
    .use(helmet())
    .use(cors())
    .use(bodyParser())
    .use(indexRouter.routes())
    .use(indexRouter.allowedMethods());

module.exports = server;