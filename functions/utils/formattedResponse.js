module.exports = (statusCode, data) => ({
    statusCode,
    body: JSON.stringify(data)
})