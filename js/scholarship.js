// function handlesubmit(){

//     // console.log("ok");

//     let cast = (document.getElementById("cast").value);

//     // console.log(cast);

//     let cgpa = parseFloat(document.getElementById("cgpa").value);

//     // console.log(cgpa);

//     // let payablefees = parseFloat(document.getElementById("payablefees").value);

//     let Grade;

//     if(cgpa >= 9 && cgpa <= 10){
// 		Grade = 'A';
// 	}else if(cgpa >= 8.5){
// 		Grade = 'B';
// 	}else if(cgpa >= 8){
// 		Grade = 'C';
// 	}else if(cgpa >=7.5){
// 		Grade = 'D';
// 	}else{
// 		Grade = 'E';
// 	}

//     console.log("Your grade is:", Grade);
// }



// let scholarship;

// if( Grade == 'A' || Grade == 'B' ){
//     if(cast == 'o'){
//         scholarship = 0;
//     }else if(cast == 'b'){
//         scholarship = fees * 0.25;
//     }else if(cast == 'c'){
//         scholarship = fees * 0.75;
//     }else if(cast == 't'){
//         scholarship = fees * 1;
//     }
// }


// console.log("scholarship");

let Grade; // Declare Grade in the global scope

function handlesubmit() {
    let cast = document.getElementById("cast").value;
    let cgpa = parseFloat(document.getElementById("cgpa").value);

    if (cgpa >= 9 && cgpa <= 10) {
        Grade = 'A';
    } else if (cgpa >= 8.5) {
        Grade = 'B';
    } else if (cgpa >= 8) {
        Grade = 'C';
    } else if (cgpa >= 7.5) {
        Grade = 'D';
    } else {
        Grade = 'E';
    }

    console.log("Your grade is:", Grade);

    // Calculate scholarship based on Grade and cast
    let scholarship;

    if (Grade == 'A' || Grade == 'B') {
        if (cast == 'o') {
            scholarship = 0;
        } else if (cast == 'b') {
            scholarship = fees * 0.25; // You should have a 'fees' variable defined somewhere
        } else if (cast == 'c') {
            scholarship = fees * 0.75; // You should have a 'fees' variable defined somewhere
        } else if (cast == 't') {
            scholarship = fees * 1; // You should have a 'fees' variable defined somewhere
        }
    }

    console.log("Scholarship:", scholarship);
}

