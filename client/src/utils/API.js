import axios from 'axios';

export default {
	// Try to Login
	userLogin: (userData) => {
		return axios.post('/api/users/login', userData);
	},
	userRegister: (userData) => {
		return axios.post('/api/users/register', userData);
	},
	userInput: (userInput) => {
		return axios.post('/api/search/search', userInput);
	},
	pastSearches: (id) => {
		return axios.get(`/api/search/findById/${id}`);
	},



    },
    userInput: (userInput) => {
        return axios.post("/api/search/search", userInput);

    },
    pastSearches: (id) => {
        return axios.get(`/api/search/findById/${id}`);

    },


    getWeather: (search) => {
        // lat and lon search parameter
        const { lat, lon } = search;
        // get url for weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
        // initialize data to be returned at the end
        return axios.get(weatherUrl)
    }
}

