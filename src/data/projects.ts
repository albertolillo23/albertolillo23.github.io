// src/data/projects.ts
// Progetti di ricerca e sviluppo di Alberto Lillo

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  github?: string;
  paper?: string;
  demo?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "empathic-architecture",
    title: "ECRA - Empathic Cognitive Robotic Architecture",
    description:
      "A modular Empathic and Adaptive Cognitive Architecture enabling empathic responses in humanoid robots, integrating OCC appraisal theory, Thompson Sampling, and a multimodal generation pipeline.",
    longDescription:
      "Developed during my PhD, this architecture models six cognitive layers: Perception, Understanding, Appraisal, Memory, Decision, and Generation. The system enables robots to produce contextually appropriate empathic responses.",
    tags: ["Cognitive Architecture", "Emotion AI", "Computational Psychology", "Human-Robot Interaction"],
    featured: true,
    year: "2022–2026",
    paper: undefined,
  },
  {
    id: "dont-chri",
    title: "Don't cHRI",
    description:
      "Research project on negative and uncomfortable interactions in Human-Robot Interaction. Investigating how robots should respond when users are rude, aggressive or uncooperative.",
    longDescription:
      "This project explores the underrepresented domain of negative HRI interactions, studying how social robots should react to uncomfortable, rude or aggressive user behaviors. The research involves user studies and the design of robot responses that balance social norms with robot well-being.",
    tags: ["HRI", "Social Robotics", "User Studies", "Python", "ROS2"],
    featured: true,
    year: "2024–2025",
    paper: undefined,
  },
  {
    id: "wolly",
    title: "Wolly - Social Robot in Education",
    description:
      "Social robot assistant designed for educational settings. Wolly supports students with personalized interactions, adapting its behavior based on engagement and emotional cues.",
    longDescription:
      "Wolly is a social robot platform designed to operate in primary school environments. The system uses computer vision for emotion recognition, adapts interaction strategies based on student engagement, and provides teachers with data on classroom dynamics.",
    tags: ["Education", "Social Robot", "Computer Vision", "Python", "ROS"],
    featured: true,
    year: "2021–2022",
    demo: undefined,
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
