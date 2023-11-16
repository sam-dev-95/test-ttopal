import styled from "styled-components";

const StyledTitle = styled.div`
  h2 {
    color: #173361;
    text-align: ${({ option }) => (option === "job" ? "start" : "center")};
    font-style: ${({ option }) => (option === "job" ? "normal" : "italic")};
    font-size: ${({ option }) =>
      option === "job" ? "18px" : "40px"}; // 40px for page title

    @media (max-width: 768px) {
      font-size: ${({ option }) => (option === "page" ? "24px" : "18px")};
    }
  }
`;

const Title = ({ text, option = "job" }) => {
  return (
    <StyledTitle option={option}>
      <h2>{text}</h2>
    </StyledTitle>
  );
};

export default Title;
