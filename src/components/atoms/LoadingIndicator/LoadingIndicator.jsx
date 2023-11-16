import { FlexBox } from "../../styled";
import styled from "styled-components";

const LoadingBox = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  animation: spin 1s linear infinite;
`;

const StyledContainer = styled.div`
  padding: 60px 0;
`;

const LoadingIndicator = () => {
  return (
    <StyledContainer>
      <LoadingBox />
    </StyledContainer>
  );
};

export default LoadingIndicator;
