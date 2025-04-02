document.addEventListener("DOMContentLoaded", ()=>{
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");
    const lengthInput = document.getElementById("password-length")

    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyToClipboard);

    function generatePassword(){
        let length = parseInt(lengthInput.value);
        
        if(length<6) length=6;
        if(length>20) length=20;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#.&/()=1234567890";
        let password="";

        for(let i=0; i<length; i++){
            const randomindex = Math.floor(Math.random()*chars.length);
            password += chars[randomindex];
        }

        passwordField.value=password;
        animateButton(generateBtn);
    }

    function copyToClipboard(){
        if(passwordField.value){
            passwordField.select();
            document.execCommand("copy");

            copyBtn.innerHTML = "<i class='fas fa-check'></i>"
            
            setTimeout(() =>{
                copyBtn.innerHTML = "<i class='fas fa-check'></i>"
            },1500)
        }
    }

    function animateButton(button){
        button.style.transform = "scale(0.9)";
        setTimeout(() =>{
            button.style.transform = "scale(1)";
        },150)
    }

});

