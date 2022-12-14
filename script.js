console.log("Loading script page")

function AddNewItem(){
    const inputElement = document.querySelector("input")
    const inputValue = inputElement.value
    const newText = document.createTextNode(inputValue)
    const liElement = document.createElement("li")
    liElement.appendChild(newText)
   const ulElement = document.querySelector("ul")
   ulElement.appendChild(liElement)

    console.log("Add new item")
}
const buttonElement = document.querySelector("button")
buttonElement.addEventListener("click",AddNewItem)






