const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

let passOne = document.getElementById("pw-one")
let passTwo = document.getElementById("pw-two")
let generateButton = document.getElementById("generate-btn")

generateButton.addEventListener("click", function () {
    pass1 = ""
    pass2 = ""
    
    for (let i = 0; i < passwordLength; i++) {
        let randomNumberOne = Math.floor(Math.random() * characters.length)
        let randomNumberTwo = Math.floor(Math.random() * characters.length)
        pass1 += characters[randomNumberOne]
        pass2 += characters[randomNumberTwo]   
    }
    passOne.textContent = pass1
    passTwo.textContent = pass2
})

