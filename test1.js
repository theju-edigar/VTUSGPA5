function calculateSGPA() {
    var marks = [];
    var subjects = ["21CS51", "21CS52", "21CS53", "21CS54", "21CSL55", "21RM156", "21CIV57", "21CS582"];

    for (var i = 0; i < subjects.length; i++) {
        var subjectCode = subjects[i];
        var subjectMarks = document.getElementById(subjectCode).value;

        if (subjectMarks === "" || isNaN(subjectMarks) || subjectMarks < 0 || subjectMarks > 100) {
            alert("Invalid entry in field " + subjectCode);
            return;
        }

        marks.push(parseInt(subjectMarks, 10));
    }

    var creditPoints = [3, 4, 3, 3, 1, 2, 1, 1];
    var undividedSGPA = 0;
    var totalCP = 18;

    for (var j = 0; j < creditPoints.length; j++) {
        if (marks[j] >= 90 && marks[j] <= 100) {
            marks[j] = 10;
        } else {
            marks[j] = Math.ceil(marks[j] / 10);
        }

        undividedSGPA += marks[j] * creditPoints[j];
    }

    var sgpa = undividedSGPA / totalCP;
    sgpa = sgpa.toFixed(2);

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Sem 5 SGPA: " + sgpa;
}

var listDisplayed = false; // Flag to track whether the list has been displayed

function openlist() {
    var displayElement = document.getElementById("subject-code");
    var subjectListDiv = document.getElementById("subject-list");

    // Check if the list has already been displayed
    if (listDisplayed) 
    {
        // If list is displayed, hide it and set the flag to false
        subjectListDiv.style.display = "none";
        listDisplayed = false;
    }
    
    else 
    {
        // If list is not displayed, show it and set the flag to true
        subjectListDiv.style.display = "block";
        listDisplayed = true;
    }
}
