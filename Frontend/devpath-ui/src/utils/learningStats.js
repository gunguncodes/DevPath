export function getLearningStats(roadmap) {
  let totalLessons = 0;
  let completedLessons = 0;

  roadmap.forEach((milestone) => {
    milestone.lessons.forEach((lesson) => {
      totalLessons += 1;

      if (lesson.status === "completed") {
        completedLessons += 1;
      }
    });
  });

  const currentMilestone = roadmap.find(
    (milestone) => milestone.status === "current"
  );

  const currentLesson = currentMilestone?.lessons.find(
    (lesson) => lesson.status === "current"
  );

  const nextMilestone = roadmap.find(
    (milestone) => milestone.status === "locked"
  );

  return {
    completedLessons,
    totalLessons,
    percentage: Math.round((completedLessons / totalLessons) * 100),
    currentMilestone,
    currentLesson,
    nextMilestone,
  };
}