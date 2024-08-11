import useWindowDimensions from '@/hooks/useWindowDimensions';
import StackElem from './StackElem';
import ProjectLinkElem from './ProjectLinkElem';
import { Project, ProjectLink } from '@/types';

const ProjectCard = ({
	img,
	title,
	content,
	stack,
	links,
	index,
	hoveredProject,
}: Project & { index: number; hoveredProject: number | null }) => {
	const { height, width } = useWindowDimensions();

	let imgClassName =
		width! >= 1200
			? `absolute bottom-0 rounded ${
					index === hoveredProject ? 'img-fade-in' : 'img-fade-out'
			  } ${index === hoveredProject ? 'opacity-100' : 'opacity-0'}`
			: 'rounded';

	let contentWrapperClassName =
		width! >= 1200
			? `absolute top-0 w-full min-h-[250px] mt-6 rounded border border-light-100 p-4 flex flex-col justify-between gap-4 ${
					index === hoveredProject ? 'img-fade-in' : 'img-fade-out'
			  } ${
					index === hoveredProject
						? 'translate-x-0'
						: 'translate-x-[-5000px]'
			  } ${index === hoveredProject ? 'opacity-100' : 'opacity-0'}`
			: 'w-full min-h-[250px] mt-2 rounded border border-light-100 p-4 flex flex-col justify-between gap-4';

	if (width) {
		return (
			<div
				className={`${
					width >= 1200 ? 'relative' : 'flex flex-col pb-12'
				}`}
			>
				<img
					src={img}
					className={imgClassName}
					alt={`${title} image`}
				/>
				<div className={contentWrapperClassName}>
					<h3 className='text-2xl font-bold tracking-widest'>
						{title}
					</h3>
					<p>{content}</p>
					<ul className='flex flex-wrap items-center gap-2'>
						{stack.map((stack: string, stackIndex: number) => (
							<StackElem stack={stack} key={stackIndex} />
						))}
					</ul>
					<div className='flex justify-between items-center '>
						{links.map((link: ProjectLink, linkIndex: number) => (
							<ProjectLinkElem link={link} key={linkIndex} />
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default ProjectCard;
