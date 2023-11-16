import { Position } from "../../molecules";
import { Container } from "../../atoms";

const Positions = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <Position
          title={item.text}
          location={item.categories.location}
          team={item.categories.team}
          key={item.createdAt}
        />
      ))}
    </Container>
  );
};

export default Positions;
