// Zadanie 1

let car = {
    name: 'Ford',
    age: '5',
    mileage: 60000
}

console.log("Name: " + car.name + ". Age: " + car.age);

// Zadanie 2 

car.changeMileage = function (mileage) {
    this.mileage = mileage;
};

car.changeMileage(60500);

console.log("Actual mileage: " + car.mileage);

// Zadanie 3

let sum = {
    sum: 0,
    sumArray: function (array){
        this.sum = array.reduce((x, y) => x + y);
    }
};

sum.sumArray([4,5,6,7]);
console.log(sum.sum);

// Zadanie 4

let car2 = {
    name: 'BMW',
    age: '12',
    mileage: 134000
}

for (let key in car2) {
    console.log(key + ': ' + car2[key]);    
}

// Zadanie 5

let car3 = {
    innerObject: {
        text: 'Hello'
    }
}

console.log(car3.innerObject.text);

// Zadanie 6

let car4 = {
    name: 'Toyota',
    age: '22', 
    mileage: 222000
}

car4.model = 'Supra';

console.log("Name: " + car4.name + ". Model: " + car4.model);

car4.sayHello = function () {
    console.log('Hello');
}