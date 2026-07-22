import Greeting from "../components/Greeting";
import MissionCard from "../components/MissionCard";
import ProgressCard from "../components/ProgressCard";
import NextMilestone from "../components/NextMilestone";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <Greeting />

      <section className="grid grid-cols-3 gap-6 mt-10">
        <div className="col-span-2">
          <MissionCard />
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