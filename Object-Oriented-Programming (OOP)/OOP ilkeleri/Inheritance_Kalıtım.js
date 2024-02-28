// Ana sınıf (üst sınıf)
class Animal {
    constructor(name) {
      this._name = name;
    }
  
    // Metotlar
    speak() {
      console.log(`${this._name} is making a sound.`);
    }
  }
  
  // Alt sınıf 
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this._breed = breed;
    }
  
    // Overriding (ezme)
    speak() {
      console.log(`${this._name} barks loudly!`);
    }
  }
  
  // Nesne oluşturma ve kullanımı
  let dog = new Dog("Buddy", "Golden Retriever");
  dog.speak(); // Buddy barks loudly!
  

  // Bu örnekte, Animal sınıfı Dog sınıfından türetilmiştir. 
  // Dog sınıfı, Animal sınıfının özelliklerini ve davranışlarını devralır ve bunları genişletir. 
  // speak metodu Dog sınıfında ezilir (overriding) ve farklı davranış sergiler.