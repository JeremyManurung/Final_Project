import { useState, createContext,useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const AppContext = createContext();

function AppProvider({ children }) {
	const [currentPoints, setCurrentPoints] = useState({ points: 0});
	const headers = {
		'Content-Type': 'application/json',
		// Accept: 'application/json',
		Authorization:
		localStorage.getItem('token'),
	};

	const [loadingPoin, setLoadingPoin] = useState(false)


	const { data: history } = useFetch(
		`http://3.21.75.144:8080/user/history`,
		{ headers }
	);

	const { data: user} = useFetch(
		`http://3.21.75.144:8080/user/Profile`,
		{ headers },
		loadingPoin
	);

	const { data: products } = useFetch(
		`http://3.21.75.144:8080/viewRedem`,
		{ headers }
	);

	const { data: reedem } = useFetch(
		`http://3.21.75.144:8080/viewProduct`,
		{ headers }
	);
	// const {
	// 	data: redeem,
	// 	setData: setRedeem,
	// } = useFetch(
	// 		`http://localhost:9000/user/userRedem`,
	// 	{ method: 'POST', headers }
	// );


	// console.log("tes",products)
	return (
		<AppContext.Provider
			value={{
				user,
				history,
				headers,
				reedem,
				products,
				currentPoints,
				loadingPoin,
				setLoadingPoin,
				setCurrentPoints,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
