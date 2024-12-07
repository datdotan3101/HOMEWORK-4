import { getEleId } from "./main.js";
class Validation {
  checkEmpty(value, divId, mess) {
    if (value === "") {
      getEleId(divId).innerHTML = mess;
      getEleId(divId).style.display = "block";
      return false;
    }
    getEleId(divId).innerHTML = "";
    getEleId(divId).style.display = "none";
    return true;
  }
  checkSelect(idSelect, divId, mess) {
    if (getEleId(idSelect).selectedIndex === 0) {
      getEleId(divId).innerHTML = mess;
      getEleId(divId).style.display = "block";
      return false;
    }
    getEleId(divId).innerHTML = "";
    getEleId(divId).style.display = "none";
    return true;
  }
  // Check account
  checkAccountFormat(value, divId, mess) {
    const account = /^\d{4,6}$/;
    if (value.match(account)) {
      getEleId(divId).innerHTML = "";
      getEleId(divId).style.display = "none";
      return true;
    }
    getEleId(divId).innerHTML = mess;
    getEleId(divId).style.display = "block";
    return false;
  }
  // Check character string
  checkCharacterString(value, divId, mess) {
    const letter = "^[A-Za-z]+$";
    if (value.match(letter)) {
      getEleId(divId).innerHTML = "";
      getEleId(divId).style.display = "none";
      return true;
    }
    getEleId(divId).innerHTML = mess;
    getEleId(divId).style.display = "block";
    return false;
  }

  // Check Email
  checkEmailFormat(value, divId, mess) {
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      getEleId(divId).innerHTML = "";
      getEleId(divId).style.display = "none";
      return true;
    }
    getEleId(divId).innerHTML = mess;
    getEleId(divId).style.display = "block";
    return false;
  }
  // Check Password
  checkPasswordFormat(value, divId, mess) {
    const password =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,10}$/;
    if (value.match(password)) {
      getEleId(divId).innerHTML = "";
      getEleId(divId).style.display = "none";
      return true;
    }
    getEleId(divId).innerHTML = mess;
    getEleId(divId).style.display = "block";
    return false;
  }
}
export default Validation;
