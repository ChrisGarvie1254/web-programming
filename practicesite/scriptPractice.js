let sum = 0;
let arr = [1, 2, 3, 4, 5];
for (let i=0; i<arr.length; i++) { // classic loop
    sum += arr[i];
}
alert( sum );

//prints an array with a variety of colours
let colours = new Array("Blue","Black","Pink","White","Red","Turquoise");
alert(colours);

//creates a constructor for objects of type robot
function robotMaker(model, make, manufactureYear){
    this.model = model;
    this.make = make;
    this.manufactureYear = manufactureYear;

}
//uses the constructor to create two robot objects and then displays them on the webpage using alert boxes
let robotA = new robotMaker("Mark VII", "ASW", 1996);
let robotL = new robotMaker("Mark V", "ASW", 1994);
alert([robotA.model, robotA.make, robotA.manufactureYear]);
alert([robotL.model, robotL.make, robotL.manufactureYear]);


src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"


$(document).ready(function() {
    $("#al").click(function() {
        $("#ae").show();
        $("#la").show();
        $("#me").hide();
    });
    $("#lm").click(function() {
        $("#la").show();
        $("#me").show();
        $("#ae").hide();
    });
    $("#ma").click(function() {
        $("#ae").show();
        $("#me").show();
        $("#la").hide();
    });
})

