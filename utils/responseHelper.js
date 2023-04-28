class responseHelper {
    async sendSuccessResponse(res, message, data) {
        res.send({
            code: 1,
            message: message,
            data: data || null
        });
    }



    async sendErrorResponse(res, message, data) {
        res.send({
            code: 0,
            message: message,
            data: data || null
        });
    }
}

module.exports = new responseHelper();