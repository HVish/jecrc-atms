module.exports = {
    index: (req, res, next) => {
        console.log('Authorization');
        next();
    }
};
