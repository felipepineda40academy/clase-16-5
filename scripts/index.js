var myform = document.getElementById('myform');

myform.addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('user_email').value;
    var textarea = document.getElementById('user_text_input').value;

    alert('El usuario con email: ' + email+' indica lo siguiente: ' + textarea);
    window.location.href = 'https://www.google.com/search?q='+textarea;
})

/*Que hagan un ejemplo parecido y los muestren manana en clase que tenga 4 inputs*/