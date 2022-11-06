import { GraphData, LinkObject, NodeObject } from "react-force-graph-2d";

enum GraphNodeType {
  LANGUAGE,
  RUNTIME,
  FRAMEWORK,
}

const techTreeGraphData: {
  nodes: Array<NodeObject & { name: string; type: GraphNodeType }>;
  links: Array<LinkObject>;
} = {
  nodes: [
    {
      id: "HTML/CSS",
      name: "HTML/CSS",
      type: GraphNodeType.LANGUAGE,
    },
    {
      id: "Javascript",
      name: "Javascript",
      type: GraphNodeType.LANGUAGE,
    },
    {
      id: "Node.js",
      name: "Node.js",
      type: GraphNodeType.RUNTIME,
    },
    {
      id: "React",
      name: "React",
      type: GraphNodeType.FRAMEWORK,
    },
    {
      id: "Vue.js",
      name: "Vue.js",
      type: GraphNodeType.FRAMEWORK,
    },
    {
      id: "Express",
      name: "Express",
      type: GraphNodeType.FRAMEWORK,
    },
    {
      id: "Java",
      name: "Java",
      type: GraphNodeType.LANGUAGE,
    },
    {
      id: "Spring",
      name: "Spring",
      type: GraphNodeType.FRAMEWORK,
    },
    {
      id: "Python",
      name: "Python",
      type: GraphNodeType.LANGUAGE,
    },
    {
      id: "Flask",
      name: "Flask",
      type: GraphNodeType.FRAMEWORK,
    },
    {
      id: "Django",
      name: "Django",
      type: GraphNodeType.FRAMEWORK,
    },
  ],
  links: [
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
