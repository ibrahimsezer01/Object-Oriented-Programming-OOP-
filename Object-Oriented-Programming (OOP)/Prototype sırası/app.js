const person = {
    name: "Anderson",
    surname: "Talisca",
    age: 22
}

// person'a göre bi newPerson objesş oluşturduk
const newPerson = Object.create(person)
// newPerson altında prototip olarak person aldığını görürüz
console.log(newPerson);
// Değerlerin Anderson ve Talisca olarak geldiğini görüyoruz
console.log(newPerson.name);
console.log(newPerson.surname);

// önce newPerson'a bakar eğer kendine has name özelliği varsa bunu oradan alır eğer yoksa prototip üzerinden alır
newPerson.name = "İbrahim";
console.log(newPerson.name);

// bu şekilde yeni bir değer atayabiliriz
newPerson.job = "Fotballer";
console.log(newPerson.job);


// true almamızın sebebi newPerson'a özel name atamamızdan kaynaklı
console.log(newPerson.hasOwnProperty("name"));  // true
// false almamızın sebebi ise bu özelliğin newPerson üzerinde bulunmadığı içindir, age özelliğini person prototipinden alır
console.log(newPerson.hasOwnProperty("age"));   // false

// Prototipleri dahil ederek bunu nasıl yaparız
console.log("name" in newPerson);
console.log("age" in newPerson);