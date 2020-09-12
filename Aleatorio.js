let text = document.getElementById("text");
let evento = document.getElementById("evento");
let winners = document.getElementById("winners");
let nGanadores = document.getElementById("nGanadores");

evento.addEventListener("click", function(){
    let array = proDatos();
    let n = nGanadores.value;
    let ganadores = [];
    for(let i = 1; i <= n; i++){
        eleccion(array,ganadores); 
    }
})

function eleccion(array, ganadores){
    let aleatorio = Math.random()*100.0;
    let cantidad = array.length;
    let probabilidad = 100/cantidad;
    for(let i in array){
        let intervaloMenor = probabilidad*i;
        let intervaloMayor = probabilidad*i + probabilidad;
        if ((aleatorio >= intervaloMenor) && aleatorio<= intervaloMayor){
            ganadores.push(array[i]);
        }
    }  
    let borrar = array.indexOf(ganadores[(ganadores.length - 1)]);
    array.splice(borrar,1);
    return ganadores;
}

function proDatos(){
    let datos = text.value.split("\n");
    return datos;
}