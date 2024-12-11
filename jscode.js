const newBookButton = document.getElementById("newBookButton");
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("closeButton");
// const submitButton = document.getElementById("submitButton");
const submit = document.getElementById("submit")
const mainContainer = document.getElementById("mainContainer");
const lineBreak = document.createElement("br"); 

const myLibrary = [{
    "author":"Alistair Maclean", 
    "title":"Guns of Navarone",
    "numberOfPages":200,
    "read":"Yes"
}, {
    "author":"Alistair Maclean", 
    "title":"Where Eagles Dare",
    "numberOfPages":250,
    "read":"Yes"
}, {
    "author":"Alistair Maclean", 
    "title":"Fear is the Key",
    "numberOfPages":270,
    "read":"Yes"
}, {
    "author":"Fredrick Forsyth", 
    "title":"The Day of the Jackal",
    "numberOfPages":237,
    "read":"Yes"
}, {
    "author":"Fredrick Forsyth", 
    "title":"Icon",
    "numberOfPages":300,
    "read":"Yes"
}, {
    "author":"Ayn Rand", 
    "title":"The Fountainhead",
    "numberOfPages":232,
    "read":"Yes"
}, {
    "author":"Agatha Christie", 
    "title":"Death on the Nile",
    "numberOfPages":654,
    "read":"Yes"
}, {
    "author":"Agatha Christie", 
    "title":"The Big Four",
    "numberOfPages":456,
    "read":"Yes"
}, {
    "author":"Agatha Christie", 
    "title":"The Secret Adversary",
    "numberOfPages":241,
    "read":"Yes"
}, {
    "author":"Agatha Christie", 
    "title":"The Missing Will",
    "numberOfPages":406,
    "read":"Yes"
}
];

function Book() {
    // Use already defined array myLibrary. Before that, initializng an object
    let inputArray = {};

    const author = document.getElementById("author");
    const title = document.getElementById("title");
    const numberOfPages = document.getElementById("numberOfPages");
    const read = document.getElementById("read");

    const authorValue = author.value;
    const titleValue = title.value;
    const numberOfPagesValue = numberOfPages.value;
    const readValue = read.value;

    inputArray.author = authorValue;
    inputArray.title = titleValue;
    inputArray.numberOfPages = numberOfPagesValue;
    inputArray.read = readValue;

    myLibrary.push(inputArray);
}

// event listener to load cards upon page load 
window.addEventListener("load", (event) => {
    createBookCards();
  });

// event listener to load new book form 
newBookButton.addEventListener("click", () => {
    dialog.showModal();
    console.log("4");
});

// event listener to close form window
closeButton.addEventListener("click", () => {
    dialog.close();
    console.log("Hello world!");
});

// event listener to update array with new book info and add card with the new book details 
submit.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    Book();
    addBookCard();
});

// removeButton.addEventListener("click", () => {
//     alert(99);
// });

function createBookCards(){
    for (let book = 0; book < myLibrary.length; book++){
        // for each object in myLibrary array, creating a div
        const newDiv = document.createElement("div");

        // create text divs to hold book information 
        const textDiv1 = document.createElement("div");
        const textDiv2 = document.createElement("div");
        const textDiv3 = document.createElement("div");
        const textDiv4 = document.createElement("div");

        // add the text to the newly created text divs
        textDiv1.appendChild(document.createTextNode("Author: " + myLibrary[book].author));
        textDiv2.appendChild(document.createTextNode("Title: " + myLibrary[book].title + " "));
        textDiv3.appendChild(document.createTextNode("Number of Pages: " + myLibrary[book].numberOfPages + " "));
        textDiv4.appendChild(document.createTextNode("Read Status: " + myLibrary[book].read + " "));
        

        const textDivMain = document.createElement("div");
        const buttonDivMain = document.createElement("div");

        // add textdivs to textDivMain
        textDivMain.appendChild(textDiv1);
        textDivMain.appendChild(textDiv2);
        textDivMain.appendChild(textDiv3);
        textDivMain.appendChild(textDiv4);

        textDivMain.style.marginTop = "3em";
        textDivMain.style.marginBottom = "1em";

        // add textDivMain to new Div
        newDiv.appendChild(textDivMain);

        // adding remove button
        const removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("Remove Book"));
        removeButton.style.marginLeft = ".75em";

        // add removeButton to buttonDivMain, and buttonDivMain to new Div
        buttonDivMain.appendChild(removeButton);
        

        // Aligning content within the div
        buttonDivMain.style.display = "flex";
        // buttonDivMain.style.flexDirection = "column";
        buttonDivMain.style.justifyContent = "flex-start";
        buttonDivMain.style.alignItems = "flex-end";
        buttonDivMain.style.width = "100%";
        buttonDivMain.style.height = "30%";


        newDiv.appendChild(buttonDivMain);

        
        // add the card Div and its contents into the parent
        mainContainer.appendChild(newDiv);
        newDiv.style.backgroundColor = "rgb(255,235,205)";
        
        // Aligning content within the div
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "column";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";




    }
}

function addBookCard(){
    for (let newBook = (myLibrary.length-1); newBook < myLibrary.length; newBook++){
        // for each object in myLibrary array, creating a div
        const newDiv = document.createElement("div");

        // create text divs to hold book information 
        const textDiv1 = document.createElement("div");
        const textDiv2 = document.createElement("div");
        const textDiv3 = document.createElement("div");
        const textDiv4 = document.createElement("div");

        // add the text to the newly created text divs
        textDiv1.appendChild(document.createTextNode("Author: " + myLibrary[newBook].author));
        textDiv2.appendChild(document.createTextNode("Title: " + myLibrary[newBook].title + " "));
        textDiv3.appendChild(document.createTextNode("Number of Pages: " + myLibrary[newBook].numberOfPages + " "));
        textDiv4.appendChild(document.createTextNode("Read Status: " + myLibrary[newBook].read + " "));
        
        // add textdivs to newDiv
        newDiv.appendChild(textDiv1);
        newDiv.appendChild(textDiv2);
        newDiv.appendChild(textDiv3);
        newDiv.appendChild(textDiv4);

        // add the newly created element and its content into the parent
        mainContainer.appendChild(newDiv);
        newDiv.style.backgroundColor = "rgb(255,235,205)";
        
        // Aligning content within the div
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "column";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";
    }
}