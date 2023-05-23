let inputField = document.querySelector('#item');
let userInput = '';
let tdArray = [];
function listBuild(){
    document.getElementById("myList").innerHTML = '';
    for (let i = 0; i < tdArray.length; i++) {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(tdArray[i]));
        checkbox.dataset.index = i;
        document.getElementById("myList").appendChild(li);
    }
}
function removeChecked() {
    let checkboxes = document.querySelectorAll("#myList input[type='checkbox']");
       for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            tdArray.splice(i, 1);
        }
    }
    listBuild();
}
inputField.addEventListener("input", (eventObject) => {
userInput = (eventObject.target.value)
});
//tdArray.push('Test second item');
function toDoPush(listItem) {
    tdArray.push(listItem);
    listBuild()
    inputField.value = ''
}
let subBtn = document.querySelector('#button1');
let remBtn = document.querySelector('#button2');
inputField.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        toDoPush(userInput)
    }
}); 
subBtn.addEventListener("click", () => toDoPush(userInput))
remBtn.addEventListener("click", () => removeChecked())
//listBuild();

