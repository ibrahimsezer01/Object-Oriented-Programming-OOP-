// Araba sınıfı
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this._speed = 0;  // Arabanın hızı
    }
  
    // Arabanın hızını artırma
    accelerate() {
      this._speed += 10;
      console.log(`Araba hizlandi: ${this._speed} km/s`);
    }
  
    // Arabanın hızını azaltma
    decelerate() {
      this._speed -= 10;
      console.log(`Araba yavaşladi: ${this._speed} km/s`);
    }
  
    // Arabanın durumunu gösterme
    showStatus() {
      console.log(`Marka: ${this.make}, Model: ${this.model}, Yil: ${this.year}`);
      console.log(`Hiz: ${this._speed} km/s`);
    }
  }
  
  // Araba oluşturma ve kullanma
  let myCar = new Car("Toyota", "Corolla", 2022);
  myCar.accelerate();
  myCar.showStatus();
  


// soyutlama (abstraction) ilkesi, bir nesnenin karmaşıklığını gizleyerek sadece gerekli olan bilgileri ve işlevleri sunmasını sağlar. 
// Örneğin, bir araba nesnesi düşünelim. Arabanın kullanıcısı için motorun iç çalışma mekanizması, 
// yakıt enjeksiyonu gibi detaylar önemli olmayabilir. Bunun yerine, sürücünün arabanın hızını kontrol etmek, 
// yakıt seviyesini görmek gibi daha yüksek seviye işlevlere odaklanması gerekebilir.
// Soyutlama, bu tür detayları gizleyerek bir arabanın sadece kullanıcının ihtiyaç duyduğu işlevleri sunmasını sağlar.

// Bu örnekte, Car sınıfı aracılığıyla bir araba oluşturulur. Arabanın iç çalışma detayları olan motorun durumu, 
// yakıt enjeksiyonu gibi detaylar gizlenir. Kullanıcı sadece arabayı hızlandırma, 
// yavaşlatma ve durumunu gösterme gibi yüksek seviye işlevlere erişebilir.

// Soyutlama, programın daha modüler ve anlaşılabilir olmasını sağlar çünkü kullanıcılar, 
// karmaşık iç detaylarla uğraşmak zorunda kalmazlar, sadece temel işlevleri kullanabilirler.