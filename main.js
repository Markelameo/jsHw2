"use strict";

// task 1
let varrible1 = "true";
let varrible2 = "false";
let varrible3 = 17;
let varrible4 = undefined;
let varrible5 = null;
console.log(typeof varrible1);
console.log(typeof varrible2);
console.log(typeof varrible3);
console.log(typeof varrible4);
console.log(typeof varrible5);

// task 2
let height = 15;
let width = 20;
    if(height>width){
        console.log(height);
    } else {
        console.log(width);
    }

// task 3
let i = 1;
while (i < 21) {
    if ((i%3)==0){
        console.log(i);
    }
    i++;
}

// task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);