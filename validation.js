function Validate() {
  var password = document.getElementById('pwd').value;
  var confirmPassword = document.getElementById('retypepwd').value;
  if(password != confirmPassword){
    alert("Password do not match")
    return false;
  }
  else {
    alert("You have successfully logged in...")
    return true;
  }
}
