// Zadanie 1

const newDiv = document.createElement('div');
newDiv.innerText = 'To jest nowy element';

document.body.appendChild(newDiv);

// Zadanie 2

const favouriteFruits = ['jabłko','pomarańcza','kiwi','banan','gruszka','truskawki','śliwki'];

const ul = document.createElement("ul");
favouriteFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// Zadanie 3

document.body.addEventListener('click', function () {
    const list = document.querySelectorAll("ul li");
    list.forEach((element, i) => {
        if (i % 2 === 0) element.remove();
    });
});

// Zadanie 4

const button = document.createElement('button');
button.innerText = 'Kliknij tutaj';
document.body.appendChild(button);

button.addEventListener('click', function () {
    button.remove();
});

// Zadanie 5

const randomNumber = Math.floor((Math.random() * 10) + 1);

for (let i = 0; i < randomNumber; i++) {
    const div = document.createElement('div');
    div.innerText = `to jest div ${i}`;
    document.body.appendChild(div);
}

// Zadanie 6

const obj = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span'};

function objToHtml(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            objToHtml(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}

objToHtml(obj);

// Zadanie 7

const favouriteFruits1 = ['jabłko','pomarańcza','kiwi','banan','gruszka','truskawki','śliwki'];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");

favouriteFruits1.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul1.appendChild(li);
});

const listArr = [ul1, ul2];

const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
    listArr.forEach((ul, i) => {
        if (ul.childElementCount <= 1){
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

listArr.forEach((ul, i) => {
    buttons[i].innerText = 'Przenieś do drugiej listy';
    buttons[i].addEventListener('click', () => {
        const listItems = ul.querySelectorAll('li');
        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();

// Zadanie 8

// Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie. Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę.
