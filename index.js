let areaText = document.getElementById('textareaMessage');
let areaEncryption = document.getElementById('textareaCipher');
let input = document.getElementById('inputKey');
let keyNode = document.getElementById('key');
let lastActive = null;


keyNode.textContent = input.valueAsNumber;
input.oninput = ()=>{
    keyNode.textContent = input.valueAsNumber;
    if (lastActive=='decrypt') {
        decryptArea();
    }
    else{
        encryptArea();
    }
    
}
input.addEventListener('mouseenter', ()=>{
    keyNode.style.fontSize = '80px';
})
input.addEventListener('mouseleave', ()=>{
    keyNode.style.fontSize = '40px';
})


areaText.addEventListener('input', ()=>{
    lastActive = 'encrypt';
    encryptArea();
})
areaEncryption.addEventListener('input', ()=>{
    lastActive = 'decrypt';
    decryptArea();
})
function encryptArea(){
    let message =  encrypt(areaText.value, input.valueAsNumber);
    areaEncryption.value = message;
}
function decryptArea(){
    let message =  decrypt(areaEncryption.value, input.valueAsNumber);
    areaText.value = message;
}
let alphabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet = Array.from(alphabetStr);
function encrypt(message, key){
    let outputValue = Array.from(message.toUpperCase());
    for (let i = 0; i < outputValue.length; i++) {
       let index = alphabet.indexOf(outputValue[i]);
       if (index+key>=alphabet.length) {
           index = index - alphabet.length;
       }
       outputValue[i] = alphabet[index+key];
        
    }
    outputValue =  outputValue.join('');
    return outputValue;
}
function decrypt(message, key){
    let outputValue = Array.from(message.toUpperCase());
    for (let i = 0; i < outputValue.length; i++) {
       let index = alphabet.indexOf(outputValue[i]);
       if (index-key<0) {
           index = index + alphabet.length;
       }
       outputValue[i] = alphabet[index-key];
        
    }
    outputValue =  outputValue.join('');
    return outputValue;
}