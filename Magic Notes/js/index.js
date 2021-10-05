showData();

//add button -- event listener
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let details = {
        'title': addTitle.value,
        'text': addTxt.value
    }
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(details);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTitle.value = "";
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
            <h5 class="card-title">${element['title']}</h5>
            <p class="card-text">${element['text']}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
        </div>
    </div>`;
    });

    let notesElem = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `<h6>You Haven't Added Notes Uptil Now. To Add Notes Click "Add Note" Button.</h6>`;
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
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {

    // Getting input tag Text
    let inputVal = search.value.toLowerCase();

    //Targeting All Cards and convert into array and perform search operation one by one
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {

        //Targeting Matched Card Inner string (paragraph)
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        let cardHead = element.getElementsByTagName('h5')[0].innerText;
        //Set Condition (if string is matched show it otherwise hide it)
        if (cardTxt.includes(inputVal) || cardHead.includes(inputVal)) {
            element.style.display = "block";//Show
        } else {

            element.style.display = "none";//Hide
        }
    });

});
