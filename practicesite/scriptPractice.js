let sum = 0;
let arr = [1, 2, 3, 4, 5];
for (let i=0; i<arr.length; i++) { // classic loop
    sum += arr[i];
}
alert( sum );

let colours = new Array("Blue","Black","Pink","White","Red","Turquoise");
alert(colours);

function robotMaker(model, make, manufactureYear){
    this.model = model;
    this.make = make;
    this.manufactureYear = manufactureYear;

}
let robotA = new robotMaker("Mark VII", "ASW", 1996);
let robotL = new robotMaker("Mark V", "ASW", 1994);
alert([robotA.model, robotA.make, robotA.manufactureYear]);
alert([robotL.model, robotL.make, robotL.manufactureYear]);
