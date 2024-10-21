const container = document.createElement("div")
container.style.width = "400px"
container.style.height = "400px"
container.style.border = "1px solid black"
container.style.padding = "10px"

const form = document.getElementById("form")

const div = document.createElement("div")
div.innerHTML = "<strong>Sign up for your destination today!</strong>"

const newParagraph = document.createElement("p")
newParagraph.textContent = "To Login In or Sign Up"

const button = document.createElement("button")
button.textContent = "Click here"

container.appendChild(newParagraph)
container.appendChild(div)
newParagraph.appendChild(button)
form.appendChild(container)