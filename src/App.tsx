import { useRef } from "react";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { PathfindingProvider } from "./context/PathFindingContextInterface";
import { Nav } from "./ Components/Nav";
import { Grid } from "./ Components/Grid";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-scren flex flex-col bg-white ">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;