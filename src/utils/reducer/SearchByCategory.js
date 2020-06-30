export const SearchByCategory = (state = [], action) => {
	switch (action.type) {
		case 'ALL':
			return (state = action.payload);
		case 'FISH':
			return (state = action.payload);
		case 'INGREDIENT':
			return (state = action.payload);
		case 'VEGETABLES':
			return (state = action.payload);
		case 'MEAT':
			return (state = action.payload);
		case 'FOODSTUFFS':
			return (state = action.payload);
		case 'FRUITS':
			return (state = action.payload);
		default:
			break;
	}
};
