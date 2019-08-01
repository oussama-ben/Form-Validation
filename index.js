



function validate() {
    var mail = document.getElementById('Email').value
    var passw = document.getElementById('Password').value
    var emailchek = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var Passwordchek = /^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{6,})/
    if (document.getElementById('FirstName').value===''){
        alert('Veuillez remplir le nom')
    }
    else if (document.getElementById('Email').value===''){
        alert('Veuillez remplir lemail')

    }
    else if (emailchek.test(mail)==false) {    
    alert("You have entered an invalid email address!")
    
   }

    else if (document.getElementById('Password').value===''){
        alert('Veuillez remplir le Password')

    }
    else if ( Passwordchek.test(passw)==false){
        alert('Incorrect')   
    }
    else if (document.getElementById('Comments').value===''){
        alert('Veuillez remplir les Commentaires')

    }}

   function myFunction() {
    document.getElementById("form").reset()
   }