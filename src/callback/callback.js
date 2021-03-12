//un callback es una función que se pasa como parametro a otra función
//se utiliza

//
function primero(segundo){
    setTimeout(function(){
        console.log("primero");
        segundo();
    },3000);
};

function segundo(){
    console.log("segundo");
}

primero(segundo);