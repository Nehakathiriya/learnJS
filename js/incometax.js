function handleSubmit() {

    event.preventDefault();

    

    //console.log("ok");

    let income = parseInt(document.getElementById("income").value);

    // console.log(income);

    let s1=0,s2=0,s3=0,s4=0,s5=0,s6=0;

    if (income <= 300000) {

    }else if(income <= 600000){
        s1 = 0;
        s2 = (income - 300000) * 0.05;

    }else if(income <= 900000){
        s1 = 0;
        s2 = (300000) * 0.05;
        s3 =(income - 600000) * 0.10;
    }else if(income <= 1200000){

        s1 = 0;
        s2 = (300000) * 0.05;
        s3 =(300000) * 0.10;
        s4 = (income - 900000) * 0.15;


    }else if(income <= 1500000){
        s1 = 0;
        s2 = (300000) * 0.05;
        s3 =(300000) * 0.10;
        s4 = (300000) * 0.15;
        s5 = (income - 1200000) * 0.20;

    }else if(income > 1500000) {
        s1 = 0;
        s2 = (300000) * 0.05;
        s3 =(300000) * 0.10;
        s4 = (300000) * 0.15;
        s5 = (300000) * 0.20;
        s6 = (income - 1500000) * 0.30;
    }
    console.log(s1,s2,s3,s4,s5,s6);

    total = s1 + s2 + s3 + s4 + s5 +s6;


    document.getElementById("slab1").innerHTML = s1;
    document.getElementById("slab2").innerHTML = s2;
    document.getElementById("slab3").innerHTML = s3;
    document.getElementById("slab4").innerHTML = s4;
    document.getElementById("slab5").innerHTML = s5;
    document.getElementById("slab6").innerHTML = s6;

    document.getElementById("total").innerHTML = total;







    // let tax = 0;

    // if (income <= 300000) {
    //     tax = 0;
    // } else if ( income > 300000 && income <= 600000 ) {
    //     tax = (income - 300000) * 0.05;
    // } else if (income > 600000  && income <= 900000) {
    //     tax = (300000 * 0.05) + (income - 600000) * 0.10;
    // } else if (income > 900000  && income <= 1200000) {
    //     tax = (300000 * 0.05) + (300000 * 0.10) + (income - 900000) * 0.15;
    // } else if ( income > 1200000  && income <= 1500000) {
    //     tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (income - 1200000) * 0.20;
    // } else if (income <= 1500000){
    //     tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30;
    // }//else{

    // // }

     

    // console.log("payable tax is:",tax);



}
