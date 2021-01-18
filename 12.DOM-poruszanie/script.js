// Zadanie 1 

console.log(document.getElementById("buz").parentElement);

console.log(document.getElementById("baz").previousElementSibling);

console.log(document.getElementById("foo").children);

console.log(document.getElementById("foo").parentNode);

console.log(document.getElementById("foo").children[0]);

console.log(document.getElementById("foo").children[1]);


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

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
    });
});

// Zadanie 4

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', () => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        element.parentElement.style.backgroundColor = randomColor;
    });
});

// Zadanie 5

const rect = document.querySelectorAll("#ex5 div");
const list = document.querySelector("#ex5 ul");
const listElements = document.querySelectorAll("#ex5 ul li")

rect.forEach(rect => rect.addEventListener("mouseover", (e) => {

    listElements[0].style.backgroundColor = e.target.style.backgroundColor

    listElements[listElements.length - 1].style.backgroundColor = e.target.style.backgroundColor

    listElements.forEach((el, idx) => {
        if (idx % 2 === 1) el.style.backgroundColor = e.target.style.backgroundColor
    })

    listElements.forEach((el, idx) => {
        if (idx % 2 === 0) el.style.backgroundColor = e.target.style.backgroundColor
    })
    
    list.style.backgroundColor
}))

// Zadanie 6

let zad6 = document.querySelector("#ex6");

let first = zad6.firstElementChild.firstElementChild.firstElementChild;

console.log(first);

let second = zad6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

console.log(second);

let third = zad6.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(third);
