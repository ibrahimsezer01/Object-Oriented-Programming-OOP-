// Ana sınıf (üst sınıf)
class Shape {
    calculateArea() {
      console.log("Alan hesaplanamadı. Şekil belirtilmemiş.");
    }
  }
  
  // Alt sınıf
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this._width = width;
      this._height = height;
    }
  
    calculateArea() {
      return this._width * this._height;
    }
  }
  
  // Alt sınıf
  class Circle extends Shape {
    constructor(radius) {
      super();
      this._radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  }
  
  // Nesne oluşturma ve kullanımı
  let rectangle = new Rectangle(5, 3);
  let circle = new Circle(4);
  
  console.log(rectangle.calculateArea());   // 15
  console.log(circle.calculateArea());      // ~50.27
  

  // Bu örnekte, Shape sınıfından türetilen Rectangle ve Circle sınıfları, 
  // calculateArea metodunu kendine göre uygular. 
  // Bu, aynı adı taşıyan metotların farklı davranışlara sahip olmasıdır. 
  // Bu, polymorphism prensibine uygun bir örnektir.