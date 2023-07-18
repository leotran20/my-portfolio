import "./DarkModeToggleButton.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const DarkModeToggleButton = ({className}: { className?: string }) => {
    const [darkMode, setDarkMode] = useState(global.darkMode);
    const toggleDarkMode = (isDark: boolean) => {
        setDarkMode(isDark);
        if (isDark) {
            document.body.classList.add('dark');
            global.darkMode = true;
        } else {
            document.body.classList.remove('dark');
            global.darkMode = false
        }
    }

    return (
        <div className={"dark-mode-button inline-flex " + className || ""}>
            <input type="checkbox" className="checkbox" id="checkbox" checked={darkMode}
                   onChange={(event) => toggleDarkMode(event.target.checked)}/>
            <label htmlFor="checkbox" className="checkbox-label">
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faMoon}/>
                <span className="ball"></span>
            </label>
        </div>
    )
}

export default DarkModeToggleButton;
