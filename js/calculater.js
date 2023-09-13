function insert(val){
    // console.log("ok");

    document.form1.textview.value =document.form1.textview.value + val
    // console.log(val);
}

function equal(){
    // console.log("ok");
   
     
    let  exp = document.form1.textview.value;

    let ans =  eval(exp);

    document.form1.textview.value = ans;
   
}
function cleardata(){

    document.form1.textview.value = '';
}
function backspace(){

    let exp = document.form1.textview.value;


    document.form1.textview.value =exp.substring( 0 , exp.length-1);
}