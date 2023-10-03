import './Portlet.css';
import {JSX} from 'react';

type Props = {
    children: string | JSX.Element | JSX.Element[],
    sideComponent?: string | JSX.Element | JSX.Element[],
    className?: string
    title?: string,
    subtitle?: string,
}
const Portlet = ({children, className, title, subtitle, sideComponent}: Props) => {
    return (
        <div
            className={`portlet bg-white dark:bg-slate-800 rounded-lg px-5 lg:px-20 py-8 mx-4 my-8 ring-1 ring-slate-900/5 shadow-xl flex flex-col text-left ${className}`}>
            <div className="flex lg:flex-row space-y-8 lg:space-x-16 flex-col">
                <div className="flex main-content flex-col">
                    {title ?
                        <div className="flex">
                            <h2 className="title text-slate-900 dark:text-white mt-5 mb-5 text-4xl font-semibold">
                                {title}
                            </h2>
                        </div> :
                        null}
                    {subtitle ?
                        <p className="text-slate-500 dark:text-slate-400 mt-5 text-lg">{subtitle}</p>
                        : null}
                    {children}
                </div>
                {sideComponent ? sideComponent : null}
            </div>
        </div>
    );
};

export default Portlet;
