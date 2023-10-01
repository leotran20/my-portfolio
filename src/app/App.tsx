import React from 'react';

import './App.css';
import '../style/variables.css';
import {useAppSelector} from './hooks';
import Layout from '../features/pages/Layout/Layout';
import {Navigate, Route, Routes} from 'react-router-dom';
import {About, Contact, Education, Projects, Resume} from '../features/pages';

function App() {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`App ${isDark ? 'dark' : ''}`}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<About/>}/>
                    <Route path="" element={<Navigate to="/about"/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
