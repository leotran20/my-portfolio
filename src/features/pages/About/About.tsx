import './About.css';
import {useNavigate} from 'react-router-dom';
import {FadedImage} from '../../../common';
import Portlet from '../../../common/sharedComponents/Portlet/Portlet';
import {useAppSelector} from '../../../app/hooks';


const About = () => {
    const data = useAppSelector(state => state.info.data);
    const navigate = useNavigate();

    const skillConfig = [
        {
            title: 'Front End',
            keyword: 'frontend'
        },
        {
            title: 'Back End',
            keyword: 'backend'
        },
        {
            title: 'Database',
            keyword: 'database'
        },
        {
            title: 'Development Tools',
            keyword: 'development'
        }
    ];
    return (
        <div className="about">
            <Portlet className=""
                     sideComponent={<div className="flex flex-grow justify-center items-center">
                         <FadedImage className="flex"/>
                     </div>}>
                <div className="flex">
                    <h1 className="text-slate-900 dark:text-white mt-5 text-6xl font-semibold tracking-wide hover-transition z-10 relative">
                        {data.heading}</h1>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
                    {data.description}
                </p>
                <button className="see-project-button mt-6" type="button" onClick={() => navigate('/projects')}>See
                    Projects
                </button>
            </Portlet>
            <Portlet className="" title={'My Skills'} subtitle="I have experience with these technologies">
                {
                    skillConfig.map(section =>
                        (
                            <>
                                <h3 className="pl-5 text-2xl dark:text-white mt-5 font-semibold tracking-wide">{section.title}</h3>
                                <ul className="grid grid-cols-5 grid-flow-row items-center gap-y-24 mt-10 mb-10">
                                    {
                                        (data.skills ?? [])
                                            .filter(i => i.type === section.keyword)
                                            .map((skill) => <li key={skill.name}
                                                                className="flex justify-center">
                                                <img src={skill.logo} alt={skill.name} className="w-20 h-20"/>
                                            </li>)
                                    }
                                </ul>
                            </>
                        )
                    )
                }

            </Portlet>
        </div>);
};

export default About;
