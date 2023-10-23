import React, {useEffect} from 'react';
import {Element} from 'react-scroll';

import './App.css';
import '../style/variables.css';
import {useAppDispatch, useAppSelector} from './hooks';
import Layout from '../features/pages/Layout/Layout';
import {About, Contact, Projects, Resume, Skills} from '../features/pages';
import useRequest from '../hooks/use-request';
import {setData} from '../features/slices/infoSlice';
import {Route, Routes} from 'react-router-dom';
import ProjectDetail from '../features/pages/Projects/ProjectDetail/ProjectDetail';
import {Toaster} from 'react-hot-toast';

function App() {
    const isDark = useAppSelector(state => state.global.darkMode);
    const dispatch = useAppDispatch();
    const {doRequest} = useRequest({
        url: '/database.json',
        method: 'GET'
    });
    useEffect(() => {
        const fetchData = async () => {
            const result = await doRequest();
            dispatch(setData(result));
            return result;
        };

        fetchData()
            .catch(console.error);
    }, []);

    const renderMainPage = () => (<>
        <Element name="about" className="element">
            <About/>
        </Element>
        <Element name="skills" className="element">
            <Skills/>
        </Element>
        <Element name="projects" className="element">
            <Projects/>
        </Element>
        <Element name="resume" className="element">
            <Resume/>
        </Element>
        <Element name="contact" className="element">
            <Contact/>
        </Element>
    </>);
    return (
        <main className={`App ${isDark ? 'dark' : ''}`}>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="" element={renderMainPage()}/>
                    <Route path="/projects/:id" element={<ProjectDetail/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
