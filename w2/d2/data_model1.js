// ~~~~~~ 1
var students1 = [
  { name : "Anthony" },
  { name : "Winne" },
  { name : "Padwandeep" }
];

//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Padwandeep

function printNames(students) {
    //your code here...
}

// printNames(students1); // uncomment when ready to test

// ~~~~~~ 2
var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winne",
    id : 1
  }, {
    name : "Padwandeep",
    id : 2
  }
];

//Write a function that will print the name and id of all the stuents
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Padwandeep is student #2

function printStudents(students) {
  //your code here...
}

// printStudents(students2); // uncomment when ready to test

//~~~~~3
var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winne",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Padwandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Padwandeep 92

function printBestGrade(students) {
  //your code here...
}

// printBestGrade(student3); // uncomment when ready to test


//Write a function that will print the name of the student and their average test score
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winne 72.66666666666667
// Padwandeep 73.33333333333333


function printAverageGrade(students) {
  //your code here...
}

// printAverageGrade(students3); // uncomment when ready to test

//~~~~BONUS

//Write a function that will print the id of each test and the name of the student
//who got the highest scores
//Example
// printBestStudent(students3)
// Test 0: Anthony
// Test 1: Padwandeep
// Test 2: Winnie

function printBestStudent(students) {
  //your code here...
}

// printBestStudent(student3); // uncomment when ready to test
