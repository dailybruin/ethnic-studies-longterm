import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Divider from "../images/divider.svg";
import TopDivider from "../images/top_divider.svg";
import MyMap from "../components/Map/map";

const Container = styled.div`
  margin: 8% auto;
  height: fit-content;
  text-align: left;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  position: relative;
  h2 {
    font-size: 64px;
    line-height: 1.5em;
    margin: 0;
  }
`;

const SectionHeader = styled.div`
  font-size: 35px;
  line-height: 1.5em;
  font-family: 'Bitter', serif;
  font-weight: bold;
  font-style: italic;
  color: white;
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1em;
  ${mediaQueries.mobile} {
    font-size: 22px;
    line-height: 1em;
  }
`;

const Figure = styled.div`
  margin: 1em auto;
  width: 90%;
  
  img {
    width: 100%;
  }
`;

const SideImg = styled.div`
  float: right;
  width: 90%;
  font-size: 16px;
  padding: 20px;
  margin-right: 3%;

  p {
    margin: 0;
    font-weight: 700;
  }
  
  img {
    width: 100%;
  }
`;

const CapCred = styled.div`
  font-style: italic;
  color: white;
  font-size: 16px;
  margin-left: 1%;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`;

const TextCred = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  font-style: italic;
  font-family: 'Merriweather', serif;
  margin-top: 2.5em;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  font-family: 'Merriweather', serif;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`

const Related = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  font-family: 'Merriweather', serif;

  a{
    color: lightblue;
  }
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`


export default function Article(props) {
    return (
      <Container>
          {props.content.map((info) => {
              if (info.type == "section_header")
              {
                return (
                  <TextContainer>
                    <SectionHeader>
                      {info.value.section}
                    </SectionHeader>
                  </TextContainer>
                )
              } else if (info.type == "text") {
                return (
                  <TextContainer>
                    <p>{info.value}</p>
                  </TextContainer>
                );
              } 
              else if (info.type == "text_credits") {
                return (
                  <TextCred>
                    <p>{info.value.data}</p>
                  </TextCred>
                );
              } 
              else if (info.type == "related") {
                return (
                  <Related>
                    <p>[Related: 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    ]
                    </p>
                    {/* <p>{info.value.data1}<a href={info.value.url} target="_blank">{info.value.data2}</a></p> */}
                  </Related>
                );
              } 
              else if (info.type == "graphic") {
                return (
                  <Figure>
                    <img src = {info.value.url}/>
                    <CapCred>{info.value.credits}</CapCred>
                  </Figure>
                )
              }
              else if (info.type == "photo" || info.type == "illo") {
                return (
                  <SideImg>
                    <img src = {info.value.url}/>
                    <CapCred>{info.value.credits}</CapCred>
                  </SideImg>
                )
              }
              else if (info.type == "map") {
                return (
                  <MyMap/>
                )
              }
              else if (info.type == "divider") {
                return (
                  <img style={{"width": "100%"}} src={Divider}/>
                )
              }
              else if (info.type == "top_divider") {
                return (
                  <img style={{"width": "100%"}} src={TopDivider}/>
                )
              }
          })}
      </Container>
    );
}