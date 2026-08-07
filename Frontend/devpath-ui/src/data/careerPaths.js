import { roadmap as frontendRoadmap } from "./roadmap";
import { backendRoadmap } from "./backendRoadmap";

export const careerPaths = {
  "frontend-developer": {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "Build responsive, interactive user interfaces for the web.",
    curriculum: frontendRoadmap,
  },
  "backend-developer": {
    id: "backend-developer",
    title: "Backend Developer",
    description: "Build servers, APIs, databases, and secure user accounts.",
    curriculum: backendRoadmap,
  },
};

export const careerPathOptions = Object.values(careerPaths);