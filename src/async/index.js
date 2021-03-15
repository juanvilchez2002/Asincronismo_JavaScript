//async -> define una función asincrona, la cual devuelve un objeto
//await -> es usado para esperar a una Promesa, solo puede ser usado dentro de la función Sync

//-----
const doSomeThingAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)? setTimeout(() => resolve('Do Something Async'), 3000)
        :reject(new Error('Test Error'))
    });
}

//llamando a la función
const doSomeThing = async() => {
    const something = await doSomeThingAsync();
    console.log(something);
}

console.log('Before');
doSomeThing();
console.log('After');

const anotherFunction = async() =>{
    try{
        const something = await doSomeThingAsync();
        console.log(something, '1');
    }catch(error){
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 2');