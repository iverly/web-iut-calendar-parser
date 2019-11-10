const Router = require('koa-router');
const controller = require('./publisher.controller');

const router = new Router();

router
    .param('url', controller.urlParam)
    .get('/publisher/:url/', controller.urlRoute)
    .get('/publisher/:url/:date/week/', controller.weekRoute)
    .get('/publisher/:url/:date/day/', controller.dayRoute);

module.exports = router;