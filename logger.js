
module.exports = function log(string) {
    if (typeof string !== "string") throw new TypeError("Logger wants a string!");
    return string.replace(/\s/g, "");
};
