//console.log("Code your solution!")

const list = document.querySelector("form");
list.addEventListener("submit", (event) => {
    event.preventDefault();


    const unOrdered = document.querySelector("ul")
    const listText = document.getElementById("list").value;
    if (listText){
        const newLi = document.createElement("li")
        newLi.textContent = listText
        unOrdered.append(newLi)
        //paragraph.remove()

        //newLi.className.add("click")
        const crossed = document.querySelector("ul")
        crossed.addEventListener("click", (event) => {
            event.target.style.textDecoration = "line-through"
        })
    } else {
        paragraph = document.querySelector("p");
        paragraph.textContent = "Error! Todo cannot be empty"
        paragraph.add()
    }
})