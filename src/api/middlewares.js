const errorHandler = (req, res, next) => {
    console.log({
        message: 'request to api',
        method: req.method,
        ip: req.ip,
        endpoint: req.originalUrl
    });
    next();
};

export { errorHandler };