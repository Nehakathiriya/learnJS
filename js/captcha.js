let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);


document.getElementById("num1").innerHTML =n1;
document.getElementById("num2").innerHTML = n2;


let correctAns = n1 + n2;

console.log(n1,n2,correctAns);


function handlesubmit(){
    // console.log("ok");
   
    let ans = parseInt(document.getElementById("ans").value);
    // console.log("ans");
     if(correctAns == ans){
        alert("correct")
    }else{
        alert("Not correct. correct Ans is:" +correctAns);   //string merge
    }

}