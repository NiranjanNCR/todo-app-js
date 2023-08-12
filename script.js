const addButton = document.querySelector("#add");

const updateLSData = () =>{
const textarea = document.querySelectorAll("textarea");
const notes = [];
console.log(textarea);
textarea.forEach((note) =>{
return notes.push(note.value);
});
console.log(notes);

localStorage.setItem("notes",JSON.stringify(notes));
}

const addNewNote = (text = '') =>
{
    const note = document.createElement("div")    //creating div with js
    note.classList.add("note");

    const htmlData =` 
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main ${text ? "": "hidden"}"></div>
<textarea class="${text ? "hidden": ""}" ></textarea> `;

note.insertAdjacentHTML("afterbegin",htmlData);
//console.log(note);

//getting the references of edit and delete
const editbutton  = note.querySelector(".edit");
const deletebutton  = note.querySelector(".delete");
const mainDiv  = note.querySelector(".main");
const textarea  = note.querySelector("textarea");

//Deleting the node


deletebutton.addEventListener("click", () =>{
    note.remove();
    updateLSData();
})

//toggle using edit button

textarea.value = text;
mainDiv.innerHTML =text;

editbutton.addEventListener("click",() =>
{
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
} )
textarea.addEventListener("change", (Event) =>{
    const value = Event.target.value;
    mainDiv.innerHTML =value;
    //console.log(value);

updateLSData();   ///For storing the data 
})


document.body.appendChild(note)
//it append a node as the last child of a node

}

//getting data back from localStorage
const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach((note) =>{
        addNewNote(note)
    });
}

addButton.addEventListener("click", () =>
{
    addNewNote()
});