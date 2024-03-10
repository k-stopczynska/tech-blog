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
}: Project & { index: number; hoveredProject: number | null }) => (
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
			<h3 className='text-2xl font-bold tracking-widest'>{title}</h3>
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

export default ProjectCard;
