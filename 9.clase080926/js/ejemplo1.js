let tareas = [];
function agregarTarea(tarea="",estado="Incompleto") {
    if(tarea === ""){
    tarea = document.getElementById("tarea").value;
    estado= document.getElementById("tareaSelect").value;
    }
    tareas.push({ descripcion: tarea, completada:estado});
    
}
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
    }else{
        console.log("Indice invalido");
    }
}
function mostrarTarea(){
    console.log("Mostrando Lista de tareas:");
    tareas.forEach((tarea,indice) =>{
        console.log(`${indice + 1}.
             [${tarea.completada }]
             ${tarea.descripcion}`);
    });
}
//Adicionar las tareas
agregarTarea("Comprar leche","Completado");
agregarTarea("Hacer ejercicio","Completado");
agregarTarea("Estudiar JavaScript","Incompleto");
agregarTarea("Subir a GitHub","Incompleto");
mostrarTarea();