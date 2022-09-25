import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  margin: 8% auto;
  height: fit-content;
  text-align: left;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  width: 85%;
  position: relative;
  h2 {
    font-size: 64px;
    line-height: 1.5em;
    margin: 0;
  }
`;

const SectionHeader = styled.div`
  font-size: 24px;
  line-height: 1.5em;
`;

const Figure = styled.div`
  margin: 5% -50vw 5% -50vw;
  left: 50%;
  width: 100vw;
  position: relative;
  
  img {
    width: 100vw;
  }
`;

const CapCred = styled.div`
  font-style: italic;
  font-size: 16px;
  margin-left: 1%;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`;

const Text = styled.p`
  color: white;
  font-family: 'Merriweather', serif;
`;


export default function Article(props) {
    return (
      <Container>
          {props.content.map((info) => {
              if (info.type == "section_header")
              {
                return (
                  <SectionHeader>
                    {info.value.section}
                  </SectionHeader>
                )
              } else if (info.type == "text") {
                return <Text>{info.value}</Text>;
              } else if (info.type == "image") {
                return (
                  <Figure>
                    <img src = {info.value.url}/>
                    <CapCred>{info.value.caption}</CapCred>
                  </Figure>
                )
              }
              else if (info.type == "divider") {
                return (
                  <hr style={{"margin": "40px auto", "width": "100%"}}/>
                )
              }
          })}
      </Container>
    );
}