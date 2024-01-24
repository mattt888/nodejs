const fs = require('node:fs')
const html = require('./htmlparts')

module.exports = {
    getView : function (filename, res){
        fs.readFile(`${__dirname}/views/${filename}.html`, function(error, data){
            if(error){
                console.log('Hiba keletkezett a folyamat során', error);
            }
            else {
                const finaldata = String(data).replace('{navigation}', html.getHTMLPart('nav'))
                res.write(finaldata)
            }

            res.end()
        })
        }
}
