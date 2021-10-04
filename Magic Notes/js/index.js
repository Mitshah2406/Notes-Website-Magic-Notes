showData();

//add button -- event listener
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    
    showData();
})

//function for showing data in card
function showData() {
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    let html = '';

    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-2 card " style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
        </div>
    </div>`;
    });
    
    let notesElem = document.getElementById("notes");
    
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `<h4>You Haven't Added Notes Uptil Now. To Add Notes Click "Add Note" Button.</h4>`;
    }
}


//function for deleting card
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    
    showData();
}


//search functionality
let search = document.getElementById("searchTxt");
search.addEventListener('input',function()
{
    let inputValue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        let cardHeading = element.getElementsByTagName('h5')[0].innerText;
        if(cardTxt.includes(inputValue)||cardHeading.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
