// Zadanie 1 

function success() {
    console.log('Udało się!')
}

success(); // wywołanie funkcji

// Zadanie 2

function returnParam(params){
    console.log('Moje parametry: ', params);
}

returnParam(123);

// Zadanie 3 

const x = [1,2,3,4,5];

function returnArray(params){
    for (let i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
}

returnArray(x);

// Zadanie 4

let y = 'Ala ma kota';
let counter = 0;

function returnString(params) {    
    const interval = setInterval(() => {
        counter += 1;
        console.log(params);

        if (counter >= 5) {
            clearInterval(interval);
            console.log('Koniec');
        }
    }, 3000);
}
returnString(y);