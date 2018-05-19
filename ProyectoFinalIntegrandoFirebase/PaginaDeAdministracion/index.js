var config = {
    apiKey: "AIzaSyDvjMMCfTa76r0hl0D12y5S3YFwenKVReE",
    authDomain: "administracion-7113b.firebaseapp.com",
    databaseURL: "https://administracion-7113b.firebaseio.com",
    projectId: "administracion-7113b",
    storageBucket: "administracion-7113b.appspot.com",
    messagingSenderId: "730981297008"
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
            console.log("Error :" + errorCode + " "+ errorMessage);
            // ...
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

        })
        .catch(function (error) {
            console.log("No se boirró el platillo " + error);
        });
}


function funcionDeLaForma() {
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var imagen = document.getElementById("imgDir").value;


    //alert(nombre + descripcion + precio);
    try {
        escribirPlatillos(nombre, descripcion, precio, imagen);
        alert("Platillo añadido");
    } catch (error) {
        console.log("No se agregó el platillo: " + error);
    }
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