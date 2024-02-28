// Sınıfı tanımlıyoruz
class Person {
    constructor(name, age) {
      this._name = name;    // Private alan
      this._age = age;      // Private alan
    }
  
    // Metotları tanımlıyoruz
    getName() {
      return this._name;
    }
  
    setName(name) {
      this._name = name;
    }
  
    getAge() {
      return this._age;
    }
  
    setAge(age) {
      this._age = age;
    }
  }
  
  // Nesne oluşturma ve kullanımı şekli
  let person = new Person("John", 30);
  console.log(person.getName());    // John
  person.setName("Alice");
  console.log(person.getName());    // Alice

  // Bu örnekte, _name ve _age alanlarına doğrudan erişim engellenmiştir. 
  // Bunun yerine, getName, setName, getAge ve setAge gibi metotlar aracılığıyla bu alanlara erişilir ve değiştirilir.
  