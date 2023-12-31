import React from 'react';
import timelineElements from "../../../data/timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {ReactComponent as WorkIcon} from "../work.svg";
import {ReactComponent as FraudIcon} from "../mask.svg";
import {ReactComponent as ChildIcon} from "../puzzle.svg";

const Timeline = (props) => {
    let workIconStyles = { background: "#F5F5DC" };
    let fraudIconStyles = { background: "#778899" };
    let childIconStyles = { background: "#ab98b1" };
    return (
        <VerticalTimeline>
            {timelineElements[props.info.id - 1].map((element) => {
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={element.icon === "work" ? workIconStyles : element.icon === "fraud" ? fraudIconStyles : childIconStyles}
                        icon={element.icon === "work" ? <WorkIcon /> : element.icon === "fraud" ? <FraudIcon /> : <ChildIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;