import { extendObservable } from 'mobx';

//clase
class ListaData{
    constructor(){
        extendObservable(this,
        {tareas: ['Learn React', 
        'To do App']});
    }


    agregarTarea(tarea){
        console.log(tarea);
        this.tareas.push(tarea);

    }

    eliminarTarea(index){
        this.tareas.splice(index, 1);
    }
}

var VarListaData = new ListaData();
export default VarListaData;