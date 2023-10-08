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

    useEffect(() => {
        animateScroll.scrollToTop({
            smooth: true,
            duration: 500
        });
    }, []);
    return !project ? null : (<section className="py-5">
        <header className="project-detail flex flex-row items-center mb-10">
            <button type="button"
                    className="w-10 h-10 mr-2 p-2 text-xl rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700"
                    onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <h1 className="title text-4xl font-semibold col-start-1 col-span-1 text-slate-900 dark:text-white">{project.name}</h1>
        </header>
        <article>
            <h2 className="font-semibold text-xl py-2">Description:</h2>
            <div className="description">
                <ul>
                    <li><p>I have developed a web application tailored for administrators and staff to efficiently
                        manage the system. This application was crafted using Angular, a powerful and versatile
                        framework.</p></li>

                    <li><p>I have also developed a cross-platform mobile application using
                        Flutter, empowering users to efficiently manage,
                        track, update, and stay informed about their orders
                        through timely notifications.</p></li>

                    <li><p>The mobile application is now available at <a target="_blank" rel="noreferrer"
                                                                         href="https://apps.apple.com/vn/app/llab-cskh/id1552044919">Apple
                        App Store</a> and <a target="_blank" rel="noreferrer"
                                             href="https://play.google.com/store/apps/details?id=com.llab.vn.client">Google
                        Play Store</a>,
                        ensuring broad accessibility to a global user base.</p></li>

                    <li><p>Developed a dynamic server using Node.js, used to store data and handle requests from the web
                        and mobile applications,
                        integrating key functionalities including a SendGrid-
                        powered mail sending service, Google API for
                        automated file sharing, scheduled cron jobs for push
                        notifications, secure authentication using JSON Web
                        Tokens (JWT), real-time data synchronisation
                        implementation with Socket.io and embedded
                        transport service API for efficient deliveries
                        effectively reducing the workload at onsite stores.</p></li>

                    <li><p>I have implemented a MySQL database, thoughtfully designed with appropriate indexes to
                        optimize query performance for faster data retrieval.</p></li>
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
    </section>);
};

export default ProjectDetail;
