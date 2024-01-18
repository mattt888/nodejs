const fs = require('node:fs')

module.exports = {
    getView : function (filename, res){

//         fs.readFile(__dirname + '/views/' + filename + '.html', function(error, data){
//             if(error){
//                 console.log('Hiba keletkezett a folyamat során', error);
//             }
//             else {
//                 res.write(data)
//             }
    
//             res.end()
//         }) 
//     }
// }


        fs.readFile(`${__dirname}/views/${filename}.html`, function(error, data){
            if(error){
                console.log('Hiba keletkezett a folyamat során', error);
            }
            else {
                res.write(data)
            }

            res.end()
        }) 
        }
}
