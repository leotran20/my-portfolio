import {scroller} from 'react-scroll';

import './About.css';
import {useAppSelector} from '../../../app/hooks';
import {Tooltip} from 'react-tooltip';
import ProgrammingPhoto from '../../../assets/images/programming.png';

const About = () => {
    const data = useAppSelector(state => state.info.data);
    return (
        <div id="about" className="h-full flex justify-center items-center">

            <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-1 w-full">
                <div className="col-start-1 col-span-1 lg:col-span-3 flex flex-col justify-center items-center">
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
                        Welcome to my portfolio website!
                    </p>
                    <h1 className="text-slate-900 dark:text-white pt-5 pb-4 text-6xl font-semibold tracking-wide z-10 relative text-center">
                        Hi, I&apos;m <mark className="name flex lg:inline">Leo Tran</mark>
                    </h1>
                    <h2 className="text-slate-900 dark:text-white mt-2 text-4xl">
                        A Web Developer
                    </h2>

                    <ul className="flex flex-row gap-10 mt-5">
                        {data.contact?.map((contact, index) => {
                            const attributes = contact.internalPage ? {
                                onClick: () => scroller.scrollTo('contact', {
                                    smooth: true,
                                    duration: 500,
                                    spy: true
                                })
                            } : {target: '_blank', rel: 'noreferrer', href: contact.link};
                            return (
                                <li key={index} className="flex flex-row gap-5 mb-2 justify-start items-center">
                                    <a className="social underline text-blue-400 cursor-pointer"
                                       {...attributes}
                                       data-tooltip-id={index.toString()} data-tooltip-content={contact.name}
                                    ><img src={contact.icon} alt={contact.name} className="w-7 h-7"
                                          loading="lazy"/></a>
                                    <Tooltip id={index.toString()}/>
                                </li>
                            );
                        })}
                    </ul>
                    <button className="primary-button mt-6" type="button"
                            onClick={() => scroller.scrollTo('projects', {
                                duration: 500,
                                spy: true,
                                smooth: true,
                                offset: -90
                            })}>See My
                        Projects
                    </button>
                </div>
                <div className="col-start-1 col-span-1 lg:col-start-4 lg:col-span-2">
                    <picture
                        className='flex justify-center w-full h-full faded-in'>
                        <img src={ProgrammingPhoto}
                             className="object-contain"
                             alt="programming"/>
                    </picture>
                </div>

            </div>


            {/*<div className="flex justify-center items-center flex-col">*/}
            {/*    <p>Explore more about me</p>*/}
            {/*    <button type="button"*/}
            {/*            className="h-12 w-12 mt-2 animate-bounce"*/}
            {/*            onClick={() => scroller.scrollTo('skills', {*/}
            {/*                smooth: true,*/}
            {/*                duration: 500,*/}
            {/*                spy: true,*/}
            {/*                offset: -90*/}
            {/*            })}>*/}
            {/*        <img src={arrowDown} alt="scroll down"/>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};


export default About;
