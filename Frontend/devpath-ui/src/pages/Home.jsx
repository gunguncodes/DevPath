import Greeting from "../components/home/Greeting";
import MissionCard from "../components/home/MissionCard";
import ProgressCard from "../components/home/ProgressCard";
import NextMilestone from "../components/home/NextMilestone";
import MainLayout from "../layouts/MainLayout";

function Home({roadmap}) {
  const currentMilestone = roadmap.find(
    (milestone) => milestone.status === "current"
  );

  const currentLesson = currentMilestone?.lessons.find(
    (lesson) => lesson.status === "current"
  );

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

        <div>
          <ProgressCard />
        </div>
      </section>

      <section className="mt-6">
        <NextMilestone />
      </section>
    </MainLayout>
  );
}

export default Home;