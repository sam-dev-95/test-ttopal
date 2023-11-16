import { Notification, Title } from "../components/atoms";
import { Positions, Filters } from "../components/organisms";
import { useJobs } from "../hooks/useJobs";

const OpenPositions = () => {
  const { jobs, teams, locations } = useJobs();
  return (
    <div>
      <Title text="Open Positions" option="page" />
      <Filters teams={teams} locations={locations} />
      <Notification />
      <Positions items={jobs} />
    </div>
  );
};

export default OpenPositions;
