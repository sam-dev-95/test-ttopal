import styled from "styled-components";

const StyledLayoutContainer = styled.div`
  padding: 36px 20px;
`;

const Layout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default Layout;
