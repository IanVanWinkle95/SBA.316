const body = document.body

const container = document.createElement("div")
container.style.width = "400px"
container.style.height = "400px"
container.style.border = "1px solid black"

document.querySelector('.heading')

const div = document.createElement("div")
div.innerHTML = "<strong>Sign up for your destination today!</strong>"

const newParagraph = document.createElement("p")
newParagraph.textContent = "To Login In or Sign Up"
newParagraph.setAttribute('class', '.heading')

const button = document.createElement("button")
button.textContent = "Click here"

container.appendChild(newParagraph)
newParagraph.appendChild(button)
body.append(div)

body.appendChild(container)