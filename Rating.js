console.log("Reached");
let alert = document.getElementById("alert");
function submitForm() {
    console.log(alert);
    if (validate()) {
        alert.innerHTML = `    <div class="alert alert-success" role="alert">
        Congratulations!!  Your form is successfully submitted!!
        </div>`
    }
    else {
        alert.innerHTML = `    <div class="alert alert-danger" role="alert">
        Oops!! Something went wrong.
        </div>`
    }
    setTimeout(() => {
        alert.innerHTML = '';
    }, 3000);
}

let
function validate() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let number = document.getElementById('mobile');
    let comment = document.getElementById('comments');
    let emailId = email.value.toString()
   
  
    if (nameval(name.value) &&  mailval(email.value) && phonenumber(number.value) && comment.value.length>2)
        return true;
    else
        return false;
}

let 
function phonenumber(number)
{
  var phoneno = /^\d{10}$/;
  console.log('reachedhgnvbn vb')
  if(number.match(phoneno))
  {
console.log("successful")
      return true;
  }
      else
      {
        alert.innerHTML = `    <div class="alert alert-danger" role="alert">
        Sorry. Enter valid mobile number.
        </div>`
        setTimeout(() => {
            alert.innerHTML = '';
        }, 3000);
          return false;
      }
}

let 
function nameval(name) {
    // var valname = /^[a-zA-Z]$/;
    console.log(name)
    console.log('reached name')
    if(name.length>3)
    {
        console.log("successful")
        return true;
    }
        else
        {
          alert.innerHTML = `    <div class="alert alert-danger" role="alert">
          Sorry. Enter valid name.
          </div>`
          setTimeout(() => {
              alert.innerHTML = '';
          }, 3000);
            return false;
        }
}

let 
function mailval(mail) {
    console.log('reached mail')
    if( mail.includes('@gmail.com'))
    {
  console.log("successful")
        return true;
    }
        else
        {
          alert.innerHTML = `    <div class="alert alert-danger" role="alert">
          Sorry. Enter valid email id
          </div>`
          setTimeout(() => {
              alert.innerHTML = '';
          }, 3000);
            return false;
        }
}