document.addEventListener("DOMContentLoaded", (evt) => {
const form = document.getElementById("form")

const userName = document.getElementById("name")
userName.addEventListener("keypress", checkName, false)

const continents = document.querySelector("#continent-select")
continents.addEventListener("click", (a) => {
  console.log("Selected Continent:", a.target.value)
})
// On my third commit I had this working ^^^^. It would show in the
// console when a continent was slected but has since stopped working.


// continents.onclick = () => {
//   console.log("Event handler")
// }

// form.style.border = "1px solid black"
// form.style.padding = "10px"
// Was trying to edit the page with both CSS and JS. Ran into issues with having both.

const title = createTitle()
const btn = createBtn()
form.appendChild(title)
form.appendChild(btn)
form.appendChild(createWarningBox())



// function createTitle() {
  const div = document.createElement("div")
  div.innerHTML = "<strong>Sign up for your destination today!</strong>"

//   div.classList.add("title")
//   return div
// }

// Wasn't sure if I needed these as functions cause I think they worked with or without.

function createBtn() {
  const btn = document.createElement("button")
  btn.textContent = "Click here"
  // btn.addEventListener("click", signUp)
  // btn.classList.add("btn")
  btn.addEventListener("click", () => {
    alert("Sign Up")
  return btn
})

// submitBtn.classList.add("active");
// submitBtn.style.backgroundColor = "#8e44ad";



let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

form.addEventListener("submit", validate)
form.addEventListener("click", displayResult)




// ----------------Functions----------------------------

function validate(evt) {
  evt.preventDefault ()
  const nameVal = validateName()
  if (nameVal === false) {
    return false
  }
  return true
}

const name = document.getElementById("name")
function validateName() {
  if (userName.value === "") {
    displayWarning("Please provide a name.")
    userName.focus()
    return false
  }
  return userName.value
}

// Struggled to get this fucntion to work. Was trying to 
// make it so they could only use lowercase letters in the name section.

// function checkName(evt) {
//   evt.preventDefault();
//   const charCode = evt.charCode;
//   console.log(charCode)
//   if (charCode !== 0) {
//     if (charCode < 97 || charCode > 122) {   
//       displayWarning("Please use lowercase letters only.");
//     }
//   }
// }

function displayWarning (msg) {
 warningBox.textContent = msg
 setTimeout(() => {
  warningBox.textContent = ""
 }, 2000)
 }

 function displayResult () {
  const selectedContinent = continents.value
  const name = userName.value
  const result = `Selected continent ${selectedContinent}.`
  resultContinent.textContent = result
 }

 console.log(form.parentNode)
 console.log(form.childNode)

})