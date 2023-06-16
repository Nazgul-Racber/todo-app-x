//? Section
const input = document.querySelector("#input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

//? function
function domaYaz({ id, text, flag }) {
  //const { id, text, flag } = task;
  ul.innerHTML += ` <li id=${id} class=${flag? "checked":""}>
  <i class="fa fa-check"></i><span>${text}</span><i class="fa fa-trash"></i></li>`;
}

let tasks = [];

btn.addEventListener("click", () => {
  if (!input.value) {
    alert("plase enter your todo...");
  } else {
    const task = {
      id: new Date().getTime(), //Date.now()
      text: input.value,
      flag: false,
    };
    // console.log(task.id);
    // console.log(new Date().getTime());
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    // localStorage.clear(); //?local'i temizlemek için.

    domaYaz(task);
    input.value = "";
    input.focus();
  }
  console.log(tasks);
});
