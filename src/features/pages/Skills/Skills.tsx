import {Tooltip} from 'react-tooltip';

import './Skills.css';
import Portlet from '../../../common/sharedComponents/Portlet/Portlet';
import {useAppSelector} from '../../../app/hooks';


const Skills = () => {
    const data = useAppSelector(state => state.info.data);

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
        <div id="skills" className="mb-32">
            <Portlet className="mx-4 my-8 lg:mx-0" title={'My Skills'} subtitle="The skills, tools and technologies I use to bring your products to life:">
                {
                    skillConfig.map(section =>
                        (
                            <div key={section.keyword}>
                                <h3 className="pl-5 text-2xl dark:text-white mt-5 font-semibold tracking-wide">{section.title}</h3>
                                <ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row items-center gap-y-24 mt-10 mb-10">
                                    {
                                        (data.skills ?? [])
                                            .filter(i => i.type === section.keyword)
                                            .map((skill, index) => {
                                                let src;
                                                if (skill.storedLocallyLogo) {
                                                    src = require(`../../../assets/${skill.logo}`);
                                                } else {
                                                    src = skill.logo;
                                                }
                                                return (<li key={index.toString()}
                                                            className="flex justify-center"
                                                            data-tooltip-id={index.toString()} data-tooltip-content={skill.name}>
                                                    <img src={src} alt={skill.name} className="w-20 h-20"/>
                                                    <Tooltip id={index.toString()}/>
                                                </li>);
                                            })
                                    }
                                </ul>
                            </div>
                        )
                    )
                }

            </Portlet>
        </div>);
};

export default Skills;
