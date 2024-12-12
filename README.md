# Library Management Project

## **Assignment Description**

The goal of the assignment was to build a web-based library management application where users can:
- View a collection of books.
- Add new books to the library via a form.
- Toggle the `read` status of a book.
- Remove books from the library.

The focus was on implementing object constructors and prototypes to create and manage books, demonstrating foundational object-oriented programming concepts.

---

## **Approach**

1. **Initial Approach:**
   - Books were created manually using plain objects.
   - DOM manipulation was coupled directly with data creation, leading to redundancy and inefficiency.

2. **Revised Approach:**
   - Implemented a `Book` constructor to standardize book creation.
   - Used prototypes to define shared behaviors, such as toggling the `read` status.
   - Decoupled data handling from DOM manipulation for better modularity and scalability.

---

## **Components**

1. **HTML:**
   - Provides the structure for the webpage, including:
     - Form for adding new books.
     - A container to display the library.
     - Buttons for toggling and removing books.

2. **CSS:**
   - Styles the webpage and provides a clean, responsive design for the library.

3. **JavaScript:**
   - Handles the logic for:
     - Creating books using the constructor.
     - Managing the `myLibrary` array.
     - Synchronizing the library data with the DOM.
     - Adding dynamic functionalities (e.g., toggling `read` status, removing books).

---

## **Functionalities**

1. **View Library:**
   - Display all books stored in the `myLibrary` array dynamically on the webpage.

2. **Add New Book:**
   - Fill out a form to add a new book to the library.
   - Automatically updates both the array and the DOM.

3. **Toggle Read Status:**
   - Use a button to toggle the `read` status of a book.
   - Updates the corresponding object and reflects the change in the DOM.

4. **Remove Book:**
   - Use a button to remove a book from both the `myLibrary` array and the DOM.
   - Dynamically reassigns IDs to maintain synchronization between data and the UI.

