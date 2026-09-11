let myFace = document.querySelector("#myFace");

let emotion = 'else';

let myInput = document.querySelector("#myInput");

let myButton = document.querySelector("#myButton");

let schrijver = document.querySelector("h1");

myButton.addEventListener('click', myFunc)

function veranderKleur(){const element= document.getElementById("mijntekst"); element.style.color = "DarkCyan";}

schrijver.addEventListener("mouseover", () => {schrijver.textContent = "Written by Rick Riordan" })
schrijver.addEventListener("mouseout", () => {schrijver.textContent = "Percy Jackson and the Olympians" })

function myFunc(){console.log (myInput.value); if(myInput.value == 'sad'){myFace.style.backgroundImage= "URL('images/Percy sad.jpeg')"
    } else if (myInput.value == 'happy'){myFace.style.backgroundImage= "URL('images/Percy happy.jpeg')"
    } else {myFace.style.backgroundImage= "URL('images/Percy else.jpeg')"
    }}