import Title from "./Title";

export default {
  title: "Atoms/Title",
  component: Title,
  parameters: {},
};

export const JobTitle = () => <Title text="Account Executive" />;
export const PageTitle = () => <Title text="Open Positions" option="page" />;
