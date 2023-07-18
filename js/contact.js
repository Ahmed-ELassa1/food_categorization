$(document).ready(function(){
let inenerNavWidth = $("#navInner").outerWidth();
let navleft = $("#navOuter").css("left");


let nameInput = document.querySelector("#nameInp");
let mailInput = document.querySelector("#mailInp");
let passInput = document.querySelector("#passInp");
let repassInput = document.querySelector("#repassInp");
let ageInput = document.querySelector("#ageInp");
let phoneInput = document.querySelector("#phoneInp");

let nameWarnig = document.querySelector("#nameWarnig");
let mailWarnig = document.querySelector("#mailWarnig");
let phoneWarnig = document.querySelector("#phoneWarnig");
let ageWarnig = document.querySelector("#ageWarnig");
let passWarnig = document.querySelector("#passWarnig");
let repassWarnig = document.querySelector("#repassWarnig");

let sumbitBtn = document.querySelector(".alertWarning");


// contact us section
nameInput.addEventListener("blur", function () {
  var regexNAME = /^[A-Za-z]{3,12}$/;
  if (regexNAME.test(nameInput.value) == true) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    nameWarnig.classList.replace("d-block", "d-none");
    $("#sumbitBtn").prop("disabled", false);

  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    nameWarnig.classList.replace("d-none", "d-block");
    $("#sumbitBtn").prop("disabled", true);

  }
});

mailInput.addEventListener("blur", function () {
  var regexEmail = /^[A-Za-z]{3,12}[0-9]?@[A-Za-z]{3,15}\.[A-Za-z]{2,3}$/;
  if (regexEmail.test(mailInput.value) == true) {
    mailInput.classList.add("is-valid");
    mailInput.classList.remove("is-invalid");
    mailWarnig.classList.replace("d-block", "d-none");
    $("#sumbitBtn").prop("disabled", false);

  } else {
    mailInput.classList.add("is-invalid");
    mailInput.classList.remove("is-valid");
    mailWarnig.classList.replace("d-none", "d-block");
    $("#sumbitBtn").prop("disabled", true);

  }
});
ageInput.addEventListener("blur", function () {
  var regexAge = /^[1-9][0-9]$/;
  if (regexAge.test(ageInput.value) == true) {
    ageInput.classList.add("is-valid");
    ageInput.classList.remove("is-invalid");
    ageWarnig.classList.replace("d-block", "d-none");
    $("#sumbitBtn").prop("disabled", false);

  } else {
    ageInput.classList.add("is-invalid");
    ageInput.classList.remove("is-valid");
    ageWarnig.classList.replace("d-none", "d-block");
    $("#sumbitBtn").prop("disabled", true);

  }
});
phoneInput.addEventListener("blur", function () {
  var regexphone = /^[0][1][0-9]{9}$/;
  if (regexphone.test(phoneInput.value) == true) {
    phoneInput.classList.add("is-valid");
    phoneInput.classList.remove("is-invalid");
    phoneWarnig.classList.replace("d-block", "d-none");
    $("#sumbitBtn").prop("disabled", false);
  } else {
    phoneInput.classList.add("is-invalid");
    phoneInput.classList.remove("is-valid");
    phoneWarnig.classList.replace("d-none", "d-block");
    $("#sumbitBtn").prop("disabled", true);

  }
});
passInput.addEventListener("blur", function () {
  var regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$_-]).{8,15}$/;
  if (regexPassword.test(passInput.value) == true) {
    passInput.classList.add("is-valid");
    passInput.classList.remove("is-invalid");
    passWarnig.classList.replace("d-block", "d-none");
    $("#sumbitBtn").prop("disabled", false);

  } else {
    passInput.classList.add("is-invalid");
    passInput.classList.remove("is-valid");
    passWarnig.classList.replace("d-none", "d-block");
    $("#sumbitBtn").prop("disabled", true);

  }
});
repassInput.addEventListener("blur", function () {
  if (passInput.value == repassInput.value) {
    repassInput.classList.add("is-valid");
    repassInput.classList.remove("is-invalid");
    repassWarnig.classList.replace("d-block", "d-none");
    $("#sumbitBtn").prop("disabled", false);

  } else {
    repassInput.classList.add("is-invalid");
    repassInput.classList.remove("is-valid");
    repassWarnig.classList.replace("d-none", "d-block");
    $("#sumbitBtn").prop("disabled", true);

  }
});
     

$(".loading").fadeOut(100,function(){
  $("body").css("overflow","auto")
})
})

