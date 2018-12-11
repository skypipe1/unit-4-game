// var randomResult;
var win = 0;
// var lose;
var counter = 0;

// for(var i = 0; i <4; i++){

//     var gems = $("<div>");
//     gems
//     $("")
// }

// Random number generator for "Number to guess" ****WORKING****
$(document).ready(function(){
    var targetNumber = Math.floor((Math.random() * 100) + 40);
    $("#number-to-guess").text(targetNumber);
    console.log(targetNumber);
})



// Random # generator for crystals
var no1 = Math.floor((Math.random() * 13) + 1);
var no2 = Math.floor((Math.random() * 13) + 1);
var no3 = Math.floor((Math.random() * 13) + 1);
var no4 = Math.floor((Math.random() * 13) + 1);

// Click picture to generate number that adds it to the score.

$("#blueCrystal").on("click",function(){
  counter = counter + no1;
 $("#score").text(counter);
 console.log(no1);
 console.log(counter);
})

$('#greenCrystal').on("click",function(){
    counter = counter + no2;
    $("#score").text(counter);
 console.log(no2);
 console.log(counter);
})

$('#whiteCrystal').on("click",function(){
    counter = counter + no3;
    $("#score").text(counter);
 console.log(no3);
 console.log(counter);
})

$('#redCrystal').on("click",function(){
    counter = counter + no4;
    $("#score").text(counter);
 console.log(no4);
 console.log(counter);

})


// how do i add a number every time i win.
if (counter === targetNumber){

}