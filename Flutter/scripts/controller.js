function login() {
  var formLogin = document.getElementById("login-form");
  formLogin.addEventListener("click", function(event) {
    event.preventDefault()
  });

  var inputs = formLogin.getElementsByClassName("auth-input");
  var sEmail = inputs.email.value;
  var sPassword = inputs.password.value;

  if (_checkEmail(sEmail) && _checkPassword(sPassword)) {
    _clearErrors();
    window.auth.login(sEmail, sPassword, apiCallback);
  }
}

function register() {
  var formRegister = document.getElementById("register-form");
  formRegister.addEventListener("click", function(event) {
    event.preventDefault()
  });

  var inputs = formRegister.getElementsByClassName("auth-input");
  var sEmail = inputs.email.value;
  var sPassword = inputs.password.value;
  var sUsername = inputs.username.value;

  if (_checkEmail(sEmail) && _checkPassword(sPassword)) {
    _clearErrors();
    window.auth.register(sUsername, sEmail, sPassword, apiCallback);
  }
}

function _checkEmail(sEmail) {
  if (sEmail === "") {
    return _throwError("Email is required");
  } else if (sEmail.indexOf("@") === -1) { //check for more than once
    return _throwError("Email must inlude \"@\"");
  } else if (sEmail.substring(sEmail.indexOf("@") + 1).indexOf(".") === -1) {
    return _throwError("Domain must have \".\"");
  } else if (sEmail.length < 5) {
    return _throwError("Email must be at least 5 symbols long");
  }
  return true;
}

function _checkPassword(sPassword) {
  if (sPassword.length < 6) {
    return _throwError("Password must be at least 6 symbols long");
  } else if (!(/[A-Z]/.test(sPassword))) {
    return _throwError("Password must include a least 1 capital letter");
  } else if (!(/\d/.test(sPassword))) {
    return _throwError("Password must contain at least 1 digit");
  } else if (!(/[!@#$%^&]/.test(sPassword))) {
    return _throwError("Password must include at least 1 special symbol !@#$%^&");
  }
  return true;
}

function _throwError(sMsg) {
  document.getElementById("errors").innerText = sMsg;
  console.log(sMsg); //remove
  return false;
}

function _clearErrors() {
  document.getElementById("errors").innerText = "";
}

function apiCallback(bSuccessful, nErrorCode, sErrorMessage) {
  if (bSuccessful) {
    document.location.href = "posts.html";
  } else {
    alert(sErrorMessage);
  }
}
