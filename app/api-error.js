class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        tthis.message = message;
    }
}

module.exports = ApiError;