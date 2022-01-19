let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler)
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="warning") =>  `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const  USER_NAME = document.querySelector("#username")

    if(USER_NAME.value) {
        addItem(USER_NAME.value)
        USER_NAME.value = ""
        let dltIcon = document.createElement("button")
        dltIcon.innerHTML = "delete "
    } else {
        alertDOM.innerHTML = alertFunction(
            "Error!",
            "You can not add an empty task to the list.",
            "danger"
            )
    }
}



let userListDOM = document.querySelector ("#userList")


const addItem = (userName) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML =`${userName}`
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM)

    btnDelete = document.createElement ("img");
    btnDelete.setAttribute("src", "trash.svg")
    btnDelete.setAttribute("id", "btnDlt")
    btnDelete.style.backgroundColor = "red"
    btnDelete.style.height = "30px"
    btnDelete.style.borderRadius = "5px"
    liDOM.appendChild(btnDelete)
    btnDelete.addEventListener("click", dlt)

}
let chosen, added;

function dlt () {
    chosen = event.currentTarget.parentNode;
    chosen.remove();
}

