import Position from "./Position";

export default {
  title: "Components/Position",
  component: Position,
};

export const Primary = () => (
  <Position
    title="Account Executive"
    team="Enterprise Sales"
    location="Mumbai, India"
  />
);
