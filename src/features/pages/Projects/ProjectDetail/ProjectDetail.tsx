import './ProjectDetail.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useLocation, useNavigate} from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {Project} from '../../../../types/project';
import Badge from '../../../../common/sharedComponents/Badge/Badge';
import {Carousel} from 'react-responsive-carousel';
import {useAppSelector} from '../../../../app/hooks';
import {useEffect} from 'react';
import {animateScroll} from 'react-scroll';

const ProjectDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let project: Project | undefined = location.state;
    if (!project) {
        const data = useAppSelector(state => state.info.data);
        project = data?.projects?.find(item => item.id === location.pathname.split('/')[2]);
    }

    let videoSrc;
    if (project?.videoPath) {
        videoSrc = require(`../../../../assets/videos/${project.videoPath}`);
    }

    useEffect(() => {
        animateScroll.scrollToTop({
            smooth: true,
            duration: 500
        });
    }, []);
    return !project ? null : <section className="py-5 mx-5 lg:mx-0">
        <header className="project-detail flex flex-row items-center mb-10">
            <button type="button"
                    className="w-10 h-10 mr-2 p-2 text-xl rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700"
                    onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <h1 className="title text-4xl font-semibold col-start-1 col-span-1 text-slate-900 dark:text-white">{project.name}</h1>
        </header>

        {videoSrc ?
            <div className="video-wrapper flex justify-center">
                <video width="750" height="500" autoPlay={true} controls>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div> : null}

        <article>
            <h2 className="font-semibold text-xl py-2">Description:</h2>
            <div className="description">
                <ul>
                    {project?.details?.description?.map((item, index) =>
                        (<li key={index}><p>{item}</p></li>)
                    )}
                </ul>
            </div>
            <h2 className="font-semibold text-xl py-2 mt-5">Tech Stack:</h2>
            <ul className="flex flex-row flex-wrap  md:w-1/2">
                {project.skills?.map((skill, index) => (
                    <li key={index}><Badge imageSrc={skill.logo} name={skill.name}/></li>
                ))}
            </ul>
            <h2 className="font-semibold text-xl py-2 mt-5">Screenshots:</h2>
            <Carousel className="py-2" showArrows={true}>
                {project.images?.map((item, index) => {
                    const image = require(`../../../../assets/images/${item.imageName}`);
                    return (<div key={index}>
                        <img alt={item.title} src={image}/>
                        <p className="legend">{item.title}</p>
                    </div>);
                })}
            </Carousel>
        </article>
    </section>;
};

export default ProjectDetail;
