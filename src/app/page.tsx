import CardList from '@/components/CardList';
import Hero from '@/components/Hero';
import { SearchParamsType } from '@/types';

export default function Home({
	searchParams,
}: {
	searchParams: SearchParamsType;
}) {
	const page = parseInt(searchParams.page) || 1;
	const { category } = searchParams;
	return (
		<>
			<Hero />
			<CardList page={page} category={category} />
		</>
	);
}
