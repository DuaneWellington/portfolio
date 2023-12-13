// PATH: 'src/components/Footer/Footer.jsx'

import React, { useState, useEffect } from "react";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer>        
        <div className="footer">
        {isVisible && (
            <h4 onClick={scrollToTop} className="scroll-to-top">
                ↑ Back to top ↑
            </h4>
        )}
        </div>
        </footer>
    );
}

export default Footer;