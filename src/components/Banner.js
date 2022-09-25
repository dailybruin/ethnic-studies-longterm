import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import BannerImage from "../images/banner.svg";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  margin: 3em 0 3em 0;
`;

const Imagebox = styled.div`
  height: 200px;
  background-image: url(${BannerImage});
  opacity: 0.7;
  position: relative;
`;

const Title = styled.div`
  font-family: 'Bitter', serif;
  font-size: 50px;
  font-weight: 800;
  color: white;
  margin-top: -3em;
  ${mediaQueries.mobile} {
    font-size: 35px;
  }
`;

const ByTitle = styled.div`
  font-family: 'Bitter', serif;
  font-size: 20px;
  font-weight: 800;
  color: white;
  ${mediaQueries.mobile} {
    font-size: 16px;
  }
`;

export default function Banner(props) {
    return (
        <Container>
            <Imagebox/>
            <Title>Ethnic Studies Longterm Title</Title>
            <ByTitle>by Shaanth Kodialam <br></br>Features and student life editor</ByTitle>
        </Container>
    );
}