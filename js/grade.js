// function calculateGrades() {
//     let = parseInt(document.getElementById("numberOfStudents").value);


//     for (let i = 1; i <= n; i++) {
//         let total = 0;

       
//         for (let j = 1; j <= m; j++) {

//             total = total + sub;
//         }
//     }
//     let percentage = total/m;

//         console.log("roll no",roll_no);
        
//         if (percentage > 85) {
//             console.log("Grade A");
//         } else if (percentage > 75) {
//             console.log("Grade B");
//         } else {
//             console.log("Grade C");
//         }


// }

// function handleSubmit() {
    
//     let rollNo = document.getElementById("rollNumber").value;
//     let marks = document.getElementById("marks").value;
//     let grade = document.getElementById("grade").value;

   
//     console.log("Roll No:",rollNo);
//     console.log("Marks:",marks);
//     console.log("Grade:",grade);

// }

function handleSubmit() {
 
    let percentageInput = parseFloat(document.getElementById("percentage").value);
    

    
    let grade;

    if (percentage >= 91 && percentage <= 100) {
        grade = "Grade A";
    } else if (percentage >= 81 && percentage < 91) {
        grade = "Grade B";
    } else if (percentage >= 71 && percentage < 81) {
        grade = "Grade C";
    } else if (percentage >= 61 && percentage < 71) {
        grade = "Grade D";
    } else if (percentage >= 40 && percentage < 61) {
        grade = "Grade E";
    } else if (percentage >= 0 && percentage < 40) {
        grade = "Failed";
    } else {
        grade  = "Invalid Percentage";
    }

    console.log("Your grade is:", grade);

}