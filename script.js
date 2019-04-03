function convert() {
    let str = document.getElementById('string').value;
    let array = [];
    for (let i=0; i<str.length; i++){
        if (str[i]===str[i].toUpperCase()) array.push(str[i].toLowerCase());
        else if (str[i]===str[i].toLowerCase()) array.push(str[i].toUpperCase());
    }
    document.getElementById('result').innerHTML = array.join("");
}
function listen() {
    document.addEventListener('keydown', checkKey);
}
function checkKey(e) {
    let keyCode = (event.key);
    if (keyCode == '<' || keyCode == '>' || keyCode == '*' ||keyCode =='/'|| keyCode == '?'||keyCode =='=' || keyCode=='_' || keyCode =='|'|| keyCode == '+' || keyCode == '-' || keyCode == '.' || keyCode == '/' || keyCode == '1' || keyCode == '2' || keyCode == '3' || keyCode == 4 || keyCode == '5' || keyCode == '6' || keyCode == '7' || keyCode == '8' || keyCode == '9' || keyCode=='0') {
        e.preventDefault()
    }
}