const Router = require('koa-router');
const controller = require('./calendar.controller');

const router = new Router();

router
    .param('group', controller.groupParam)
    .get('/calendar/:group/:date', controller.groupRoute)
    .get('/calendar/:group/:date/week/', controller.weekRoute)
    .get('/calendar/:group/:date/day/', controller.dayRoute);

module.exports = router;