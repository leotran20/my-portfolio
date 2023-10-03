import './About.css';
import {FadedImage} from '../../../common';
import Portlet from '../../../common/sharedComponents/Portlet/Portlet';
import {useAppSelector} from '../../../app/hooks';
import {scroller} from 'react-scroll';


const About = () => {
    const data = useAppSelector(state => state.info.data);
    return (
        <div id="about" className="h-max">
            <Portlet className="h-full"
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

                <h2 className="text-slate-900 dark:text-white mt-5 text-3xl font-semibold mb-3">
                    How to reach me
                </h2>
                <ul>
                    {data.contact?.map((contact, index) => (
                        <li key={index} className="flex flex-row gap-5 mb-2 justify-start items-center">
                            <img src={contact.icon} alt={contact.name} className="w-7 h-7" loading="lazy"/>
                            <b>{contact.name}</b>
                            {
                                contact.internalPage ?
                                    <a className="underline text-blue-400" href="javascript:0"
                                       onClick={() => scroller.scrollTo('contact', {
                                           smooth: true,
                                           duration: 500,
                                           spy: true
                                       })}>{contact.title}</a>
                                    :
                                    <a className="underline text-blue-400" target="_blank" rel="noreferrer" href={contact.link}>{contact.title}</a>
                            }
                        </li>
                    ))}
                </ul>
                <button className="see-project-button mt-6" type="button" onClick={() => scroller.scrollTo('projects', {
                    duration: 500,
                    spy: true,
                    smooth: true,
                    offset: -60
                })}>See My
                    Projects
                </button>
            </Portlet>
        </div>);
};

export default About;
