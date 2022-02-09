//Book Class: Each Object Represents a Book 
let books = [
    //sample objects to check the array:
    // {
    //     title: "LOTR",
    //     author: "Tolkien",
    //     pages: "400"
    // },
    // {
    //     title: "Harry Potter",
    //     author: "JK Rowling",
    //     pages: "2000"
    // }
];



// VARIABLES

let titleInput = document.querySelector("#inputTitle");
let authorInput = document.querySelector("#inputAuthor");
let pagesInput = document.querySelector("#inputPages");

let table = document.querySelector("#table");
let button = document.querySelector("#addBookButton");
let removeButton = document.getElementById("#removeButton");

let newBook = {title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value
  }


const {title, author, pages} = newBook;




//*** MAIN FUNCTION ***// 


function addNewBook() {

    //check for blank fields
    if(titleInput.value == "" || authorInput.value == "" || pagesInput.value == "")
    {
        alert("Please fill in the blank fields!")
    }

    else {

//stop the data disappearing when form is submitted
event.preventDefault();


//add the new book into books array
books.push(newBook);

//create new row and cells
let newRow = document.createElement("tr");
let dataTitle = document.createElement("td");
let dataAuthor = document.createElement("td");
let dataPages = document.createElement("td");
let readBook = document.createElement("td");
let removeBook = document.createElement("td");


//place new row and cells
table.appendChild(newRow);
newRow.appendChild(dataTitle);
newRow.appendChild(dataAuthor);
newRow.appendChild(dataPages);
newRow.appendChild(readBook);
newRow.appendChild(removeBook);


//place data into cells
dataTitle.innerHTML = titleInput.value;
dataAuthor.innerHTML = authorInput.value;
dataPages.innerHTML = pagesInput.value;
readBook.innerHTML = '<input type="checkbox">';
removeBook.innerHTML = `<button id="removeButton" class="remove_button btn btn-outline-danger">Remove</button>`;




}

}


//add data when button is clicked
button.addEventListener("click", ()=>
{
    addNewBook();
    
    //clear input fields when submit is clicked
titleInput.value = "";
authorInput.value = "";
pagesInput.value = "";
}
)





//remove book from the table and the array
//when remove button is clicked 

table.addEventListener("click", deleteBook);

function deleteBook(el) {
    console.log(el.target)
    if(el.target.classList.contains("remove_button") == true) {
        if(confirm("This book will be deleted, do you confirm?") == true)
        {el.target.parentNode.parentNode.remove();
        books.pop(newBook);
        console.log(books);}
    };
    }


































//////////////////////THE OLD SCRIPT
//which had nothing to do with the array nor objects lol//////////



// let addBookButton = document.getElementById("addBookButton");
// let table = document.getElementById("table");
// let inputTitle = document.getElementById("inputTitle");
// let inputAuthor = document.getElementById("inputAuthor");
// let inputPages = document.getElementById("inputPages");

// addBookButton.addEventListener("click", function main(){
//     event.preventDefault();

//     let row1 = document.createElement("tr");

//     table.appendChild(row1);
//     let dataTitle = document.createElement("td");
//     row1.appendChild(dataTitle);
//     dataTitle.innerText = inputTitle.value;
    
    
//     let dataAuthor = document.createElement("td");
//     row1.appendChild(dataAuthor);
//     dataAuthor.innerText = inputAuthor.value;

    
//     let dataPages = document.createElement("td");
//     row1.appendChild(dataPages);
//     dataPages.innerText = inputPages.value;

//     let readStatus = document.createElement("td");
//     row1.appendChild(readStatus);
//     readStatus.innerHTML = "<input type='checkbox'>"; 

//     let deleteBookCell = document.createElement("td");
//     row1.appendChild(deleteBookCell);
//     let removeButton = document.createElement("button");
//     removeButton.innerText = "Remove";
//     deleteBookCell.appendChild(removeButton);

//     removeButton.addEventListener("click", function deprecator() {
//         row1.remove();
//   


