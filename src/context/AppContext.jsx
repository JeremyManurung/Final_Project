import { useState, createContext,useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const AppContext = createContext();

function AppProvider({ children }) {
	const [currentPoints, setCurrentPoints] = useState({ points: 0});
	const headers = {
		'Content-Type': 'application/json',
		// Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjIsIlJvbGUiOiJ1c2VyIiwiZXhwIjoxNjQyOTA5ODM4fQ.eHK_xDL1YIKtCw5N5KcAZbI5KQv9KLnpBIrvUHqs5J0',
	};

	const [loadingPoin, setLoadingPoin] = useState(false)


	const { data: history } = useFetch(
		`http://localhost:9000/user/history`,
		{ headers }
	);

	const { data: user} = useFetch(
		`http://localhost:9000/user/Profile`,
		{ headers },
		loadingPoin
	);

	const { data: products } = useFetch(
		`http://localhost:9000/viewRedem`,
		{ headers }
	);

	const { data: reedem } = useFetch(
		`http://localhost:9000/viewProduct`,
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
