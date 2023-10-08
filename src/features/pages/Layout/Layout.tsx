import './Layout.css';

import NavBar from '../../theme/NavBar/NavBar';
import {CONSTANTS} from '../../../common';
import background from '../../../assets/images/docs-dark@tinypng.1bbe175e.png';
import React from 'react';
import ScrollToTopButton from '../../../common/sharedComponents/ScrollToTopButton/ScrollToTopButton';
import {Outlet} from 'react-router-dom';
import Footer from '../../../common/sharedComponents/Footer/Footer';

function Layout({children}: { children?: React.ReactNode }) {
    return (
        <div
            className="min-h-screen h-full antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 relative">
            <NavBar menuItems={CONSTANTS.MENU_ITEMS}/>

            <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[108rem] flex-none flex justify-end">
                    <picture>
                        <img src={background} alt="background"
                             className="w-[90rem] flex-none max-w-none" decoding="async"/>
                    </picture>
                </div>
            </div>


            <div className=" container m-auto">
                {children ?? children}
                <Outlet/>
            </div>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    );
}

export default Layout;
