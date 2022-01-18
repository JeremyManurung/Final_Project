import { useState, createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const AppContext = createContext();

function AppProvider({ children }) {
	const [currentPoints, setCurrentPoints] = useState({ points: 0});
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIlJvbGUiOiJ1c2VyIiwiZXhwIjoxNjQyNjczMDU5fQ.NZM9dVrrj_HKP4mrv-RjPq_anhCBhhlCuborz7ygE8o',
	};

	const { data: user} = useFetch(
		`http://localhost:9000/user/Profile`,
		{ headers }
	);

	const { data: products } = useFetch(
		`http://localhost:9000/viewRedem`,
		{ headers }
	);

	// console.log("tes",products)
	return (
		<AppContext.Provider
			value={{
				user,
				products,
				currentPoints,
				setCurrentPoints,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
