window.onload = function() {
  function hashing(password) {
    var code = []
    for (let i = 0; i < password.length; i++) {
      code.push(password.charCodeAt(i))
    }
    code = code.join("")
    code = parseInt(code)
    number = ((code + 4) ** 2).toString()
    midElements = []
    midElements.push(number[Math.floor((number.length) / 2) - 1])
    midElements.push(number[Math.floor((number.length) / 2)])
    hashed = midElements[0] * 10 + midElements[1]
    return (hashed % 11)
  }

  var store = JSON.parse(localStorage.getItem('store'))
  function validateUser(username) {
    if (username in store) {
      return true
    }
    else {
      return false
    }
  }
  function match(username, pass) {
    pass = hashing(pass)
    console.log(username)
    if (store && (store[username]['password'] == pass)) {
      return true
    }
    else {
      return false
    }
  }

  var messageDisp = document.getElementById("errorMessage")
  function myFunction(event) {
    event.preventDefault() // prevent the form from submitting
    if (validateUser((document.getElementById("username").value)) === false) {
      messageDisp.textContent = "Username does not exist"
    }
    else if (match((document.getElementById("username").value),
      (document.getElementById("password").value)) === false) {
      messageDisp.textContent = "Password and username do not match"
    }
    else {
      messageDisp.textContent = ""
      window.location.href = 'intro.html'
    }
  }

  var form = document.querySelector('form')
  form.addEventListener('submit', myFunction)

  function swaper() {
    window.location.href = 'register.html'
  }
  document.getElementById("reg").addEventListener("click", swaper)

  function forgot() {
    window.location.href = 'recover.html'
  }
  document.getElementById("for").addEventListener("click", forgot)
}
