// Zadanie 1

function Person(personName, personSurname, personAge, personCountry, personCity, personLanguage){
    this.name = personName;
    this.surname = personSurname;
    this.age = personAge;
    this.country = personCountry;
    this.city = personCity;
    this.language = personLanguage;

    this.changeAge = function(age){
        this.age = age;
    }

    this.changeCity = function(city){
        this.city = city
    }
}

let persons = [
    new Person('Adam', 'Nowak', 30, 'Poland', 'Cracow', 'polish'),
    new Person('Tomasz', 'Nowak', 12, 'Poland', 'Warsaw', 'polish'),
    new Person('Krzysztof', 'Nowak', 32, 'Japan', 'Tokio', 'polish'),
    new Person('Marek', 'Nowak', 56, 'Germany', 'Berlin', 'polish'),
    new Person('Kuba', 'Nowak', 3, 'Scotland', 'Edinburgh', 'polish')
]

console.log(persons);

persons[0].changeAge(77);

console.log(persons[0]);

// Zadanie 2

function Calculator(add, sub, div, mul, clear) {
    this.memory = [];

    this.add = function(a,b){
        this.memory.push(`Dodawanie ${a} i ${b} = ${a + b}`);
        return a + b;
    }

    this.sub = function(a,b){
        this.memory.push(`Odejmowanie ${a} i ${b} = ${a - b}`);
        return a - b;
    }
    
    this.div = function(a,b){
        this.memory.push(`Dzielenie ${a} i ${b} = ${a / b}`);
        return a / b;
    }
    
    this.mul = function(a,b){
        this.memory.push(`Mnożenie ${a} i ${b} = ${a * b}`);
        return a * b;
    }

    this.print = function (){
        for (index in this.memory) {
            console.log(this.memory[index]);
        }
    }

    this.clear = function(){
        console.log('Czyszczenie pamięci');
        this.memory = [];
    }

}

const calc1 = new Calculator();
const calc2 = new Calculator();
calc1.add(2,5);
calc1.sub(666,5);
calc2.mul(10,2);
calc2.div(100,5);

calc1.print();
calc1.clear();

// Zadanie 3

function Example() {
    
    this.setNumber = function() {
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }

    this.checkNumber = function() { 
        console.log(this.number);
        if(this.number > 5){
            clearInterval(myInterval);
        }
    }

}

const newProgram = new Example();

const myInterval = setInterval(() => {

}, 1000);

// alt zadanie 3

function Constructor() { 
    this.number = 0;
    this.myInterval = undefined;
    
    this.init = function(){
        this.myInterval = setInterval(() => {
            this.setNumber()
        }, 1000);
    }
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(this.myInterval);
        }     
    }
}

const newProg = new Constructor();
newProg.init();
