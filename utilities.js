const fs = require('node:fs')
const html = require('./htmlparts')

module.exports = {
    getView : function (filename, res, data2=null){
        fs.readFile(`${__dirname}/views/${filename}.html`, function(error, data){
            if(error){
                console.log('Hiba keletkezett a folyamat során', error);
            }
            else {
                let finaldata = String(data).replace('{navigation}', html.getHTMLPart('nav'))

                if (data2 !== null){
                    finaldata = finaldata.replace('{userslist}', data2)
                    }
                res.write(finaldata)
            }

            res.end()
        })
        }
}
