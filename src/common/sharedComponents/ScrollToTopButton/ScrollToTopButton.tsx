import './ScrollToTopButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {scrollToTopFunc} from '../../helpers/ScrollToTop';
import {useEffect, useState} from 'react';

const ScrollToTopButton = ({top = 40}: { top?: number }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(document.documentElement.scrollTop >= top);
        };
        onScroll();
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [top]);


    return (<>
        {visible && <button className="scroll-up-btn" onClick={() => scrollToTopFunc()}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>}
    </>);
};

export default ScrollToTopButton;
