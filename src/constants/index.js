import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  dotnet,
  postgres,
  next,
  flutter,
  mnr,
  blackph,
  tutor,
  epiuse,
  golang,
  promptopia,
  sumz,
  homyz,
  airbnb,
  spotify,
  sushi_sushi,
  julio_pp,
  joey_pp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://github.com/Phahladira-Moja/",
    title: "Github",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Dotnet",
    icon: dotnet,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company_name: "EPI-USE LABS",
    icon: epiuse,
    iconBg: "#000",
    date: "December 2022 - Present",
    points: [
      "Developing a real-time change detector on SQL Server - using .NET, RabbitMq, Docker and Kubernetes",
      "Implementing Unit Tests for the various parts of the source code.",
      "Currently working on a document capturing system, using AngularJs and Vanilla Javascript, for ADP.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company_name: "Black PH Group",
    icon: blackph,
    iconBg: "#000",
    date: "December 2020 - Present",
    points: [
      "Developing cross platform mobile application using Flutter.",
      "Integrating the mobile application with the backend / database services.",
      "In charge of communications with clients and scope/software requirements break-down.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company_name: "Monkey & River",
    icon: mnr,
    iconBg: "#383E56",
    date: "April 2022 - October 2022",
    points: [
      "Create a serverless firebase backend for a data-free app, hosted on Moya app.",
      "Work on insurance details capturing form in Angular, for Momentum.",
      "Worked on an International remittance application using Ionic.",
      "Creating a CI/CD Pipeline using AWS copilot.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company_name: "123 Tutors",
    icon: tutor,
    iconBg: "#E6DEDD",
    date: "June 2021 - September 2021",
    points: [
      "Create a dashboard system so that they can move their current information from their previous system to the new one. ",
      "Connect the dashboard to their subdomain.",
      "Connect their dashboard to a backend that emails students and tutors once an allocation has been made",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Phahla is not only a great person but also an incredible professional, always engaged to deliver the best code to each feature. His eager to learn and improve takes him to the next level. I'm really glad that we are in the same team.",
    name: "Julio Cunha",
    designation: "Senior Backend Developer",
    company: "Konk Consulting",
    image: julio_pp,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Joey Malope",
    designation: "Senior Frontend Developer",
    company: "Macaroni Inc",
    image: joey_pp,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Promptopia",
    description:
      " Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. Allow others to see what you're prompting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    deployed_link: "https://ai-prompt-share-seven.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/ai_prompt_share",
  },
  {
    name: "Sumz",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    deployed_link: "https://open-ai-summarizer-wheat.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/open_ai_summarizer",
  },
  {
    name: "Airbnb Clone",
    description:
      "Experience a world of possibilities with our Airbnb clone. Find unique stays and unforgettable adventures wherever you go. Experience what others experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    deployed_link: "https://accomodation-booking-nextjs-clone.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/airbnb-next-clone",
  },
  {
    name: "Homyz",
    description:
      "Explore your dream home effortlessly. Our property web-app lets you book house viewings seamlessly. Your new home journey starts here.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: homyz,
    deployed_link: "https://full-stack-real-estate-web-app-ten.vercel.app/",
    source_code_link:
      "https://github.com/Phahladira-Moja/full-stack-real-estate-web-app",
  },
  // {
  //   name: "Spotify Clone",
  //   description:
  //     "Immerse yourself in music with our Spotify clone. Discover, play, and curate endless playlists. Your perfect soundtrack, anytime, anywhere.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: spotify,
  //   deployed_link: "https://spotify-clone-nextjs-theta.vercel.app/",
  //   source_code_link: "https://github.com/Phahladira-Moja/spotify-clone-nextjs",
  // },
  // {
  //   name: "Sushi Sushi",
  //   description:
  //     "Savor exquisite flavors at our sushi restaurant. Immerse in Japanese culinary artistry. Reserve a table for an unforgettable dining experience. Sushi Landing page.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "aos",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: sushi_sushi,
  //   deployed_link: "https://sushi-landing-app.vercel.app/",
  //   source_code_link: "https://github.com/Phahladira-Moja/sushi-landing-app",
  // },
];

export { services, technologies, experiences, testimonials, projects };
