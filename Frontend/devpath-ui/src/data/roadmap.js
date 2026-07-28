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
    {
      id: "components",
      title: "Components",
      status: "completed",
    },
    {
      id: "props",
      title: "Props",
      status: "completed",
    },
    {
      id: "use-state",
      title: "useState",
      status: "current",
      duration: "30 minutes",
      summary:
        "Learn how React components remember and update information.",
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
    {
      id: "use-effect",
      title: "useEffect",
      status: "locked",
      duration: "35 minutes",
      summary:
        "Learn how React runs code when a component first appears or when data changes.",
      reason:
        "Effects are useful for tasks outside rendering, such as fetching data, updating the page title, or using browser APIs.",
      steps: [
        {
          title: "Understand when an effect runs",
          description:
            "Use useEffect to run code after React finishes rendering a component.",
        },
        {
          title: "Add a dependency",
          description:
            "Pass a dependency array so React knows when the effect should run again.",
        },
        {
          title: "Build a small example",
          description:
            "Update the document title whenever a counter value changes.",
        },
      ],
    },
  ],
  },

  {
  id: "react-router",
  title: "React Router",
  description: "Add navigation between pages in your app.",
  status: "locked",
  lessons: [
    {
      id: "routes",
      title: "Basic Routes",
      status: "locked",
      duration: "30 minutes",
      summary:
        "Learn how React Router displays a different page for each URL.",
      reason:
        "Routing turns a single React screen into a real multi-page application.",
      steps: [
        {
          title: "Create two pages",
          description:
            "Create simple Home and About page components.",
        },
        {
          title: "Define routes",
          description:
            "Use Route components to connect each URL to a page.",
        },
        {
          title: "Add navigation",
          description:
            "Use Link components so users can move between pages without a full reload.",
        },
      ],
    },
    {
  id: "route-params",
  title: "Route Parameters",
  status: "locked",
  duration: "25 minutes",
  summary:
    "Learn how to read values from a URL, such as a lesson ID or user ID.",
  reason:
    "Route parameters let one reusable page display different content based on the URL.",
  steps: [
    {
      title: "Create a dynamic route",
      description:
        "Add a route such as /lessons/:lessonId, where lessonId changes.",
    },
    {
      title: "Read the parameter",
      description:
        "Use useParams to access the lesson ID inside the page component.",
    },
    {
      title: "Show matching content",
      description:
        "Find the lesson with that ID and display its title and details.",
    },
  ],
},
  ],
},
  {
    id: "state-management",
    title: "State Management",
    description: "Share and organize state across your application.",
    status: "locked",
    lessons: [
      {
  id: "context-api",
  title: "Context API",
  status: "locked",
  duration: "35 minutes",
  summary:
    "Learn how to share data between components without passing props through every level.",
  reason:
    "Context is useful for app-wide information such as a logged-in user, theme, or learning progress.",
  steps: [
    {
      title: "Create a context",
      description:
        "Use createContext to make a shared place for application data.",
    },
    {
      title: "Provide a value",
      description:
        "Wrap the components that need the data with a context provider.",
    },
    {
      title: "Read the shared value",
      description:
        "Use useContext inside a child component to access the provided data.",
    },
  ],
},
    {
  id: "global-state",
  title: "Global State Patterns",
  status: "locked",
  duration: "30 minutes",
  summary:
    "Learn when shared state is useful and how to keep it organized.",
  reason:
    "Good state structure keeps larger React applications predictable and easier to maintain.",
  steps: [
    {
      title: "Identify shared state",
      description:
        "Separate data needed by one component from data needed across the app.",
    },
    {
      title: "Choose the right location",
      description:
        "Keep local state close to the component and lift only truly shared state upward.",
    },
    {
      title: "Avoid unnecessary global state",
      description:
        "Use global state only when multiple parts of the app need the same data.",
    },
  ],
  },
    ],
  }
];