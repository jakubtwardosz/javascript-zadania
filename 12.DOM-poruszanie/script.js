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
