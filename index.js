document.addEventListener("DOMContentLoaded", (evt) => {
  const form = document.getElementById("form")

  const userName = document.getElementById("name")
  userName.addEventListener("keypress", checkName, false)
  userName.setAttribute("placeholder", "Enter Name")

  const continents = document.querySelector("#continent-select")
  continents.addEventListener("click", (a) => {
    console.log("Selected Continent:", a.target.value)
  })
  // On my third commit I had this working ^^^^. It would show in the
  // console when a continent was slected but has since stopped working.

  const title = createTitle()
  const btn = createBtn()
  const name = document.getElementById("name")
  form.appendChild(title)
  form.appendChild(btn)

  const parent = form.parentNode
  console.log(parent)

  const firstChild = form.firstChild
  console.log(firstChild)

  // form.appendChild(createWarningBox())
  form.addEventListener("submit", validate)
  form.addEventListener("click", displayResult)

  // submitBtn.classList.add("active")
  // submitBtn.style.backgroundColor = "#8e44ad"

  const inputs = document.querySelectorAll("input")
  inputs.forEach( (input) => {
    console.log(input.id)
  })

  const fragment = document.createDocumentFragment()
  const newElement = document.createElement("div")
  newElement.textContent = "New Element"
  fragment.appendChild(newElement)
  form.appendChild(fragment)

  // ----------------Functions----------------------------

  function createTitle() {
    const div = document.createElement("div")
    div.innerHTML = "<strong>Sign up for your destination today!</strong>"

    div.classList.add("title")
    return div
  }

  function createBtn() {
    const btn = document.createElement("button")
    btn.textContent = "submit"
    btn.classList.add("btn")

    btn.addEventListener("mouseover", () => {
      console.log("button hover")
    })
    // btn.addEventListener("click", signUp)
    
    // btn.addEventListener("click", () => {
    //   alert("Sign Up")
    return btn
  }
  const nameInput = document.getElementById("name")
  nameInput.setAttribute("maxlength", "10")

  const email = document.getElementById("email")
  // email.setAttribute = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  email.required = true
  email.addEventListener("input", () => {
    if (!email.value.includes("@")) {
      console.log("Invalid email format")
    }
  })
  form.appendChild(email)

  function validate(evt) {
    const nameVal = validateName()
    if (nameVal === false) {
      evt.returnValue = false
      return false
    }

    const emailVal = validateEmail()
    if (emailVal === false) {
      evt.returnValue = false
      return false
    }

    alert(`Name: ${nameVal}
      Email: ${emailVal}`)

    return true
  }

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

  function checkName(evt) {
    const charCode = evt.charCode
    // console.log(charCode)
    const allowableChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"]
    for (i = 0; i < allowableChars.length; i++)
      if (allowableChars = evt) {
        // console.log("goodChar")
        return true
      } else {

      evt.preventDefault()
      displayWarning("Use lower case letters")
      }

    // Wanted to make a fun for loop but it doesn't work the way I want. 
    // The Code below works but wanted to make sure I had my for loop.

    // if (charCode !== 0) {
    //   if (charCode < 97 || charCode > 122) {
    //     evt.preventDefault()
    //     displayWarning("Please use lowercase letters only.")
    //   }
    // }
  }

  function displayResult() {
    const selectedContinent = continents.value
    if (selectedContinent === "") {}
    const name = userName.value
    const result = `Selected continent ${selectedContinent}.`
    const resultContinent = document.getElementById("result-container")
    resultContinent.textContent = result
  }

  function validateEmail() {
    let emailVal = email.value

    if (emailVal === "") {
      alert("Please provide an email.")
      email.focus()
      return false
    }

    const atpos = emailVal.indexOf("@")
    const dotpos = emailVal.lastIndexOf(".")

    if (atpos < 1) {
      alert("Your email must include an @ symbol which must not be at the beginning of the email.");
      email.focus()
      return false
    }

    if (dotpos - atpos < 2) {
      alert("Invalid structure: @.\nYou must include a domain name after the @ symbol.");
      email.focus()
      return false
    }
    return emailVal
  }

  function createWarningBox() {
    const warningBox = document.createElement("div")
    warningBox.className = "warning"
    return warningBox
  }

  // let warningTimeout;

  function displayWarning(msg) {
    const warningBox = createWarningBox()
    form.appendChild(warningBox)
    warningBox.textContent = msg
    setTimeout(() => {
      warningBox.remove ()
    }, 2000)
  }

  // ----------------------------------------------------

  form.style.border = "1px solid black"
  form.style.padding = "10px"

  console.log(window.innerWidth)
  console.log("http://127.0.0.1:5500/SBA.316/index.html" + window.location.href)

  // Was trying to edit the page with both CSS and JS.
  // Ran into issues with one or the other working but not both.

  console.log(form.parentNode)
  console.log(form.childNodes)
})