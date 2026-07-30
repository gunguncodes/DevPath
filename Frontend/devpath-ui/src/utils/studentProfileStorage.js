const STORAGE_KEY = "devpath-student-profile";

export function loadStudentProfile(defaultProfile) {
  try {
    const savedProfile = localStorage.getItem(STORAGE_KEY);

    if (!savedProfile) {
      return defaultProfile;
    }

    return JSON.parse(savedProfile);
  } catch {
    return defaultProfile;
  }
}

export function saveStudentProfile(studentProfile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studentProfile));
  } catch {
  }
}