import styled from "styled-components";

const StyledLabel = styled.span`
  background-color: #173361;
  padding: 5px 10px;
  margin-right: 20px;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
`;

const LocationLabel = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default LocationLabel;
