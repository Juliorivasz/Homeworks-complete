'use strict'

const { has } = require("@11ty/eleventy/src/TemplateCache");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() { // funciones constructoras
  this.head = null;
  this._length = 0;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  let Nodo = new Node(value); //creo una variable y le hago una referencia de la funcion constructora
  let current = this.head;   // meto en una variable el valor del head

  if(!current){ // this.head === null pregunta si se cumple esa condicion
    this.head = Nodo; // this.head toma el valor que le damos en Value
    this._length++; // se suma un 1 a length
    return Nodo; // devuelve el valor del nodo mientras se cumpla la condicion del if
  }
while(current.next){ // recorre la lista mientras pregunta en cada posicion si se cumple que el siguiente nodo donde se encuentra parado sea distinto de null
  current = current.next;
}
current.next = Nodo; // al llegar al final de la lista cuando el nodo siguiente es igual a null hace la misma sea ahora el nuevo nodo
this._length++;
return Nodo;// devuelve el valor del ultimo nodo
} 

LinkedList.prototype.remove = function(){
  let head = this.head; // estoy copiando el head en una variable

  if(!head)return null; // pregunto si la nueva variable declarada es igual a null si lo es me devuelve null

  if(head.next === null){ // si el head.next es null es decir this.head es igual a null
    let valor = head.value; // guardo el valor de this.head en una variable llamada valor
    this.head = null; // hago que el head que miraba al head.next pierda el vincullo haciendola igual a null 
    return valor;// devuelvo el valor guardado del this.head que ya fue borrado
  }
  while(head.next.next){ // hago que pregunte si el this.head.next.next es null
    head = head.next; // hago que el head se coloque en el head.next anterior an head.next.next
  }
  let valor = head.next.value; // guardo el valor de head.next 
  head.next = null; // borro el head.next haciendolo null
  return valor; // devuelvo el valor de head.next borrado 
}

LinkedList.prototype.search = function(value){
  let cabeza = this.head; // lo mismo que lo anterior
  if(cabeza === null)return null; // si el head esta vacio devuelve null porque esta vacia
  while(cabeza){ // si el head tiene un elemento 
    if(cabeza.value === value)return cabeza.value; // si el elemento es igual al valor dado en search me devuelve el valor dado
    else if(typeof value === 'function'){ // si  el tipo de dato del valor dado en search es igual a una funcion 
      if(value(cabeza.value) === true){ // si l funcion del valor dado es igual a verdad 
        return cabeza.value; // devuelve el valor dado
      }
    }
    cabeza = cabeza.next; // hace que el head vaya tomando el lugar del head siguiente 
  }
  return null; // devuelve null si no entra ninguna condicion 
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
this.buckets = [];
this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){
  let contador = 0
  for (let i = 0; i < key.length; i++){
    contador += key.charCodeAt(i);
  }
  return contador % this.numBuckets;
}
HashTable.prototype.set = function(key,valor){
  if(typeof key !== "string") throw new TypeError("Keys must be strings")
  let indice = this.hash(key);
  if(this.buckets[indice] === undefined){
    this.buckets[indice] = {}
}
  this.buckets[indice][key] = valor
}
HashTable.prototype.get = function(key){
  let indice = this.hash(key);
  return this.buckets[indice][key];
}
HashTable.prototype.hasKey = function(key){
  let indice = this.hash(key);
  return this.buckets[indice].hasOwnProperty(key);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
