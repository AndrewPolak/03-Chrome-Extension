
let myLeads
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

init()

function init() {
    let localLeads = localStorage.getItem("myLeads")
    if (localLeads === null) {
        myLeads = []
    } else {
        myLeads = JSON.parse(localLeads)
    }
    renderLeads()
}

function renderLeads() {
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ""
        renderLeads()
    }
})

deleteBtn.addEventListener("click", function() {
    localStorage.removeItem("myLeads")
    myLeads = []
    renderLeads()
})
