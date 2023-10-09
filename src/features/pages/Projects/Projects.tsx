import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import {useAppSelector} from '../../../app/hooks';

const Projects = () => {
    const data = useAppSelector(state => state.info.data);
    const projects = data.projects || [];


    return (
        <div id="projects" className="w-full px-5 lg:px-0">
            <h2 className="title w-fit hover-transition text-slate-900 dark:text-white mt-5 mb-5 text-4xl font-semibold z-0">
                Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-5 text-lg">Here are some of the freelance
                projects I&apos;ve been actively involved in:</p>
            <ul className="w-full mt-10">
                {
                    projects?.map((project, index: number) => {
                        return (<li key={index} className="w-full">
                                <ProjectCard className="m-auto"
                                             project={project}/></li>
                        );
                    })
                }
            </ul>
        </div>
    );
};


export default Projects;
