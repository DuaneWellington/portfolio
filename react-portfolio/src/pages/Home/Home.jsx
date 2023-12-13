// PATH: 'src/pages/Home/Home.jsx'

import React from "react";
import Header from "../../components/Header/Header";
import useScrollToTop from "../../utils/hooks/useScrollToTop";

function Home() {
  useScrollToTop();
    const introductionStyle = {
      // Office name sticker styling here
    };
    const scrollToSection = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"});
    };

    return (
        <div>
          <Header />
          <div style={introductionStyle}>

          </div>
            {/* Home content goes here */}
        </div>
    );
}

export default Home;