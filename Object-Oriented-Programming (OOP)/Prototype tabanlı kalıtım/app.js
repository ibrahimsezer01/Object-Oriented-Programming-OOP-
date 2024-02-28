// Kalıtım - Inheritance

// Constructor fonksiyon
function Person(name,surname) {
    if(!(this instanceof Person)) {         
        return new Person(name,surname);
    }
    this.name = name,
    this.surname = surname
}

// Prototip metodu
Person.prototype.showInfos = function() {
    console.log("Ad: " + this.name + "  Soyad: " + this.surname );
}

const person1 = Person("İbrahim","Sezer");
// console.log(person1);


function Employee(name,surname,salary) {
    if(!(this instanceof Employee)) {
        return new Employee(name,surname,salary);
    }
    this.name = name;
    this.surname = surname;
    this.salary = salary;

}

// Person prot
Employee.prototype = Object.create(Person.prototype);

//Employee içerisinde ki toString prototipine func atama
Employee.prototype.toString = function() {
    console.log("Epmloyee toString func");
}

Employee.prototype.showInfos = function() {
    console.log("İsim: " + this.name + " Soyad: " + this.surname + " Salary: " + this.salary);
}

const person2 = Employee("Sezer","İbrahim",20000);

// console.log(person2);

// Employee nesneleri üzerinde showInfos prototip metoduna erişebiliriz
// person2.showInfos();


console.log(Employee.call(person1));