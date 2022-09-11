const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;
  if (firstName === "") {
    addErrorTo("firstname", "First Name is required");
  } else {
    removeError("firstname");
  }
  if (lastName === "") {
    addErrorTo("lastname", "Last Name is required");
  } else {
    removeError("lastname");
  }
  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (isValid(email)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeError("email");
  }
  if (password === "") {
    addErrorTo("password", "Password is required");
  } else {
    removeError("password");
  }
});

// functions
function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
}
function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  //   var re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
}
