import Greeting from "../components/home/Greeting";
import MissionCard from "../components/home/MissionCard";
import ProgressCard from "../components/home/ProgressCard";
import NextMilestone from "../components/home/NextMilestone";
import MainLayout from "../layouts/MainLayout";
import { getLearningStats } from "../utils/learningStats";

function Home({ roadmap }) {
  const {
    completedLessons,
    totalLessons,
    percentage,
    currentMilestone,
    currentLesson,
    nextMilestone,
  } = getLearningStats(roadmap);

  return (
    <MainLayout>
      <Greeting />

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentMilestone && currentLesson && (
            <MissionCard
              milestone={currentMilestone}
              lesson={currentLesson}
            />
          )}
        </div>

        <ProgressCard
          currentMilestone={currentMilestone}
          completedLessons={completedLessons}
          totalLessons={totalLessons}
          percentage={percentage}
        />
      </section>

      <section className="mt-6">
        <NextMilestone milestone={nextMilestone} />
      </section>
    </MainLayout>
  );
}

export default Home;