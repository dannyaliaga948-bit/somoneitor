alert("clase 9");
//crear un programa que gestione una lista de tarea 
//de permitir.
//1.agregar una tarea
//2.elimiar una tarea
//3.mostrar todas las tarea
//4.marcar una tarea como cmpletada
//5.mostrar las tareas imcopletas

//lista de tareas
let tareas =[]
function agregarTarea(tarea="",estado="imcompleto"){
    if(tarea ===""){
     tarea=document.getElementById("tarea").value;
     estado=document.getAnimations
    }
    tareas.push({descripcion:tarea,completada:estado})
}
function eliminarTarea(indice){
    if(indice>=0 && indice< tareas.length){
        tareas.splice(indice,1);
    }else{
console.log("indice invalido");
    }
}
function mostrartareas(){
    console.log("lista de tareas:");
    tareas.forEach((tarea,indice)=>{
        console.log(`${indice+1}.
            [${tarea.completada }]
            ${tarea.descripcion}`);
        });
}

//adicionar las tareas
agregarTarea("comprar leche","completado");
agregarTarea("hacer ejercicio","imcompleto");
agregarTarea("estudiar javaScript","imcompleto");
agregarTarea("subir a GitHub","imcompleto");
mostrartareas();