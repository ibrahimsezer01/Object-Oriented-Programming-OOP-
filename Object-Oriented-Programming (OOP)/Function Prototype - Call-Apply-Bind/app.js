const person1 = {
    name: "İbrahim",
    surname: "Sezer"
};

const person2 = {
    name: "Yasin",
    surname: "Özkara"
};

function welcome(message1,message2) {
//     console.log(this);          // constructor içinde olmadığımız için window objesi içerisinde bulunuyoruz
//     console.log(this.name);     // bu nedenden dolayı name ve surname erişim sağlayamıyoruz değerler bize undefined olarak döner
    console.log(message1 +" "+ this.name +" "+ this.surname +" "+ message2);
}

// welcome("Merhaba","Hoşgeldiniz");

// Call metodu ile oluşturduğumuz fonksiyonu hangi obje üzerinde kullanmak istediğimizi seçebiliriz
// welcome.call(person1,"Merhaba","Hoşgeldiniz");
// ilk argument olarak kessinlikle bir obje vermemmiz gerekiyor
// welcome.call(person2,"Merhaba","Hoşgeldiniz");



// Apply metodu ile call metodu oldukça benzerdir kısaca farklarını söylemek gerekirse call metodu parametreleri ayrık ayrık alırken
// Apply metodu ise parametreleri dizi halinde alır, dizi ile işlem yapılacağı zaman apply metodu işimizi kolaylaştırıyor
// welcome.apply(person1,["Merhaba","Hoşgeldiniz"]);
// welcome.apply(person2,["Merhaba","Hoşgeldiniz"]);



// Bind metodu ise call ve apply metodlarına benzer fakat bize ekstra bir fonksiyon üretmiyor
// welcome fonksiyonunn bir kopyasını ürettik ve bu kopya person1 üzerine çalışır
const copyFunc1 = welcome.bind(person1);
// Burda fonksiyonumuzun yapısı aynı şekilde gelir
console.log(copyFunc1);

// fonksiyonu daha detaylı görmek için console.dir kullanabiliriz   
console.dir(copyFunc1);

// oluşturdoğumuz bind metodunun avantajı ise heryerde kullanabiliyor olmamız, çok tekrar eden bi işleme başvuracağımız zaman bunu bind ile çözebiliriz

// Kullanımı bu şekilde 
console.log(copyFunc1("Merhaba","Hoşgeldiniz"));