//-----
//un callback es una función que recibe como parámetro otra función
//Una función que recibe otra función como parámetro se le denomina 
//
//función de orden superior (higher-order function).
//-----
//creando una función que recibe una función como parametro
//función suma
function sum(num1, num2){
    return num1 + num2;
}

//funcion que recibe la funcion sum
function calc(num1, num2, callback){
    return callback(num1, num2);
}

//realizamos el llamado donde se pasa la función
//sum como parametro
console.log(calc(2,6,sum));

//-----
//esperar a algo que suceda con callback
// función que se pasara el callback
function date(callback){
    console.log(new Date);
    setTimeout(
        function (){
            let date = new Date;
            callback(date);
        }, 3000
    );
}
//función que se pasara como parametro
function printDate(dateNow){
    console.log(dateNow);
}
//realizar la función
date(printDate);