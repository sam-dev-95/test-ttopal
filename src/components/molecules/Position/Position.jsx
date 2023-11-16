import { Title, Button, LocationLabel } from "../../atoms";
import { FlexBox } from "../../styled";
import styled from "styled-components";

const StyledPositionContainer = styled.div`
  margin: 16px 0;
`;

const Position = ({ title, location, team }) => {
  return (
    <StyledPositionContainer>
      <FlexBox justify="space-between" align="center">
        <FlexBox direction="column">
          <Title text={title} />
          <FlexBox align="center">
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
