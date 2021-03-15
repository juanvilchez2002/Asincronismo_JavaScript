const fetchData = require('../utils/fectData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url)
        console.log('Imprimiendo valores de las constantes');
        console.log(data);
        console.log(character);
        console.log(origin);
        console.log('Imprimiendo los valores deseados');
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch(error){
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');