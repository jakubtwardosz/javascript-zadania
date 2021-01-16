// Zadanie 1

var Person1 = {
    imie: "Jan",
    nazwisko: "kowalski",
    wiek: 15,
    kraj: "PL",
    miasto: "KRK"
}

var Person2 = {
    imie: "Adam",
    nazwisko: "kowalski",
    wiek: 16,
    kraj: "US",
    miasto: "NYC"
}

function Wypisz(){
    console.log(this.imie+" "+ this.nazwisko+ " "+ this.wiek+" "+ this.kraj+" "+this.miasto);
}

function Dodaj(){
    this.wiek++;
}

Person1.wypisz = Wypisz;
Person2.wypisz = Wypisz;
Person1.dodaj = Dodaj;
Person2.dodaj = Dodaj;

Person1.wypisz();
Person1.dodaj();
Person1.wypisz();

Person2.wypisz();
Person2.dodaj();
Person2.wypisz();

//Zadanie 2

Person2.favoriteFoods = ['sushi', 'pizza'];
Person1.favoriteFoods = ['sushi', 'beacon'];


Person1.showFavoriteFoods = function() {console.log(this.favoriteFoods)};
Person2.showFavoriteFoods = function() {console.log(this.favoriteFoods)};

Person1.showFavoriteFoods();

let addNewFavoriteFood = function (element) {
    this.favoriteFoods.push(element);
}

Person1.addNewFavoriteFood = addNewFavoriteFood;
Person2.addNewFavoriteFood = addNewFavoriteFood;

Person1.addNewFavoriteFood('pierogi');

Person1.showFavoriteFoods();

// Zadanie 3

function Calculator(a,b){
    this.a = a;
    this.b = b;
    this.add = function (){
        return this.a + this.b;
    }

    this.substract = function () {
        return this.a - this.b;
    }

    this.divide = function () {
        if (this.b === 0) return "cannot divide by 0"; 
        return this.a / this.b;
    }

    this.multiply = function (){
        return this.a * this.b;
    }
}

const calculator = new Calculator(3,1);
console.log(calculator.add());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.substract());


// zadanie 4 

function Ladder(steps) {
    this.steps = steps;
    this.where = 0;
    this.climb = () => {
        if(this.where > 0) {
            console.log("Musisz najpierw zejść z drabiny");
        } else {
            console.log("Rozpoczynamy wchodzenie na drabinę");
            for(var i = 0; i<=this.steps; i++) {
                console.log("Stopien " + this.where++);
            }
        }
      console.log(this.where);
    }

    this.getOff = () => {
        if(this.where == 0) {
            console.log("Musisz najpierw wejsc na drabine");
        } else {
            console.log("Rozpoczynamy schodzenie z drabiny");
            for(var i = 0; i<=this.steps; i++) {
                console.log("Stopien " + this.where--);
            }
        }
    }
}

const newLadder = new Ladder(10);

newLadder.climb();
newLadder.climb();

newLadder.getOff();
newLadder.getOff();
