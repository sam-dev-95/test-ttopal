import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1020px;
  margin: auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
