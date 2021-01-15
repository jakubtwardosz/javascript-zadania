// Zadanie 1

const arr = ['one', 'two', 13, "six"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Zadanie 2

// 1.

console.log(arr[0]);
console.log(arr[1]);

// 2.

console.log(arr[arr.length - 1]);

// 3.

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 4.

for (let i = 0; i < arr.length; i+=2) {
    console.log(arr[i]);
}

// 5.

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
        console.log(arr[i]);    
    }
}

// 6.

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        console.log(arr[i]);    
    }
}

// Zadanie 3 

const arr2 = [4,8,15,16,23,42];

// 1.

let sumArr2 = 0;

for (let i = 0; i < arr2.length; i++) {
    sumArr2 = sumArr2 + arr2[i];
}

console.log(sumArr2);

// 2.

let diffArr2 = 0;

for (let i = 0; i < arr2.length; i++) {
    diffArr2 = diffArr2 - arr2[i];
}

console.log(diffArr2);

// 3.

var avg = sumArr2/arr2.length;

console.log(avg);

// 4.

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
        console.log('Even ' + arr2[i]);        
    }
}

// 5.

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
        console.log('Odd ' + arr2[i]);        
    }
}

// 6.

let biggestNum = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > biggestNum) {
        biggestNum = arr2[i];
    }    
}

console.log(biggestNum);

// 7.

let smallestNum = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallestNum) {
        smallestNum = arr2[i];
    }    
}

console.log(smallestNum);


// 8.

console.log(arr2.reverse());

// Zadanie 4


