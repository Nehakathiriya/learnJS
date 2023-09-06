

    function handlesubmit() {
        
        let weightInput = document.getElementById("weight");
        let heightInput = document.getElementById("height");
        let bmiValue = document.getElementById("bmi-value");
        let  bmiCategory = document.getElementById("bmi-category");
        


        let height = parseInt(document.querySelector("height").innerHTML);
        let weight = parseInt(document.querySelector("weight").innerHTML);

        let heightInMeters = height / 100; 

        let bmi = kg/m2;

       

      
        if (bmi < 18.5) {
            console.log("BMI Category: Underweight");
        } else if (bmi < 24.9) {
            console.log("BMI Category: Normal Weight");
        } else if (bmi < 29.9) {
            console.log("BMI Category: Overweight");
        } else {
            console.log("BMI Category: Obese");
        }
}


