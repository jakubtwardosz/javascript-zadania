// Zadanie 1

const moreDivs = document.querySelectorAll('.more-divs');

function zad1(paramArray) {
    let newArray = [];
    for (let i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName);
    }
    return newArray;
}

console.log(`Zadanie 1: ` + zad1(moreDivs));

// Zadanie 2 

var shortList = document.querySelector('ul.short-list');

console.log(`Zadanie 2:`);

function zad2(params) {
    console.log(params.innerHTML);
    console.log(params.outerHTML);
    console.log(params.className);
    console.log(params.classList);
    console.log(params.dataset);    
}

console.log(zad2(shortList));

// Zadanie 3

console.log(`Zadanie 3:`);

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
console.log(`Zadanie 4:`);

const spanText = document.getElementById('spanText');
spanText.innerText = 'zmieniony tekst';

// Zadanie 5
console.log(`Zadanie 5:`);
//const spanText = document.getElementById('spanText');
spanText.className = 'zmienionaKlasa';

// Zadanie 6
console.log(`Zadanie 6:`);

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

let longListElements = document.querySelector('#longList').querySelectorAll('li');

longListElements.forEach(function(element) {
    if (element.dataset.text == null) {
        element.dataset.text = "text";
    }
});

// Zadanie 8

function stringToObj(string) {
    const obj = {
        newClass: string
    }
    return obj;
}

function setClassToDiv(params) {
    const newClass = params.newClass;

    document.getElementById('myDiv').classList.add(newClass);
}

setClassToDiv(stringToObj('string_z_parametru'));

// Zadanie 9 

let randomNumer = Math.floor((Math.random() * 10) + 1);

function addClassToNumbersElement(params){
    if (params % 2 == 0) {
        document.getElementById('numbers').classList.add('Even');
    }else{
        document.getElementById('numbers').classList.add('Odd');
    }
    
}

addClassToNumbersElement(randomNumer);

// Zadanie 10

function returnArrayFromLongList(params) {
    let array = [];

    longList.querySelectorAll('li').forEach(element => {
        array.push(element);
    });
    
    return array;
}
console.log(returnArrayFromLongList(document.getElementById('longList')));

// Zadanie 11

function childList(params) {
    let childArray = [...params];

    childArray.forEach((element) => {
        let randomNumer = Math.floor((Math.random() * 10) + 1);

        element.dataset.oldValue = element.innerText;
        element.innerText = randomNumer;
    });    
}

childList(document.getElementById('longList').children);