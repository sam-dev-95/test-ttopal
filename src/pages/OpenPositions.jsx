import { Notification, Title } from "../components/atoms";
import { Positions, Filters } from "../components/organisms";
import { useJobs } from "../hooks/useJobs";

const OpenPositions = () => {
  const {
    filteredJobs,
    teams,
    locations,
    selectedTeam,
    selectedLocation,
    setSelectedTeam,
    setSelectedLocation,
  } = useJobs();

  return (
    <div>
      <Title text="Open Positions" option="page" />
      <Filters
        teams={teams}
        selectedTeam={selectedTeam}
        locations={locations}
        selectedLocation={selectedLocation}
        selectTeam={setSelectedTeam}
        selectLocation={setSelectedLocation}
      />
      <Notification />
      <Positions items={filteredJobs} />
    </div>
  );
};

export default OpenPositions;
