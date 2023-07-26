import "./FadedImage.css";

import ProgrammingPhotoDark from "../../../assets/images/Programming1-dark.gif";
import ProgrammingPhotoLight from "../../../assets/images/Programming1-light.gif";
import { useAppSelector } from "../../../app/hooks";

const FadedImage = (props: {className?: string}) => {
    const isDark = useAppSelector(state => state.theme.dark);
    return (
        <picture className={`${props.className || ""}`}>
            <img src={isDark ? ProgrammingPhotoDark : ProgrammingPhotoLight}
                 className="delay-300 duration-300"
                 alt="programming1"/>
        </picture>
    );
}

export default FadedImage;
