"use strict";

window.addEventListener("DOMContentLoaded", init);

const allStudents = [];
let currentStudents = [];
let jsonurl = "students.json";
const Student_prototype = {
  firstName: "",
  lastName: "",
  house: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    const firstSpace = fullName.lastIndexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};

function fetchData() {
  const url = "students.json";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsondata) {
      fillStudents(jsondata);

      currentStudents = allStudents;

      displayList(currentStudents);
    });
}

function init() {
  fetchData();
}

function fillStudents(studentNames) {
  studentNames.forEach(createStudent);

  function createStudent(fullName) {
    const student = Object.create(Student_prototype);
    student.splitName(fullName);

    student.id = "" + allStudents.length;

    allStudents.push(student);
  }
}

function listOfStudents() {
  let str = "";

  allStudents.forEach(student => (str += student + "\n"));

  return str;
}

function sortByFirstName() {
  currentStudents.sort(byFirstName);
  console.log(currentStudents);
  function byFirstName(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    } else if (a.firstName > b.firstName) {
      return 1;
    } else {
      return 0;
    }
  }
}

function sortByLastName() {
  currentStudents.sort(byLastName);
  console.log(currentStudents);
  function byLastName(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  }
}

function deleteStudent(studentId) {
  // function that returns true when student.id = studentId
  const index = allStudents.findIndex(findStudent);
  allStudents.splice(index, 1);
  function findStudent(student) {
    if (student.id === studentId) {
      return true;
    } else {
      return false;
    }
  }
}
