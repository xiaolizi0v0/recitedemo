
window.onload = function () {
    // var loginForm = document.getElementById('login-form');
    // loginForm.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     // Get the username and password from the form
    //     var username = document.getElementById('username').value;
    //     var password = document.getElementById('password').value;

    //     // Send a request to the server to verify the login credentials
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('POST', '/login');
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.onload = function () {
    //         if (xhr.status === 200) {
    //             // Login successful, redirect to the dashboard
    //             window.location.href = '/dashboard';
    //         } else {
    //             // Login failed, show an error message
    //             alert('Invalid username or password');
    //         }
    //     };
    //     xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
    // });
    
      
}
var error_msg =1;
$(document).ready(function() {
        $('#login-form').submit(function(event) {
          event.preventDefault(); // prevent the form from submitting
          var username = $('#username').val();
          var password = $('#password').val();
          
          $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/ReciteDemo/login',
            data: {
              username: username,
              password: password
            },
            success: function(response) {
              var result = JSON.parse(response);
              if (result.flag == "success") {
                console.log( response);
                setCookie("userName",username,30);
                localStorage.setItem("userName", username);
                
                setTimeout(function(){
                  location.reload();
                  console.log("sds");
                },1000);
              } else {
                console.log( "response ："+error_msg);
                if(error_msg==1){
                  $('#username').next().remove();
                  $('#username').after('<div class="error-message" id="error-message style="margin: 0;"">Invalid username or password</div>');
                  error_msg=document.getElementById("error-message");
                }
                
              }
            }
          });
        });
});
