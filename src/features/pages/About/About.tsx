import './About.css';
import {useNavigate} from "react-router-dom";
import { FadedImage } from '../../../common';

const About = () => {
    const navigate = useNavigate();
    return (<div
        className="about bg-white dark:bg-slate-800 rounded-lg px-5 md:px-20 py-8 mx-4 my-8 ring-1 ring-slate-900/5 shadow-xl flex flex-col text-left">
        <div className="flex lg:flex-row space-y-8 lg:space-x-16 flex-col">
            <div className="flex main-content flex-col">
                <div className="flex">
                    <h3 className="text-slate-900 dark:text-white mt-5 text-6xl font-semibold tracking-wide hover-transition z-10 relative">Hi,
                        I'm Leo</h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
                    Welcome to my portfolio website! Here, you will find a curated collection of my creative endeavors
                    and
                    professional achievements. Through a blend of captivating visuals, compelling storytelling, and
                    innovative
                    design, I aim to take you on a journey through my diverse range of skills and experiences. Whether
                    it's
                    my
                    captivating graphic designs, thought-provoking illustrations, or engaging web development projects,
                    each
                    piece in my portfolio reflects my passion for creativity and dedication to excellence. Join me as we
                    explore
                    the intersection of art and technology, where imagination knows no bounds. Get ready to be inspired,
                    delighted, and intrigued as you delve into my world of limitless possibilities.
                </p>
                <button className="see-project-button mt-6" onClick={() => navigate('/projects')}>See Projects</button>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <FadedImage className="flex"/>
            </div>
        </div>
    </div>)
}

export default About;
