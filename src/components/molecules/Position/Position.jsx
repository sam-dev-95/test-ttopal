import useBreakpoint from "../../../hooks/useBreakpoint";
import { Title, Button, LocationLabel } from "../../atoms";
import { FlexBox } from "../../styled";
import styled from "styled-components";

const StyledPositionContainer = styled.div`
  margin: 16px 0;
`;

const Position = ({ title, location, team }) => {
  const { isMobile } = useBreakpoint();

  return (
    <StyledPositionContainer>
      <FlexBox
        justify="space-between"
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        <FlexBox direction="column" align={isMobile ? "center" : "flex-start"}>
          <Title text={title} />
          <FlexBox align="center" direction={isMobile ? "column" : "row"}>
            <LocationLabel text={location} />
            {location} | {team}
          </FlexBox>
        </FlexBox>

        <Button>Apply</Button>
      </FlexBox>
    </StyledPositionContainer>
  );
};

export default Position;
