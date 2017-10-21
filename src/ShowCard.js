import React from "react";
//adding prop types, not required
//run-time to check you're sending correct properties
import { shape, string } from "prop-types";
import styled from "styled-components";

//template-literal:
//write css within
// this specific returns a div
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = props => (
  <Wrapper>
    <Image
      alt={`${props.show.title} Show Poster`}
      src={`${process.env.PUBLIC_URL}/img/posters/${props.show.poster}`}
    />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
);

//95% of the time, prop-types is used as documentation as
// a summary of what's passed in
ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  }).isRequired
};

//default props..under airbnb rules
ShowCard.defaultProps = {
  foo: "stuff"
};
export default ShowCard;
