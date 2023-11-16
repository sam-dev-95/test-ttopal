import React, { useContext, useState, useEffect } from "react";

const JobsContext = React.createContext({});

const apiUrl = "https://api.lever.co/v0/postings/netflix?mode=json";

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
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

  return (
    <JobsContext.Provider
      value={{
        jobs,
        isLoading,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
