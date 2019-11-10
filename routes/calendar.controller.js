const iutParser = require('iut-calendar-parser').calendar;
const shared = require('./shared.controller');

async function groupParam(url, ctx, next) {
    if (!ctx.params.date) return ctx.body = shared.printError(400);
    ctx._data = await iutParser.getData(decodeURI(url), new Date(ctx.params.date));
    if (!ctx._data) return ctx.body = shared.printError(400);
    return next();
}

function groupRoute(ctx) {
    return ctx.body = ctx._data;
}

function weekRoute(ctx) {
    return ctx.body = iutParser.getWeek(ctx._data);
}

function dayRoute(ctx) {
    return ctx.body = iutParser.getDay(ctx._data, new Date(ctx.params.date));
}

module.exports = { groupParam, groupRoute, weekRoute, dayRoute };