// Challenge 1
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  var n = numbers;
  if (n.join('').length != 10) {
    return false;
  }
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Challenge 2
// You will be given a sequence of objects representing data about developers including their name, 
// where they are from, their preferred coding language, and their age. Your task is to return the oldest developer(s).

Example:
var list = [
  { firstName: 'John', lastName: 'X.', country: 'Monaco', age: 40, language: 'JavaScript' },
  { firstName: 'Olivia', lastName: 'F.', country: 'Mongolia', age: 38, language: 'C#' },
  { firstName: 'Emily', lastName: 'S.', country: 'Lithuania', age: 19, language: 'Python' },
  { firstName: 'Saul', lastName: 'B.', country: 'Japan', age: 49, language: 'JavaScript' },
  { firstName: 'Rick', lastName: 'A.', country: 'Germany', age: 49, language: 'C#' },
  { firstName: 'Renee', lastName: 'R.', country: 'England', age: 49, language: 'JavaScript' }  
];

// Should return:
// { firstName: 'Saul', lastName: 'B.', country: 'Japan', age: 49, language: 'JavaScript' }

// If there are multiple developers of the same age, return a list containing all of them:
// [
//   { firstName: 'Saul', lastName: 'B.', country: 'Japan', age: 49, language: 'JavaScript' },
//   { firstName: 'Betty', lastName: 'W.', country: 'United States', age: 49, language: 'Java' }   
// ]

function findSenior(list) {
  var age = [];
  var result = [];
  for (var i in list) {
    age.push(list[i].age)
  }
  for (var j in list) {
    if (list[j].age === Math.max(...age)) {
      result.push(list[j])
    }
  }
  return result;
}

console.log(findSenior(list));

// Challenge 2.5
// Using the same list of objects from above, write to the console the count of each preferred language, in descending order.

// Example:
// JavaScript: 3
// C#: 2
// Python: 1

function langCount(list) {
  var counts = {};
  for(var i of list){
    var lang = i.language;
    if(counts[lang] > 0){
      counts[lang]++;
    }
    else{
      counts[lang] = 1;
    }
  }
  return counts;
}

console.log(langCount(list))