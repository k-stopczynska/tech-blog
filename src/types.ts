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
	createdAt: Date;
	user: { name: string; email: string; image: string };
	img: string;
	categorySlug: CategorySlug;
};

type CardUpdateType = {
	_id: string;
	slug: string;
	key: string;
};

export type UpdatedSearchParamsType = {
	[K in keyof SearchParamsType]: K extends 'page'
		? number
		: SearchParamsType[K];
};

export type CardType = PostType & CardUpdateType;

export type CommentType = Pick<CardType, 'user' | 'createdAt' | 'desc' | '_id'>;
