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
    meta,
    monzen,
    celebal,
    shopify,
    imageclassification,
    movierecommendation,
    spamdetection,
    analyzer,
    homeprice,
    pp,
    applestore,
    music,
    mern,
    tf,
    threejs,
    sklearn,
    nextjs,
    sql
    
  } from "../public";
  
  export const navLinks = [
    {
      id: "windows",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "Blender Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Sklearn",
      icon: sklearn,
    },
    {
      name: "TensorFlow",
      icon: tf,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Monzen Technologies",
      icon: monzen,
      iconBg: "#383E56",
      date: "April 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using HTML,CSS,Javascript, React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Celebal Tecgnologies",
      icon: celebal,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Collecting Data using statistical, and programmable skills.Developing models using Machine Learning and Deep Learning using various Library and other related technologies.",
        "Collaborating with cross-functional teams including HR, product managers, and other developers to create high-quality products.",
        "Implementing High quality models .",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  
  
  const projects = [
    {
      name: "Image Classification",
      description:
        "Using CNN user model can classify image into one categoty - Bike, Car, truck or Bicycle .",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "CNN",
          color: "pink-text-gradient",
        },
      ],
      image: imageclassification,
      source_link: "https://image-classification-anshul-badoni.streamlit.app/",
      source_code_link: "https://github.com/AnshulBadoni/Image-classification-App",
    },
    {
      name: "Movie-Recommendation",
      description:
        "A Machine Learning model to recommend movie based on user choice.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Sklearn",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: movierecommendation,
      source_link:"https://movie-recommendation-system-anshul-badoni.streamlit.app/",
      source_code_link: "https://github.com/AnshulBadoni/movie-recommendation-system",
    },
    {
      name: "Spam Detection",
      description:
        "A Machine Learinng model using naive bayes to detect spam or ham.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Sklearn",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: spamdetection,
      source_link:"https://spam-detection-anshul-badoni.streamlit.app/",
      source_code_link: "https://github.com/AnshulBadoni/Spam_Detection",
    },
    {
      name: "Home Price Prediction",
      description:
        "A Machine Learning model using Linear regression predict the price on basis of input.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Sklearn",
          color: "green-text-gradient",
        },
        {
          name: "Linear Regression",
          color: "pink-text-gradient",
        },
      ],
      image: homeprice ,
      source_link:"https://github.com/AnshulBadoni/home-price-prediction",
      source_code_link: "https://github.com/AnshulBadoni/home-price-prediction",
    },
    {
      name: "Chat Analyzer",
      description:
        "WhatsApp chat analyzer import chat and see information.",
      tags: [
        {
          name: "Data Analysis",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "pink-text-gradient",
        },
        {
          name: "Streamlit",
          color: "blue-text-gradient",
        },
      ],
      image: analyzer,
      source_link:"https://whatsapp-chat-exploration-anshul-badoni.streamlit.app/",
      source_code_link: "https://github.com/AnshulBadoni/WhatsApp-Chat-Analyser",
    },
    {
      name: "Premier Pro",
      description:
        "A react app for fetching latest movie and tv-series, from TMBD Official API. https://www.themoviedb.org/",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Vite" ,
          color: "pink-text-gradient",
        },
        
       
      ],
      image: pp,
      source_link:"https://premierpro-anshulbadoni.netlify.app/",
      source_code_link: "https://github.com/AnshulBadoni/PremierPro",
    },
    {
      name: "Apple Store",
      description:
        "Apple landing page with react , ThreeJS and Tailwind.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: applestore,
      source_link:"https://applestore-anshulbadoni.netlify.app/",
      source_code_link: "https://github.com/AnshulBadoni/appleStore",
    },
    {
      name: "Jio Savvan Clone",
      description:
        "Jio Savvan Home page clone with react and Tailwind.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Music",
          color: "pink-text-gradient",
        },
      ],
      image: music,
      source_link:"https://music-anshulbadoni.netlify.app/",
      source_code_link: "https://github.com/AnshulBadoni/JioSaavn-clone",
    },
    {
      name: "Video-Streaming Service",
      description:
        "A video Streaming service using MERN stack, with admin dashboard",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: mern,
      source_link:"https://github.com/AnshulBadoni/mern-stack",
      source_code_link: "https://github.com/AnshulBadoni/mern-stack",
    },
  ];
  
  export { services, technologies, experiences, projects };
  