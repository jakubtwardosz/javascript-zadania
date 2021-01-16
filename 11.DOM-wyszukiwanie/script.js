// Zadanie 1

let findListElements = document.querySelectorAll(".list");

console.log(findListElements);

// Zadanie 2 

let findTagElements = function(tag){
    return document.querySelectorAll(tag);
}

console.log(findTagElements("body"));

// Zadanie 3

let findIdList = document.getElementById('list');

console.log(findIdList);

// Zadanie 4

function displayElements(element){
    console.log(element);
}

displayElements(document.querySelectorAll('li'));

displayElements(document.querySelectorAll('ul'));

displayElements(document.querySelectorAll('span'));

displayElements(document.querySelectorAll('div.list span'));

displayElements(document.querySelectorAll('div#spans span'));
