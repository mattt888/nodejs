
var fs = require('fs')

exports.getHTMLPart = function getHTMLPart(filename) {
    return fs.readFileSync(`${__dirname}/views/includes/${filename}.html`).toString()
}

exports.inputField = function inputField() {
    return 'input teszt';
}

