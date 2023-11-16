import { Layout } from "./components/atoms";
import OpenPositions from "./pages/OpenPositions";
import { JobsProvider } from "./hooks/useJobs";

function App() {
  return (
    <div className="App">
      <JobsProvider>
        <Layout>
          <OpenPositions />
        </Layout>
      </JobsProvider>
    </div>
  );
}

export default App;
