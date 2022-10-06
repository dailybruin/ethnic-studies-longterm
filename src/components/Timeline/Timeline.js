import {React, useState} from "react";
import HorizontalTimeline from "react-horizontal-timeline"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {config} from "../Content.js"
import "./timeline.css"
import styled from "styled-components";
import { mediaQueries } from "../../shared/config.js";
// import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const Timeline = ()=>{
    const VALUES = ['October 2020','November 2021', 'March 2022', 'April 2022', 'May 6, 2022', 'May 12, 2022', 'May 31, 2022', 'June 3, 2022', 'July 2022'];
    const Text = ['First Event','Second Event','Third Event', '4','5','6','7','8','9'];
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);

    return (
      (window.innerWidth < 1200)?
      
        (<Container>
          <div id = "mobile_container"> 
          <div id = "mobile_timeline">
          <p className='timeline-text' id = "header">How the University of California A-G Ethnic Studies Requirement has been processed</p>
          <p className='timeline-text' id = "explainer">A proposed UC A-G ethnic studies requirement has gone through multiple iterations of revisions and feedback, and after much controversy, has hit a roadblock of implementation concerns after almost two years of deliberations.</p>
              {config.Dates.map((date, index) =>{
                return(
                  <VerticalTimeline
                    lineColor = {'#79D8C3'}
                  >
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ECF9F6', color: '#fff', border: '2px solid #79D8C3'}}
                    contentArrowStyle={{ borderRight: '7px solid  #79D8C3' }}
                    // date= {date.Date}
                    iconStyle={{ background: '#dfdfdf', boxShadow: 'none', border: '4px solid #79dbc3'}}
                    visible = 'true'
                  >
                    <h3 className="timeline-text">{date.Date}</h3>
                    <p className="timeline-text">{date.Text}</p>
                  </VerticalTimelineElement>
                  </VerticalTimeline>
                )
              })}
          </div>
          <div id = 'mobile_byline'>
          <p className='timeline-text'id = "sources">Sources: Documents and emails obtained by the Bruin and BOARS and The Academic Council's meeting minutes.</p>
          <p className='timeline-text'id = "byline">Graphic reporting by Shaanth Kodialam, features and student life editor. Interactive by Lindsey Parungo, Data editor.</p>
          </div>
        </div>
        </Container>)
      : 
      (<Container>
        <div id = "timeline_box">
          <p className='timeline-text' id = "header">How the University of California A-G Ethnic Studies Requirement has been processed</p>
          <p className='timeline-text' id = "explainer">A proposed UC A-G ethnic studies requirement has gone through multiple iterations of revisions and feedback, and after much controversy, has hit a roadblock of implementation concerns after almost two years of deliberations.</p>
          {/* Bounding box for the Timeline */}
          <div id = 'timeline-unit'>
          <div className='timeline-text' id = "timeline" style={{
            width: "100%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
          }}>
            <HorizontalTimeline
              index={value}
              indexClick={(index) => {
                  setValue(index);
                  setPrevious(value);
              //   this.setState({ value: index, previous: this.state.value });
              }}
              values={ VALUES }
              getLabel= {(index)=>{return (index)}} 
              styles = {{outline: '#dfdfdf', foreground: '#79D8C3'}}
              minEventPadding = {60}
              />
          </div>
          <div className='timeline-text text-center' id = 'timeline-info'>
            {/* any arbitrary component can go here */}    
            {config.Dates[value].Text}
          </div>
          </div>
          <p className='timeline-text'id = "sources">Sources: Documents and emails obtained by the Bruin and BOARS and The Academic Council's meeting minutes.</p>
          <p className='timeline-text'id = "byline">Graphic reporting by Shaanth Kodialam, features and student life editor. Interactive by Lindsey Parungo, Data editor.</p>
        </div>
      </Container>)
    );
}
export default Timeline;