export const roadmap = [
  {
    id: "html-css",
    title: "HTML & CSS",
    description: "Build structured, responsive web pages.",
    status: "completed",
    lessons: [
      { id: "semantic-html", title: "Semantic HTML", status: "completed" },
      { id: "flexbox", title: "Flexbox", status: "completed" },
      { id: "css-grid", title: "CSS Grid", status: "completed" },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Learn the language behind interactive websites.",
    status: "completed",
    lessons: [
      { id: "functions", title: "Functions", status: "completed" },
      { id: "arrays", title: "Arrays and Objects", status: "completed" },
      { id: "async-await", title: "Async JavaScript", status: "completed" },
    ],
  },
  {
    id: "react",
    title: "React",
    description: "Build user interfaces with reusable components.",
    status: "current",
    lessons: [
      { id: "components", title: "Components", status: "completed" },
      { id: "props", title: "Props", status: "completed" },
      {
           id: "use-state",
           title: "useState",
           status: "current",
           duration: "30 minutes",
           summary: "Learn how React components remember and update information.",
           reason:
           "State is what makes a React interface interactive. You will use it in forms, counters, filters, and many real projects.",
           steps: [
        {
           title: "Create state",
           description:
           "Import useState and create a count value that starts at zero.",
        },
        {
           title: "Display the value",
           description:
           "Render the count inside your component so the user can see it.",
        },
        {
            title: "Update state",
            description:
            "Add a button that increases the count when the user clicks it.",
        },
        ],
      },
      { id: "use-effect", title: "useEffect", status: "locked" },
    ],
  },
  {
    id: "react-router",
    title: "React Router",
    description: "Add navigation between pages in your app.",
    status: "locked",
    lessons: [
      { id: "routes", title: "Basic Routes", status: "locked" },
      { id: "route-params", title: "Route Parameters", status: "locked" },
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    description: "Share and organize state across your application.",
    status: "locked",
    lessons: [
      { id: "context-api", title: "Context API", status: "locked" },
      { id: "global-state", title: "Global State Patterns", status: "locked" },
    ],
  },
];