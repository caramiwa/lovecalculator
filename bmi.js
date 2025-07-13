function bmiCalculator(weight,height) {
    var BMI = weight/(height**2);
BMI = Math.round(BMI)
     var overweight= "Your BMI is " +BMI+", so you are overweight.";
     var normal= "Your BMI is " +BMI+", so you have a normal weight.";
    var underweight = "Your BMI is " +BMI+", so you are underweight.";
    
   if (BMI >24.9) {
       return overweight;
   }
    if (BMI >18.5 && BMI <= 24.9){
        return normal;
    } 
        
    if (BMI <18.5){
        return underweight;
    }
}

bmiCalculator(54,1.4);
