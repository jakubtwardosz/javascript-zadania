// Zadanie 1

const moreDivs = document.querySelectorAll('.more-divs');

function zad1(paramArray) {
    let newArray = [];
    for (let i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName);
    }
    return newArray;
}

zad1(moreDivs);

// Zadanie 2 

var shortList = document.querySelector('ul.short-list');

function zad2(params) {
    console.log(params.innerHTML);
    console.log(params.outerHTML);
    console.log(params.className);
    console.log(params.classList);
    console.log(params.dataset);    
}

// Zadanie 3

var sumAndSub = (element) => {
    var num1 = parseInt(element.dataset.numberone);
    var num2 = parseInt(element.dataset.numbertwo);
    var num3 = parseInt(element.dataset.numberThree); 

    var sum = num1 + num2 + num3;
    var sub = num1 - num2 - num3;
    return [sum,sub];
};

console.log(sumAndSub(document.querySelector('#datasetCheck')));

// Zadanie 4 

const spanText = document.getElementById('spanText');
spanText.innerText = 'zmieniony tekst';

// Zadanie 5
//const spanText = document.getElementById('spanText');
spanText.className = 'zmienionaKlasa';

// Zadanie 6

var table = document.getElementById("classes");
function takeclass(classList) {
    console.log(classList)
    let newArray = [];
    for(var i=0; i<classList.length; i++)
        {
            console.log(classList[i]);
            newArray.push(classList[i]);
        }
        
        console.log(newArray.join(" + "));
    
    
    table.className = '';
    
    console.log('Usunięto wszystkie klasy');
    
}

takeclass(table.classList)

// Zadanie 7 

const getLongList = getElementById('longList');

function zadanie7(params) {
    

    
}




