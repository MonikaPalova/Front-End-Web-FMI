function init(){
document.getElementById("submit-button").addEventListener("click", function(event) {
  event.preventDefault()
});
}
function login() {

  var form = _getForm();
  var inputs = _getFormInputs(form);
  var sEmail = inputs.email.value;
  var sPassword = inputs.password.value;

  if (_checkEmail(sEmail) && _checkPassword(sPassword)) {
    _clearErrors();
    window.auth.login(sEmail, sPassword, apiCallback);
  }
}

function register() {
  var form = _getForm();
  var inputs = _getFormInputs(form);
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
  } else if (sEmail.indexOf("@") === -1) {
    return _throwError("Email must contain \"@\"");
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
    return _throwError("Password must contain at least 1 capital letter");
  } else if (!(/\d/.test(sPassword))) {
    return _throwError("Password must contain at least 1 digit");
  } else if (!(/[!@#$%^&]/.test(sPassword))) {
    return _throwError("Password must contain at least 1 special symbol !@#$%^&");
  }
  return true;
}

function _throwError(sMsg) {
  document.getElementById("errors").innerText = sMsg;
  return false;
}

function _clearErrors() {
  document.getElementById("errors").innerText = "";
}

function _getForm() {
  return document.getElementById("box-content");
}

function _getFormInputs(form) {
  return form.getElementsByClassName("box-input");
}

function apiCallback(bSuccessful, nErrorCode, sErrorMessage) {
  if (bSuccessful) {
    document.location.href ="Homepage.html";
  } else {
    alert(sErrorMessage);
  }
}


function togglePasswordVisibility() {
  var password = document.getElementById("password");
  var button = document.getElementById("toggle-password-button");
  if (password.type === "password") {
    password.type = "text";
    button.style.textDecoration = "none";
  } else {
    password.type = "password";
    button.style.textDecoration = "line-through";
  }
}

function logout(){
  window.auth.logout();
  document.location.href ="Login.html";
}
