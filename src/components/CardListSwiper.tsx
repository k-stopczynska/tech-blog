'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import useSWR from 'swr';
import Card from '@/UI/Card';
import PaginationComp from '@/components/Pagination';
import { UpdatedSearchParamsType, CardType } from '@/types';
import { fetcher } from '@/utils/fetcher'


const CardListSwiper = ({ page, category }: UpdatedSearchParamsType) => {
	const { data, mutate, isLoading } = useSWR(
		`http://localhost:3000/api/posts?page=${page}&cat=${category || ''}`,
		fetcher,
	);

		const POSTS_PER_PAGE = 7;
		const hasPrev = POSTS_PER_PAGE * (+page - 1) > 0;
		const hasNext =
			POSTS_PER_PAGE * (+page - 1) + POSTS_PER_PAGE < data?.count;

	return (
		<section className='overflow-hidden py-10 border-y-2 border-secondary-200'>
			<h3 className='text-lg md:text-2xl font-bold mb-20'>Posts</h3>
			<div className='flex items-center justify-center flex-col gap-6 h-[100%] w-full '>
				<Swiper
					breakpoints={{
						340: {
							slidesPerView: 1,
							spaceBetween: 15,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						1000: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
					}}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}
					className='w-full gap-6 h-[500px]'
				>
					{data?.posts?.map((card: CardType) => (
						<SwiperSlide>
							<div
								className='flex flex-col gap-6 relative group w-full
	h-[500px]'
								key={card._id}
							>
								<Card {...card} key={card._id} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<PaginationComp page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</section>
	);
};

export default CardListSwiper;
