'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import useSWR from 'swr';
import Card from '@/UI/Card';
import Loader from './Loader';
import { UpdatedSearchParamsType, CardType } from '@/types';
import { fetcher } from '@/utils/fetcher';

const CardListSwiper = ({ page, category }: UpdatedSearchParamsType) => {
	const { data, mutate, isLoading } = useSWR(
		`https://ainspiring.netlify.app/api/posts?page=1&cat=${category || ''}`,
		fetcher,
	);

	return (
		<>
			{isLoading && <Loader />}
			<section className='overflow-hidden py-10 border-y-2 border-secondary-200'>
				<h3 className='text-lg md:text-2xl font-bold mb-20'>Latest Posts</h3>
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
						{data?.posts?.map((card: CardType, index: number) => (
							<SwiperSlide key={index}>
								<div className='flex flex-col gap-6 relative group w-full h-[410px]'>
									<Card {...card} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default CardListSwiper;
