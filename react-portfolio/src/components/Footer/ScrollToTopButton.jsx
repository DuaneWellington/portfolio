// PATH: 'src/components/Footer/ScrollToTopButton.jsx'

import React from "react";

function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            ↑ Back to top ↑
        </div>
    );
}

export default ScrollToTopButton;