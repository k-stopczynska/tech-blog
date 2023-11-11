export type CategoryType = {
	title: string;
	img: string;
};

export type SearchParamsType = {
	page: string;
	category: CategoryType;
};

type CategorySlug =
	| 'soft'
	| 'hard'
	| 'places'
	| 'materials'
	| 'lifestyle'
	| 'games'
	| 'hobbies';

export type PostType = {
	title: string;
	desc: string;
	createdAt: string;
	user: { name: string; email: string; img: string };
	img: string;
	categorySlug: CategorySlug;
};

type CardUpdateType = {
    _id: string;
    slug: string;
    key: string;
}


export type CardType = PostType & CardUpdateType