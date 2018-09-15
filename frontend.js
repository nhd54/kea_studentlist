"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
  console.log("we´re live");
}

function displayList(listOfStudents) {
  console.log("Display list");
  // clear the table
  // document.querySelector("table#studentlist tbody").innerHTML = "";

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

    //document
    //.querySelector("table#studentlist")
    //.addEventListener("click", clickTable);
    // append clone to table

    document.querySelector("#persons").appendChild(clone);
  });
}
