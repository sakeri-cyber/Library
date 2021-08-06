console.log('This is my app');
//constructor
function Book(name,author,genre){
    this.name = name;
    this.author = author;
    this.genre = genre;
};

//Display constructor
function Display(){

};

//Add methods to display prototypes
Display.prototype.add = function(book){
    let tableBody = document.getElementById('tableBody');
    let str = ` <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    </tr>    
    `;
    tableBody.innerHTML += str;

};
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};
Display.prototype.show = function(genre, showmessage){
    let message = document.getElementById('message');
    message.innerHTML = `     
    <div class="alert alert-${genre} alert-dismissible fade show" role="alert">
    <strong>Message:</strong>${showmessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
};
Display.prototype.validate = function(book){
    if (book.name.length<2 || book.author.name<2)
    return false;
    else
    return true;
};

//Add submit event listener to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let genre;
    let nonFiction = document.getElementById('nonFiction');
    let scientific = document.getElementById('scientific');
    if(fiction.checked){
        genre = fiction.value;
    }else if(nonFiction.checked){
        genre = nonFiction.value;

    }else if(scientific.checked){
        genre = scientific.value;
    }
    let book = new Book(name,author,genre);
    console.log(book);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added. ');
    }
     else{
         display.show('danger', 'Sorry, your book cannot be added.');
     }   

};