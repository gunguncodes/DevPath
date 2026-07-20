import "./App.css";
import Greeting from "./components/Greeting";
import MissionCard from "./components/MissionCard";
import JourneyPreview from "./components/JourneyPreview";

function App() {
  return (
    <div>
      <Greeting />
      <MissionCard />
      <JourneyPreview />
    </div>
  );
}

export default App;