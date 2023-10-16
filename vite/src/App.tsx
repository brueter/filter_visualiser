import "./App.css";
import OptionCollection from "./components/OptionCollection";
import Graph from "./components/Graph";
import FileUpload from "./components/FileUpload";
import { OptionStateProvider } from "./context/OptionContext";
import { DataStateProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <OptionStateProvider>
        <DataStateProvider>
          <OptionCollection />
          <FileUpload />
          <Graph />
        </DataStateProvider>
      </OptionStateProvider>
    </>
  );
}

export default App;
