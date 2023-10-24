import './DarkModeToggleButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {changeTheme} from '../../slices/globalSlice';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';

const DarkModeToggleButton = ({className}: { className?: string }) => {
    const isDark = useAppSelector(state => state.global.darkMode);
    const dispatch = useAppDispatch();

    return (
        <div className={'dark-mode-button inline-flex ' + className || ''}>
            <input type="checkbox" className="checkbox" id="checkbox" checked={isDark}
                   onChange={() => dispatch(changeTheme({dark: !isDark}))}/>
            <label htmlFor="checkbox" className="checkbox-label">
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faMoon}/>
                <span className="ball"></span>
            </label>
        </div>
    );
};

export default DarkModeToggleButton;
