import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import {useAppSelector} from '../../../app/hooks';
import React from 'react';

const Projects = () => {
    const data = useAppSelector(state => state.info.data);
    const projects = data.projects || [];
    const sections = [
        {
            intro: 'Here are some of the freelance projects I\'ve been actively involved in:',
            type: 'freelance'
        },
        {
            intro: 'Here are my school projects',
            type: 'school'
        },
        {
            intro: 'Here are my personal projects',
            type: 'personal'
        }
    ];


    return (
        <section id="projects" className="w-full px-5 lg:px-0">
            <h1 className="title w-fit hover-transition text-slate-900 dark:text-white mt-5 mb-5 text-4xl font-semibold z-0">
                Projects
            </h1>
            {
                sections.map((section, index) => {
                    const appropriateProjects = projects?.filter(i => !i.hide && i.type === section.type);
                    return (
                        appropriateProjects?.length ?
                        <React.Fragment key={index}>
                            <p className="text-slate-500 dark:text-slate-400 mt-10 text-lg">{section.intro}</p>
                            <ul className="w-full mt-5 relative project-list">
                                {
                                    appropriateProjects.map((project, index: number) => {
                                        return (<li key={index} className="w-full">
                                                <ProjectCard className="m-auto"
                                                             project={project}/></li>
                                        );
                                    })
                                }
                            </ul>
                        </React.Fragment> : null
                    );
                })
            }
        </section>
    );
};


export default Projects;
