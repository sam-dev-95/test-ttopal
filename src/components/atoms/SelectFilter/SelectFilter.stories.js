import SelectFilter from "./SelectFilter";

export default {
  title: "Atoms/SelectFilter",
  component: SelectFilter,
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

export const Primary = () => (
  <SelectFilter data={mockLocations} option="Location" />
);
