// let number = 47;

// if (number > 0) {
//     console.log('number is greater than zero');

// } else if (number < 0) {
//     console.log('number is less than zero');

// } else {
//     console.log('number is zero');
// }

// var day = '6';
// switch (day) {
//     case '1':
//         console.log('Sunday');
//         break;
//     case '2':
//         console.log('Monday');
//         break;
//     case '3':
//         console.log('Tuesday');
//         break;
//     case '4':
//         console.log('Wednesday');
//         break;
//     case '5':
//         console.log('Thursday');
//         break;
//     case '6':
//         console.log('Friday');
//         break;
//     case '7':
//         console.log('Saturday');
//         break;
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("i" + i);
// }

// let i = 1;

// while (i <= 5) { 
//     console.log("i is "+ i +"");
//     i++
// }

// let j = 0; 

// do {
//     j++;
//     console.log("Number of classmates with first initial of J: " + (j));
// } while (j < 5);
// console.log("No more classmates with first initial of J")

// for (var i = 1; i < 3; i++)
//     if (i === 7) {
//         break;
//     }
// console.log(i);
// {
//     console.log("Loop exited at i = 3");
// }

// var points = [26, 42, 47, 29, 32, 3, 60, 74, 66];
// for (var i = 0; i < points.length; i++){
//     if (points[i] < 7) {
//         console.log(`skipping competitor ${i+1} because their points aquired is ${points[i]}`)
//         continue;
//     }
//     console.log(" Competitor " + (i + 1) + " is in the game with " + points[i]);
// }

let globalVar = "I am global";

function scopeExample() {
    var functionVar = "I am inside the function";

    console.log(globalVar);
    console.log(functionVar);
}

scopeExample();

console.log(globalVar);
console.log(functionVar);
