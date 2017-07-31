// Changes a string to lowercase and replaces spaces with hyphens
module.exports = function(text) {
    return String(text).replace(/\s+/g, '-').toLowerCase()
}
