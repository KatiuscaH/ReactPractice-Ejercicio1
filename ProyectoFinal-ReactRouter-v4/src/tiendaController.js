import { extendObservable } from 'mobx';

class TiendaController {
    constructor() {
        //dos objetos 1 this, 2 objetos
        extendObservable(this,
            {
                platillos: [{
                    nombre: "1-Platillo",
                    descripcion: "platillo muy rico",
                    precio: 150,
                    cantidad: 0
                },
                {
                    nombre: "2-Platillo",
                    descripcion: "platillo muy rico",
                    precio: 1000,
                    cantidad: 0
                },
                {
                    nombre: "3-Platillo",
                    descripcion: "platillo muy rico",
                    precio: 500,
                    cantidad: 0
                }],

                bebidas: [{
                    nombre: "Bebida-1",
                    descripcion: "Bebida cool",
                    precio: 30,
                    cantidad: 0

                }, {
                    nombre: "Bebida-2",
                    descripcion: "Bebida cool",
                    precio: 40,
                    cantidad: 0
                }, {
                    nombre: "Bebida-3",
                    descripcion: "Bebida cool",
                    precio: 100,
                    cantidad: 0
                }

                ]
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