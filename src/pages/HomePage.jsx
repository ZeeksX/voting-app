import React, { useEffect, useState } from "react";
import Brymo from "../assets/Brymo.jpg";
import FormfacadeEmbed from "@formfacade/embed-react";

const HomePage = ({ sidebarOpen, toggleSidebar }) => {
    const [scrolling, setScrolling] = useState(false);
    const url = "https://formfacade.com/include/112836559304792216317/form/1FAIpQLSc2CqEh8fPqWagBgGFKfcCiSVHZNNkZTwhpaFmEArT7dsWgaw/classic.js/?div=ff-compose"
    const handleScroll = () => {
        setScrolling(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='landing flex flex-col items-center min-h-screen w-full mt-4'>
            <FormfacadeEmbed
                formFacadeURL={url}
                onSubmitForm={() => console.log('Form submitted')}
            />
        </div>
    );
};

export default HomePage;
