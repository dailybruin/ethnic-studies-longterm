import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const Interactive = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;


export default function Timeline(props) {
    return (
      <Container>
        <Interactive>

        </Interactive>
      </Container>
    );
  }