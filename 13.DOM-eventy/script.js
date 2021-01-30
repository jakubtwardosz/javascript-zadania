// Zadanie 1 

let el = document.getElementById('test-event');

// el.addEventListener('click', function(event){
//     console.log(event);
// });

// document.addEventListener("mousemove", function(event){
//     console.log(event);
// });

el.addEventListener("mouseover", function(event1){
    console.log(event1);
});

document.addEventListener("keypress", function(event2){
    console.log(event2);
});


document.addEventListener("scroll", function(event){
    console.log(event);
});

let text = document.getElementById("input-test");

text.addEventListener("change", function (event) {
    console.log(event);    
});

// Zadanie 2 

let el2 = document.getElementById('ex2');

el2.addEventListener('click', function(event) {
    document.getElementById('span-ex2').innerText = el2.getAttribute("data-text");
});

// Zadanie 3 

let el3 = document.getElementById('ex3');

el3.addEventListener('mouseover', function(event) {
    el3.style.backgroundColor = "blue";
});

el3.addEventListener('mouseout', function(event) {
    el3.style.backgroundColor = "red";
});

// Zadanie 4

let el4 = document.getElementById('input-test');

el4.addEventListener('change', function(event) {

    const re = /^[a-zA-Z]+$/;
    let error = document.getElementById('ex3-err');
    
    if (!re.test(event.target.value)) {
        error.innerText = "Tylko znaki od a do Z";
        return;
    }
 
    error.innerText = "";
});

// Zadanie 5

let el5 = document.getElementById('ex5-button');
let counter = 0;

function counting(event) {
    document.getElementById('ex5').innerText = ++counter;

    if (counter >= 10) {
        el5.removeEventListener('click', counting );        
    }
}

el5.addEventListener('click', counting );

// Zadanie 6

document.addEventListener("scroll", function(event){
    let position = window.scrollY;

    if (position > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

});

// Zadanie 7 

    let calcInput = document.querySelector('#calculator > input');
    let isEval = false;
    let isClear = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (isClear == true) {
                calcInput.value = "";
                isClear = false;
            }
            
            calcInput.value = calcInput.value + event.target.innerText;

            if (isEval == true) {
                calcInput.value = eval(calcInput.value);
                isEval = false;
                isClear = true;
            }

            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                isEval = true;
            }
        });
    });
