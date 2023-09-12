function handlebacgroung(){
    // console.log("ok");

    let countryname = document.getElementById("country").value;
    // console.log("jdjjdj");

    if(countryname === 'in'){
        document.getElementById("body").style.backgroundColor = "green";
        // console.log("INDIAaaaa");
    }else if(countryname === 'uk'){
        document.getElementById("body").style.backgroundColor = "red";
        // console.log("UKaaa");
    }else if(countryname ==='us'){
        document.getElementById("body").style.backgroundColor = "blue";
        // console.log("USAaaaaaa");
    }else{
        document.getElementById("body").style.backgroundColor = "white";
        // console.log("0");
    }
}