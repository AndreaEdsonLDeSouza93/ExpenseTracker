let userName = document.getElementById("userName");
let passwordRegistration = document.getElementById("password");
let initialBalance = 0;

function submitRegistration() {
  //console.log(userName.value);
  //console.log(password.value);

  if (userName.value !== "" && isPasswordSafe(passwordRegistration.value) !== false) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.username === userName.value);

    if (user) {
      console.log("This username has already been taken.");
    } else {
      users.push({
        username: userName.value,
        password: passwordRegistration.value,
        balance: initialBalance,
      });
      console.log("The user has been registrated.");
    }

    localStorage.setItem("users", JSON.stringify(users));

    //console.log(JSON.parse(localStorage.getItem("users")));

    userName.value = "";
    passwordRegistration.value = "";
  } 
}

function userLogin() {
  let userLogin = document.getElementById("userLogin").value;
  let passwordLogin = document.getElementById("passwordLogin").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.username === userLogin && u.password === passwordLogin
  );

  if (user) {
    console.log("login successfull");
  } else {
    console.log("Invalid username or password");
  }
}
