function pwdgen() {
  let name = document.getElementById("name").value;
  let number = document.getElementById("numb").value;
  // let dob = document.getElementById("dob").value;
  let text = CryptoJS.MD5(name + number);
  document.getElementById("demo").innerHTML = `YOUR PWD IS ${text}`;
}
