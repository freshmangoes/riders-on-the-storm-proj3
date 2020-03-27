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

	getWeather: async (search) => {
		const { lat, lon } = search;
		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
		return axios.get(weatherUrl);
	}
};
