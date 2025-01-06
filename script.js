const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please Enter Your Date Of Birth");
  } else {
    const dob = new Date(input.value);
    const dob_year = dob.getFullYear();
    const now = new Date();
    const now_year = now.getFullYear();
    const age = now_year - dob_year;
    result.innerHTML = "Your Age Is :-" + age;
  }
});
