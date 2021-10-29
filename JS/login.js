const username = Array()
const password = Array()
const username_storage = JSON.parse(window.localStorage.getItem('user'));
const password_storage = JSON.parse(window.localStorage.getItem('pass'));
let x = 0;
let x_storage = JSON.parse(window.localStorage.getItem('index'));
let enteruser = document.getElementById('bname')
let enterpassword = document.getElementById('password')
let check = 0;
let check_storage = JSON.parse(window.sessionStorage.getItem('check'));
// function for logging in 
function login() {
  
// window.localStorage.clear()
// window.sessionStorage.clear()


// check var is to check what number of index the user and password entered is 
  check = 0
// for loop to check items in array that it got from local storage 
  for(i = 0; i < username_storage.length; i++) {
    //  if username entered is in the array it stops the loop and enter "if"
    if (username_storage[i] == enteruser.value) {
      // print what user name that worked 
        console.log("username worked :" + username_storage[check])
        // runs new loop to check items in password
      for (i = 0; i < password_storage.length; i++) {
        // if password entered is the same as the password on the index that have the got same index as the entered username you log in
          if (password_storage[check] == enterpassword.value) {
            // print what password and username you logged in with
              console.log(password_storage[check])
              console.log("Logged in with username :" + enteruser.value + " password :"  + enterpassword.value)

              // open window brugerprofil
              window.open("../BrugerProfil.html", "_self");
              // push the entered username and password to sessionStorage
              document.getElementById('bname').value = enteruser.value
              window.sessionStorage.setItem('check', JSON.stringify(check))
              check = 0
              console.log(check)
          }
      }
    }
  check++
} 
}
// create user 
function create_user() {
  // x_storage var is for index is should save the username and password on
      x_storage++
      x_storage = x_storage + x
      // saving user and password in array 
       username[x_storage] = document.getElementById('bname').value
       password[x_storage] = document.getElementById('password').value
      //  print what index password and user is saved on
       console.log("Username saved :" + username[x_storage] + " at index :" + x_storage)
       console.log("Password saved :" + password[x_storage] + " at index :" + x_storage)
       // remover the index counter
       window.localStorage.removeItem('index')
       // saving the index counter again 
       window.localStorage.setItem('index', JSON.stringify(x_storage))
       // saving user and password in local storage
       window.localStorage.setItem('user', JSON.stringify(username));
       window.localStorage.setItem('pass', JSON.stringify(password));
       // alert window user createt and reload page
       location.reload()
       alert("Bruger Oprettet");
}
function BrugerProfil ()
{
  // set the brugernavn and passwordbox value as the entered value 
  document.getElementById('uname').value = username_storage[check_storage]
  document.getElementById('upassword').value = password_storage[check_storage]
}

BrugerProfil()