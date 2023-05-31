
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

renderLeads()

inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        renderLeads()
        inputEl.value = ""
    }
})

function renderLeads() {
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}

