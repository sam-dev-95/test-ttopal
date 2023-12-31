import styled from "styled-components";

const StyledLayoutContainer = styled.div`
  padding: 36px 20px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

const Layout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default Layout;
