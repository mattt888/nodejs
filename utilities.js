const fs = require('node:fs')

function getHTMLPart(filename) {
    return fs.readFileSync(`${__dirname}/views/includes/${filename}.html`).toString()
}

module.exports = {
    getView : function (filename, res){
        fs.readFile(`${__dirname}/views/${filename}.html`, function(error, data){
            if(error){
                console.log('Hiba keletkezett a folyamat során', error);
            }
            else {
            // {navigation} 
                console.log(getHTMLPart('nav'));
                const finaldata = String(data).replace('{navigation}', getHTMLPart('nav'))
                res.write(finaldata)
            }

            res.end()
        })
        }
}
