const form = document.getElementById("personNameForm");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList"); 
const point = document.getElementById("memberPoints"); 

form.addEventListener("submit", handleSubmit);
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchItem(taskList, point.value);
});

function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this));
  
    taskList.insertAdjacentHTML(
      
    )
};