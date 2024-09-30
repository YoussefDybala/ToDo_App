let writeText = document.querySelector(".writeText")
let addText = document.querySelector(".addText")
let removeText = document.querySelector(".text-box button")
let textBox = document.querySelector(".textBoxes")
addText.addEventListener("click" , function () {
    if(writeText.value !== "") {
        let addElement = document.createElement("p")
        addElement.classList.add("text-box")
        textBox.appendChild(addElement)
        addElement.textContent = writeText.value
        writeText.value = ""
        let removeElement = document.createElement("input")
        removeElement.classList.add("remove")
        textBox.appendChild(removeElement)
        removeElement.value = "Remove"
        removeElement.addEventListener("click" , function () {
        //    addElement.style.display = "none"
        //    removeElement.style.display = "none"
        addElement.remove()
        removeElement.remove()
        })
    }
})
