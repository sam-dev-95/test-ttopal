import React, { useContext, useState, useEffect, useMemo } from "react";

const JobsContext = React.createContext({});

// TODO: need move to this url to env variables
const apiUrl = "https://api.lever.co/v0/postings/netflix?mode=json";

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setJobs(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const [teams, locations] = useMemo(() => {
    if (jobs.length === 0) {
      return [[], []];
    }

    return jobs.reduce(
      (
        [teamRes, locRes],
        { country, categories: { department, team, location } }
      ) => {
        const nextTeams = teamRes[department] ?? [];
        const validCountryName = country === "US" ? country : "international";
        const nextLocations = locRes[validCountryName] ?? [];

        return [
          nextTeams.includes(team)
            ? teamRes
            : {
                ...teamRes,
                [department]: [...nextTeams, team],
              },
          nextLocations.includes(location)
            ? locRes
            : {
                ...locRes,
                [validCountryName]: [...nextLocations, location],
              },
        ];
      },
      [{}, {}]
    );
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (item) =>
        (!selectedLocation || item.categories.location === selectedLocation) &&
        (!selectedTeam || item.categories.team === selectedTeam)
    );
  }, [selectedTeam, selectedLocation, jobs]);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        filteredJobs,
        teams,
        locations,
        selectedTeam,
        selectedLocation,
        setSelectedTeam,
        setSelectedLocation,
        isLoading,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
