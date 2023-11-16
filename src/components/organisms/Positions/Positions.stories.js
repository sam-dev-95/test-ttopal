import Positions from "./Positions";

export default {
  title: "Components/Positions",
  component: Positions,
};

const mockPositions = [
  {
    text: "Account Executive",
    categories: {
      team: "Enterprise Sales",
      location: "Mumbai, India",
    },
    createdAt: 1694206887971,
  },
  {
    text: "Administrative Assistant, Advertising",
    categories: {
      team: "Streaming",
      location: "London, United Kingdom",
    },
    createdAt: 1694206887972,
  },
  {
    text: "Data Scientist (L5) - Infrastructure Experimentation",
    categories: {
      team: "Streaming",
      location: "Remote, United States",
    },
    createdAt: 1694206887973,
  },
];

export const Primary = () => <Positions items={mockPositions} />;
