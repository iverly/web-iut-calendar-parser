function printError(code) {
    return {
        status: 'error',
        code
    }
}

module.exports = { printError }