
let generateBtn = document.getElementById("generate-btn");

let copyBtn = document.getElementById("copy-btn");

let outputCode = document.getElementById("output-code");

let body = document.getElementById("body");

let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);

    body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    
    outputCode.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
}

copyBtn.addEventListener("click", () => {
    outputCode.select();
    document.execCommand("copy");
    alert("Code Copied To Clipboard");
});

generateBtn.addEventListener("click", generateGrad);
window.onload = generateGrad;