import "./App.css";
import OptionCollection from "./components/OptionCollection";
import Graph from "./components/Graph";
import { OptionStateProvider } from "./context/OptionContext";

function App() {
  return (
    <>
      <OptionStateProvider>
        <OptionCollection />
        <Graph />
      </OptionStateProvider>
    </>
  );
}

export default App;
