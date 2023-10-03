import {Link} from 'react-scroll';
import './NavBar.css';
import DarkModeToggleButton from '../DarkModeToggleButton/DarkModeToggleButton';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {toggleNavigation} from '../../slices/globalSlice';

const NavBar = ({menuItems}: { menuItems: { title: string, url: string }[] }) => {
    const isMenuOpen = useAppSelector(state => state.global.isNavigationOpen);
    const dispatch = useAppDispatch();

    return (
        <div
            className="navbar sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent">
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <div
                    className="flex justify-center md:justify-between py-4 border-b border-slate-900/10 px-4 lg:border-0 dark:border-slate-300/10 mx-0 lg:mx-0">
                    <div className="logo flex animate-pulse">
                        <Link className="cursor-pointer px-1.5 rounded-full self-center" to="about" offset={-90} smooth={true} duration={500}>
                            <p className="text-md">LT</p>
                        </Link>

                    </div>
                    <div className="flex flex-1 justify-end">
                        <input id="menu-toggle" type="checkbox" checked={isMenuOpen}
                               onChange={() => dispatch(toggleNavigation())}/>
                        <label className="menu-button-container flex md:hidden" htmlFor="menu-toggle">Menu
                            <span className="menu-button"></span>
                        </label>
                        <ul className="flex flex-col md:flex-row fixed md:relative md:space-x-8 mt-12 md:mt-0 w-screen md:w-fit md:gap-9 menu">
                            {menuItems!.map(item => (
                                <li key={item.url}
                                    className="md:!h-10 w-full md:w-max m-0 p-0 mt-2 md:mt-0 cursor-pointer overflow-hidden md:overflow-visible">
                                    <Link className="self-center"
                                          onClick={() => dispatch(toggleNavigation())}
                                          onSetActive={() =>  window.history.pushState({ section: item.url }, '', `#${item.url}`)}
                                          activeClass="active"
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          offset={-90}
                                          to={item.url}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="overlay md:hidden"></div>
                        <DarkModeToggleButton className="hidden md:inline-flex ml-8 self-center"/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
