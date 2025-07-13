function buyLunch(){
 var listOfBuyers = ["Mira", "Ri", "Ro","Miwa", "Elias", "Aurel"];
 var numberOfBuyers = listOfBuyers.length;
 var luckyPick = Math.floor(Math.random() * numberOfBuyers);
 console.log(listOfBuyers[luckyPick]+" is buying lunch today.");
}
buyLunch();
