import Link from 'next/link';

const ProjectCard = ({
	img,
	title,
	content,
	stack,
	links,
	index,
	hoveredProject,
}: any) => (
	<div key={index} className='relative'>
		<img
			src={img}
			className={`absolute bottom-0 rounded ${
				index === hoveredProject ? 'img-fade-in' : 'img-fade-out'
			}`}
			style={{
				opacity: index === hoveredProject ? 1 : 0,
			}}
			alt={`${title} image`}
		/>
		<div
			className={`absolute top-0 w-full min-h-[250px] mt-6 rounded border border-light-100 p-4 flex flex-col justify-between gap-4 ${
				index === hoveredProject ? 'img-fade-in' : 'img-fade-out'
			}`}
			style={{
				translate: index === hoveredProject ? 0 : '-5000px',
				opacity: index === hoveredProject ? 1 : 0,
			}}
		>
			<h3 className='text-2xl font-bold tracking-widest'>
				{title}
			</h3>
			<p>{content}</p>
			<div className='flex flex-wrap items-center gap-2'>
				{stack.map((stack: string, stackIndex: number) => (
					<div
						key={stackIndex}
						className='py-1 px-2 text-sm bg-[#2B3E52] rounded shadow-md '
					>
						{stack}
					</div>
				))}
			</div>
			<div className='flex justify-between items-center '>
				{links.map((link: any, linkIndex: number) => (
					<Link
						key={linkIndex}
						href={link.url}
						target='_blank'
						className='shadow text-center rounded py-2 px-4'
					>
						{link.label}
					</Link>
				))}
			</div>
		</div>
	</div>
);

export default ProjectCard;
