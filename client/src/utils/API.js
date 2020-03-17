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
        return axios.post("/api/search", userInput);
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

    const getComboData = async (search, radius) => {
        // async function to get weather data
        const getWeather = async (search) => {
            // city search parameter
            const city = search;
            // api key from dotenv
            const apiKey = process.env.openWeather;
            // get url for weather
            //  uses a search for a city
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
            // initialize data to be returned at the end
            let data;
            // es8 form factor promise to get data from api
            try {
                data = await axios.get(weatherUrl);
            } catch (err) {
                console.error('err::', err);
            }
            // return relevant json from data
            return data.data;
        };
        
};
