import Filters from "./Filters";

export default {
  title: "Components/Filters",
  component: Filters,
  parameters: {},
};

const mockLocations = {
  US: [
    "New York, New York",
    "Remote, United States",
    "Los Gatos, California",
    "Los Angeles, California",
  ],
  International: [
    "London, United Kingdom",
    "Helsinki, Finland",
    "Tokyo, Japan",
    "Seoul, South Korea",
  ],
};

const mockTeams = {
  Animation: ["Animation", "Technology"],
  Gaming: [
    "Boss Fight Entertainment",
    "Next Games",
    "Gaming",
    "Spry Fox",
    "Night School Studio",
  ],
};

const mockFn = () => {};

export const Primary = () => (
  <Filters
    teams={mockTeams}
    locations={mockLocations}
    selectTeam={mockFn}
    selectLocation={mockFn}
    selectedTeam=""
    selectedLocation=""
  />
);
