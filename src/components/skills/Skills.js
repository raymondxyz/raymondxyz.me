import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import SkillsComponent from './SkillsComponent';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Skills({
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
          style={{ background: "linear-gradient(90deg, #ECECEC 35%, #FFFFFF 35%)" }}
        >
            <div className="section_two_column">
                <ScrollAnimation animateIn={"animate__fadeInLeft"} delay={200} duration={0.7} animateOnce={true}>
                    <div className="left_column_content" style={{ backgroundColor: "#ECECEC" }}>
                        <div className="arrow_section_up">
                            <NavArrowUp coloring={colors.black} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                        </div>
                        <h1 style={{ color: colors.green, textAlign: "center" }}> Skills </h1>
                        <h3 style={{ color: colors.black, textAlign: "center" }}> 
                           Some of my technical skills, ordered by proficiency.
                        </h3>
                        <div className="arrow_section_down">
                            <NavArrowDown coloring={colors.black} scrollDown={isMobile ? "skillsRightColumn" : scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={"animate__fadeInRight"} delay={200} duration={0.7} animateOnce={true}>
                    <div className="right_column_content" style={{ backgroundColor: "#FFFFFF" }} id="skillsRightColumn">
                        <SkillsComponent></SkillsComponent>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Skills

