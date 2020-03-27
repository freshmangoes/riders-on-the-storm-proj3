import { createContext } from 'react';

export const UserLoggedInContext = createContext({
	userLoggedIn: false,
	setUserLoggedIn: () => {}
});
