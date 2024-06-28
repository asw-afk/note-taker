//immediately exports a function the generates a string of random numbers and letters
module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
    .toString(15)
    .substring(1);