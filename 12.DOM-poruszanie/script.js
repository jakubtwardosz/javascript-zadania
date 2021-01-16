// Zadanie 1 

console.log(document.getElementById("buzz").parentElement);

console.log(document.getElementById("buz").nextElementSibling);

var dzieci = document.getElementById("fuz").children;

var rodzic = document.getElementById("foo").parentNode;
console.log(rodzic);

var pierwszeDziecko = document.getElementById("foo").children[0];

var middleDziecko = document.getElementById("foo").children[1];


// Zadanie 2 

const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

// Zadanie 3 

const add = (elements) => {
    for(var i = 0; i < elements.length; i++){

        elements[i].addEventListener("click", function(){

        })
   }
}

add(document.getElementById('#ex3 button'));





// Zadanie 4

function changeColor() { 
    let buttons = document.querySelectorAll('#ex3 button');
    buttons.forEach(element => { 
    element.addEventListener('click', () => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.parentElement.style.backgroundColor = randomColor;
    })})
    }
    
    changeColor();

// Zadanie 5

function changeColor() {
    var element = document.getElementById('ex5');
    element.querySelectorAll('div').forEach((div) => {
        div.onmouseover = () => {
            //var elem = element.querySelectorAll('ul li:first-child');
            //var elem = element.querySelectorAll('ul li:last-child');
            //var elem = element.querySelectorAll('ul li:nth-of-type(2n)')
            //var elem = element.querySelectorAll('ul li');
            var elem = element.query
           
            elem.forEach(el => el.style.backgroundColor = div.style.backgroundColor);
        };
    
    });
}
changeColor();
