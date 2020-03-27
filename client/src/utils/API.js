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

    },
    pastSearches: (id) => {
        return axios.get(`/api/search/findById/${id}`);

    },
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

    getWeather: (search) => {
        // lat and lon search parameter
        const { lat, lon } = search;
        // get url for weather
        const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
        // initialize data to be returned at the end
        return axios.get(weatherUrl)
    }
}