
console.log('app.js')
showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notes);
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
            </div>
      </div>
        `
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length!=0)
    {
        notesElem.innerHTML=html;
    }
    else
    {
        notesElem.innerText=`Nothing to show here !! Please use 'Add Note' section above to add notes. `;
    }
};

// Function to delete a note
function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let verify = confirm("Are you sure, you want to delete this file?")
    if(verify==true){
        notesObj.splice(index,1);
    }
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


let search= document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});


