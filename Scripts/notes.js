console.log("Hello World!");
let myName = "Marek";
console.log(myName);
const myClass = "JavaScript for Beginners";
console.log(myClass);
console.log("Hello " + myName);
console.log("Hello " + myName + ", welcome to " + myClass);
const header1 = document.querySelector("h1");
console.log(header1);
const links = document.querySelectorAll(".nav-link");
console.log(links);
header1.innerHTML = "Nyima Stole Marek's Poutine";
var classNames = ["Nyima", "Marek", "Moc", "Gauri"];
console.log(classNames.length);
console.log(classNames[0]);
classNames[2] = "Rebecca";
console.log(classNames);
header1.classList.add("blue");

function myFirstFunction() {
    console.log("Hey");
    console.log("This function is working");
    let x = 4;
    let y = 5;
    let sum = x + y;
    console.log(sum)
}

function timeOfDay() {
    // this function will greet a user depending on the time of day
    let date = new Date();
    let time = date.getHours;
    let greeting = "";
    if (time < 12){
        greeting = "Good Morning";
    } else if (time < 18){
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Night";
    }
    console.log(date);
    console.log(greeting);
}

function timesTable(multiplier){
    for (let x = 0; x <= 100; x++){
        console.log(x + " x " + multiplier + " = " + (x*multiplier));
    }
}

header1.addEventListener('click', timeOfDay);