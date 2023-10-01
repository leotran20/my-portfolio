import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';
import DarkModeToggleButton from '../DarkModeToggleButton/DarkModeToggleButton';

const NavBar = ({menuItems}: { menuItems: { title: string, url: string }[] }) => {
    return (
        <div
            className="navbar sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent">
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <div
                    className="flex justify-center md:justify-between py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-0 lg:mx-0">
                    <div className="logo hidden md:flex animate-pulse">
                        <NavLink className="px-1.5 rounded-full" to={'/about'}>
                            <p className="text-md">LT</p>
                        </NavLink>

                    </div>
                    <div className="flex ">
                        <ul className="flex flex-col md:flex-row md:space-x-8">
                            {menuItems!.map(item => (
                                <li key={item.url} className="hover:text-sky-500 dark:hover:text-sky-400">
                                    <Link to={item.url}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <DarkModeToggleButton className="hidden sm:inline-flex ml-8"/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
