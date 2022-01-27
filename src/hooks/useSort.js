import { useState, useEffect } from 'react';

export const useSort = (data) => {
	const arrayToSort = [...data];
	const [sortState, setSortState] = useState({
		data: [],
	});

	useEffect(() => {
		sortState.data.length === 0 && setSortState({ data });
	}, [sortState.data.length, data]);

	const sortElements = (filter) => {
		const productFilters = {
			default: () => data,
			ascending: () => arrayToSort.sort((a, b) => a.poin - b.poin),
			descending: () => arrayToSort.sort((a, b) => b.poin - a.poin),
		};
		setSortState({ data: productFilters[filter]() });
		
	};
	
	return { sortElements, sortState };
};
