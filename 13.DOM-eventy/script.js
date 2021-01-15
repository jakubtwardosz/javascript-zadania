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

