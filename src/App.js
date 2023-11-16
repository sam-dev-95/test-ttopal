import { Layout } from "./components/atoms";
import { JobsProvider } from "./hooks/useJobs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <JobsProvider>
        <Layout>
          <h1>Welcome!</h1>
          <p>you can delete this jsx and start from scratch</p>
        </Layout>
      </JobsProvider>
    </div>
  );
}

export default App;
