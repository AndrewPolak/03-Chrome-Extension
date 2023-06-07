
let myLeads
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const ulEl = document.getElementById("ul-el")

init()

function init() {
    let localLeads = localStorage.getItem("myLeads")
    if (localLeads === null) {
        myLeads = []
    } else {
        myLeads = JSON.parse(localLeads)
    }
    renderList(myLeads, ulEl)
}

function renderList(arr, location) {
    let listItems = ""
    for (let i = 0; i < arr.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${arr[i]}'>${arr[i]}</a>
            </li>
        `
    }
    location.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ""
        renderList(myLeads, ulEl)
    }
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.removeItem("myLeads")
    myLeads = []
    renderList(myLeads, ulEl)
})

saveTabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderList(myLeads, ulEl)
    })
})