import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import Portlet from '../../../common/sharedComponents/Portlet/Portlet';
import {useAppSelector} from '../../../app/hooks';
import React from 'react';
import {Tooltip} from 'react-tooltip';

const Resume = () => {
    const data = useAppSelector(state => state.info.data);
    const {education, experience, training} = data;
    const resume = require('./../../../assets/documents/LeoTranResume.pdf');
    return (<section className="resume w-full px-5 lg:px-0 mb-32">
        <h1 className="title w-fit hover-transition text-slate-900 dark:text-white mt-5 mb-5 text-4xl font-semibold z-0">
            Resume
        </h1>
        <p className="mt-10">
            Here is a brief overview of my education and work experience.
            <br/>
            You can download my detailed resume to explore more about me &#128540;.
        </p>

        <a className="flex see-project-button h-fit w-fit mt-5" href={resume} download="LeoTranResume.pdf">
            <FontAwesomeIcon className="mr-2" icon={faDownload}/>
            Download my CV
        </a>

        <Portlet className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <ul>
                {
                    education?.map(item => {
                        const logo = require(`./../../../assets/images/${item.logo}`);
                        return (
                            <li key={item.id} className="mt-5 flex flex-col-reverse lg:flex-row justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-lg">{item.startDate} - {item.endDate}</p>
                                </div>
                                <picture className="w-36  flex items-center mb-2 lg:mb-0">
                                    <img alt={item.name} src={logo} className="object-contain"/>
                                </picture>
                            </li>
                        );
                    })
                }
            </ul>
        </Portlet>

        <Portlet className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>
            <ul>
                {
                    experience?.map(item => {
                        const logo = require(`./../../../assets/images/${item.logo}`);
                        return (
                            <li key={item.id} className="mt-10 flex flex-col-reverse lg:flex-row justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">{item.position}</h3>
                                    <p className="text-lg font-semibold">{item.name} | {item.location}</p>
                                    <p className="text-lg">{item.startDate} - {item.endDate}</p>
                                    <ul className="flex flex-row gap-0.5 my-2 flex-wrap">
                                        {
                                            item.technologies?.map(tech => (
                                                <React.Fragment key={tech.name}>
                                                    <li><img className="h-12 p-2" alt={tech.name} src={tech.logo}
                                                             data-tooltip-id={tech.name}
                                                             data-tooltip-content={tech.name}/>
                                                    </li>
                                                    <Tooltip id={tech.name}/>
                                                </React.Fragment>
                                            ))
                                        }
                                    </ul>
                                    <p className="text-lg whitespace-pre-line mt-2">{item.description}</p>
                                </div>
                                <picture className="w-36 flex items-center">
                                    <img alt={item.name} src={logo} className="object-contain"/>
                                </picture>
                            </li>
                        );
                    })
                }
            </ul>
        </Portlet>

        <Portlet className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Self-Training</h2>
            <ul>
                {
                    training?.map(item => {
                        return (
                            <li key={item.id} className="mt-10 flex flex-row justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">{item.name} | {item.provider}</h3>
                                    <p className="text-lg">{item.issuedDate}</p>
                                    <ul className="flex flex-row gap-0.5 my-2">
                                        {
                                            item.technologies?.map(tech => (
                                                <React.Fragment key={tech.name}>
                                                    <li><img className="h-12 p-2" alt={tech.name} src={tech.logo}
                                                             data-tooltip-id={tech.name}
                                                             data-tooltip-content={tech.name}/>
                                                    </li>
                                                    <Tooltip id={tech.name}/>
                                                </React.Fragment>
                                            ))
                                        }
                                    </ul>
                                    <p className="text-lg whitespace-pre-line mt-2">{item.description}</p>
                                    <button className="see-project-button mt-4 h-fit w-fit" type="button"
                                            onClick={() => {
                                                window.open(item.certificate);
                                            }}>
                                        Show Credential
                                    </button>
                                </div>

                            </li>
                        );
                    })
                }
            </ul>
        </Portlet>
    </section>);
};

export default Resume;
