let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})






let search = document.getElementById("searchTxt");
search.addEventListener('input',function()
{
    console.log('event fired');
    let inputValue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        // let cardHeading = document.getElementsByTagName('h5')[0].innerText;
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})








let search = document.getElementById("searchTxt");

search.addEventListener('input', function () {
    
    let inputValue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        let cardHeading = element.getElementsByTagName('h5')[0].innerText;

        if (cardTxt.includes(inputValue) || cardHeading.includes(inputValue) == false) {

            notesObj.forEach(function () {
                let notesElem = document.getElementById("notes");
                notesElem.innerHTML = `<h4>No results Matched Your Search.</h4>`;

            })
        }
        else if(inputValue.includes(inputValue) == ""){
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
        else{

            if (cardTxt.includes(inputValue)) {
                element.style.display = "block";
            } else{
                element.style.display = "none";
            }
        }
    }
    )
})