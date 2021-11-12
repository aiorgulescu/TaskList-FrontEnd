let input = document.getElementById("task");
const button = document.getElementById("submit-button");
const list = document.getElementById("list");



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
        input.value = "";
        console.log(input.value);
    }
    
    
})


document.body.addEventListener("click", deleteItem)


function deleteItem(e)
{
    if (e.target.className === "fas fa-times")
    {
        e.target.parentElement.parentElement.remove();
    }
}


