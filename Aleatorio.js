let text = document.getElementById("text");
let evento = document.getElementById("evento");
let mostrar = document.getElementById("mostrar");
let nGanadores = document.getElementById("nGanadores");7

evento.addEventListener("click", function(){
    mostrar.innerHTML = " ";
    let array = proDatos();
    let n = nGanadores.value;
    let ganadores = [];
    for(let i = 0; i < n; i++){
        eleccion(array,ganadores); 
    }
    for(let i in ganadores){
        mostrar.innerHTML = mostrar.innerHTML + ganadores[i]
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
    let limpiar = array.indexOf(ganadores[(ganadores.length - 1)]);
    array.splice(limpiar,1);
    return ganadores;
}

function proDatos(){
    let datos = text.value.split("\n");
    console.log(datos)
    var a = datos.find( elemento => elemento == "");
    console.log(a)
    console.log(datos)
    return datos;
}