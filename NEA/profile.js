window.onload= function(){

    function homegoing() {
        window.location.href = 'intro.html';
       
        }
    document.getElementById('home').addEventListener("click", homegoing);

    function logout() {
        window.location.href = 'login.html';
    }
       
    document.getElementById('signin').addEventListener("click", logout);



    
}