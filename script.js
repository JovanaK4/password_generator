const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
    "]",",","|",":",";","<",">",".","?","/"];

let btnGenerate = document.querySelector("#generate");
let brojKarakteraInput = document.querySelector("input");
let password1 = document.getElementById("password-one");
let password2 = document.getElementById("password-two");
let copyLeft = document.querySelector(".copyBtn button:first-child")

btnGenerate.addEventListener('click', function(){
    let brojKaraktera = brojKarakteraInput.value
    let randomPassword1 = "";
    let randomPassword2 = "";
    for(i = 1; i < brojKaraktera ; i++){
        randomPassword1 += characters[Math.floor(Math.random()*characters.length)]
        randomPassword2 += characters[Math.floor(Math.random()*characters.length)]
    }
    password1.textContent = randomPassword1;
    password2.textContent = randomPassword2;
    
})
