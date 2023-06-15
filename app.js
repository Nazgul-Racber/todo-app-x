//?=======Section=====
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

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
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.clear(); //?local'i temizlemek için.
    //   domaYaz()
      input.value = "";
    //   input.focus();
  }
  console.log(tasks);
});
