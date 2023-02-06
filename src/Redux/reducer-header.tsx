let NAVIGATE_LIST_CATEGORY = 'NAVIGATE_LIST_CATEGORY';

type initState = {
	navigation: string[]
}

let initialState:initState = {
	navigation: ['навигация', 'категории', 'наши коллекции', 'покупателям', 'о бренде', 'шоурум', 'контакты']
}


function reducer(state = initialState, action:any) {

	switch (action.type) {
		case NAVIGATE_LIST_CATEGORY:
			return {

			}
	}
}




export default reducer;