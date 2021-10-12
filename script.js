function verifyPassword() {
  var pw = document.getElementById("pswd").value;
  if (pw == "") {
    document.getElementById("message").innerHTML =
      "*Insert your password please!";
    return false;
  }

  if (pw.length < 8) {
    document.getElementById("message").innerHTML =
      "*Password length must be at least 8 characters";
    return false;
  }
  if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "*Password length must not exceed 15 characters";
    return false;
  }
  if (pw.search(/[A-Z]/) < 0) {
    document.getElementById("message").innerHTML =
      "Your password needs an upper case letter!";
    return false;
  }
  if (pw.search(/[a-z]/) < 0) {
    document.getElementById("message").innerHTML =
      "Your password needs an upper case letter!";
    return false;
  }
  if (pw.search(/[0-9]/) < 0) {
    document.getElementById("message").innerHTML =
      "Your password needs an upper case letter!";
    return false;
  } else {
    document.getElementById("message").innerHTML = "New Password is correct!";
    return false;
  }
}
