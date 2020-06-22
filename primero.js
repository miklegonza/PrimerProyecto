function acciones(condicion) {
  console.log("He presionado un boton");
  let texto1 = document.getElementById("primerBloque");
  texto1.innerHTML += (condicion == 1) ? "Presioné el primer boton jaja <br/>" : "Presioné el segundo boton jaja <br/>";
  alert("♥");
}

function print(condicion) {
  let texto2 = document.getElementById("printJS");
  texto2.innerHTML += (condicion == 3) ? "presionaste 3<br/>" : "presionaste 4<br/>";
}

function concatenar() {
  let palabra1 = document.getElementById("palabras1");
  let palabra2 = document.getElementById("palabras2");
  let texto = document.getElementById("concat");

  texto.innerHTML += palabra1.value + " " + palabra2.value + "<br/>";
}

console.log("Esto es para recordarte que te amo más");
//Codigos
/*
//variables e impresiones
let nombre = "Michael";
const pi = 3.1416;
console.log(nombre + " sabe que pi = " + pi);
let booleano = new Boolean();
console.log(booleano.toString());

//condiciones y bucle
let edad = prompt();
if (edad >= 18) {
  console.log("Puede entrar");
} else {
  console.log("Vuelva por su camino");
}
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log("iteracion " + i);
}

//Método que imprime el mensaje y retorna un cero
function alv() {
  console.log("metodo alv");
  return 0;
}

//Taller
//1. pares e impares
function parImpar(num) {
  let mensaje;
  if (num % 2 == 0) {
    mensaje = "par";
  } else {
    mensaje = "impar";
  }
  return "El numero " + num + " es " + mensaje;
}
//2. sumar, restar, multiplicar y dividir dos números con prompt()
function operaciones(num1, num2) {
  let opcion = prompt("Ingrese opcion \n1 sumar \n2 restar \n3 multiplicar \n4 dividir");
  console.log(opcion);
  let result = 0;
  switch (opcion) {
    case 1:
      result = num1 + num2;
      break;
    case 2:
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      result = num1 / num2;
      break;
    default:
      result = 0;
  }
  return result;
}

//4. numero magico
function numeroMagico(){
  let conf = false;
  const num = 18;
  while(!conf) {
    let ad = prompt("cual sera?");
    if (ad < num) {
      alert("es mayor bro");
    } else if (ad > num) {
      alert("es menor bro");
    } else {
      alert("lo has logrado jaja");
      conf = true;
    }
  }
}

//funcion que recibe una funcion y funcion que retorna una funcion
function executor(funcion) {
  funcion();
}
function saludo() {
  console.log("hola brou");
}
executor(saludo);
o
function executor(funcion) {
  funcion();
}
executor(function() {
  console.log("hola brou");
});

//arrow function
let demo = () => {
  console.log("hola mundo");
}
let saludar = () => {
  console.log("hola x2");
}
//arrow function anonima
() => {}

//call
function executor(funcion) {
  funcion.call(tutor);
}
let tutor = {
  nombre: "Michael",
  apellido: "Gonzalez",
  nombreCompleto: function() {
    console.log(this.nombre + " " + this.apellido);
  }
}
executor(tutor.nombreCompleto);
output:
"Michael Gonzalez"

//bind (recomendado)
function executor(funcion) {
  funcion();
}
let tutor = {
  nombre: "Michael",
  apellido: "Gonzalez",
  nombreCompleto: function() {
    console.log(this.nombre + " " + this.apellido);
  }
}
executor(tutor.nombreCompleto.bind(tutor));
output:
"Michael Gonzalez"

//declaracion de arreglos
1.
let arreglo = [1,2,3,4,5,6];
2.

//recorrer un arreglo con forEach
let arreglo = ["ruby", "python", "java", "JavaScript"];
arreglo.forEach(function(elemento) {
  console.log(elemento);
});

//filter para recorrer el arreglo - function
let arreglo = ["ruby", "python", "java", "JavaScript"];
arreglo.forEach(function(elemento) {
  console.log(elemento);
});
console.log("\n");
arreglo = arreglo.filter(function(element) {
  return element != "ruby";
});
arreglo.forEach(function(elemento) {
  console.log(elemento);
});

//filter para recorrer el arrgelo - arrow function
let arreglo = ["ruby", "python", "java", "JavaScript"];
arreglo.forEach(function(elemento) {
  console.log(elemento);
});
console.log("\n");
arreglo = arreglo.filter((element) => element != "ruby");
arreglo.forEach(function(elemento) {
  console.log(elemento);
});

//find para buscar en el arreglo
let arreglo = ["ruby", "python", "java", "JavaScript"];
arreglo.forEach(function(elemento) {
  console.log(elemento);
});
console.log("\n");
let el = arreglo.find((el) => el == "JavaScript");
console.log(el);

//map para hacer operaciones sobre cada elemento del arreglo
let arreglo = [2, 35, 6, 20];
console.log(arreglo);
console.log("map hace la operacion sobre cada uno de los elementos del arreglo");
let cuadrados = arreglo.map(numero => Math.pow(numero,2));
console.log(cuadrados);
//ej2
let arreglo = ["2", "35", "6", "20"];
console.log(arreglo);
console.log("map hace la operacion sobre cada uno de los elementos del arreglo");
let numeros = arreglo.map(numero => parseInt(numero));
console.log(numeros);

//Creacion de un objeto JSON
let curso = {
  titulo: "curso profesional de javascript",
  duracion: 2.2,
  formato: "video",
  bloque: ["introduccion", "funciones"],
  inscribir: function(usuario) {
    console.log(usuario + " ahora esta inscrito");
  }
}
console.log(curso.titulo);
console.log(curso["formato"]);
console.log(curso.inscribir("Michael"));
curso.titulo = "nuevo curso de JS";
curso["inscribir"] = function() {
  curso.duracion = 3.2;
  console.log(curso.duracion);
}
console.log(curso["titulo"]);
console.log(curso.inscribir());

//constructoras
function Curso() {
  this.titulo = "Curso profesional de js";
  this.inscribir = function(usuario) {
    console.log(usuario + " se ha inscrito");
  }
}
let cursoJavaScript = new Curso();
cursoJavaScript.inscribir("Michael");
//op2
function Curso(titulo) {
  this.titulo = titulo;
  this.inscribir = function(usuario) {
    console.log(usuario + " se ha inscrito");
  }
}
let cursoJavaScript = new Curso("Curso profesional de js");
let cursoRuby = new Curso("Curso de Ruby");
console.log(cursoJavaScript.inscribir("Michael"));
console.log(cursoRuby.titulo);

//Creacion de clases
class Curso{
  constructor(titulo) {
    this.titulo = titulo;
  }
  inscribir(usuario) {
    console.log(usuario + " se ha inscrito");
  }
}
let cursoJavaScript = new Curso("JavaScript");
console.log(cursoJavaScript.titulo);
cursoJavaScript.inscribir("Mikle");
//op2
class Curso{
  constructor(titulo, duracion, color = "yellow") {
    arguments[0];
    this.titulo = titulo;
    this.duracion = duracion;
    this.color = color;
  }
}

//Herencia y palabra reservada super
class User {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log("Hola " + this.nombre);
  }
}
class Admin extends User {
  constructor(nombre) {
    super(nombre);
  }
  saludar() {
    super.saludar();
    console.log("Aqui esta el Admin");
  }
}
let admin = new Admin("Mikle");
admin.saludar();

//getters y setters
class User {
  constructor(nombre) {
    this.nom = nombre;
  }
  get name() {
    return this.nom.charAt(0).toUpperCase() + this.nom.slice(1);
  }
  set name(nombre) {
    this.nom = nombre;
  }
}
let user = new User("michael");
console.log(user.name);
user.name = "Alv";
console.log(user.name);

//funciones estaticas
class User {
  constructor(permisos = "lectura") {
    this.permisos = permisos;
  }
  static create() {
    let user = new User("admin");
    return user;
  }
}
let administrador = User.create();

//prototipos - crear un objeto con base en otro - herencia de prototipos
console.log("Se crea un objeto vacio");
let animal = Object.create(null);
console.log("Se le asignan datos o atributos");
animal.vivo = true;
animal.estaVivo = function() {
  if (this.vivo) console.log("Sigue vivo");
}
console.log("Se crea otro objeto tonamdo a animal como proptotipo");
let perro = Object.create(animal);
console.log("Se comprueba que el objeto perro si hereda los metodos de animal");
perro.estaVivo();

//prototipos - explicacion base
function User() {}
let user = new User();
console.log(user.__proto__);
console.log(User.prototype);
console.log(user.__proto__ === User.prototype);
console.log("Ambos prototipos son iguales porque estan tomados de la misma base");

//uso de prototipos
function User() {}
let user = new User();
User.prototype.saludar = function() {
  console.log("Hola");
}
user.saludar();
console.log("Como existe un enlace entre el prototipo de los objetos creados y "
+ "la funcion de la  que se crearon, es posible modificar los elementos de esa "
+ "funcion aun despues de ser creados.");
console.log("Voy a crear otro objeto con base en el objeto user");
let mikle = Object.create(user);
mikle.saludar();

//herencia con prototipos
function User() {}
User.prototype.saludar = function() {
  console.log("Hola");
}
function Admin() {}
Admin.prototype = new User();
let mikle = new Admin();
mikle.saludar();

//request - callback
const request = require("request");
request("http://google.com", function() {
  console.log("Termine la peticion de google");
});
console.log("Yo voy despues, en el codigo, de la peticion de Google");
//request-promise - solucion al callback hell
const rp = require("request-promise");
//objeto de tipo promise
rp("http://google.com").then(function(html) {
  console.log("Termine la peticion de Google");
  console.log("esta funcion se ejecuta si la peticion de Google fue exitosa");
}).catch(function(err) {
  console.log("Manejo de errores");
  console.log(err);
});

//ejemplo de una promesa
function asincrono() {
  //para crear una promesa se pasa al constructor
  //esa funcion que se conoce como executor
  return new Promise(function(resolve, reject) {
    //esas funciones se pueden llamar asi por estandar
    //resolve se llama cuando la funcion se completo exitosamente (fullfiled)
    resolve("Todo salio bien");
    //reject se llama cuando la funcion no fue completada, cuando hubo un error (rejected)
    reject(new Error("no se completo"));
  }) ;
}

//ejemplo real de una promesa
const request = require("request");
function leer(url) {
  return new Promise(function(resolve, reject) {
    //la operacion asincrona se ejectua aca, dentro del executor
    request(url, function (err, response) {
      //recibe un error en caso de que algo salga mal
      //respuesta del servidor en caso de que se logre
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  }) ;
}
leer("http://codigofacilito.com/gratis")
//este metodo asincrono retorna una respuesta
.then(function(response) {
  //esta funcion es para obtener el valor final de la promesa
  console.log(response);
})
.catch(function(err) {
  //funcion que recibe la razon de un posible error en la jecucion
  console.log(err);
});

//promesas con .all
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "hola mundo"));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, "segundo hola mundo"));
let p3 = Promise.reject();
let saluda = () => console.log("hola a todos");
//poco entendible
//p1.then(function() {
//  p2.then(function() {
//    saluda();
//  })
//});
//mejor estructurado pero si solo una de las promesas falla, todo el bloque falla
Promise.all([p1,p2,p3]).then(resultados => {
  console.log(resultados);
  saluda();
}).catch(() => console.log("falle :("));

//encadenar Promesas
function calcular() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve,400,5);
  })
}
function segundoCalculo(numero) {
  console.log(numero);
  return new Promise((resolve, reject) => {
    setTimeout(resolve,200, "Segunda promesa");
  })
}
calcular().then(segundoCalculo).then(console.log);

//Spread operator (Operador de propagacion)
//con apply
let numeros = [2,3,5];

function sumar(n1,n2,n3) {
  return n1 + n2 + n3;
}
let res = sumar.apply(this,numeros);
console.log(res);
//con spread operator
let numeros = [2,8,5];
let otroArreglo = ["hola", "krnal"];
function sumar(n1,n2,n3) {
  return n1 + n2 + n3;
}
let res = sumar(...numeros);
console.log(res);
console.log([...numeros, ...otroArreglo]);
console.log([2,...otroArreglo,3]);
//ej2
let objeto = {
  clave: 3
}
let objeto2 = {
  otraClave: 4
}
let newObjeto = {
  ...objeto,
  ...objeto2
}
console.log(objeto);
console.log(objeto2);
console.log(newObjeto);

//for of
let arreglo = [2,3,4];
for (numero of arreglo) {
  console.log(numero);
}
//ej2
function saludaTodos() {
  for (nombre of arguments) {
    console.log("hola " + nombre);
  }
}
saludaTodos("Mikle", "curso", "Yox2");

//for in
let usuario = {
  nombre: "mikle",
  edad: 18
}
console.log("Solo muestra las propiedades iterables.");
console.log("por ejemplo __proto__ no es iterable, por lo que no aparece en la ejecucion");
for (propiedad in usuario) {
  console.log(propiedad);
}

//Async - declaracion de funciones asincronas
async function suma (val1, val2) {
  //retorna una promesa ya resuelta con el resultado que retorne la funcion
  //hace este proceso de manera implicita
  //es como si usara Promise.resolve(val1 + val2);
  //una funcion asincrona no tiene mucho sentido si no se combina con await
  return val1 + val2;
}
async function calcular() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 5);
  })
}

//await
async function ejemploAwait() {
  let val1 = await new Promise((resolve,reject) => {
    setTimeout(resolve, 400, 5);
  });
  let val2 = await new Promise((resolve,reject) => {
    setTimeout(resolve, 400, 10);
  });
  console.log(val1 + val2);
}
ejemploAwait();

//Manejo de errores en promesas
async function manejoErrores() {
  try {
    let promesa = await Promise.reject("error");
  } catch (err) {
    console.log(err);
  }
}
manejoErrores();

//Iterador
let iterador = {
  currentValue: 1,
  next() {
    let result = {value: null, done: false};
    if (this.currentValue > 0 && this.currentValue <= 5) {
      result = {value: this.currentValue, done: false};
      this.currentValue += 1;
    } else {
      result = {done: true};
    }
    return result;
  }
};
console.log("Se itera hasta que se cumpla la propiedad.");
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log("Iteracion perezosa es cuando se le da la orden de tardar mas al iterador");
setTimeout(() => console.log(iterador.next(), 5000);
console.log("Una vez que se itere todas las veces necesarias, el valor de done"
+ " pasa a ser verdadero, indicando que la iteracion esta completada");
console.log(iterador.next());

//Generador
console.log("Una funcion declarada con ese asterisco retorna un generador");
function* counter() {
  console.log("estoy aqui");
  yield 1;
  console.log("Ahora estoy aqui");
  yield 2;
}
let generator = counter();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//delegar generadores
function* counter() {
  for (var i = 1; i <= 5; i++) {
    yield i;
  }
}
console.log("counter es quien siempre va a controlar el generador, aunque este sea retornador()");
let generator = counter();
function* retornador() {
  yield* counter();
  console.log("regrese");
  yield 3;
}
console.log("g es otro generador que en la primera ejecucion de yield va"
+ " a delegar la continuidad a otro generador");
let g = retornador();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

//Simbolos
let simbolo = Symbol("mi-simbolo");
let obj = {};
obj[simbolo] = function() {
  console.log("soy un simbolo");
}
obj[simbolo]();

//iterables con iteradores
let iterador = {
  currentValue: 1,
  next() {
    let result = {value: null, done: false};
    if (this.currentValue > 0 && this.currentValue <= 5) {
      result = {value: this.currentValue, done: false};
      this.currentValue += 1;
    } else {
      result = {done: true};
    }
    return result;
  }
};
let contador = {
  [Symbol.iterator]() {
    return iterador;
  }
}
for (numero of contador) {
  console.log(numero);
}
//ej2
let contador = {
  [Symbol.iterator]() {
    return {
      currentValue: 1,
      next() {
        let result = {value: null, done: false};
        if (this.currentValue > 0 && this.currentValue <= 5) {
          result = {value: this.currentValue, done: false};
          this.currentValue += 1;
        } else {
          result = {done: true};
        }
        return result;
      }
    };
  }
}
for (numero of contador) {
  console.log(numero);
}
//ej3
let rango = {
  min: null,
  max: null,
  currentValue: null,
  [Symbol.iterator]() {
    //Ese return this; es para hacer referencia a esa funcion next(){}
    return this;
  },
  next() {
    if (this.currentValue == null) {
      this.currentValue = this.min;
    }
    let result = {};
    if (this.currentValue >= this.min && this.currentValue <= this.max) {
      result = { value: this.currentValue, done: false };
      this.currentValue += 1;
    } else {
      result = { done: true };
    }
    return result;
  }
}
rango.min = 5;
rango.max = 10;
for (n of rango) {
  console.log(n);
}

//iterables o generadores 2.0 - mismo ejemplo del rango pero con generadores
let rango = {
  min: null,
  max: null,
  [Symbol.iterator]() {
    return this.generator();
  },
  generator: function*() {
    for (var i = this.min; i <= this.max; i++) {
      yield i;
    }
  }
}
rango.min = 0;
rango.max = 100;
for (n of rango) {
  console.log(n);
}
*/

//LIBRETA
/*
- let → definicion de variable
- prompt() → para pedir el dato por una ventanita
- typeof → para agarrar el tipo de la variable
- typeof null = object
- null == undefined → true
- null === undefined → false
- NaN not a number
- infinity como para dividir entre cero ex.
- una variable no definida con palabra reservada se convierte en global
- variable global. No se recomienda hacerlo así
- var: se declara global ya sea en la funcion o en el codigo
- let: es local ya sea en el bloque o en la funcion
- en JavaScript se pueden enviar cuantos argumentos quiera sin importar la cantidad de parámetros que reciba
- function funcionX(arg = 0){} es valido un valor por defecto para el parametro
- una funcion puede retornar otra funcion y la puede recibir como parametro
- this: el objeto que posee el codigo que se esta ejecutando en el momento.
- cuando una funcion se ejecuta, el valor de this es aquel del objeto que haya ejecutado la funcion
- el nombre de una funcion arrow es el nombre de la variable en la que se almacena
- una arrow function no modifica el valor de this para el objeto
- call, apply y bind para manejar el contexto
- si llamo una funcion en con una arrow function el contexto no se modifica
- si llamo una funcion en otra funcion, no importa si estoy usando arrow function, el conexto se modifica donde lo llamo
- en ese caso tengo que usar la palabra reservada call
- en JavaScript los arreglos siempre son dinámicos
- filter: agrega los elementos que quiero a un nuevo arreglo
- find: saber si un elemento existe dentro de un arreglo o no. retorna el elemento sobre el que dio verdadero
- map: mas flexible. genera un nuevo arreglo con una operacion definida
- JSON: JavaScript Object Notation
- para creat un objeto json se crean unas llaves {}
- Tambien se pueden usar funciones constructoras para definir objetos json instead of noacion json
- los constructores son casi iguales a java
- Class Declarations: class Curso {} (recomendado)
- Class Expressions: let Curso = new class{}
- Class Expressions: let Usuario = class Usuario{}
- La herencia se maneja igual que en Java
- Override: sobreescribir. Se toma un metodo del padre y se sobreescribe
- super: para no duplicar algo del codigo del metodo padre super.metodo();
- super: para un constructor tambien se usa. Se llama el metodo super, no el objeto
- JavaScript es un lenguaje orientado a prototipos
- Las clases no existen
- Los objetos se crean a partir de otros objetos y pueden heredar entre ellos
- En clases, los objetos se crean con base en un documento, por decirlo así
- En prototipos, los objetos se crean con base a otros objetos ya creados
- Lo ideal es crear objetos basados en otros
- Para eso se usa Object.create(null) Es nulo porque se esta cerando un objeto vacio
- Herencia de prototipos: se busca el metodo llamado en el prototipo perro. Al no encontrarlo, se va a su prototipo base
- Cadena de prototipos: Se busca la propiedad de padre en padre hasta encontrarla. Va subiendo niveles
- propiedad prototype: es igual a la propiedad __proto__ de todos los objetos que se crean con base en esta funcion
- Se podria decir que el prototype de una funcion pasa a ser el prototipo de los objetos creados usando dicha funcion
- Me sirve para modificar los objetos de una funcion incluso despues de ser generados
- JavaScript es un lenguaje de progaamacion asincrona
- Hace que las operaciones que tardan mucho en ejectuarse pasen a un segundo plano evitando obstrucciones
- Event Loop: se le hace saber al interprete de js si quiero que una operacion se ejecute asincronamente
- Tambien se le envia una funcion que debe ser ejecutada cuando termine dicha operacion
- Callback: funcion que se pasa como argumento a una operacion asincrona. Es lo que se ejecuta despues de dicha operacion
- Para instalar request, tengo que poner la carpeta del proyecto despues de cd en la terminal y luego escribir npm install request
- Luego se ejecuta en la terminal escribiendo node y luego el nombre del archivo .js
- Callback Hell: cuando hay que esperar varias operaciones asincronas antes de ejecutar la funcion
- Promesas: una mejora a los Callback con una sintaxis mas clara. Puede esperar un conjunto de proceso asincronos a la vez
- request promise: se instala desde la terminal despues de haber instalado request
- Las promesas sin son tipo de objeto en javascript
- Una promesa es un valor que eventualmente existira
- Permite que metodos asincronos retornen resultados como si fueran metodos sincronos
- El then y el catch son callbacks
- Estados de las promesas - fullfiled: completado con exito
- Estados de las promesas - rejected: no se completo
- Estados de las promesas - pending: estado de la promesa cuando la operacion no ha terminado
- Estados de las promesas - setled: cuando la promesa termino con o sin exito
- Por lo general, cuando se trabaja con callbacks, las librerias suelen pasar el error en el primer argumento
- encadenando promesas, cada una depende del resultado de la anterior
- for of: en cada iteracion nos entrega el valor de un elemento del iterable
- for in: itera sobre las propiedades, mas no sobre los valores como for of
*/
/*
//Funciones asincronas
Cuando programamos en JavaScript, constantemente trabajamos con operaciones
asíncronas como solicitudes a un servicio web, cálculos, eventos, etc.

La complejidad de las operaciones asíncronas es que no se sabe cuándo van a
terminar, por lo que debe existir un mecanismo que nos informe sobre si una
tarea ha sido completada o no, qué resultado produjo y si se completó con éxito
o hubo un error, y en caso de que haya habido un error, de qué error se trata.

Para solucionar esto se han introducido distintas estrategias, objetos y
estructuras que permitan trabajar en un flujo de operaciones asíncronas,
inicialmente teníamos los callbacks, funciones que se asignaban y eran llamadas
cuando la operación asíncrona había retornado. Eventualmente se introdujeron
las promesas, objetos pensados para valores asíncronos con funcionalidad
adicional pensada precisamente para trabajar con 1 o varias operaciones
asíncronas en un programa.

Las promesas, como aprendimos antes, introdujeron incontables mejoras por sobre
los callbacks, sin embargo, la sintaxis puede parecer confusa y poco legible,
además de que es un concepto que puede ser desafiante para nuevos desarrolladores
de JavaScript.

En versiones más nuevas del lenguaje se introdujo el concepto de funciones
asíncronas, dentro de las que trabajar con promesas se vuelve más simple con el
uso de la palabra reservada await.

En este bloque conocerás los detalles de las funciones asíncronas, la sintaxis,
cómo funcionan y cómo puedes usarlas para manejar operaciones asíncronas, como
podrás ver más adelante, esto significará que el código de manejo de operaciones
asíncronas se vuelve más expresivo y sencillo, sin perder por supuesto la
funcionalidad correspondiente.
*/
//LIBRETA
/*
- async siempre retornan una promesa sin importar el cuerpo del codigo de una funcion o el valor que retorne
- lo que diferencia una funcion sincrona de una funcion asincrona es que puedo utilizar await
- await: hace que la ejecucion del codigo espere hasta que una promesa sea resuelta
- await evita el constante uso de then o de funciones anonimas que le estallarian la cabeza a alguien
- Luego de agregar await antes de la promesa, la variable se puede usar sin tratamiento especial.
- await solo se puede usar dentro de una funcion asincrona
*/
/*
//Modulos
Es recomendado que los archivos que utilicen modulos de javascript tengan la
extension mjs
Se diferencia de un documento javascript porque importa y exporta codigo

exportar:
para exportar se declara la variable y se le agrega la palabra export al inicio
de la declaracion.
Si es un valor por defecto, la variable se tiene que declarar por fuera del
export y luego escribir export default variable;

importar:
para importar se escribe import y luego la variable que se esta importando entre
corchetes. Seguido de la palabra from y la ruta del archivo que esta exportando.
Si es un valor por defecto, la variable no va entre corchetes y el nombre de la
variable es arbitrario.

ReadOnly:
No se pueden modificar los valores que se estan importando

//modificar una variable exportada
//Solo se puede modificar en el archivo base del que se exporta
//archivo mjs - crea y exporta
export const name = "Michael";
export let edad = 25;
edad = 26;
let valorPorDefecto = 20000;
export default valorPorDefecto;

//archivo js - importa e imprime
import def, {name,edad} from "./modulo_dos.mjs";
console.log(edad);
*/
//LIBRETA
/*
- Un iterador y un generador trabajan con un dato a la vez
- el protocolo de iterador debe tener una funcion next()
- Cuando se usa un iterador, a diferencia que con los arreglos, Los valores se producen uno a la vez
- No hay posibilidad de reiniciar un iterador. Se recorre nada mas una vez y se acabo
- Con un generador no necesito hacerme cargo del estado del objeto
- Una funcion generadora se declara como function* nombreFuncion() {}
- Se conoce en el mundo de la programacion como una funcion que se puede detener a media marcha
  y luego continuar desde donde se dejo
- yield y return son casi lo mismo
- yield: se puede llamar y definir las veces que necesite
- return: solo se puede llamar una vez en la funcion, ya que determina que alli se cierra la funcion
- la expresion que acompaña a yield produce un resultado. Ese resultado se asigna a la propiedad value del objeto que retorna yield
- delegacion de generadores: A yield tambien se le puede enviar una funcion generadora y delegar la continuidad de ejecucion del codigo a otro generador
- esta delegacion se escribe yield* otraFuncionGeneradora();
- SIMBOLO
- para declarar un simbolo se usa el constructor Symbol()
- Este retorna un nuevo valor de tipo Symbol (primitivo del lenguaje, como string)
- Pueden tener un descriptor que sirve como identificador. No es el valor.
- Por lo que dos simbolos con la misma descripcion siguen siento diferrentes
- sirven para que no haya riesgo de modificar una variable considerada importante. Aunque tenga el mismo nombre, no va a ser la misma
- well known symbols: simbolos bien conocidos
*/
