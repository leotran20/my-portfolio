import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

import {About, Contact, Education, Projects, Resume} from "../features/pages";

const createRoutes = () => (
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<About/>}/>
        <Route path="" element={<Navigate to="/about"/>}/>
    </Routes>
);

export default createRoutes;
