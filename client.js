$(document).ready(readyNow);

function readyNow() {
  console.log('JQ is running');
  bonusDisplay();
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


console.log(employees);

let = employeeBonuses = [];

function newEmployee(employeeArray) {
  let employeeObject = '';
  for (let i = 0; i < employeeArray.length; i++) {
    employeeObject = {
      name: employeeArray[i].name,
      bonusPercentage: 0,
      totalCompensation: 0,
      totalBonus: 0
    }// end employeeObject
    employeeBonuses.push(employeeObject);
  }//end for loop
}//end newEmployee function

function bonusCalc(employeeArray, bonusArray) {
  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].reviewRating < 2) {
      bonusArray[i].bonusPercentage = 0;
    }//if statement
    if (employeeArray[i].reviewRating === 3) {
      bonusArray[i].bonusPercentage = 0.04;
    }//if statement
    if (employeeArray[i].reviewRating === 4) {
      bonusArray[i].bonusPercentage = 0.06;
    }//if statement
    if (employeeArray[i].reviewRating === 5) {
      bonusArray[i].bonusPercentage = 0.10;
    }//if statement
    if (employeeArray[i].employeeNumber.length === 4) {
      bonusArray[i].bonusPercentage += 0.05;
    } //if statement
    if (employeeArray[i].annualSalary > 65_000) {
      bonusArray[i].bonusPercentage -= 0.01;
    } //if statement
    if (bonusArray[i].bonusPercentage > 0.13) {
      bonusArray[i].bonusPercentage = 0.13;
    } //if statement
    if (bonusArray[i].bonusPercentage < 0) {
      bonusArray[i].bonusPercentage = 0;
    } //if statement
    if (bonusArray[i].totalBonus === 0) {
      bonusArray[i].totalBonus = Math.round(employeeArray[i].annualSalary * bonusArray[i].bonusPercentage);
    }
    if (bonusArray[i].totalCompensation === 0) {
      bonusArray[i].totalCompensation = Number(employeeArray[i].annualSalary) + bonusArray[i].totalBonus;
    }
  }//end for loop






}//end bonusCalc function

newEmployee(employees);
console.log(employeeBonuses);
bonusCalc(employees, employeeBonuses);

$('#bonusInfo')

function bonusDisplay() {
  console.log('in bonusDisplay');
  //target output by ID
  let bonusList = $('#bonusInfo');
  //for each info added, create a list item
  for (let info of employeeBonuses) {
    bonusList.append(`<li>${info.name} ${info.bonusPercentage} ${info.totalCompensation} ${info.totalBonus}</li>`);
  }//end for of
}//end bonusDisplay