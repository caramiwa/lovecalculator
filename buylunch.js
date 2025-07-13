// function buyLunch(){
//  var listOfBuyers = ["Mira", "Ri", "Ro","Miwa", "Elias", "Aurel"];
//  var numberOfBuyers = listOfBuyers.length;
//  var luckyPick = Math.floor(Math.random() * numberOfBuyers);
//  console.log(listOfBuyers[luckyPick]+" is buying lunch today.");
// }
// buyLunch();

var listOfBuyers = ["Mira", "Ri", "Ro","Miwa", "Elias", "Aurel"];
function buyLunch(listOfBuyers){
 const numberOfBuyers = listOfBuyers.length;
 const luckyNumber = Math.floor(Math.random() * numberOfBuyers);
 const luckyPick = listOfBuyers[luckyNumber];
 return luckyPick+" is buying lunch today.";
}
buyLunch(listOfBuyers);


// function whosPaying(names) {
//   const numberOfPeople = names.length;
//   const randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//   const randomPerson = names[randomPersonPosition];
//   return randomPerson + " is going to buy lunch today!";
// }
