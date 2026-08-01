export function generateRoadmap(curriculum, completedModuleIds) {
  let shouldKeepCompletingModules = true;
  let currentModuleCreated = false;

  return curriculum.map((module) => {
    const studentCompletedModule =
      shouldKeepCompletingModules &&
      completedModuleIds.includes(module.id);

    if (studentCompletedModule) {
      return {
        ...module,
        status: "completed",
        lessons: module.lessons.map((lesson) => ({
          ...lesson,
          status: "completed",
        })),
      };
    }

    shouldKeepCompletingModules = false;

    if (!currentModuleCreated) {
      currentModuleCreated = true;

      return {
        ...module,
        status: "current",
        lessons: module.lessons.map((lesson, index) => ({
          ...lesson,
          status: index === 0 ? "current" : "locked",
        })),
      };
    }

    return {
      ...module,
      status: "locked",
      lessons: module.lessons.map((lesson) => ({
        ...lesson,
        status: "locked",
      })),
    };
  });
}