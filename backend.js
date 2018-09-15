"use strict";

window.addEventListener("DOMContentLoaded", init);

const allStudents = [];
let currentStudent = [];
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
      console.log(jsondata);

      fillStudents(jsondata);

      displayList(allStudents);
    });
}

function init() {
  console.log("vi er igang");

  fetchData();

  console.log(allStudents);
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

console.log(listOfStudents);
