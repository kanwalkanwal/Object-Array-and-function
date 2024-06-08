"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question =1
console.log("\t \t ANSWER_NUMBER : 1 \n");
//Task:Create a program that manages a simple friend list.
//Define an object named people containing an empty array called friends.
var people = {
    friends: []
};
var friend1 = {
    firstName: "Muhamd Mustafa",
    lastName: "Mustafa",
    id: 17,
};
var friend2 = {
    firstName: "Kanwal Naeem",
    lastName: "Naeem",
    id: 35,
};
var friend3 = {
    firstName: "Naeem Khan",
    lastName: "khan",
    id: 37,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//Question = 2
console.log("\t \t ANSWER_NUMBER : 2 \n");
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//convert non - strings to strings if needed.
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
var join = scrambledArray.join(" ");
console.log(join);
//Question = 3
console.log("\t \t ANSWER_NUMBER : 3 \n");
//Task :Ccreate a program to represent a product catalog using an array and perform basic queries.
//Define an array named and eachrepresenting a product name ,model,cost,and quantity.
var inventory = [];
//Create three separate objects, each product
var mobaial = {
    name: "mobaial",
    model: "Galaxy",
    cost: 4500,
    quantity: 4,
};
var Airpods = {
    name: "AirBud",
    model: "Audionic 55",
    cost: 10000,
    quantity: 50,
};
var laptop = {
    name: "Hp",
    model: "Zbook",
    cost: 80000,
    quantity: 35,
};
inventory.push(mobaial, Airpods, laptop);
console.log("products in Inventory:", inventory);
console.log("\n Quantity of the third products:", inventory[2].quantity);
//add more products to the ineventory.
var smartwatch = {
    name: "Fitbit charge",
    model: "apple",
    cost: 530000,
    quantity: 3,
};
inventory.push(smartwatch);
console.log("\n Adding more products to the inventory:", inventory[3]);
console.log("\n Current Inventory", inventory);
//increase the cost of 1st product in the inventory.
inventory[0].cost += 20000;
console.log("\n Increase the cost of 1st product in the inventory:", inventory[0]);
//Removing
var removedProduct = inventory.splice(1, 1);
console.log("\n Product is removed from the inevetory:", removedProduct);
console.log("\n Current Inventory", inventory);
Question: 4;
//Student Data Template
/*Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/
console.log("\n Assignment 4: Student List Organizer \n");
;
//Student List
var students = [
    { name: "kanwal", seniorStatus: true, assignmentCompleted: true },
    { name: "Amna", seniorStatus: true, assignmentCompleted: true },
    { name: "Iqra", seniorStatus: false, assignmentCompleted: true },
    { name: "Mustafa", seniorStatus: false, assignmentCompleted: false },
    { name: "Ruby", seniorStatus: true, assignmentCompleted: true },
    { name: "Saba", seniorStatus: false, assignmentCompleted: false },
];
console.log("\n Student List:", students);
//Find Senior students with Assignment
console.log("\n List of senior students who completed their assignments:");
students.forEach(function (findSeniorStudent) {
    if (findSeniorStudent.seniorStatus === true && findSeniorStudent.assignmentCompleted === true) {
        console.log("".concat(findSeniorStudent.name, " is a senior student and she completed all her assignments."));
    }
});
//Class List Update:
console.log("\n Update Class List:");
students.forEach(function (removeStudent) {
    if (removeStudent.seniorStatus === true && removeStudent.assignmentCompleted === true) {
        console.log(removeStudent);
    }
});
