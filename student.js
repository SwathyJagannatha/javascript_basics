/* 1> Understanding Data Types in JavaScript

// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
// Task 2: Assign sample values to the student information variables.
// Task 3: Display the student information using console.log() statements.*/


// Declaring the student name 
let name = "Vedanth Vasista"

//declaring the student age

let age = 12

//declaring grade of the student

let grade = "A+" 

// attendance status

let status = 98


// 2nd student details

let name_new = "Rohit Sharma"

//declaring the student age

let age_new = 25

//declaring grade of the student

let grade_new = "A" 

// attendance status

let status_new = 90

//displaying student info

console.log(`Displaying student ${name}'s info:`);
console.log(`- ${name}'s Age : ${age}`)
console.log(`- ${name}'s Grade : ${grade}`)
console.log(`- ${name}'s Attendance Status : ${status}`)

// displaying another student's info

console.log(`Displaying student ${name_new}'s info:`);
console.log(`- ${name_new}'s Age : ${age_new}`)
console.log(`- ${name_new}'s Grade : ${grade_new}`)
console.log(`- ${name_new}'s Attendance Status : ${status_new}`)


//2> Exploring JavaScript Operators

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.

// Task 2: Assign sample numeric values to the variables declared in Task 1.

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.

let numa = 34;

let numb = 67;

sum_res = numa + numb
diff_res = numb - numa
prod_res = numa * numb
div_res = numa / numb

console.log("Sum:", numa+numb);
console.log("Difference:",diff_res);
console.log("Product:", prod_res);
console.log("Quotient:", div_res);

//Task 4: Explore assignment operators and update the values of variables.

// Task 4: Explore assignment operators

num1 = 100
num2 =  278
num1 = num1 + 15
num2 = num2 - 30
console.log("Updated num1:",num1);
console.log("Updated num2:",num2);

//Task 5: Use comparison operators to compare the values of variables.

// Task 5: Use comparison operators

console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

//Task 6: Apply logical operators to combine conditions and display the results.

// Task 6: Apply logical operators

let val1 = 34
let val2 = 45
let val3 = -56
let isPositive = val1 > 0 && val2 > 0;
let isEven = (val1% 2 == 0 || val3 % 2 == 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);