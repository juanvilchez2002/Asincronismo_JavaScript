//las promesas en JavaScript permiten ejecutar código sincrono sin usar callbacks, que pueden ser 
//inmanejables cuando crecen
//las promesas es un objeto que representa la terminación o el fracaso de una operación asíncrona

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey¡¡¡');
        }else{
            reject('Ups¡¡');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


//------
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve('True');
            },2000)
        }else{
            const error = new Error('Upsssss');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

//----
//ejecutando todas las promesas
//llamando a todos las promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Lista de Resultado', response)
})
.catch(err => {
    console.error(err);
});