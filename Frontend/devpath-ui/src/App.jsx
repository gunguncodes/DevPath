import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Lesson from "./pages/Lesson";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import { roadmap } from "./data/roadmap";
import { completeLesson } from "./utils/learningProgress";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
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

  function handleResetProgress() {
    setLearningPath(roadmap);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/app" element={<Home roadmap={learningPath}/>}/>

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

        <Route path="/roadmap" element={<Roadmap roadmap={learningPath} />} />
        <Route path="/profile" element={<Profile roadmap={learningPath} onResetProgress={handleResetProgress} />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;