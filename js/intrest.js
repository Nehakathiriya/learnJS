
function handlesubmit(){
    // console.log("ok");

    event.preventDefault();

    let principalvalue = parseFloat(document.getElementById("principal").value);
    // console.log("hdhdhd");
    let ratevalue = parseFloat(document.getElementById("rate").value);
    // console.log("9099090");
    let time = parseFloat(document.getElementById("time").value);
    // console.log("111111");

    let duration = document.getElementById("duration").value;
    
    console.log(duration);



    let interest; 
    // =  (principal * rate * time) / 100;
 

    if (duration === 'y') {
        interest = (principalvalue * ratevalue * time) / 100;
    } else if (duration === 'm') {
        interest = (principalvalue * ratevalue * (time / 12)) / 100;
    } 
    document.getElementById("result").innerHTML = interest;

    

  

    // if(duration === 'y'){
    //     // console.log("54");
    // }else if(duration === 'm'){
    //     // console.log('45');
    // }
}




// function handlesubmit() {
//     // event.preventDefault();

//     let principalvalue = parseFloat(document.getElementById("principal").value);
//     let ratevalue = parseFloat(document.getElementById("rate").value);
//     let time = parseFloat(document.getElementById("time").value);
//     let duration = document.getElementById("duration").value; // Assuming you have an input element with the id "duration"

//     let interest;

//     if (duration === 'y') {
//         interest = (principalvalue * ratevalue * time) / 100;
//     } else if (duration === 'm') {
//         interest = (principalvalue * ratevalue * (time / 12)) / 100;
//     }

//     document.getElementById("result").innerHTML = "Interest: " + interest.toFixed(2); // Display the interest with two decimal places
// }
