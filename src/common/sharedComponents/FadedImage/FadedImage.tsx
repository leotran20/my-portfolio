import "./FadedImage.css";

import ProgrammingPhotoDark from "../../../assets/images/Programming1-dark.gif";
import ProgrammingPhotoLight from "../../../assets/images/Programming1-light.gif";
import {useAppSelector} from "../../../app/hooks";

const FadedImage = (props: { className?: string }) => {
    const isDark = useAppSelector(state => state.theme.dark);
    return (
        <div className={`${props.className || ""} faded-image-wrapper relative w-full lg:!h-full`}>
            <picture className={`flex justify-center absolute w-full h-full faded-in opacity-0 ${isDark ? "opacity-100" : ""}`}>
                <img src={ProgrammingPhotoDark}
                     className="object-contain"
                     alt="programming1"/>
            </picture>
            <picture className={`flex justify-center absolute w-full h-full faded-in opacity-0 ${!isDark ? "opacity-100" : ""}`}>
                <img src={ProgrammingPhotoLight}
                     className="object-contain"
                     alt="programming2"/>
            </picture>
        </div>


    );
}

export default FadedImage;
