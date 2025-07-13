var guestList = ["Mira", "Ri", "Ro","Miwa", "Elias", "Aurel"];
var guestName = prompt("What is your name");
if (guestList.includes(guestName)) {
    alert("Welcome, " + guestName+ ".");
 }
 else {
alert("Sorry. "+guestName+ " is not on the Guest List.");
 };
