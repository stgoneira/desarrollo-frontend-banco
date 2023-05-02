module.exports = {
    isProduction: () => {
        if (process.env.NODE_ENV === 'production') {
            return true;
        } else {
            return false;
        } 
    },
};