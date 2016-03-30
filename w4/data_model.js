// ~~~~~~ 1
var students1 = [
  { name : "Anthony" },
  { name : "Winne" },
  { name : "Arjun" }
];

//Write a function that will print the name of all the students
// Use Array#forEach
//Example
// printNames(stduents1)
// Anthony
// Winnie
// Arjun

// ~~~~~~ 2
var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winne",
    id : 1
  }, {
    name : "Arjun",
    id : 2
  }
];

//Write a function that will print the name and id of all the stuents
// Use Array#forEach
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Arjun is student #2


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
    name : "Arjun",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

//Write a function that will print the name of the student and their highest test score
// Use Array#forEach
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Arjun 92



//Write a function that will print the name of the student and their highest test score
// Use Array#forEach
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winne 72.66666666666667
// Arjun 73.33333333333333



//~~~~BONUS

//Write a function that will print the id of each test and the name of the student
//who got the highest score
// Use Array#forEach
//Example
// printBestStudent(students3)
// Test 0: Anthony
// Test 1: Arjun
// Test 2: Winnie
