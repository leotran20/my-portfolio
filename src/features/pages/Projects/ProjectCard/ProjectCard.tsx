import './ProjectCard.css';
import {useNavigate} from 'react-router-dom';
import {Project} from '../../../../types/project';
import {Tooltip} from 'react-tooltip';

type Props = {
    className?: string,
    project: Project
}

export default function ProjectCard({className, project}: Props) {
    const navigate = useNavigate();
    const image = require(`../../../../assets/images/${project.imageName}`);

    return (
        <section className={`w-full card-wrapper grid-flow-col items-center px-5 py-8 lg:px-10 ${className}`}>
            {project.role && <article
                className="role uppercase col-start-1 row-start-1 col-span-1 lg:col-end-3 py-2 m-0 tracking-widest">
                {project.role}
            </article>
            }
            <h1 className="text-4xl lg:text-5xl font-semibold col-start-1 col-span-1 text-slate-900 dark:text-white">{project.name}</h1>
            <ul className="skill-list col-start-1 col-span-1 flex flex-row flex-wrap xl:w-1/2">
                {
                    project.skills?.map((skill) => (
                        <>
                            <li key={skill.name}><img className="h-12 p-2" alt={skill.name} src={skill.logo}
                                                      data-tooltip-id={skill.name} data-tooltip-content={skill.name}/>
                            </li>
                            <Tooltip id={skill.name}/>
                        </>
                    ))
                }

            </ul>
            <p className="description col-start-1 col-span-1">
                {project.description}
            </p>

            <div className="flex flex-row justify-start items-center gap-7">
                <button className="see-project-button col-start-1 col-span-1 h-fit w-fit" type="button"
                        onClick={() => {
                            if (project.projectLink) {
                                window.open(project.projectLink);
                            } else {
                                navigate(`/projects/${project.id}`, {state: project});
                            }
                        }}>
                    View Project
                </button>
                {
                    project.githubLink &&
                    <button className="see-project-button col-start-1 col-span-1 h-fit w-fit" type="button"
                            onClick={() => {
                                window.open(project.githubLink);
                            }}>
                        View Github Repo
                    </button>
                }
            </div>

            <div className="col-start-1 row-start-3 lg:col-start-2 col-span-1 row-span-1 lg:row-span-4 ">
                <picture className="flex justify-center">
                    <img alt={project.name} src={image} className="w-full object-contain"/>
                </picture>
            </div>
        </section>
    );
}
