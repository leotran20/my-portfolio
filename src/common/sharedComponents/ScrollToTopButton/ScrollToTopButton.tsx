import './ScrollToTopButton.css';
import {useEffect, useRef, useState} from 'react';
import {animateScroll} from 'react-scroll';
import {CSSTransition} from 'react-transition-group';
import arrowUpIcon from '../../../assets/icons/icons8-slide-up.svg';

const ScrollToTopButton = ({top = 40}: { top?: number }) => {
    const [visible, setVisible] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setVisible(document.documentElement.scrollTop >= top);
        };
        onScroll();
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [top]);

    const renderButton = () => {
        return (
            <CSSTransition
                nodeRef={nodeRef} in={visible} timeout={500} classNames="scroll-up">
                <button ref={nodeRef} className="scroll-up-btn right-5 bottom-5 md:right-9 md:bottom-9" type="button" onClick={() => animateScroll.scrollToTop({
                    duration: 500,
                    smooth: true,
                    offset: -90
                })}>
                    <img src={arrowUpIcon} alt="Scroll to Top"/>
                </button>
            </CSSTransition>
        );
    };

    return renderButton();
};

export default ScrollToTopButton;
