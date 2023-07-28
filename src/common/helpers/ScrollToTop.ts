import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const scrollToTopFunc = () => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
}

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        scrollToTopFunc();
    }, [pathname]);

    return null;
}
