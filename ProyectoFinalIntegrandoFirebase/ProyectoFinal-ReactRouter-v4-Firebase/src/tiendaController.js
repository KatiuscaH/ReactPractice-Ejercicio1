import { extendObservable } from 'mobx';
import datos from './firebaseController';

class TiendaController {
    constructor() {

        self = this;

        datos.bebidas.once('value').then(function (snapshot) {
            //console.log(snapshot);
            snapshot.forEach(function (childSnapshot) {
                const key = childSnapshot.key;
                const valor = childSnapshot.val();
                self.bebidas.push(valor);
            })
        })

        datos.platillos.once('value').then(function (snapshot) {
            //console.log(snapshot);
            snapshot.forEach(function (childSnapshot) {
                const key = childSnapshot.key;
                const valor = childSnapshot.val();
                self.platillos.push(valor);
            })
        })
        //dos objetos: 1 this, 2 objetos
        extendObservable(this,
            {
                platillos: [],

                bebidas: []
            });
    }

    ponerEnLaOrden(indicePlatillo, cantidadPlatillo) {
        this.platillos.forEach((value, index) => {
            if (indicePlatillo === index) {
                this.platillos[index].cantidad = cantidadPlatillo;
            }
        }
        )

    }

    bebidasEnLaOrden(indicePlatillo, cantidadPlatillo) {
        this.bebidas.forEach((value, index) => {
            if (indicePlatillo === index) {
                this.bebidas[index].cantidad = cantidadPlatillo;
            }
        }
        )

    }

}

var VarTiendaController = new TiendaController;
export default VarTiendaController;