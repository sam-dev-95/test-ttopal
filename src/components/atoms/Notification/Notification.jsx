import styled from "styled-components";
import Container from "../Container/Container";

const StyledDiv = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  text-align: center;
  padding: 20px 8px 12px;
  h3 {
    color: #1b3460;
  }
`;

const Notification = () => {
  return (
    <StyledDiv>
      <Container>
        <h3>
          Note that even though a location is identified for many of our roles,
          we encourage candidates to apply to positions outside of the location
          they live in as Confluent cares about how you work, not where you
          work.
        </h3>
      </Container>
    </StyledDiv>
  );
};

export default Notification;
