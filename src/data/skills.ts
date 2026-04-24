// src/data/skills.ts
// Competenze tecniche di Alberto Lillo

export interface SkillGroup {
  category: string;
  icon: string; // lucide icon name
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "PHP", "HTML", "CSS", "SQL", "Bash", "C#", "Kotlin", "React", "Node.js", "Flask", "Django"],
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LLM APIs", "NLU"],
  },
  {
    category: "Robotics",
    icon: "Bot",
    skills: ["ROS", "ROS2", "YARP", "Reachy Mini", "NAO", "Pepper", "NAOqi"],
  },
  {
    category: "Computer Vision",
    icon: "Eye",
    skills: ["OpenCV", "MediaPipe", "YOLO", "Emotion Recognition", "Computer Vision"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Docker", "Git", "Linux", "Vercel", "Jupyter", "LaTeX", "Ubuntu", "Postman", "GitLab", "GitHub"],
  },
  {
    category: "Languages",
    icon: "Globe",
    skills: ["Italian (native)", "English (B2)"],
  },
];

export const profileInfo = {
  name: "Alberto Lillo",
  role: "PhD Candidate in Computer Science",
  lab: "AIR Lab",
  university: "Università degli Studi di Torino",
  email: "alberto.lillo@unito.it",
  location: "Turin, Italy",
  github: "https://github.com/albertolillo23",
  linkedin: "https://linkedin.com/in/alberto-lillo",
  bio: "I'm a PhD candidate at the AIR Lab (UniTo) researching in the field of Human-Robot Interaction, with a focus on empathic and socially intelligent robots. My work spans from cognitive architectures for affective computing to the study of interactions in HRI.",
  shortBio:
    "Researcher in Human-Robot Interaction & Empathic AI @ AIR Lab, UniTo.",
  researchInterests: [
    "Human-Robot Interaction",
    "Empathic AI",
    "Social Robotics",
    "Affective Computing",
    "Cognitive Architectures",
  ],
};
