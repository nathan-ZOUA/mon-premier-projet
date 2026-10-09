// Update this file to personalize the portfolio with your own details and work.
export const personalInfo = {
  brandName: 'Naj',
  fullName: 'Nathan Zoua',
  title: 'Full-Stack Web Developer',
  positioning: 'I build modern web applications, from responsive interfaces to APIs and database-driven features.',
  about: 'My work focuses on practical web products: clear user journeys, thoughtful interfaces and the backend workflows that support them. I keep developing my technical expertise through real projects and careful iteration.',
}

export const contact = {
  email: 'najnathan23@gmail.com',
  // Use your country code and number only, without spaces or a leading +.
  whatsapp: '237640387464',
  github: 'https://github.com/nathan-ZOUA',
}

export const socialLinks = [
  { label: 'GitHub', type: 'github' },
  { label: 'WhatsApp', type: 'whatsapp' },
  { label: 'Email', type: 'email' },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Responsive Design'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django REST Framework', 'PHP'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MySQL', 'Prisma'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'npm'],
  },
]

export const currentlyLearning = [
  {
    category: 'Frontend',
    items: ['UI Development', 'CSS Animations', 'Accessibility'],
  },
  {
    category: 'Backend & Data',
    items: ['Express.js', 'REST APIs', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'Workflow',
    items: ['VS Code', 'Debugging', 'API Integration', 'Performance Optimization', 'SEO Fundamentals', 'Responsive Testing', 'Clean Code', 'Deployment'],
  },
]

export const projects = [
  {
    id: 'smartbus',
    title: 'SmartBus',
    category: 'Transportation platform',
    projectType: 'Full-stack MVP',
    visual: 'transport',
    description: 'A fleet and reservations management MVP pairing a responsive PHP interface with a Django REST API.',
    technologies: ['Django REST Framework', 'MySQL', 'PHP', 'JavaScript'],
    keyFeatures: [
      'Searchable fleet and bus/driver administration',
      'Reservation requests with date-overlap checks and server-side pricing',
      'Driver location sharing after permission, with position history',
      'Maintenance orders, sales requests and role-aware accounts',
    ],
    objective: 'Bring core transport operations—fleet, reservations and vehicle location—into one demonstrable application.',
    solution: 'A PHP web interface works with a Django REST API and MySQL persistence. The project is an MVP designed for local testing, not a finished production service.',
    architecture: 'PHP interface → Django REST Framework API → MySQL',
    githubUrl: 'https://github.com/nathan-ZOUA/smartbus',
    featured: true,
  },
  {
    id: 'velora',
    title: 'VELORA',
    category: 'E-commerce platform',
    projectType: 'Full-stack application',
    visual: 'commerce',
    description: 'A multi-page storefront with a broad sample catalogue, shopping flows and an Express API foundation.',
    technologies: ['React', 'Vite', 'Express', 'Prisma', 'PostgreSQL'],
    keyFeatures: [
      'Product catalogue with search, category filters and sorting',
      'Product pages, wishlist and cart saved in the browser',
      'Checkout, account, order and admin demonstration screens',
      'Local sample catalogue fallback when the API is unavailable',
    ],
    objective: 'Create an end-to-end e-commerce experience that remains explorable before a database is configured.',
    solution: 'The React storefront provides product discovery and shopping flows. An Express API and Prisma schema prepare a PostgreSQL-backed data layer; checkout and payment remain demonstration flows.',
    architecture: 'React + Vite storefront → Express API → Prisma → PostgreSQL',
    githubUrl: 'https://github.com/nathan-ZOUA/VELORA',
    featured: true,
  },
  {
    id: 'educore',
    title: 'EDUCORE',
    category: 'Education platform',
    projectType: 'Learning platform foundation',
    visual: 'education',
    description: 'A role-aware learning platform foundation for students, parents, teachers and administrators.',
    technologies: ['React', 'Vite', 'Django REST Framework', 'PostgreSQL'],
    keyFeatures: [
      'Courses, enrollments, lessons and learning progress',
      'Assignments, quizzes, examinations, grades and attendance',
      'Role-scoped workspaces, parent-child links and notifications',
      'Profile editing and account administration workflows',
    ],
    objective: 'Organize learning workflows and academic records in one application with role-aware views.',
    solution: 'A React frontend connects to a Django REST API with server-side access scoping. The repository documents a working foundation; it is not yet a complete production SaaS.',
    architecture: 'React + Vite frontend → Django REST Framework API → PostgreSQL configuration',
    liveUrl: 'https://educore-lovat.vercel.app/',
    featured: true,
    note: 'Payment processing, email verification and several production services are not implemented.',
  },
  {
    id: 'nova-business',
    title: 'Nova Business',
    category: 'Business web application',
    projectType: 'Fictional demonstration concept',
    visual: 'business',
    description: 'A responsive React website concept presenting a fictional digital studio, its services and project process.',
    technologies: ['React', 'JavaScript', 'CSS'],
    keyFeatures: [
      'Structured service and business information',
      'Reusable React components and responsive navigation',
      'Project inquiry and demonstration content flows',
    ],
    objective: 'Explore a clear digital presence for a business-oriented studio concept.',
    solution: 'A component-based React experience organizes service information, process details and sample project concepts.',
    architecture: 'React frontend · no business backend is claimed',
    liveUrl: 'https://nova-business-weld.vercel.app/',
    githubUrl: 'https://github.com/nathan-ZOUA/nova-business',
    featured: false,
    note: 'Nova Business is a fictional concept created as a personal demonstration project.',
  },
  {
    id: 'savanna-restaurant',
    title: 'Savanna Restaurant',
    category: 'Restaurant website',
    projectType: 'Fictional demonstration concept',
    visual: 'restaurant',
    description: 'A responsive restaurant website concept with a filterable sample menu and editorial sections.',
    technologies: ['React', 'JavaScript', 'CSS'],
    keyFeatures: [
      'Sample menu filtering by category',
      'Responsive navigation and structured content',
      'Demonstration reservation flow and contact presentation',
    ],
    objective: 'Present a restaurant concept, its menu and visitor actions in a cohesive website.',
    solution: 'A responsive React interface combines menu filtering, editorial content and a demonstration reservation flow.',
    architecture: 'React frontend · demonstration website with sample content',
    liveUrl: 'https://savanna-restaurant-phi.vercel.app/',
    githubUrl: 'https://github.com/nathan-ZOUA/savanna-restaurant',
    featured: false,
    note: 'The restaurant, menu, prices, schedule and reservation details are fictional.',
  },
]

export const services = [
  {
    title: 'Full-Stack Web Applications', icon: 'application',
    description: 'Responsive interfaces connected to APIs and practical data workflows.',
    benefit: 'Bring the user experience and application logic together.',
  },
  {
    title: 'React Frontend Development', icon: 'react',
    description: 'Reusable React interfaces built around clear, accessible user journeys.',
    benefit: 'Create an interface that is easier to use and maintain.',
  },
  {
    title: 'Backend APIs', icon: 'api',
    description: 'REST API development with Django REST Framework or Express.',
    benefit: 'Connect product screens to structured application workflows.',
  },
  {
    title: 'E-commerce Experiences', icon: 'website',
    description: 'Product discovery, catalogue browsing and shopping flow interfaces.',
    benefit: 'Make it easier for customers to find and explore products.',
  },
  {
    title: 'Database-Driven Applications', icon: 'application',
    description: 'Web features designed around PostgreSQL or MySQL data models.',
    benefit: 'Keep application information organized and consistent.',
  },
  {
    title: 'Dashboards & Role-Based Portals', icon: 'dashboard',
    description: 'Focused views for administration, operations and user-specific workflows.',
    benefit: 'Make important information and actions easier to find.',
  },
]
