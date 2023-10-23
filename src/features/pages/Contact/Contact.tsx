import './Contact.css';
import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useAppSelector} from '../../../app/hooks';
import {faAt, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, IconPrefix} from '@fortawesome/free-brands-svg-icons';
import {IconName, library} from '@fortawesome/fontawesome-svg-core';

library.add(faAt, faGithub, faLinkedin);

const Contact = () => {
    const data = useAppSelector(state => state.info.data);
    // const personalInfo = data.personalInfo;
    const contact = data.contact;
    const personalInfo = data.personalInfo;
    const contactIntro = data.contactIntro;


    return (<section id="contact" className="w-full px-5 lg:px-0">
        <h1 className="title w-fit hover-transition text-slate-900 dark:text-white mt-5 mb-5 text-4xl font-semibold z-0">
            Contact Me
        </h1>

        <div className="grid grid-cols-1 mb-20 grid-rows-2 grid-flow-col lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 mt-10">
            <div className="col-span-1 row-span-1 text-slate-900 dark:text-white px-10">
                <h2 className="text-3xl py-5">Let&apos;s <mark>Connect</mark> & <mark>Collaborate</mark></h2>
                <p>{contactIntro}</p>

                <ul className="py-5">

                    <li className="mb-5">
                        <a className="flex flex-row items-center gap-2 w-fit"
                           href={`tel:${personalInfo?.phone}`}>
                            <FontAwesomeIcon icon={faPhone} className="contact-icon mr-2 p-1.5 rounded-full w-4 h-4"/>
                            {personalInfo?.phone}
                        </a>
                    </li>

                    {
                        contact?.filter(i => i.showInContact).map((item, index) => {

                                return (
                                    <li key={index} className="mb-5">
                                        <a className="flex flex-row items-center gap-2 w-fit" target="_blank" rel="noreferrer"
                                           href={item.link}>
                                            <FontAwesomeIcon icon={item.alternativeIcon as [IconPrefix, IconName]} className="contact-icon mr-2 p-1.5 rounded-full  w-4 h-4"/>
                                          {item.title}
                                        </a>
                                    </li>
                                );
                            }
                        )
                    }

                    <li className="mb-5">
                        <a className="flex flex-row items-center gap-2 w-fit"
                           href={`tel:${personalInfo?.phone}`}>
                            <FontAwesomeIcon icon={faLocationDot} className="contact-icon mr-2 p-1.5 rounded-full w-4 h-4"/>
                            {personalInfo?.address}
                        </a>
                    </li>

                </ul>
            </div>

            <div className="col-span-1 row-span-1">
                <ContactForm/>
            </div>
        </div>
    </section>);
};

export default Contact;
