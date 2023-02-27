export interface CatalogPageType {
	catalogPage: {
		catalogList: {
			id: number,
			title: string,
			photoImgJpeg: string,
			photoImgWebp: string,
		}[],

		catalogListDown: {
			id: number,
			title: string,
			photoImgJpeg: string,
			photoImgWebp: string,
		}[]
	}
}


export interface NavCategoryType {
		headerNavPage: {
			id: number;
			text: string;
		}[],
	
		dropDownMenu: {
			id: number,
			name: string
		}[],
}



export type UserAction = CatalogPageType | NavCategoryType;










