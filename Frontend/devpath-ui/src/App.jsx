import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Lesson from "./pages/Lesson";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import { roadmap } from "./data/roadmap";
import { completeLesson } from "./utils/learningProgress";
import {
  loadLearningPath,
  saveLearningPath,
} from "./utils/learningPathStorage";

function App() {
  const [learningPath, setLearningPath] = useState(() =>
    loadLearningPath(roadmap)
  );

  useEffect(() => {
    saveLearningPath(learningPath);
  }, [learningPath]);

  function handleLessonComplete(lessonId) {
    setLearningPath((currentPath) =>
      completeLesson(currentPath, lessonId)
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home roadmap={learningPath} />} />

        <Route
          path="/journey"
          element={<Journey roadmap={learningPath} />}
        />

        <Route
          path="/lessons/:lessonId"
          element={
            <Lesson
              roadmap={learningPath}
              onLessonComplete={handleLessonComplete}
            />
          }
        />

        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;