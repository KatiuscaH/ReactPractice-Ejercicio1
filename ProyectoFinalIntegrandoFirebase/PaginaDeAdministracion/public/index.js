var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);

/**
 * 0. Autenticar
 * 1. Crear Platillos
 * 2. Leer nuestros platillos
 * 3. Eliminar nuestros platillos
 */

//Autenticar con firebase
var ingresar = function () {
    var email = document.getElementById("correo").value;
    var password = document.getElementById("pass").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            console.log("Ingreso correcto");
            window.location = "agregarPlatillo.html";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error :" + errorCode + " " + errorMessage);
            // ...
        });

}

//Observador del estado de autenticacion
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("Si está autorizado");

    } else {
        // No user is signed in.
        console.log("No está autorizado");
        if (window.location.pathname !== "/index.html") {
            window.location = "index.html";
        }
    }
});

var salir = function () {

    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("Sesión terminada");
    }, function (error) {
        // An error happened.
        console.log("Error en terminar la sesión: " + error);
    });

}



//1. Crear platillos
var database = firebase.database();//referencia a db de firebase
var escribirPlatillos = function (pNombre, pDescripcion, pPrecio, pDireccion) {
    database.ref('alimentos/').push({
        nombre: pNombre,
        descripcion: pDescripcion,
        precio: pPrecio,
        cantidad: 0,
        direccion: pDireccion
    }).then(function () {
        alert("Platillo añadido");
        window.location = "agregarPlatillo.html";
    }).catch(function (error) {
        alert("Platillo NO añadido " + error);
    })
}

//2. Leer nuestros platillos

var imprimirPlatillos = function () {
    var query = database.ref('alimentos/');
    query.on('value', function (snapshot) {

        var ul = document.getElementById("lista");
        snapshot.forEach(function (childSnapshot) {
            console.log(childSnapshot.key);
            console.log(childSnapshot.val());

            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var li = document.createElement("li");
            var div = document.createElement("div");
            var img = document.createElement("img");
            var br = document.createElement("br");
            var button = document.createElement("button");

            button.setAttribute("id", childKey);
            button.setAttribute("class", "btn btn-danger");
            button.setAttribute("onclick", "eliminarPlatillos(this.id)");
            button.appendChild(document.createTextNode("Eliminar platillo"));

            img.src = childData.direccion;
            img.height = 200;
            img.width = 200;
            img.alt = "Imagen del platillo";

            div.appendChild(img);
            div.style.float = "right";
            li.setAttribute("class", "list-group-item");
            li.appendChild(div);
            li.appendChild(document.createTextNode("Nombre: " + childData.nombre));
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createTextNode("Descripcion: " + childData.descripcion));
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createTextNode("Precio: " + childData.precio));
            li.appendChild(document.createElement("br"));
            li.appendChild(button);

            ul.appendChild(li);
        })
    })
}

//3. Eliminar platillos
var eliminarPlatillos = function (id) {
    database.ref('alimentos/' + id).remove()
        .then(function () {
            alert("Platillo eliminado");
            console.log("Platillo eliminado");
            window.location = "platillos.html";

        })
        .catch(function (error) {
            console.log("No se boirró el platillo " + error);
        });
}


function funcionDeLaForma(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var imagen = document.getElementById("imgDir").value;


        escribirPlatillos(nombre, descripcion, precio, imagen);
    

    return false;
}


//Visualizar imagen
var storage = firebase.storage();//para guardar las imagenes en firebase
var storageRef = storage.ref();


function visualizarArchivo() {
    var preview = document.querySelector('img');//selecciona la imagen
    var archivo = document.querySelector('input[type=file]').files[0];//el archivo
    var lector = new FileReader();//nuevo lector de archivo

    lector.onloadend = function () {
        preview.src = lector.result;//cuando finalice la carga se va a leer el archivo
    }

    if (archivo) {
        lector.readAsDataURL(archivo);
        //put
        var subirImagen = storageRef.child('platillos/' + archivo.name).put(archivo);
        subirImagen.on('state_changed', function (snapshot) {

        }, function (error) {
            console.log("Error en la carga de la imagen" + error);
        }, function () {
            console.log(subirImagen.snapshot.downloadURL + " se subio");
            document.getElementById("imgDir").value = subirImagen.snapshot.downloadURL;

        })
    } else {
        preview.src = "";
    }
}


//BEBIDAS!!!
//imagenes
function visualizarArchivoBebidas() {
    var preview = document.querySelector('img');//selecciona la imagen
    var archivo = document.querySelector('input[type=file]').files[0];//el archivo
    var lector = new FileReader();//nuevo lector de archivo

    lector.onloadend = function () {
        preview.src = lector.result;//cuando finalice la carga se va a leer el archivo
    }

    if (archivo) {
        lector.readAsDataURL(archivo);
        //put
        var subirImagen = storageRef.child('bebidas/' + archivo.name).put(archivo);
        subirImagen.on('state_changed', function (snapshot) {

        }, function (error) {
            console.log("Error en la carga de la imagen" + error);
        }, function () {
            console.log(subirImagen.snapshot.downloadURL + " se subio");
            document.getElementById("imgDir").value = subirImagen.snapshot.downloadURL;

        })
    } else {
        preview.src = "";
    }
}

//forma = form
function funcionDeLaFormaBebidas(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var imagen = document.getElementById("imgDir").value;


    escribirBebidas(nombre, descripcion, precio, imagen);
    

    return false;
}

//escribir bebidas
var escribirBebidas = function (pNombre, pDescripcion, pPrecio, pDireccion) {
    database.ref('bebidas/').push({
        nombre: pNombre,
        descripcion: pDescripcion,
        precio: pPrecio,
        cantidad: 0,
        direccion: pDireccion
    }).then(function () {
        alert("Bebida añadido");
        window.location = "agregarBebida.html";
    }).catch(function (error) {
        alert("Bebida NO añadido " + error);
    })
}

//imprimir bebidas
var imprimirBebidas = function () {
    var query = database.ref('bebidas/');
    query.on('value', function (snapshot) {

        var ul = document.getElementById("lista");
        snapshot.forEach(function (childSnapshot) {
            console.log(childSnapshot.key);
            console.log(childSnapshot.val());

            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var li = document.createElement("li");
            var div = document.createElement("div");
            var img = document.createElement("img");
            var br = document.createElement("br");
            var button = document.createElement("button");

            button.setAttribute("id", childKey);
            button.setAttribute("class", "btn btn-danger");
            button.setAttribute("onclick", "eliminarBebidas(this.id)");
            button.appendChild(document.createTextNode("Eliminar Bebida"));

            img.src = childData.direccion;
            img.height = 200;
            img.width = 200;
            img.alt = "Imagen de bebida";

            div.appendChild(img);
            div.style.float = "right";
            li.setAttribute("class", "list-group-item");
            li.appendChild(div);
            li.appendChild(document.createTextNode("Nombre: " + childData.nombre));
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createTextNode("Descripcion: " + childData.descripcion));
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createTextNode("Precio: " + childData.precio));
            li.appendChild(document.createElement("br"));
            li.appendChild(button);

            ul.appendChild(li);
        })
    })
}


//eliminar bebidas
var eliminarBebidas = function (id) {
    database.ref('bebidas/' + id).remove()
        .then(function () {
            alert("Bebida eliminado");
            console.log("Bebida eliminado");
            window.location = "bebida.html";

        })
        .catch(function (error) {
            console.log("No se boirró el Bebida " + error);
        });
}