import { useState, useEffect } from 'react';

export const useFetch = (url, headers) => {
	const [data, setData] = useState({
		data: [],
		fetched: false,
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const response = await fetch(url, headers);
				if (response.status === 200) {
					const data = await response.json();
					setData({ data: data, fetched: true });
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				setData({ fetched: false });
				throw error;
			}
		};

		url && getData();
	}, [url]);

	return { data, setData, loading, setLoading };
};
