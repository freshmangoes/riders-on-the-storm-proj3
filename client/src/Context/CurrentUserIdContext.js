import { createContext } from 'react';

export const CurrentUserIdContext = createContext({
	currentUserId: '',
	setCurrentUserId: () => {}
});
