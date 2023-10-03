import React, {useEffect} from 'react';

import './App.css';
import '../style/variables.css';
import {useAppDispatch, useAppSelector} from './hooks';
import Layout from '../features/pages/Layout/Layout';
import {Navigate, Route, Routes} from 'react-router-dom';
import {About, Contact, Education, Projects, Resume} from '../features/pages';
import useRequest from '../hooks/use-request';
import {setData} from '../features/slices/infoSlice';

function App() {
    const isDark = useAppSelector(state => state.global.darkMode);
    const dispatch = useAppDispatch();
    const {doRequest} = useRequest({
        url: 'database.json',
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
