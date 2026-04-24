export interface Publication {
  ID: string;
  ENTRYTYPE: string;
  title: string;
  author: string;
  year: string;
  journal?: string;
  booktitle?: string;
  pages?: string;
  organization?: string;
  volume?: string;
  keywords?: string;
  series?: string;
  location?: string;
  numpages?: string;
  abstract?: string;
  doi?: string;
  url?: string;
  address?: string;
  publisher?: string;
  isbn?: string;
  number?: string;
}

export const publications: Publication[] = [
    {
        "keywords": "2022",
        "year": "2022",
        "journal": "arXiv preprint arXiv:2203.06439",
        "author": "Gena, Cristina and Mattutino, Claudio and Mosca, Enrico and Lillo, Alberto",
        "title": "An end-user coding-based environment for programming an educational affective robot",
        "ENTRYTYPE": "article",
        "url": "https://arxiv.org/abs/2203.06439",
        "ID": "gena2022end"
    },
    {
        "keywords": "2022",
        "year": "2022",
        "journal": "arXiv preprint arXiv:2205.10222",
        "author": "Gena, Cristina and Lillo, Alberto and Mattutino, Claudio and Mosca, Enrico",
        "title": "An affective and adaptive educational robot",
        "url": "https://arxiv.org/pdf/2205.10222",
        "ENTRYTYPE": "article",
        "ID": "gena2022affective"
    },
    {
        "keywords": "2022",
        "year": "2022",
        "pages": "146--150",
        "booktitle": "Adjunct Proceedings of the 30th ACM Conference on User Modeling, Adaptation and Personalization",
        "author": "Gena, Cristina and Lillo, Alberto and Mattutino, Claudio and Mosca, Enrico",
        "title": "Wolly: an affective and adaptive educational robot",
        "url": "https://dl.acm.org/doi/pdf/10.1145/3511047.3537684",
        "ENTRYTYPE": "inproceedings",
        "ID": "gena2022wolly"
    },
    {
        "keywords": "2023",
        "organization": "CEUR-WS",
        "year": "2023",
        "pages": "43--48",
        "volume": "3481",
        "booktitle": "CEUR WORKSHOP PROCEEDINGS",
        "author": " Lillo, Alberto",
        "title": "Empathy and Emotion in Social Robots",
        "url": "https://iris.unito.it/retrieve/7c51487f-b2f1-41f6-a469-15da3203df43/CHItaly_2023.pdf",
        "ENTRYTYPE": "inproceedings",
        "ID": "lillo2023empathy"
    },
    {
        "keywords": "2023",
        "year": "2023",
        "pages": "94--103",
        "booktitle": "Proceedings of the 25th international conference on multimodal interaction",
        "author": "Gena, Cristina and Manini, Francesca and Lieto, Antonio and Lillo, Alberto and Vernero, Fabiana",
        "title": "Can empathy affect the attribution of mental states to robots?",
        "url": "https://dl.acm.org/doi/pdf/10.1145/3577190.3614167",
        "ENTRYTYPE": "inproceedings",
        "ID": "gena2023can"
    },
    {
        "keywords": "2024",
        "year": "2024",
        "pages": "940--944",
        "booktitle": "Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction",
        "author": "Saracco, Alessandro and Lillo, Alberto and Stranisci, Marco and Gena, Cristina",
        "title": "Human Robot Interaction through an ontology-based dialogue engine",
        "url": "https://dl.acm.org/doi/pdf/10.1145/3610978.3640642",
        "ENTRYTYPE": "inproceedings",
        "ID": "saracco2024human"
    },
    {
        "keywords": "2024",
        "year": "2024",
        "journal": "arXiv preprint arXiv:2405.01019",
        "author": "Lillo, Alberto and Saracco, Alessandro and Siletto, Elena and Mattutino, Claudio and Gena, Cristina",
        "title": "Investigating the relationship between empathy and attribution of mental states to robots",
        "url": "https://arxiv.org/pdf/2405.01019",
        "ENTRYTYPE": "article",
        "ID": "lillo2024investigating"
    },
    {
        "keywords": "Animal Robot Interaction, Dog Robot Interaction, Social Robotics",
        "series": "UMAP Adjunct '25",
        "location": "",
        "numpages": "5",
        "pages": "156–160",
        "booktitle": "Adjunct Proceedings of the 33rd ACM Conference on User Modeling, Adaptation and Personalization",
        "abstract": "While Human-Robot Interaction (HRI) has seen extensive exploration, Animal-Robot Interaction (ARI) remains a less mature field. This paper presents a first AI-based prototype designed to enable a humanoid robot to recognize emotional and postural states in dogs and adapt its behavior accordingly. Using a deep learning-based pipeline for real-time detection and classification, the robot could adapt its movements to better accommodate canine responses. We propose that such an adaptive approach paves the way for more natural coexistence between robots and animals in domestic settings, raising new challenges in perception, behavior design, and ethics within ARI.",
        "doi": "10.1145/3708319.3733666",
        "url": "https://doi.org/10.1145/3708319.3733666",
        "address": "New York, NY, USA",
        "publisher": "Association for Computing Machinery",
        "isbn": "9798400713996",
        "year": "2025",
        "title": "Robots adapting to dogs: a new frontier?",
        "author": "Paloka, Angelo and Lillo, Alberto and Vernero, Fabiana and Correia, Filipa and Nisi, Valentina and Lossi, Laura and Gena, Cristina",
        "ENTRYTYPE": "inproceedings",
        "ID": "animal2025"
    },
    {
        "keywords": "Social Robots, HRI, Adaptivity, Human Behavior Understanding, Human Centered AI",
        "series": "UMAP Adjunct '25",
        "location": "",
        "numpages": "4",
        "pages": "132–135",
        "booktitle": "Adjunct Proceedings of the 33rd ACM Conference on User Modeling, Adaptation and Personalization",
        "abstract": "Human Robot Interaction (HRI) is a field of study dedicated to understanding, designing, and evaluating robotic systems for use by, or with, humans. In HRI there is a consensus about the design and implementation of robotic systems that should be able to adapt their behavior based on user actions and behavior. The robot should adapt to emotions, personalities, and it should also have a memory of past interactions with the user to become believable. This is of particular importance in the field of social robotics and social HRI. The aim of this Workshop is to bring together researchers and practitioners who are working on various aspects of social robotics and adaptive interaction. The expected result of the workshop is a multidisciplinary research agenda that will inform future research directions and hopefully, forge some research collaborations.",
        "doi": "10.1145/3708319.3727562",
        "url": "https://doi.org/10.1145/3708319.3727562",
        "address": "New York, NY, USA",
        "publisher": "Association for Computing Machinery",
        "isbn": "9798400713996",
        "year": "2025",
        "title": "6th Workshop on Adapted intEraction with SociAl Robots (cAESAR)",
        "author": "Cocchella, Francesca and Lillo, Alberto and Palestra, Giuseppe and Raggioli, Luca and Scorza Azzar\\`{a}, Giulia and Gena, Cristina",
        "ENTRYTYPE": "inproceedings",
        "ID": "workshop2025"
    },
    {
        "keywords": "Social Assistive Robotics, Virtual Robots, Elderly Care",
        "series": "UMAP Adjunct '25",
        "location": "",
        "numpages": "5",
        "pages": "169–173",
        "booktitle": "Adjunct Proceedings of the 33rd ACM Conference on User Modeling, Adaptation and Personalization",
        "abstract": "This paper presents the development of a simulated assistive system based on the NAO humanoid robot, designed to support cognitive engagement and well-being in elderly users. Leveraging the Webots simulation environment, we integrated advanced functionalities including voice interaction through Google Speech Recognition, contextual dialogue using the LLaMA language model, and speech synthesis via pyttsx3. The system enables the virtual NAO (vNAO) to conduct conversational interactions, administer cognitive exercises, issue reminders, and guide users through physical activities, all within a personalized, elderly-friendly virtual environment. Our implementation demonstrates that a simulation-based approach can provide a scalable, accessible framework for testing and deploying socially assistive robotics.",
        "doi": "10.1145/3708319.3733665",
        "url": "https://doi.org/10.1145/3708319.3733665",
        "address": "New York, NY, USA",
        "publisher": "Association for Computing Machinery",
        "isbn": "9798400713996",
        "year": "2025",
        "title": "vNAO: Virtual NAO as a Cognitive Companion for the Elderly",
        "author": "Lillo, Alberto and Mattutino, Claudio and Gena, Cristina",
        "ENTRYTYPE": "inproceedings",
        "ID": "vnao2025"
    },
    {
        "keywords": "2025",
        "publisher": "IEEE",
        "year": "2025",
        "journal": "IEEE Transactions on Affective Computing",
        "author": "Buracchio, Giorgia and Callegari, Ariele and Donini, Massimo and Gena, Cristina and Lieto, Antonio and Lillo, Alberto and Mattutino, Claudio and Mazzei, Alessandro and Pigureddu, Linda and Striani, Manuel and others",
        "title": "Emotion Alignment in Human-Robot Interaction: Effects on Communication Styles and Persuasion",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11117178",
        "ENTRYTYPE": "article",
        "ID": "buracchio2025emotion"
    },
    {
        "keywords": "2025",
        "year": "2025",
        "journal": "arXiv preprint arXiv:2508.05946",
        "author": "Balossino, Nello and Damiano, Rossana and Gena, Cristina and Lillo, Alberto and Marras, Anna Maria and Mattutino, Claudio and Pizzo, Antonio and Prin, Alessia and Vernero, Fabiana",
        "title": "Social and Telepresence Robots for Accessibility and Inclusion in Small Museums",
        "url": "https://arxiv.org/pdf/2508.05946",
        "ENTRYTYPE": "article",
        "ID": "balossino2025social"
    },
    {
        "keywords": "2025",
        "year": "2025",
        "journal": "arXiv preprint arXiv:2509.09889",
        "author": "Botta, Giulia and Botta, Marco and Gena, Cristina and Mazzei, Alessandro and Donini, Massimo and Lillo, Alberto",
        "title": "Using the Pepper Robot to Support Sign Language Communication",
        "url": "https://arxiv.org/pdf/2509.09889",
        "ENTRYTYPE": "article",
        "ID": "botta2025using"
    },
    {
        "doi": "10.1109/RO-MAN63969.2025.11217584",
        "keywords": "2025",
        "pages": "2436-2443",
        "number": "",
        "volume": "",
        "year": "2025",
        "title": "The Impact of Adaptive Emotional Alignment on Mental State Attribution and User Empathy in HRI",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11217584",
        "booktitle": "2025 34th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)",
        "author": "Buracchio, Giorgia and Callegari, Ariele and Donini, Massimo and Gena, Cristina and Lieto, Antonio and Lillo, Alberto and Mattutino, Claudio and Mazzei, Alessandro and Pigureddu, Linda and Striani, Manuel and Vernero, Fabiana",
        "ENTRYTYPE": "inproceedings",
        "ID": "buracchio2025impact"
    },
    {
        "keywords": "Computing methodologies - Cognitive robotics",
        "series": "HRI Companion '26",
        "location": "Edinburgh, Scotland, UK",
        "numpages": "5",
        "pages": "547–551",
        "booktitle": "Companion Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction",
        "abstract": "This paper explores the emerging field of Animal-Robot Interaction (ARI) by questioning the way humanoid robots could engage with dogs in domestic settings, a scenario which we expect to become prevalent in the near future. While existing research focuses on human-robot interaction, ARI remains quite underexplored, particularly regarding how dogs perceive and respond to robotic agents. In contrast, this work proposes a playful and relational design perspective to foster more natural interactions between dogs and robots.   We sought guidance from the Department of Veterinary Medicine to ensure our experimental design offered an ethical and stress-free environment for the dogs. Hence, the study incorporated best practices in robot vocalisation, gestural communication, and movement adaptation, improving the robot’s ability to interact naturally. The experiment involved six dogs, always in the presence of their owners. Preliminary findings indicate that dogs can react with curiosity and engagement, but also avoidance or fear, challenging assumptions about robot acceptability in animal interactions. We argue for rethinking robotic design beyond human-centric paradigms, advocating for pluralistic and open-ended approaches to ARI.",
        "doi": "10.1145/3776734.3794455",
        "url": "https://doi.org/10.1145/3776734.3794455",
        "address": "New York, NY, USA",
        "publisher": "Association for Computing Machinery",
        "isbn": "9798400723216",
        "year": "2026",
        "title": "Of Dogs and Robots: More Than Human Interactions at Play?",
        "author": "Correia, Filipa and Gena, Cristina and Lillo, Alberto and Lossi, Laura and Mattutino, Claudio and Nisi, Valentina and Pigureddu, Linda and Vernero, Fabiana",
        "ENTRYTYPE": "inproceedings",
        "ID": "dog"
    }
];
