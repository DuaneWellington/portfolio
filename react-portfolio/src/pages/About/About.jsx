// PATH: 'src/pages/About/About.jsx'

import { useState, useEffect } from "react";
import useScrollToTop from "../../utils/hooks/useScrollToTop";

function About() {
  useScrollToTop
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    try {
      const response = await fetch("/about.json");
      const data = await response.json();
      console.log(response)
      console.log(data)

      setAbout(data);
  } catch (error) {
    console.error("Error fetching About data: ", error)
  }
}

  useEffect(() => { 
    getAboutData();
    const aboutSection = document.getElementById("aboutSection");
    if (aboutSection) {
      window.scrollTo({
        top: document.getElementById("aboutSection").offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      {/* <section id="aboutSection"> */}
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      {/* </section> */}
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
