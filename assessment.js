
1. //Create a function called getAvailableBooks that returns an array of all available
//books.
function getAvailableBooks(){
    let getAvailableBooks= ['English','Kiswahil','Mathematics','CRE']
    console.log(getAvailableBooks.every);

    }

//2. Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.

function getBooksByAuthor (){
    let getBooksByAuthor = ['English,Cre=Ruben','CRE,English,Kiswahili=Simon','mathematics,English=Jane']
    console.log(getBooksByAuthor.indexOf[2])
}
//3. Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).


function addNewBook(){
    let addNewBook = {title:'English',author:'John',publicationyear:'2009'}
    addNewBook.push={title:'mathematics',author:'Rose',publicationyear:'2010'}
    console.log(addNewBook)
}

//4. Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.


function checkoutBook(){
    let checkoutBook = ['Trevor Noah','Angels never Die','Temptations']
    console.log(checkoutBook.includes('Every day is anew day'))

}



//5. Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.
function returnBook (){
    let returnBook = ['Trevor Noah','Angels never die','Temptations']
    console.log (returnBook.includes('Angels never die'))
}






















