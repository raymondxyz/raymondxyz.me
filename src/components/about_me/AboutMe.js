import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import photo_japan from "./../../assets/profile_japan.jpg";
import collage from "./../../assets/collage.png";
import { colors } from "../../styling/colors";
import NavArrowDown from "../miscellaneous/NavArrowDown";
import NavArrowUp from "../miscellaneous/NavArrowUp";

function AboutMe({
  scrollDown,
  scrollUp,
  tooltipDown,
  tooltipUp,
  id
}) {

  const isMobile = window.innerWidth <= 768;
    return (
        <div 
          className="full_section"
          id={id}
          style={{ background: "linear-gradient(90deg, #000000 35%, #111111 35%)" }}
        >
          <div className="section_two_column">
          <ScrollAnimation animateIn={"animate__fadeInLeft"} delay={200} duration={0.7} animateOnce={true}>
          
            <div className="left_column_content" style={{ backgroundColor: "#000000" }}>
              <div className="arrow_section_up">
                <NavArrowUp scrollUp={scrollUp} tooltipUp={tooltipUp} coloring={colors.white}></NavArrowUp>
              </div>
              <img src={photo_japan} alt="Profile" className="profileImage"></img>
              <h2 style={{ color: colors.green, textAlign: "center", marginBottom: "10px" }}> My Hobbies </h2>

              <h3 style={{ color: colors.white, textAlign: "center" }}> 
                All Things Automotive
              </h3>

              <h3 style={{ color: colors.white, textAlign: "center" }}> 
                Sports & Exercise
              </h3>

              <h3 style={{ color: colors.white, textAlign: "center" }}> 
                Couch Potato
              </h3>

              <h3 style={{ color: colors.white, textAlign: "center" }}> 
                Baking & Cooking
              </h3>

              <h3 style={{ color: colors.white, textAlign: "center" }}> 
                Video Games & Music
              </h3>


              <div className="arrow_section_down">
                <NavArrowDown scrollDown={isMobile ? "aboutRightColumn" : scrollDown} tooltipDown={tooltipDown} coloring={colors.white}></NavArrowDown>
              </div>
            </div>

          </ScrollAnimation>


          <ScrollAnimation animateIn={"animate__fadeInRight"} delay={200} duration={0.7} animateOnce={true}>

            <div className="right_column_content" style={{ backgroundColor: "#111111" }} id="aboutRightColumn">
              <h1 style={{ color: colors.green }}>  About Me </h1>
              <h2 style={{ color: colors.white }}>  I'm passionate about STEM, business and how those two worlds collide.
              Excited about tech and it's role in solving the big problems across all industries.
              </h2>

              <div className="collage_container">
                <img src={collage} alt="Collage" className="collage_image"></img>
              </div>

            </div>

            </ScrollAnimation>
          </div>

        </div>
    )
}

export default AboutMe