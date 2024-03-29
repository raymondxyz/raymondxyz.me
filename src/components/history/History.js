import React from 'react';
import { colors } from '../../styling/colors';
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import ScrollAnimation from 'react-animate-on-scroll';
import Timeline from './Timeline';

function History({
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    id
}) {
    const isMobile = window.innerWidth <= 768;
    return (
        <div
          className="full_section history_section"
          id={id}
          style={{ background: "linear-gradient(90deg, #000000 35%, #111111 35%)" }}
        >

            <div className="section_two_column history_section">

                <ScrollAnimation animateIn={"animate__fadeInLeft"} delay={200} duration={0.7} animateOnce={true}>
                    <div className="left_column_content" style={{ backgroundColor: "#000000" }}>
                        <div className="arrow_section_up">
                            <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                        </div>
                        <h1 style={{ color: colors.green, textAlign: "center" }}> History </h1>
                        <h3 style={{ color: colors.white, textAlign: "center" }}> 
                            A trip down memory lane: my academic and professional progression over the years. Scroll the timeline on the right.
                        </h3>
                        <div className="arrow_section_down">
                            <NavArrowDown coloring={colors.white} scrollDown={isMobile ? "timelineRightColumn" : scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={"animate__fadeInRight"} delay={200} duration={0.7} animateOnce={true}>
                    <div className="history_window" style={{ backgroundColor: "#111111" }} id="timelineRightColumn">

                        <Timeline></Timeline>
                        
                    </div>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default History

