let text = document.getElementById("text");
let evento = document.getElementById("evento");
let mostrar = document.getElementById("mostrar");
let nGanadores = document.getElementById("nGanadores");7
let file = document.getElementById("file")

file.addEventListener('change',function(e){
    let ruta = file.value;
    let permitida = /(.txt|.TXT)$/i;
    if(!permitida.exec(ruta)){
        alert("archivo no permitido, intente denuevo, solo archivos .txt");
        file.value = "";
        cargaArchivo = false;
        return false;
    }
    else{
        alert("archivo correcto");
        const reader = new FileReader();
        reader.onload = function(){
            noEmptySpace(reader.result)
        }
        reader.readAsText(file.files[0]);  
    }

},false)


evento.addEventListener("click", function(){
    let arrayData;
    if(text.value !== ""){
        arrayData = noEmptySpace(text.value);
    }else{
        alert("valores no ingresados")
        return false;
    } 
    // evaluacion de numero de ganadores
    let n = nGanadores.value;
    let ganadores = [];
    if(n < 1 || n > arrayData.length){
        n = 1;
        nGanadores.value = 1;
    }
    // eleccion de ganadores
    for(let i = 0; i < n; i++){
        eleccion(arrayData,ganadores); 
    }
    //mostrar ganadores
    mostrar.innerHTML = " ";
    for(let i in ganadores){
        mostrar.innerHTML = mostrar.innerHTML + ganadores[i] + "\n";
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

function noEmptySpace(forma){
    let datos = forma.split("\n");
    for(let x in datos){
        while(datos[x] == ""){
            datos.splice(x,1);
        }
    }
    return noDateRepeat(datos);
}

function noDateRepeat(datos){
    for(let x in datos){
        for(let i in datos){
            while( i != x && datos[x] == datos[i]){
                datos.splice(i,1);
            }
        }
    }
    arreglarTextArea(datos);
    return datos
}

function arreglarTextArea(datos){
    text.value = "";
    for(let i in datos){
        text.value += datos[i] + "\n";
    }
}
