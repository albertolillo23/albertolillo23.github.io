// src/data/experience.ts
// Esperienza accademica e professionale di Alberto Lillo

export interface TimelineItem {
  id: string;
  type: "education" | "work" | "internship";
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experience: TimelineItem[] = [
  {
    id: "phd-unito",
    type: "education",
    title: "PhD Candidate in Computer Science",
    institution: "Università degli Studi di Torino (UniTo)",
    location: "Turin, Italy",
    period: "Nov 2022 – present",
    description:
      "Doctoral research at the AIR Lab (Advanced Interactions & Robotics Lab) focused on Human-Robot Interaction, with particular emphasis on empathic and socially intelligent robots.",
    highlights: [
      "Empathic cognitive architectures for social robots",
      "Research stays at University of Manchester (UK) and IIT Genoa (Italy)",
    ],
  },
  {
    id: "visiting-manchester-2",
    type: "internship",
    title: "Research Visiting Scholar",
    institution: "University of Manchester",
    location: "Manchester, UK",
    period: "Oct – Nov 2024",
    description:
      "Second research visit to the University of Manchester, continuing collaborative work on social robotics and HRI.",
    highlights: [
      "Collaborative research on social robotics and HRI"
    ],
  },
  {
    id: "visiting-manchester-1",
    type: "internship",
    title: "Research Visiting Scholar",
    institution: "University of Manchester",
    location: "Manchester, UK",
    period: "Jan – Jun 2024",
    description:
      "Six-month research visit to the University of Manchester, collaborating on projects related to cognitive architectures for Human-Robot Interaction and social robot behavior design.",
    highlights: [
      "Collaborative research on social robotics and HRI",

    ],
  },
  {
    id: "internship-iit",
    type: "internship",
    title: "Research Internship",
    institution: "Istituto Italiano di Tecnologia (IIT)",
    location: "Genoa, Italy",
    period: "Oct – Dec 2023",
    description:
      "Research internship at IIT Genoa working on cognitive architectures and Emotion Recognition through Body Language for humanoid robots, including the iCub platform.",
    highlights: [
      "iCub robot programming with YARP",
      "Emotion recognition using Body Language",
    ],
  },
  {
    id: "msc-unito",
    type: "education",
    title: "MSc in Computer Science - Artificial Intelligence",
    institution: "Università degli Studi di Torino (UniTo)",
    location: "Turin, Italy",
    period: "2020 – 2022",
    description:
      "Master's degree in Computer Science with a thesis on a CNN-based approach for Emotion Recognition in Context",
    highlights: [],
  },
  {
    id: "bsc-unito",
    type: "education",
    title: "BSc in Computer Science",
    institution: "Università degli Studi di Torino (UniTo)",
    location: "Turin, Italy",
    period: "2017 – 2020",
    description: "Bachelor's degree in Computer Science at the University of Turin.",
    highlights: [],
  },
];
