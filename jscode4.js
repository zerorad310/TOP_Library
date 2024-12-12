const newBookButton = document.getElementById("newBookButton");

const myLibrary = [];

// Creating a constructor function to create book objects, that will be added to myLibrary array
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readToggle = function() {
    if (this.read == "Yes"){
        this.read = "No";
        console.log(this.read);
    } else {
        this.read = "Yes";
        console.log(this.read);
    };
  };

// Creating instances of book objects that will load along with the page
const book1 = new Book("Alistair Maclean", "Guns of Navarone", 200, "Yes");
const book2 = new Book("Alistair Maclean", "Where Eagles Dare", 250, "Yes");
const book3 = new Book("Alistair Maclean", "Fear is the Key", 270, "No");

console.log(myLibrary)

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

console.log(myLibrary)

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
}

// event listener to show input form window
newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

// event listener to close form window
closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

// event listener to update array with new book info and add card with the new book details 
submit.addEventListener("click", (event) => {

    event.preventDefault();

    // taking values entered in the input form and assigning them to variables
    const newlyProvidedAuthor = document.getElementById("author").value;
    const newlyProvidedTitle = document.getElementById("title").value;
    const newlyProvidedNumberOfPages = document.getElementById("numberOfPages").value;
    const newlyProvidedRead = document.getElementById("read").value;

    // using input values as parameters in addBookToLibrary function
    addBookToLibrary(newlyProvidedAuthor, newlyProvidedTitle, newlyProvidedNumberOfPages, newlyProvidedRead)
    addBookCard()
    dialog.close();
    console.log(myLibrary)
});


for (let book = 0; book < myLibrary.length; book++){
    // for each object in myLibrary array, creating a div
    const newDiv = document.createElement("div");

    // create text divs to hold book information 
    const textDiv1 = document.createElement("div");
    const textDiv2 = document.createElement("div");
    const textDiv3 = document.createElement("div");
    const textDiv4 = document.createElement("div");
    // const textDivIndex = document.createElement("div");
    // const textDivId = document.createElement("div");

    // add the text to the newly created text divs
    textDiv1.appendChild(document.createTextNode("Author: " + myLibrary[book].author));
    textDiv2.appendChild(document.createTextNode("Title: " + myLibrary[book].title + " "));
    // textDiv3.appendChild(document.createTextNode("Number of Pages: " + myLibrary[book].pages + " "));
    textDiv3.innerText = ("Number of Pages: " + myLibrary[book].pages + " ");
    // textDiv4.appendChild(document.createTextNode("Read Status: " + myLibrary[book].read + " "));
    textDiv4.innerText = ("Read Status: " + myLibrary[book].read + " ");
    // textDivIndex.appendChild(document.createTextNode(book));
    // textDivId.appendChild(document.createTextNode("rmid: "+book));

    // Adding an id to read div so as to call it in the eventlistener for the readtoggle button
    textDiv4.className = "readDiv";

    const textDivMain = document.createElement("div");
    const buttonDivMain = document.createElement("div");


    textDivMain.className = "textMainDiv";

    // add textdivs to textDivMain
    textDivMain.appendChild(textDiv1);
    textDivMain.appendChild(textDiv2);
    textDivMain.appendChild(textDiv3);
    textDivMain.appendChild(textDiv4);
    // textDivMain.appendChild(textDivIndex);
    // textDivMain.appendChild(textDivId);


    // adding toggle button
    const readToggleButton = document.createElement("button");
    readToggleButton.appendChild(document.createTextNode("Read Toggle"));
    readToggleButton.style.marginLeft = ".75em";
    readToggleButton.className = "readToggle";
    readToggleButton.id = "rt"+book;
    readToggleButton.style.backgroundColor = "#A7BEAE";
    readToggleButton.style.padding = "5px";
    readToggleButton.style.fontWeight = "700";
    readToggleButton.style.borderRadius = "5px";

    // Appending readToggleButton to textDivMain
    textDivMain.appendChild(readToggleButton);

    textDivMain.style.marginTop = "1em";
    textDivMain.style.marginBottom = "1em";

    // add textDivMain to new Div
    newDiv.appendChild(textDivMain);

    // adding remove button
    const removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Remove Book"));
    removeButton.style.marginLeft = ".75em";
    removeButton.className = "rm";
    removeButton.id = "rm"+book;
    removeButton.style.backgroundColor = "#A7BEAE";
    removeButton.style.padding = "5px";
    removeButton.style.fontWeight = "700";
    removeButton.style.borderRadius = "5px";

    // add removeButton and readToggleButton to buttonDivMain, and buttonDivMain to new Div
    buttonDivMain.appendChild(removeButton);
    
    // Aligning content within the div
    buttonDivMain.style.display = "flex";
    buttonDivMain.style.justifyContent = "flex-start";
    buttonDivMain.style.alignItems = "flex-end";
    buttonDivMain.style.width = "100%";
    buttonDivMain.style.height = "30%";

    newDiv.appendChild(buttonDivMain);
    
    // add the card Div and its contents into the parent
    mainContainer.appendChild(newDiv);
    // newDiv.style.backgroundColor = "rgb(255,235,205)";
    
    // Aligning content within the div
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";

    newDiv.className = "cardDiv";
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
        // const textDivIndex = document.createElement("div");
        // const textDivId = document.createElement("div");

        // add the text to the newly created text divs
        textDiv1.appendChild(document.createTextNode("Author: " + myLibrary[newBook].author + " "));    
        textDiv2.appendChild(document.createTextNode("Title: " + myLibrary[newBook].title + " "));
        textDiv3.appendChild(document.createTextNode("Number of Pages: " + myLibrary[newBook].numberOfPages + " "));
        textDiv4.appendChild(document.createTextNode("Read Status: " + myLibrary[newBook].read + " "));
        // textDivIndex.appendChild(document.createTextNode(newBook));
        // textDivId.appendChild(document.createTextNode("rmid: "+newBook));

        const textDivMain = document.createElement("div");
        const buttonDivMain = document.createElement("div");

        textDivMain.className = "textMainDiv";

        // add textdivs to textDivMain
        textDivMain.appendChild(textDiv1);
        textDivMain.appendChild(textDiv2);
        textDivMain.appendChild(textDiv3);
        textDivMain.appendChild(textDiv4);
        // textDivMain.appendChild(textDivIndex);
        // textDivMain.appendChild(textDivId);

        // adding toggle button
        const readToggleButton = document.createElement("button");
        readToggleButton.appendChild(document.createTextNode("Read Toggle"));
        readToggleButton.style.marginLeft = ".75em";
        readToggleButton.className = "readToggle";
        readToggleButton.id = "rt"+newBook;
        readToggleButton.style.backgroundColor = "#A7BEAE";
        readToggleButton.style.padding = "5px";
        readToggleButton.style.fontWeight = "700";
        readToggleButton.style.borderRadius = "5px";

        // Appending readToggleButton to textDivMain
        textDivMain.appendChild(readToggleButton);

        textDivMain.style.marginTop = "1em";
        textDivMain.style.marginBottom = "1em";

        // add textDivMain to new Div
        newDiv.appendChild(textDivMain);

        // adding remove button
        const removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("Remove Book"));
        removeButton.style.marginLeft = ".75em";
        removeButton.className = "rm";
        removeButton.id = "rm"+newBook;
        removeButton.style.backgroundColor = "#A7BEAE";
        removeButton.style.padding = "5px";
        removeButton.style.fontWeight = "700";
        removeButton.style.borderRadius = "5px";    

        // add removeButton to buttonDivMain, and buttonDivMain to new Div
        buttonDivMain.appendChild(removeButton);

        // Aligning content within the div
        buttonDivMain.style.display = "flex";
        buttonDivMain.style.justifyContent = "flex-start";
        buttonDivMain.style.alignItems = "flex-end";
        buttonDivMain.style.width = "100%";
        buttonDivMain.style.height = "30%";


        newDiv.appendChild(buttonDivMain);

        
        // add the card Div and its contents into the parent
        mainContainer.appendChild(newDiv);
        // newDiv.style.backgroundColor = "rgb(255,235,205)";
        
        // Aligning content within the div
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "column";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";

        newDiv.className = "cardDiv";
    }
}

document.addEventListener('click', function(event) {
    if (event.target.className == "rm") {
      let cardDiv = event.target.closest('.cardDiv');
      cardDiv.remove();
    
    let children = document.getElementsByClassName('rm');
    console.log(children)
    for (let i = 0; i < children.length;i++){
        console.log(9);
        (children[i].id="rm"+i);
    }

    let rtchildren = document.getElementsByClassName('readToggle');
    console.log(rtchildren)
    for (let i = 0; i < rtchildren.length;i++){
        console.log(9);
        (rtchildren[i].id="rt"+i);
    }

    let concernedDivId = event.target.id; 
    let indexIdentifier = concernedDivId.slice(2); // removing rm from remove button's id gives index number of object to remove in the array
    let removedBook = myLibrary.splice(indexIdentifier, 1);
    console.log(myLibrary);
    }
  });

document.addEventListener('click', function(event) {
if (event.target.className == "readToggle") {

    // The below 2 lines to change the color of the card isn't working.
    // let cardiDiv = event.target.closest('.cardDiv');
    // cardiDiv.classList.toggle("cardDivBlue");
    
    //   Updating the read status in the library 
    let concernedDivId2 = event.target.id; 
    let indexIdentifier2 = concernedDivId2.slice(2); // removing rm from remove button's id gives index number of object to remove in the array
    myLibrary[indexIdentifier2].readToggle();
    
    let textMainDiv = event.target.closest('.textMainDiv');
    let readDiv = textMainDiv.children[3];
    readDiv.innerText = "Read Status: " + myLibrary[indexIdentifier2].read + " ";
    
    console.log(myLibrary[indexIdentifier2]);
}
});