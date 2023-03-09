window.onload = function() {

 /* mid square hashing */
 function hashing(password){
    var code = []
    for(let i = 0; i < password.length; i++){
    code.push(password.charCodeAt(i))
    }
    code = code.join("");
    code = parseInt(code)
    number = ((code+4)**2).toString(); /*4 is added to make sure we can square to get a 2 digit*/
    midElements = []
    midElements.push(number[Math.floor((number.length)/2)-1]);
    midElements.push(number[Math.floor((number.length)/2)])
    hashed = midElements[0]*10 + midElements[1]
    return (hashed % 11)
  }

    var store = JSON.parse(localStorage.getItem('store')); /* here we get {user: {pass, keyword}, ...} */
    function validateUser(username) {;
        if (username in store){;
            return true;
        }
        else{;
            return false;
         }
    }
    
    function isnull(username){
        if(store[username]['keyword'] === null){;
            return true;
        }
        else{
            return false
        }
    }

    function match(username, memo){;
        memo = hashing(memo)
        console.log(username)
        if (store && (store[username]['keyword'] == memo)) { /* if store is checked to avoid any errors*/
            return true
        }
        else{
            return false
        }   
    }


    var messageDisp = document.getElementById("errorMessage");
    function myFunction(event) {;
      event.preventDefault(); // prevent the form from submitting
      if (validateUser((document.getElementById("username").value)) === false) {
        messageDisp.textContent = "Username does not exist";
      }
      else if(isnull((document.getElementById("username").value)) === true){;
        messageDisp.textContent = "";
        window.location.href = 'login.html';
        alert('username does not have keyword, you will be redirceted to the log in page')
      }
      else if(match(document.getElementById("username").value,
        document.getElementById("keyWord").value) === false){
        messageDisp.textContent = "username and key word do not match";
      }
      else {
        messageDisp.textContent = "";
        // Retrieve data from localStorage
        var store = JSON.parse(localStorage.getItem('store'));
        // Update password for a specific user
        var username = document.getElementById("username").value;
        var newPassword = hashing(document.getElementById("npassword").value);
        store[username].password = newPassword;

        // Store updated data back into localStorage
        localStorage.setItem('store', JSON.stringify(store)); 
        window.location.href = 'login.html'

      }
    }
  
    var form = document.querySelector('form');
    form.addEventListener('submit', myFunction);







 /*links pages to login*/
 function swaper() {
  window.location.href = 'login.html';
}
/*click function*/
document.getElementById("login").addEventListener("click", swaper);

};