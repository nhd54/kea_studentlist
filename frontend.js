"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
  document
    .querySelector("button#sort_first")
    .addEventListener("click", clickedSortFirstname);
  document
    .querySelector("button#sort_last")
    .addEventListener("click", clickedSortLastname);
}

function clickTable() {
  const clicked = event.target;

  if (clicked.textContent === "Details") {
    showDetails(clicked);
  } else if (clicked.textContent === "Delete") {
    clickedDelete(clicked);
  }
}

function clickedSortFirstname() {
  console.log("clickedSortFirstname");
  sortByFirstName();

  displayList(currentStudents);
}

function clickedSortLastname() {
  console.log("clickedSortLastname");
  sortByLastName();

  displayList(currentStudents);
}

function showDetails(detailsButton) {
  let studentDetails =
    detailsButton.parentElement.nextElementSibling.nextElementSibling;

  if (studentDetails.style.display === "block") {
    studentDetails.style.display = "none";
  } else {
    studentDetails.style.display = "block";
    studentDetails.style.transition = "display 5s";
  }
}
function clickedDelete(deleteButton) {
  console.log(deleteButton);

  let tr = deleteButton.parentElement.parentElement;

  console.log(tr);

  //   while (tr.tagName !== "PERSON") {
  //     tr = tr.parentElement;
  //   }

  const studentId = tr.dataset.studentId;
  console.log(studentId);
  animateDelete(tr);

  deleteStudent(studentId);

  setTimeout(function() {
    tr.remove();
  }, 1000);
}

function animateDelete(tr) {
  tr.classList.add("fly-out");
}

function displayList(listOfStudents) {
  // clear the table
  document.querySelector("#persons").innerHTML = "";

  // foreach student in listOfStudents
  listOfStudents.forEach(function(student) {
    // clone a table-row for student
    const clone = document
      .querySelector("#student_template")
      .content.cloneNode(true);

    // fill in the clone with data
    clone.querySelector(".firstName").textContent = student.firstName;
    clone.querySelector(".lastName").textContent = student.lastName;
    clone.querySelector(".person").dataset.studentId = student.id;

    document.querySelector("#persons").addEventListener("click", clickTable);
    // append clone to table

    document.querySelector("#persons").appendChild(clone);
  });
}
