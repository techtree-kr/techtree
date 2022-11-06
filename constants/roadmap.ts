const techTreeGraphData = {
  nodes: [
    {
      id: "Web Development",
      name: "Web Development",
    },
    {
      id: "Frontend",
      name: "Frontend",
    },
    {
      id: "Backend",
      name: "Backend",
    },
    {
      id: "HTML/CSS",
      name: "HTML/CSS",
    },
    {
      id: "Javascript",
      name: "Javascript",
    },
    {
      id: "Node.js",
      name: "Node.js",
    },
    {
      id: "React",
      name: "React",
    },
    {
      id: "Vue.js",
      name: "Vue.js",
    },
    {
      id: "Express",
      name: "Express",
    },
    {
      id: "Java",
      name: "Java",
    },
    {
      id: "Spring",
      name: "Spring",
    },
    {
      id: "Python",
      name: "Python",
    },
    {
      id: "Flask",
      name: "Flask",
    },
    {
      id: "Django",
      name: "Django",
    },
  ],
  links: [
    {
      source: "Web Development",
      target: "Frontend",
    },
    {
      source: "Web Development",
      target: "Backend",
    },
    {
      source: "Frontend",
      target: "HTML/CSS",
    },
    {
      source: "HTML/CSS",
      target: "Javascript",
    },
    {
      source: "Javascript",
      target: "Node.js",
    },
    {
      source: "Node.js",
      target: "React",
    },
    {
      source: "Node.js",
      target: "Vue.js",
    },
    {
      source: "Node.js",
      target: "Express",
    },
    {
      source: "Backend",
      target: "Javascript",
    },
    {
      source: "Backend",
      target: "Java",
    },
    {
      source: "Backend",
      target: "Python",
    },
    {
      source: "Java",
      target: "Spring",
    },
    {
      source: "Python",
      target: "Flask",
    },
    {
      source: "Python",
      target: "Django",
    },
  ],
};

export { techTreeGraphData };
