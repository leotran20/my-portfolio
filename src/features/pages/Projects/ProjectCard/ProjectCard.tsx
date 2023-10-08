import './ProjectCard.css';
import {useNavigate} from 'react-router-dom';
import {Project} from '../../../../types/project';

type Props = {
    className?: string,
    project: Project
}

export default function ProjectCard({className, project}: Props) {
    const navigate = useNavigate();
    const image = require(`../../../../assets/images/${project.imageName}`);

    return (
        <section className={`w-full card-wrapper grid-flow-col items-center ${className}`}>
            <article className="role uppercase col-start-1 row-start-1 col-span-1 lg:col-end-3 py-2 m-0 tracking-widest">Full Stack Developer
            </article>
            <h1 className="text-4xl lg:text-5xl font-semibold col-start-1 col-span-1 text-slate-900 dark:text-white">{project.name}</h1>
            <ul className="skill-list col-start-1 col-span-1 flex flex-row flex-wrap xl:w-1/2">
                {
                    project.skills?.map((skill, index) => (
                        <li key={index}><img className="h-12 p-2" alt={skill.name} src={skill.logo}/></li>
                    ))
                }

            </ul>
            <p className="description col-start-1 col-span-1">
                {project.description}
            </p>
            <button className="see-project-button col-start-1 col-span-1 h-fit w-fit" type="button"
                    onClick={() => {
                        navigate(`/projects/${project.id}`, {state: project});
                    }}>
                View Project
            </button>

            <div className="col-start-1 row-start-3 lg:col-start-2 col-span-1 row-span-1 lg:row-span-4 ">
                <picture className="flex justify-center">
                    <img alt={project.name} src={image} className="max-w-lg object-contain"/>
                </picture>
            </div>
        </section>
    );
}
