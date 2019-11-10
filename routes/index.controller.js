async function home(ctx) {
    await ctx.render('index');
}

module.exports = { home };