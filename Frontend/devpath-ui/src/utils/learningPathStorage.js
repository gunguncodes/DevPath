const STORAGE_KEY = "devpath-learning-path";

export function loadLearningPath(defaultPath) {
  try {
    const savedPath = localStorage.getItem(STORAGE_KEY);

    if (!savedPath) {
      return defaultPath;
    }

    return JSON.parse(savedPath);
  } catch {
    return defaultPath;
  }
}

export function saveLearningPath(learningPath) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(learningPath));
  } catch {
    // The app still works if browser storage is unavailable.
  }
}