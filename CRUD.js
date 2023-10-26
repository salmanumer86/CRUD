let students = [
  { id: 0, name: "Abrar", class: "1st", subject: "Arts" },
  { id: 1, name: "Azhar", class: "10th", subject: "Arts" },
  { id: 2, name: "Furqan", class: "2nd", subject: "Arts" },
  { id: 3, name: "Karim", class: "3rd", subject: "Arts" },
  { id: 4, name: "Fazal", class: "4th", subject: "Arts" },
  { id: 5, name: "Ali", class: "5th", subject: "Arts" },
  { id: 6, name: "Salman", class: "6th", subject: "Arts" },
  { id: 7, name: "Talha", class: "7th", subject: "Arts" },
  { id: 8, name: "Mohsin", class: "8th", subject: "Arts" },
  { id: 9, name: "Ahsan", class: "9th", subject: "Arts" },
];
function getInput(msg) {
  const data = prompt(msg + "\nOr Type :q to quit any time.").toLowerCase();
  if (data === ":q" || data === "quit") {
    throw new Error();
  }
  return data;
}
function addStudent() {
  const option1 = getInput(
    "Following Student Details Required\nID\nName:\nClass:\nSubject:\n1 - Continue, 2 - Back to Main"
  );
  if (option1 === "1") {
    const studentName = getInput("Enter Student Name").toLowerCase();
    const className = getInput("Enter Class Name").toLowerCase();
    const subjectName = getInput("Enter Subject Name").toLowerCase();
    students.push({
      id: students.length,
      name: studentName,
      class: className,
      subject: subjectName,
    });
  } else if (option1 === "2") {
    main();
  } else if (option1 === "3") {
    return "Have a Nice Day!";
  }
  const result = getInput(
    "New Student Record Added\n1 - View Records, 2 - Back to Main"
  ).toLowerCase();

  if (result === "1" || result === "view record".toLowerCase()) {
    displayStudents();
  } else if (
    result === "2" ||
    result === "back to main" ||
    result === "backtomain"
  ) {
    main();
  } else if (result === "3" || result === "quit") {
    return "Have a Nice Day!";
  }
}

function deleteStudent() {
  const nameID = parseInt(
    getInput("Enter Student Name or ID To Delete Record\n1 - Back to Main")
  );
  if (nameID === 1) {
    main();
  }
  const delStudent = students.findIndex((i) => i.id == nameID);
  if (delStudent >= 0) {
    students = students.filter((i) => i.id !== nameID);
    const result1 = getInput(
      "Student Record Deleted\n1 - View Record, 2 - Back to Main"
    );
    if (
      result1 === "1" ||
      result1 === "view record" ||
      result1 === "viewrecord"
    ) {
      displayStudents();
    } else if (
      result1 === "2" ||
      result1 === "back to main" ||
      result1 === "backtomain"
    ) {
      main();
    }
  } else {
    alert("Student Record Not Found");
    deleteStudent();
  }
  if (nameID === "1") {
    main();
  } else if (nameID === "2") {
    return "Have a Nice Day";
  }
}

function updateStudent() {
  const studentID = parseInt(getInput("Search Student Name / ID"));
  const findStudent = students.findIndex((i) => i.id === studentID);
  if (findStudent <= 0) {
    alert("Student ID Not Exist");
    updateStudent();
  } else {
    const mode = getInput(
      "What would you like to update?\n1 - Name:\n2 - Class:\n3 - Subject\n4 - Update Complete Record\n5 - Back to Main\n6 - Quit"
    ).toLowerCase();

    if (mode === "1" || mode === "name") {
      const enterName = getInput("Enter Updated Name").toLowerCase();
      students[findStudent].name = enterName;
      const continueOp = getInput(
        "Do you want to continue to update student class/subject name? or want to Quit?\n1 - View Record / 2 - Continue / 3 - Quit"
      ).toLowerCase();
      if (continueOp === "1" || continueOp === "view record") {
        alert("Student Name Updated");
        displayStudents();
      } else if (continueOp === "2" || continueOp === "continue") {
        const enterClass = getInput("Enter Updated Class Name");
        students[findStudent].class = enterClass;
        const enterSubject = getInput("Enter Updated Subject Name");
        students[findStudent].subject = enterSubject;
        const result2 = getInput(
          "Student Record Updated\n1 - View Record /2 - Quit"
        ).toLowerCase();
        if (
          result2 === "1" ||
          result2 === "view record" ||
          result2 === "viewrecord"
        ) {
          displayStudents();
        }
      }
    } else if (mode === "2" || mode === "class") {
      const enterClass = getInput("Enter Updated Class Name");
      students[findStudent].class = enterClass;
      alert("Student Class Name Updated");
    } else if (mode === "3" || mode === "subject") {
      const enterSubject = getInput("Enter Updated Subject Name");
      students[findStudent].subject = enterSubject;
      alert("Student Subject Name Updated");
    } else if (mode === "5") {
      main();
    } else if (mode === "6") {
      return "Have a Nice Day!";
    }
  }
}

function displayStudents() {
  students.forEach((i, index) =>
    console.log(
      ` ${index + 1}-ID#:${i.id}-${i.name} studies in ${i.class} class with ${
        i.subject
      } subject.`
    )
  );
}
function main(hideInitialMsg) {
  if (!hideInitialMsg) {
    console.log("Welcome To Student Database");
  }
  const option = getInput(
    "What would you like to do?\n1 - View Records \n2 - Add Records\n3 - Delete Record\n4 - Update Record"
  );
  if (option === "1") {
    displayStudents();
  } else if (option === "2") {
    addStudent();
  } else if (option === "3") {
    deleteStudent();
  } else if (option === "4") {
    updateStudent();
  } else if (option === "5") {
    return "Have A Nice Day!";
  } else {
    const inp = prompt("Continue? y/n");
    if (inp === "y") {
      main(true);
    }
    return "Have A Nice Day!";
  }
}
