
/*const rp = require('request-promise');

rp('http://google.com')
then(function(html){
    console.log('termine la peticion de google');
}).catch(function(err){
    console.log(err);
})
//full la promesa se cumplio
//rejected no se cumplio
//pending la promesa no se ha completado
//settle se finalizo la promesa*/

const request = require('request');

        function leer(url){
            return new Promise(function(resolve,reject){

                request(url,function(err, response){  //recibe un error y un response
                            if(err){
                                reject(err);
                            }else{
                                resolve(response);
                            }
                });
            });
        }
        leer('http://codigofacilito.com')
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        });