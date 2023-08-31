import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  angular,
  dotnet,
  kube,
  postgres,
  next,
  flutter,
  ionic,
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
  apparel,
  apparel_admin,
  codex,
  hoobank,
  nft,
  sushi_sushi,
  portfolio,
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Ionic",
  //   icon: ionic,
  // },
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
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Kube",
  //   icon: kube,
  // },
];

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company_name: "123 Tutors",
    icon: tutor,
    iconBg: "#E6DEDD",
    date: "June 2021 - September 2021",
    points: [
      "Create a dashboard system so that they can move their current information from their previous system to the new one. ",
      "Connect the dashboard to their subdomain.",
      "IConnect their dashboard to a backend that emails students and tutors once an allocation has been made",
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
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
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
    name: "Spotify Clone",
    description:
      "Immerse yourself in music with our Spotify clone. Discover, play, and curate endless playlists. Your perfect soundtrack, anytime, anywhere.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    deployed_link: "https://spotify-clone-nextjs-theta.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/spotify-clone-nextjs",
  },
  {
    name: "Apparel&Apparel",
    description:
      "Elevate your style with our apparel e-commerce store. Discover the latest trends, quality fabrics, and express your unique fashion.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: apparel,
    deployed_link: "https://ecommerce-store-nextjs-sable.vercel.app/",
    source_code_link:
      "https://github.com/Phahladira-Moja/ecommerce-store-nextjs",
  },
  {
    name: "Apparel&Apparel Admin",
    description:
      "Explore your dream home effortlessly. Our property web-app lets you book house viewings seamlessly. Your new home journey starts here.",
    tags: [
      {
        name: "nodejs",
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
    image: apparel_admin,
    deployed_link: "https://ecommerce-admin-nextjs-psi.vercel.app/",
    source_code_link:
      "https://github.com/Phahladira-Moja/ecommerce-admin-nextjs",
  },
  {
    name: "Chat-GPT Clone",
    description:
      "Converse effortlessly with our ChatGPT clone. Engage in natural, insightful conversations. Your AI-powered chat partner for any topic you're curious about.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codex,
    deployed_link: "https://open-ai-codex-kappa.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/open_ai_codex",
  },

  {
    name: "HooBank",
    description:
      "Experience banking reimagined. Our digital bank offers seamless transactions, robust security, and financial empowerment at your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hoobank,
    deployed_link: "https://bank-modern-app-bice.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/bank_modern_app",
  },
  {
    name: "NFT Showcase",
    description:
      "Unlock a world of digital art with our NFT Showcase app. Explore, collect, and display unique pieces on the blockchain with elegance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    deployed_link: "https://nft-app-showcase-ruddy.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/nft_app_showcase",
  },
  {
    name: "Sushi Sushi",
    description:
      "Savor exquisite flavors at our sushi restaurant. Immerse in Japanese culinary artistry. Reserve a table for an unforgettable dining experience. Sushi Landing page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aos",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sushi_sushi,
    deployed_link: "https://sushi-landing-app.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/sushi-landing-app",
  },
  {
    name: "3D Portfolio Website 😂",
    description:
      "Step into innovation with our 3D portfolio website. Elevate your experience and tech achievements through immersive, interactive storytelling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    deployed_link: "https://3-d-portfolio-website-rosy.vercel.app/",
    source_code_link: "https://github.com/Phahladira-Moja/3D-Portfolio-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
