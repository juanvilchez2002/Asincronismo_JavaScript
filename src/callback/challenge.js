//construyendo la implementación del uso de Rick and Morty
//-----
//instalar una dependencia que es un obj que nos ayuda a hacer peticiones a servicios o apis
//npm install xmlhttprequest --save
//XMLHttpRequest es la forma antigua de hacer llamados
//actualmente se usa fetch, que son promesas, implementado en ES6
//instanciando la libreria que nos ayudara a hacer peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//guardando la ruta de la API
let API = 'https://rickandmortyapi.com/api/character/'

//creando una funcion que traera información de la api
function fetchData(url_api, callback){
    //instanciando el objeto
    let xhttp = new XMLHttpRequest();
    //hacer un llamado o abrir una url
    //open(tipo de petición, url a abrir, si es asincrona o no)
    xhttp.open('GET', url_api, true);
    //escuchar la coneción
    xhttp.onreadystatechange = function (event){
        //verificamos el estado de la conexión
        //4 -> solicitud finalizada y la respuesta está lista
        if(xhttp.readyState === 4){
            //200 -> estatus Ok
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    //enviando la solicitud
    xhttp.send();
}

//haciendo peticiones
//realizando la 1era petición
//las url son deacuerdo a la estructura de la api
fetchData(API, function (error1, data1){
    if(error1) return console.error(error1);//si existe error en la 1era petición
    //realizando la 2da petición
    fetchData(API + data1.results[3].id, function (error2, data2){
        if (error2) return console.error(error2);//si existe error en la 2da petición
        //realizando la 3era petición
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.error(error3)//si existe error en la 3era petición
            console.log(data1.info.count);//nos devuelve la cantidad de personajes
            console.log(data2.name);//nos devuelve el nombre del personaje
            console.log(data3.dimension);//nos devuelve la dimensión a la que pertenece
        });
    });
});