window.onload = function() {

  /* mid square hashing */
  function hashing(password){
    if (password === null){
      return null
    }
    else{
    var code = []
    for(let i = 0; i < password.length; i++){
    code.push(password.charCodeAt(i))
    }
    code = code.join("");
    code = parseInt(code)
    number = ((code+4)**2).toString();
    midElements = []
    midElements.push(number[Math.floor((number.length)/2)-1]);
    midElements.push(number[Math.floor((number.length)/2)])
    hashed = midElements[0]*10 + midElements[1]
    return (hashed % 11)
    }
  }

  function usernameRep(){
    var userData = JSON.parse(localStorage.getItem('store')) || {};
    var username = document.getElementById("username").value;
    if (username in userData) {
      return true
    } 
    else{
      return false
    }
  }

  function validateUser() {
    var username = document.getElementById("username").value;
    if (username.length < 8 || username.length > 20) {
      return false;
    } 
    else {
      return true;
    }
  }
  
  function validatePasslen() {
    var pass = document.getElementById("password").value;
    if (pass.length < 8 || pass.length >20) {
      return false; 
    }
    else {
      return true;
    }
  }

  function validatePasscaps() {
    var pass = document.getElementById("password").value;
    const regex = /(?=.*[a-z])(?=.*[A-Z])/;
    if (!regex.test(pass)){
      return false
    }
    else {
      return true;
    }
  }
  function validatePassnum(){
    var pass = document.getElementById("password").value
    const regex = /\d+/;
    if (!regex.test(pass)){
      return false
    }
    else {
      return true;
    }
  }
  function validatekey(){
      var pass = document.getElementById("password").value;
      var key = document.getElementById("keyWord").value;
      if (pass == key){
          return false
      }
      else{ 
          return true;
      }
  }
  
  var messageDisp = document.getElementById("errorMessage");
  function myFunction(event) {
    event.preventDefault(); // prevent the form from submitting
    if (usernameRep() === true){
      messageDisp.textContent = "Username already in use";
    }
    else if (validateUser() === false) {
      messageDisp.textContent = "Username must conatain between 8 and 20 charecters";
    } 
    else if (validatePasslen() === false) {
      messageDisp.textContent = "Password must conatain between 8 and 20 charecters";
    } 
    else if (validatePasscaps() === false){
      messageDisp.textContent = "Password must contain at 1 capital and lower case letter";
    }
    else if (validatePassnum() === false){
      messageDisp.textContent = "Password must contain a number";
    }
    else if(validatekey() === false){
      messageDisp.textContent = "Key word cannot be password";
    }
    else {
      var keyWordtemp = document.getElementById("keyWord").value;
      var username = document.getElementById("username").value
      var password = (document.getElementById("password").value)
      if(keyWordtemp.length === 0){
        var keyWord = null
      }
      else{
        keyWord = keyWordtemp
      }
      var store = JSON.parse(localStorage.getItem('store')) || {};
      store[username] = {
        password: hashing(password),
        keyword: hashing(keyWord)
      };
  
      localStorage.setItem('store', JSON.stringify(store));

      window.location.href = 'login.html';
      messageDisp.textContent = "";

      window.location.href = 'login.html';
      messageDisp.textContent = "";
    }
  }
  function swaper() {
    window.location.href = 'login.html';
  }
  /*click function*/
  document.getElementById("login").addEventListener("click", swaper);

  var form = document.querySelector('form');
  form.addEventListener('submit', myFunction);

};
