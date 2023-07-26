import React from 'react';

import './App.css';
import '../style/variables.css';
import background from "../assets/images/docs-dark@tinypng.1bbe175e.png";
import {CONSTANTS} from "../common";
import createRoutes from "../routes/routes";
import NavBar from "../features/theme/NavBar/NavBar";
import {useAppSelector} from "./hooks";

function App() {

    const routes = createRoutes();
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`App ${isDark ? 'dark' : ''}`}>
            <div
                className="App h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
                <NavBar menuItems={CONSTANTS.MENU_ITEMS}/>

                <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                    <div className="w-[108rem] flex-none flex justify-end">
                        <picture>
                            <img src={background} alt="background"
                                 className="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async"/>
                        </picture>
                    </div>
                </div>

                {routes}
            </div>
        </div>
    );
}

export default App;
