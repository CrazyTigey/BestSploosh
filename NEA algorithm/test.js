function hashing(password){
    console.log(password)
    var code = []
    for(let i = 0; i < password.length; i++){
    code.push(password.charCodeAt(i))
    console.log(code)
    }
    code = code.join("");
    console.log(code)
    code = parseInt(code)
    number = (code**2).toString();
    console.log(number.length)
    midElements = []
    console.log([Math.floor((number.length)/2)])
    midElements.push(number[Math.floor((number.length)/2)-1]);
    midElements.push(number[Math.floor((number.length)/2)])
    console.log(midElements)
    hashed = midElements[0]*10 + midElements[1]
    console.log(hashed%11)
    return (hashed % 11)

}
hashing('Ali')