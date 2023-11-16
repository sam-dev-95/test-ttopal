import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  align-items: ${({ align }) => align ?? "flex-start"};
`;
