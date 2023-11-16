import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 12px 30px;
  height: 40px;
  border: 1px solid;
  border-radius: 30px;
  color: #173361;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
