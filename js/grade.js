// function calculateGrades() {
//     let = parseInt(document.getElementById("numberOfStudents").value);
//     let = document.getElementById("marks").value;

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

function handleSubmit() {
    
    let rollNo = document.getElementById("rollNumber").value;
    let marks = document.getElementById("marks").value;
    let grade = document.getElementById("grade").value;

   
    console.log("Roll No:",rollNo);
    console.log("Marks:",marks);
    console.log("Grade:",grade);

}