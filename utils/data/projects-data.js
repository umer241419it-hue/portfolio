export const projectsData = [
  {
    id: 1,
    name: 'SentinelVision',
    status: 'Working prototype - Smart India Hackathon 2026 (internal round cleared)',
    description: 'Offline integrity assurance for computer vision pipelines (SIH 2026, PS 26228). Flags suspicious training data, backdoored or substituted models, and tampered or replayed inference outputs, then produces an Ed25519-signed report with a tamper-evident audit trail. Findings are anchored on a Hyperledger Fabric ledger with multi-org endorsement.',
    tools: ['Python', 'PyTorch', 'Hyperledger Fabric', 'Node.js', 'Ed25519', 'SHA-256'],
    myRole: 'Lead Developer',
    role: 'Lead Developer',
    code: 'https://github.com/umer241419it-hue/SentinelVision',
    codeRepository: 'https://github.com/umer241419it-hue/SentinelVision',
    demo: '',
    links: {
      code: 'https://github.com/umer241419it-hue/SentinelVision',
      demo: ''
    },
    liveLinkNote: '',
    isFeatured: true
  },
  {
    id: 2,
    name: 'BookInn',
    description: "Full-stack MERN hotel booking platform with role-based access control, separate user/admin views, category-based search, live room availability, and user-specific booking management. Integrated Razorpay payments (test mode) with cancellation/refund workflows and transaction tracking.",
    deployment: "Originally deployed on AWS EC2 with an automated deployment script (documented in the repo README, redeployable anytime). The live demo runs on Vercel (frontend), Render (backend) and MongoDB Atlas (database) to keep hosting costs near zero.",
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'MongoDB Atlas', 'Razorpay API', 'AWS EC2', 'Vercel', 'Render'],
    myRole: 'Full Stack Developer',
    role: 'Full Stack Developer',
    code: 'https://github.com/umer241419it-hue/BookInn',
    demo: 'https://book-inn-sigma.vercel.app/',
    links: {
      code: 'https://github.com/umer241419it-hue/BookInn',
      demo: 'https://book-inn-sigma.vercel.app/'
    },
    liveLinkNote: "First load may take a few seconds while the free-tier backend wakes up.",
    isFeatured: false
  },
  {
    id: 3,
    name: 'Rebel Radio',
    description: "Responsive music streaming app with persistent HTML5 audio playback across route changes using a centralized React PlayerContext. Features persistent Favorites and custom Playlists with localStorage and React Portal-based playlist controls. Deployed on AWS S3 as a static site.",
    deployment: '',
    tools: ['React', 'Vite', 'JavaScript', 'React Router', 'localStorage', 'AWS S3'],
    myRole: 'Frontend Developer',
    role: 'Frontend Developer',
    code: 'https://github.com/umer241419it-hue/Rebel-Radio',
    demo: 'http://rebel-radio.s3-website-us-east-1.amazonaws.com/',
    links: {
      code: 'https://github.com/umer241419it-hue/Rebel-Radio',
      demo: 'http://rebel-radio.s3-website-us-east-1.amazonaws.com/'
    },
    liveLinkNote: '',
    isFeatured: false
  },
  {
    id: 4,
    name: 'AWS SBG MHSSCE Website',
    description: "Contributed to the official AWS Student Builder Group MHSSCE website as a Core Team member, building frontend features with React and Vite. Developed the About page from Figma specifications while working with an existing component library and shared design system.",
    deployment: '',
    tools: ['React', 'Vite', 'CSS', 'Figma'],
    myRole: 'Core Team Member & Frontend Developer',
    role: 'Core Team Member & Frontend Developer',
    code: 'TODO',
    demo: 'https://d32gqbo6lod9b9.cloudfront.net/',
    links: {
      code: 'TODO',
      demo: 'https://d32gqbo6lod9b9.cloudfront.net/'
    },
    liveLinkNote: '',
    isFeatured: false
  },
  {
    id: 5,
    name: 'Facy',
    description: "Automated real-time facial recognition attendance system built with Python, OpenCV, and dlib. Captures live webcam feeds, matches faces against known profile encodings with downscaled frame processing, overlays live visual identification feedback, and logs deduplicated attendance records with timestamps to date-stamped CSV files.",
    deployment: '',
    tools: ['Python', 'OpenCV', 'dlib', 'NumPy'],
    myRole: 'Developer',
    role: 'Developer',
    code: 'https://github.com/umer241419it-hue/Facy',
    demo: '',
    links: {
      code: 'https://github.com/umer241419it-hue/Facy',
      demo: ''
    },
    liveLinkNote: '',
    isFeatured: false
  }
];
