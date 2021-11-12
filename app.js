let input = document.getElementById("task");
const button = document.getElementById("submit-button");
const list = document.getElementById("list");


loadStorage();


button.addEventListener("click",function()
{
    let li = document.createElement("li");
    li.classList.add("list-item");

    let content = document.createElement("div");
    content.classList.add("content");

    let removeBtn = document.createElement("a");
    removeBtn.classList.add("remove-content");

    let icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-times");

    li.append(content);
    li.append(removeBtn);

    removeBtn.append(icon);

    
    content.innerText = input.value;
    if (input.value != "")
    {
        list.append(li);
        storeTask(input.value);
        input.value = "";
    }
    
    
})


document.body.addEventListener("click", deleteItem)


function deleteItem(e)
{
    if (e.target.className === "fas fa-times")
    {
        e.target.parentElement.parentElement.remove();
        
        let children = e.target.parentElement.parentElement.children;
        deleteTask(children[0].innerText);
        
    }
}

function storeTask(task)
{
    let tasks;

    if (localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(task)
{
    let tasks;

    tasks = JSON.parse(localStorage.getItem("tasks"));
    let index = tasks.indexOf(task);


    tasks.splice(index, 1);
    

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadStorage()
{
    let tasks;

    if (localStorage.getItem("tasks") !== null)
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.forEach(function(task){
            let li = document.createElement("li");
            li.classList.add("list-item");
    
            let content = document.createElement("div");
            content.classList.add("content");
    
            let removeBtn = document.createElement("a");
            removeBtn.classList.add("remove-content");
    
            let icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-times");
    
            li.append(content);
            li.append(removeBtn);
    
            removeBtn.append(icon);
    
            
            content.innerText = task;
            console.log(content.innerText);

            list.append(li);
        });
    }

    
}