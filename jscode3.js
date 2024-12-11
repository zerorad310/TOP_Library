const newBookButton = document.getElementById("newBookButton");
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("closeButton");
// const submitButton = document.getElementById("submitButton");
const submit = document.getElementById("submit")
const mainContainer = document.getElementById("mainContainer");



const myLibrary = [{
    "author":"Alistair Maclean", 
    "title":"Guns of Navarone",
    "numberOfPages":200,
    "read":"Yes",
    "rmId":"rmid0"
}, {
    "author":"Alistair Maclean", 
    "title":"Where Eagles Dare",
    "numberOfPages":250,
    "read":"Yes",
    "rmId":"rmid1"
}, {
    "author":"Alistair Maclean", 
    "title":"Fear is the Key",
    "numberOfPages":270,
    "read":"Yes",
    "rmId":"rmid2"
}, {
    "author":"Fredrick Forsyth", 
    "title":"The Day of the Jackal",
    "numberOfPages":237,
    "read":"Yes",
    "rmId":"rmid3"
}, {
    "author":"Fredrick Forsyth", 
    "title":"Icon",
    "numberOfPages":300,
    "read":"Yes",
    "rmId":"rmid4"
}, {
    "author":"Ayn Rand", 
    "title":"The Fountainhead",
    "numberOfPages":232,
    "read":"Yes",
    "rmId":"rmid5"
}, {
    "author":"Agatha Christie", 
    "title":"Death on the Nile",
    "numberOfPages":654,
    "read":"Yes",
    "rmId":"rmid6"
}, {
    "author":"Agatha Christie", 
    "title":"The Big Four",
    "numberOfPages":456,
    "read":"Yes",
    "rmId":"rmid7"
}, {
    "author":"Agatha Christie", 
    "title":"The Secret Adversary",
    "numberOfPages":241,
    "read":"Yes",
    "rmId":"rmid8"
}, {
    "author":"Agatha Christie", 
    "title":"The Missing Will",
    "numberOfPages":406,
    "read":"Yes",
    "rmId":"rmid9"
}
];

// event listener to load cards upon page load 
window.addEventListener("load", (event) => {
    createBookCards();
  });

// event listener to load new book form 
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
    mainContainer.innerHTML = '';
    Book();
    createBookCards();
    dialog.close();
});


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
    inputArray.rmId = "rmid"+myLibrary.length;

    myLibrary.push(inputArray);
}

function createBookCards(){
    for (let book = 0; book < myLibrary.length; book++){
        // for each object in myLibrary array, creating a div
        const newDiv = document.createElement("div");

        // create text divs to hold book information 
        const textDiv1 = document.createElement("div");
        const textDiv2 = document.createElement("div");
        const textDiv3 = document.createElement("div");
        const textDiv4 = document.createElement("div");
        const textDivIndex = document.createElement("div");
        const textDivId = document.createElement("div");

        // add the text to the newly created text divs
        textDiv1.appendChild(document.createTextNode("Author: " + myLibrary[book].author));
        textDiv2.appendChild(document.createTextNode("Title: " + myLibrary[book].title + " "));
        textDiv3.appendChild(document.createTextNode("Number of Pages: " + myLibrary[book].numberOfPages + " "));
        textDiv4.appendChild(document.createTextNode("Read Status: " + myLibrary[book].read + " "));
        textDivIndex.appendChild(document.createTextNode(book));
        textDivId.appendChild(document.createTextNode("rmid: "+book));
        
        textDiv1.style.width = "100%";

        const textDivMain = document.createElement("div");
        const buttonDivMain = document.createElement("div");

        // add textdivs to textDivMain
        textDivMain.appendChild(textDiv1);
        textDivMain.appendChild(textDiv2);
        textDivMain.appendChild(textDiv3);
        textDivMain.appendChild(textDiv4);
        // textDivMain.appendChild(textDivIndex);
        // textDivMain.appendChild(textDivId);

        textDivMain.style.marginTop = "1em";
        textDivMain.style.marginBottom = "1em";

        // add textDivMain to new Div
        newDiv.appendChild(textDivMain);

        // adding remove button
        const removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("Remove Book"));
        removeButton.style.marginLeft = ".75em";
        removeButton.className = "rm";
        removeButton.Id = "rm"+book;
        removeButton.style.backgroundColor = "#A7BEAE";
        removeButton.style.padding = "5px";
        removeButton.style.fontWeight = "700";
        removeButton.style.borderRadius = "5px";


        // adding toggle button
        const readToggleButton = document.createElement("button");
        readToggleButton.appendChild(document.createTextNode("Read Toggle"));
        readToggleButton.style.marginLeft = ".75em";
        readToggleButton.className = "readToggle";
        readToggleButton.Id = "rt"+book;
        readToggleButton.style.backgroundColor = "#A7BEAE";
        readToggleButton.style.padding = "5px";
        readToggleButton.style.fontWeight = "700";
        readToggleButton.style.borderRadius = "5px";

        // add removeButton and readToggleButton to buttonDivMain, and buttonDivMain to new Div
        buttonDivMain.appendChild(removeButton);
        buttonDivMain.appendChild(readToggleButton);
        

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
        // newDiv.style.backgroundColor = "rgb(255,235,205)";
        
        // Aligning content within the div
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "column";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";

        newDiv.className = "cardDiv";
        // newDiv.Id = "cardDivId"+book;
    }
}

document.addEventListener('click', function(event) {
    if (event.target.className == "rm") {
      let cardDiv = event.target.closest('.cardDiv');
      cardDiv.remove();

      let concernedDivId = event.target.Id; 
      let indexIdentifier = concernedDivId.slice(2); // removing rm from remove button's id gives index number of object to remove in the array
      let removedBook = myLibrary.splice(indexIdentifier, 1);
      updateLibraryRmIds();
      mainContainer.innerHTML = '';
      createBookCards();
    }
  });

document.addEventListener('click', function(event) {
    if (event.target.className == "readToggle") {

        // The below 2 lines to change the color of the card isn't working.
        // let cardiDiv = event.target.closest('.cardDiv');
        // cardiDiv.classList.toggle("cardDivBlue");
      
        //   Updating the read status in the library 
        let concernedDivId2 = event.target.Id; 
        let indexIdentifier2 = concernedDivId2.slice(2); // removing rm from remove button's id gives index number of object to remove in the array
        if (myLibrary[indexIdentifier2].read == "Yes"){
            myLibrary[indexIdentifier2].read = "No";
        } else {
            myLibrary[indexIdentifier2].read = "Yes";
        }
        //   Updating the cards
        mainContainer.innerHTML = '';
        createBookCards();
      
    }
  });


function updateLibraryRmIds() {
    for (let card = 0; card < myLibrary.length; card++){
        myLibrary[card].rmId = "rmid"+card;
}
}