// const object1 = new Object();       // JS'te en temel objemiz Object'tir
// const object2 = new Object();
// console.log(object1);               // Konsoldan incelediğimizde object1 için protiplerimizi görüntüleyebiliriz


// Constructor func oluşturma
function Employee(name,age) {

    // Metotlar
    this.name = name;
    this.age = age;

    // this.ShowInfos = function() {                   // Her birinin içinde ShowInfos fonksiyonu oluşur
    //     console.log("Bilgiler Gösteriliyor...");
    // }
    // this.toString = function() {                    // Her birinin içinde toString fonksiyonu oluşur
    //     console.log("Bu bir Emplayee objesidir");
    // }
}

// Her bir nesnenin (emp1,emp2) içerisine birer tane fonksiyon atar bu bizim belleğimizde gereksiz bir alan kaplamasına neden olur 
// Bunu her bir nesne için ortak bir fonksiyona çevirebiliriz bu şekilde gereksiz bellek kaplamasına gerek kalmaz

// Employee prototipinin içerisine ShowInfos fonksiyonu atma
Employee.prototype.ShowInfos = function() {
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}
// Baktığımız zaman her biri için ortak bir prototip haline gelmiş oluyor



const emp1 = new Employee("İbrahim",21);
const emp2 = new Employee("Buğra",6);

console.log(emp1);
console.log(emp2);






/* -------------------------------------------------------------------------------------------------------------------------------------- */

// Her nesne bir protorype bağlıdır. Bir nesne üzerinde özellik veya metot arandığı zaman bu özellikleri doğrudan nesne üzerinde aramaz
// Bunun yerine nesnenin prototip zincirini kontrol eder. Prototip zinciri de bir bir nesnenin prototipini ve onun da prototipini ta ki en sonunda
// null değeri gelene kadar arar. Özellik veya metot aranırken önce nesnenin kendisinde arar bulamazsa bi üst prototipe geçer orda ardından böyle
// devam edip gider, zincir şeklinde sona ulaşana dek, Peki değer bulunmaz ise ne olur: hata verir yani aranan özellik veya metot'u değiştirmemiz 
// gerekir, hata vermemesi için var olan özellik veya metodu aramamız gerek

// Bu prototip mantığı nesneler arasında paylaşımı kolaylaştırır. Yani birçok nesnenin aynı metoda veya özelliğe ihtiyacı varsa
// Bu metot veya özellik bir prototip olarak tanımlanabilir ve bu nesnelerin tümü bu prototipi kullanabilir

/* -------------------------------------------------------------------------------------------------------------------------------------- */



// animal adında bir prototip oluşturma
let animal = {
    // speak metodu yazıldı
    speak: function() {
      console.log("Ses çikariyor.");
    }
  };
  
  // Object.create ile animal prototipine dayalı dog adında bir nesne oluşturuldu
  let dog = Object.create(animal);
  // dog nesnesi animal prototipinin özelliklerini ve metotlarını alır
  dog.speak();  // "Ses çıkarıyor."



  /* -------------------------------------------------------------------------------------------------------------------------------------- */


function VergiHesapla(name,salary) {

    if(!(this instanceof VergiHesapla)) {           // aşşada let ile person2 oluşturduğumuzda new anahtarını kullanmadık böyle bi hata ile karşılaşmamak
        return new VergiHesapla(name,salary);       // için gelen değeri new Epmloyee(name,salary); şeklinde geri döndürüyoruz
    }

    this.name = name;
    this.salary = salary;
}

VergiHesapla.prototype.Vergilendirme = function() {
    
    let vergiOrani,vergi,vergiliHesap;

    if(this.salary < 20000) {
        vergiOrani = 20;
        vergi = this.salary * (vergiOrani / 100);
        vergiliHesap = this.salary - vergi;
    }

    else if (20000 < this.salary && this.salary < 30000) {
        vergiOrani = 25;
        vergi = this.salary * (vergiOrani / 100);
        vergiliHesap = this.salary - vergi;
    }

    else if(30000 < this.salary) {
        vergiOrani = 30;
        vergi = this.salary * (vergiOrani / 100);
        vergiliHesap = this.salary - vergi;
        
    }

    else {
        console.log("Hatali giriş");
    }

    return {
        vergi: vergi,
        vergiliHesap: vergiliHesap
    };
}

let person1 = VergiHesapla("İbrahim",19000);
let person2 = VergiHesapla("samet",40000);

console.log(person1);
console.log(person1.Vergilendirme());
console.log(person2);
console.log(person2.Vergilendirme());


/* --------------------------- Prototipleri neden kullanmalıyız ------------------------------- */
/* 

1- Bellek tasarrufu
    Her nesne için aynı metodu constructor içine yazmak, her nesne örneğinin aynı metodu kendi içerisinde saklamasına neden olur. 
    Oysa prototip kullanımında, metot sadece bir kez bellekte saklanır ve bütün nesneler prototip zinciri sayesinde bu metoda erişir.


2- Dinamik Güncelleme
    Prototip üzerindeki değişiklikler, o prototipe bağlı tüm nesneleri etkiler. Yani, bir prototip metodu üzerinde yapılan güncelleme, 
    bütün nesnelerin bu metodu güncellenmiş haliyle kullanmasını sağlar. Eğer her bir metodu constructor içine yazsaydık, 
    her bir örneği güncellemek zorunda kalırdık.


3- Daha Az Kod Tekrarı
    Her nesne örneği için aynı metodu tekrar tekrar constructor içinde tanımlamak yerine, 
    prototip kullanarak kodunuzu daha modüler ve daha az tekrarlı hale getirebilirsiniz.

*/
