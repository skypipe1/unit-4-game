
var win = 0;
var lose = 0;
var counter = 0;
var targetNumber = Math.floor((Math.random() * 100) + 40);

// generates random # and send over to html
$("#number-to-guess").text(targetNumber);


// Random # generator for crystals
var no1 = Math.floor((Math.random() * 13) + 1);
var no2 = Math.floor((Math.random() * 13) + 1);
var no3 = Math.floor((Math.random() * 13) + 1);
var no4 = Math.floor((Math.random() * 13) + 1);

// Click picture to generate number that adds it to the score.

$("#blueCrystal").on("click",function(){

  counter = counter + no1;

 $("#score").text(counter);

 results()

});

$('#greenCrystal').on("click",function(){

    counter = counter + no2;

    $("#score").text(counter);

    results()

});

$('#whiteCrystal').on("click",function(){
    counter  = counter + no3;

    $("#score").text(counter);

    results()

});

$('#redCrystal').on("click",function(){

    counter = counter + no4;

    $("#score").text(counter);

    results()

});

// reset function wont work fuck
function results(){
    if( counter === targetNumber){
        no1 = Math.floor((Math.random() * 13) + 1);
        no2 = Math.floor((Math.random() * 13) + 1);
        no3 = Math.floor((Math.random() * 13) + 1);
        no4 = Math.floor((Math.random() * 13) + 1);
        targetNumber = Math.floor((Math.random() * 100) + 40);
        $("#number-to-guess").text(targetNumber);
        counter = 0;
        $("#score").text(counter);
        win++;
        $("#wins1").text(win);
        console.log(win);
        
        
    } else if (counter > targetNumber){
        no1 = Math.floor((Math.random() * 13) + 1);
        no2 = Math.floor((Math.random() * 13) + 1);
        no3 = Math.floor((Math.random() * 13) + 1);
        no4 = Math.floor((Math.random() * 13) + 1);
        targetNumber = Math.floor((Math.random() * 100) + 40);
        $("#number-to-guess").text(targetNumber);
        counter = 0;
        $("#score").text(counter);
        lose++;
        $("#lose1").text(lose);
        console.log(lose);
        
        
    };

};