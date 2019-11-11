function animal_Function() {
    var animal_Output;
    var animals = document.getElementById("animal_Input").value;
    var animal_Str = " is a great animal. Good choice!";
    switch(animals) {
        case "Lion":
            animal_Output = "Lion" + animal_Str;
        break;
        case "Elephant":
            animal_Output = "Elephant" + animal_Str;
        break;
        case "Monkey":
            animal_Output = "Monkey" + animal_Str;
        break;
        case "Shark":
            animal_Output = "Shark" + animal_Str;
        break;
        case "Giraffe":
            animal_Output = "Giraffe" + animal_Str;
        break;
        case "Deer":
            animal_Output = "Deer" + animal_Str;
        break;
        case "Squirrel":
            animal_Output = "Squirrel" + animal_Str;
        break;
        default:
        animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = animal_Output;
}

function text_Change_Function() {
    var str = document.getElementsByClassName("click");
    str[0].innerHTML = "The text has changed!";
}

// canvas code
var c = document.getElementById("simple");
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.fillText("My canvas!",160,90);

// gradient canvas code
var c = document.getElementById("gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 170, 0, 0);
grd.addColorStop(1, "black");
grd.addColorStop(0.5, "blue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(180, 20, 150, 100);