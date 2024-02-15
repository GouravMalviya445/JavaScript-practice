const passGeneratorBtn = document.getElementById('generate-pass-btn');
const inputField = document.querySelector('#password');
const copyBtn = document.getElementById('copy-btn');


function randomPasswordGenerator(){
    let pass = '';
    let str = 'ABCDEGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz0123456789~!@#$%^&*-_=+`';
    for(let i = 1; i <= 10; i++){
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }
    inputField.value = pass;
    copyBtn.style.backgroundColor = 'rgb(28, 167, 86)';
}

copyBtn.addEventListener('click',() => {
    window.navigator.clipboard.writeText(inputField.value);
    copyBtn.style.backgroundColor = 'rgb(2, 100, 41)';
})

passGeneratorBtn.addEventListener('click',randomPasswordGenerator)