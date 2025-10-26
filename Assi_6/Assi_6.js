document.getElementById("hello-btn").addEventListener("click", () => {
    console.log("Name: Zhan, Group: SE-2419");
    alert("Hello, JavaScript World!");
});
document.getElementById("vars-btn").addEventListener("click", () => {
    let name = "Zhan";
    let age = 19;
    let studying = true;
    let sum = 10 + 5;
    console.log(name, age, studying);
    console.log("Sum:", sum);
    console.log(name + " is " + age + " years old.");
});
const textBtn = document.getElementById("change-text");
const textP = document.getElementById("text-p");
let changed = false;
textBtn.onclick = () => {
    if (!changed) {
        textP.textContent = "Changed text";
        textBtn.textContent = "Revert";
    } else {
        textP.textContent = "Original text";
        textBtn.textContent = "Change Text";
    }
    changed = !changed;
};
const box = document.getElementById("box");
const bgBtn = document.getElementById("bg-btn");
const fontBtn = document.getElementById("font-btn");
const colors = ["#111", "#9e7e00", "#444", "#ffda70"];
bgBtn.onclick = () => {
    box.style.background = colors[Math.floor(Math.random() * colors.length)];
};
let big = false;
fontBtn.onclick = () => {
    box.style.fontSize = big ? "16px" : "24px";
    big = !big;
};
const list = document.getElementById("list");
const addItem = document.getElementById("add-item");
const removeItem = document.getElementById("remove-item");
let count = 2;
addItem.onclick = () => {
    count++;
    let li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
};
removeItem.onclick = () => {
    if (list.lastElementChild) list.removeChild(list.lastElementChild);
};
const hover = document.getElementById("hover");
hover.onmouseover = () => hover.style.background = "#9e7e00";
hover.onmouseout = () => hover.style.background = "#111";
const input = document.getElementById("live-input");
const liveText = document.getElementById("live-text");
input.onkeyup = () => {
    liveText.textContent = input.value;
};
const form = document.getElementById("form");
const err = document.getElementById("err");
form.onsubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();
    if (!name || !email || !pass) {
        err.textContent = "Please fill all fields!";
    } else {
        err.textContent = "";
        alert("Form submitted!");
        form.reset();
    }
};
const todoInput = document.getElementById("todo-input");
const addTask = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");
addTask.onclick = () => {
    let val = todoInput.value.trim();
    if (!val) return;
    let li = document.createElement("li");
    let span = document.createElement("span");
    let del = document.createElement("button");
    span.textContent = val;
    del.textContent = "Delete";
    li.append(span, del);
    todoList.appendChild(li);
    todoInput.value = "";
    span.onclick = () => li.classList.toggle("completed");
    del.onclick = () => li.remove();
};