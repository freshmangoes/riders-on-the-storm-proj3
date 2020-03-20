import axios from "axios";

export default {
    // Try to Login
    userLogin: (userData) => {
        return axios.post("/api/users/login", userData);
    },
    userRegister: (userData) => {
        return axios.post("/api/users/register", userData);

    },
    userInput: (userInput) => {
        return axios.post("/api/search/search", userInput);
    }
    //   // Gets all books
    //   getBooks: function() {
    //     return axios.get("/api/books");
    //   },
    //   // Gets the book with the given id
    //   getBook: function(id) {
    //     return axios.get("/api/books/" + id);
    //   },
    //   // Deletes the book with the given id
    //   deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    //   },
    //   // Saves a book to the database
    //   saveBook: function(bookData) {
    //     return axios.post("/api/books", bookData);
    //   }
};
