function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "3DPrinter") {
    return true;
   }
  document.getElementById("errorMessage").style.visibility = "visible";
   return false;
   }