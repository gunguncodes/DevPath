export function completeLesson(milestones, lessonId) {
  let targetLessonFound = false;
  let nextLessonId = null;

  for (const milestone of milestones) {
    for (const lesson of milestone.lessons) {
      if (targetLessonFound && lesson.status === "locked") {
        nextLessonId = lesson.id;
        break;
      }

      if (lesson.id === lessonId) {
        targetLessonFound = true;
      }
    }

    if (nextLessonId) {
      break;
    }
  }

  return milestones.map((milestone) => {
    const updatedLessons = milestone.lessons.map((lesson) => {
      if (lesson.id === lessonId) {
        return { ...lesson, status: "completed" };
      }

      if (lesson.id === nextLessonId) {
        return { ...lesson, status: "current" };
      }

      return lesson;
    });

    const allLessonsCompleted = updatedLessons.every(
      (lesson) => lesson.status === "completed"
    );

    const hasCurrentLesson = updatedLessons.some(
      (lesson) => lesson.status === "current"
    );

    let status = "locked";

    if (allLessonsCompleted) {
      status = "completed";
    }

    if (hasCurrentLesson) {
      status = "current";
    }

    return {
      ...milestone,
      status,
      lessons: updatedLessons,
    };
  });
}