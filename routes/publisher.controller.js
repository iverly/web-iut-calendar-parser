const iutParser = require('iut-calendar-parser').publisher;
const shared = require('./shared.controller');

async function urlParam(url, ctx, next) {
    ctx._data = await iutParser.getData(decodeURI(url));
    if (!ctx._data) {
        ctx.status = 400;
        return ctx.body = shared.printError(400);
    }
    return next();
}

function urlRoute(ctx) {
    return ctx.body = ctx._data;
}

function weekRoute(ctx) {
    return ctx.body = iutParser.getWeek(ctx._data, new Date(ctx.params.date));
}

function dayRoute(ctx) {
    return ctx.body = iutParser.getDay(ctx._data, new Date(ctx.params.date));
}

module.exports = { urlParam, urlRoute, weekRoute, dayRoute };