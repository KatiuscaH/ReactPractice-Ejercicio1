import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDvjMMCfTa76r0hl0D12y5S3YFwenKVReE",
    authDomain: "administracion-7113b.firebaseapp.com",
    databaseURL: "https://administracion-7113b.firebaseio.com",
    projectId: "administracion-7113b",
    storageBucket: "administracion-7113b.appspot.com",
    messagingSenderId: "730981297008"
};

firebase.initializeApp(config);

const database = firebase.database();//base de datos

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {platillos, bebidas};


export default datos;