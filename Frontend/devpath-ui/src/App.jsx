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
import { defaultStudentProfile } from "./data/studentProfile";
import {
  loadStudentProfile,
  saveStudentProfile,
} from "./utils/studentProfileStorage";
import Settings from "./pages/Settings";

function App() {
  const [learningPath, setLearningPath] = useState(() =>
    loadLearningPath(roadmap)
  );

  const [studentProfile, setStudentProfile] = useState(() =>
  loadStudentProfile(defaultStudentProfile)
);

  useEffect(() => {
    saveLearningPath(learningPath);
  }, [learningPath]);

  useEffect(()=> {
    saveStudentProfile(studentProfile);
  }, [studentProfile]);

  function handleLessonComplete(lessonId) {
    setLearningPath((currentPath) =>
      completeLesson(currentPath, lessonId)
    );
  }

  function handleResetProgress() {
    setLearningPath(roadmap);
  }

  function handleStudentProfileSave(updatedProfile) {
    setStudentProfile(updatedProfile);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route 
          path="/app" 
          element={
            <Home 
              roadmap={learningPath}
              studentProfile={studentProfile}
            />
          }
        />

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
        <Route path="/profile" element={
          <Profile 
            roadmap={learningPath}
            studentProfile={studentProfile}
            onResetProgress={handleResetProgress}
          />
          } 
        />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route
          path="/settings"
          element={
            <Settings
              studentProfile={studentProfile}
              onSave={handleStudentProfileSave}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;