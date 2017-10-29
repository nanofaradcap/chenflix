import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from { 
        transform: rorate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Image = styled.img`animation: ${spin} 4s infinite linear;`;

const Spinner = () => (
  <Image
    src={process.env.PUBLIC_URL + "/img/loading.png"}
    alt="loading indicator"
  />
);

export default Spinner;
