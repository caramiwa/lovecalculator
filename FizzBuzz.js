var output =[];
//var count = 1;
function FizzBuzz(){
    for ( var i = 1; i<=100; i++){
        if ((i%5) === 0 && (i%3) === 0) {
             output.push("FizzBuzz");
         }
         else if ((i%3) === 0) {
             output.push("Fizz");
         }
        else if ((i%5) === 0) {
            output.push("Buzz");
        }
     else {
        output.push(i);
     }
        
    console.log(output);
}
}
FizzBuzz();
