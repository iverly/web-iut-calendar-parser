const Router = require('koa-router');
const controller = require('./index.controller');

const router = new Router();

router.get('/', controller.home);

module.exports = router;