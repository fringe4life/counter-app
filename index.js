const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')
const clearBtn = document.getElementById('clear-btn')
let count = 0

incrementBtn.addEventListener('click', increment)
saveBtn.addEventListener('click', save)
clearBtn.addEventListener('click', clearHistory)

function clearHistory() {
    saveEl.textContent = 'Previous entries: '
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.innerHTML += "<span class='number'>" + count + "</span> - "
    reset()
}

const reset = () => {
    count = 0
    countEl.textContent = count
}