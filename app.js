let student = {
    name: "muhammad afnan",
    age: 18,
    cgpa: 7.5,
    isPass: true
};

for(let key in student){
    console.log("key =", key, "value =", student[key]);
}

for(let num=0; num<=100; num++){
    if(num%2 === 1){
console.log("num is ", num);
    }
}

// let realNumber = 25;  
// let userNumber = prompt("Guess the real number 0-100:");

// Convert user input to a number
// userNumber = Number(userNumber);

// if (userNumber === realNumber) {
//     console.log("You win!");
// } else {
//     console.log("You lost!");
// }

let realNumber = 25;  
let userNumber = prompt("Guess the real number 0-100:");

while(userNumber != realNumber){
    userNumber = prompt("you enterd the wrong  number, guess again");
};
console.log("congrats you entered the rigt number!");

let obj = {
    item : "pen",
    price : 100,
}

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("the cost of", obj.item, "is", obj.price, "rupees");

// let str ="01234567";
// console.log(str.slice(1,6));

// let str1 = "apna";
// let str2 = "college";

// let res = str1.concat(str2);
// console.log(res);

// let str1 = "apna";
// let str2 = "college";

// let res = str2.concat(str1);
// console.log(res);

// let str = "hello";

// console.log(str.replace("h", "m"));

// let userName = prompt("enter your full name");
// console.log("your user name is", "@"+userName+123)

let fullName = prompt("enter your full name without spaces");

let userName = "@" + fullName + fullName.length;
console.log(userName);

