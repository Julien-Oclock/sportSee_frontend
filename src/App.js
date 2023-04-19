import Dashboard from "./Pages/Dashboard";
import SourceProvider from "./Service/dataService.js";

function App() {
  return (
    <SourceProvider>
      <Dashboard />
    </SourceProvider>
  );
}

export default App;
