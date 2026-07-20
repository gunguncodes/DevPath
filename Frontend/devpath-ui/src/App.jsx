import "./App.css";
import Greeting from "./components/Greeting";
import MissionCard from "./components/MissionCard";
import JourneyPreview from "./components/JourneyPreview";
import NextMilestone from "./components/NextMilestone";

function App() {
  return (
    <div>
      <h1 className="text-5xl text-blue-600 font-bold">DevPath</h1>
      <Greeting />
      <MissionCard />
      <JourneyPreview />
      <NextMilestone />
    </div>
  );
}

export default App;