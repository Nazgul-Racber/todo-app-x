//?=======Section=====
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");


btn.addEventListener("click", () => {
    if (!input.value) {
        alert("plase enter your todo...")
    } else {
        const task = {
            id: new Date().getTime(),
            text:input.value,
            flag:false,
        }
        console.log(task.id);
        // console.log(new Date().getTime());
    }
})