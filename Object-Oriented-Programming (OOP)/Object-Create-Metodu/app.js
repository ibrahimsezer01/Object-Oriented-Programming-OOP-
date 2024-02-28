// ES6 öncesinde bir obje oluşturup ve bu obje için başka bir yerden prototip almak istediğimiz zaman Object.create() kullanılırdı

// const obj = {
//     test1:function() {
//         console.log("Test 1");
//     },

//     test2:function() {
//         console.log("Test 1");
//     }
// }

// console.log(obj);        // test1 ve test2 özelliklerini gösteriyor

// const emp = Object.create(obj);

// emp.name = "İbrahim";
// emp.age = 21;
// console.log(emp);
// console.log(emp);           // Objemizin proto özelliği obj'yi gösterir



// Boş bir constructor oluşturuyoruz
function Person() {

}

Person.prototype.test1 = function() {
    console.log("Test 1");
}

Person.prototype.test2 = function() {
    console.log("Test 2");
}

const person = new Person();

console.log(person);

function Emplayee(name,age) {
    this.name = name;
    this.age = age;
}

Emplayee.prototype = Object.create(Person.prototype);   // Bu sayede kendi prototip zincirinden Person prototip zincirine geçmiş oluyor
Emplayee.prototype.myTest = function() {
    console.log("MyTest");
}

const emp = new Emplayee("İbrahim",21);

console.log(emp);       // Burada consol üzerinden baktığımız zaman Person prototiplerine erişmiş olduğunu görürüz
emp.test1();            // Employee constructor'ın içine oluşturduğumuz emp Person içinde ki protiplere erişip erişöediğini görüyoruz
emp.test2();            // sonuç olarak bize Test 1 ve Test 2 yazısını getirebilir hale geliyor


/* Unutmayın sakın bunlar EcmaScript 6 (ES6) öncesi bu şekilde kullanılıyordu */