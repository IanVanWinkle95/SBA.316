// import "./styles.css"

const form = document.getElementById("form")

const continents = document.querySelector("#continent-select")
continents.addEventListener("click", (a) => {
  console.log("Selected Continent:", a.target.value)
})

form.style.border = "1px solid black"
form.style.padding = "10px"

const div = document.createElement("div")
div.innerHTML = "<strong>Sign up for your destination today!</strong>"

const btn = document.createElement("button")
btn.textContent = "Click here"
btn.addEventListener("click", () => {
    alert("Sign Up")
    return btn
  });

form.appendChild(div)
form.appendChild(btn)