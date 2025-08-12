import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Anthony",
  lastName: "Udemezue",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Web Developer",
  avatar: "/images/profile-photo.jpg",
  email: "udemezueanthony9@gmail.com",
  location: "Africa/Lagos",
  languages: ["English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iCodeDre",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "X",
    link: "https://x.com/iCodeDre",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/profile-photo.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Coding, as an experience</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">M.luxe Stitches</strong>
      </>
    ),
    href: "https://m-luxe-stitches.vercel.app/",
  },
  subline: (
    <>
      I'm Anthony(iCodeDre), a junior Full-Stack Web Developer,
      <br /> passionate about bringing ideas to life with code.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anthony is a motivated Junior Full-Stack Web Developer with a strong
        passion for coding and problem-solving. He has hands-on experience in
        building and deploying real-world web applications, demonstrating solid
        technical skills in both frontend and backend development. Holding a
        Bachelor’s degree in Medical Laboratory Sciences, Anthony brings a
        unique blend of analytical thinking and attention to detail to his work.
        His current goal is to gain professional, real-life experience by
        collaborating with development teams as a junior developer or intern,
        further honing his skills and contributing to impactful projects.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "M.luxe Stiches",
        timeframe: "2025 - Present",
        role: "Freelance Web Developer",
        achievements: [
          <>
            Designed a fully functional web application for M.luxe Stitches as
            an alternative to showcasing design samples by posting numerous
            images on WhatsApp status which often resulted in excessively long
            status updates, causing viewer fatigue and ultimately reducing
            engagement. This increased user engagements for the brand.
          </>,
          // <>
          //   Spearheaded the integration of AI tools into design workflows,
          //   enabling designers to iterate 50% faster.
          // </>,
        ],
        images: [
          {
            src: "/images/projects/m-luxe-stiches/homepage.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Dr. Angela Yu’s Complete Full-Stack Web Development Bootcamp",
        description: (
          <>
            Learnt HTML, CSS, JavaScript, Basic React.js, Node.js, Express.js,
            REST APIs, EJS, Basic PostgreSQL
          </>
        ),
        images: [
          {
            src: "/images/certificates/fullstack-cert.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Academind Complete React Guide Bootcamp",
        description: (
          <>Deeper dive into React.js and all advanced React.js concepts</>
        ),
        images: [
          {
            src: "/images/certificates/react-cert.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Academind Complete Developers Guide Bootcamp for MySQL and PostgreSQL",
        description: (
          <>
            Deeper learning and understanding of MYSQL and PostgreSQL databases
          </>
        ),
        images: [
          {
            src: "/images/certificates/database-cert.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Maximillian Schwarzmuller’s Complete Next.js Guide Bootcamp",
        description: (
          <>
            Introduction and deep learning of Next.js. All advanced concepts
            included
          </>
        ),
        images: [
          {
            src: "/images/certificates/next-cert.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Nnamdi Azikiwe University Awka, Anambra state.",
        description: (
          <>
            Bachelor’s Degree in Medical Laboratory Sciences. Specialized in
            Medical Microbiology and Public Health(MMBPH)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Craft visually appealing, responsive, and mobile-first web
            applications with a focus on clean design, accessibility, and
            seamless user experiences.
          </>
        ),
        techStack: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "EJS(for templating)",
          "React.js",
          "Next.js",
        ],
      },
      {
        title: "Backend",
        description: (
          <>
            Design and implement robust, scalable, and secure backend
            architectures, handling everything from API development to business
            logic integration.
          </>
        ),
        techStack: ["Node.js", "Express.js", "Next.js"],
        images: [],
      },
      {
        title: "Database",
        description: (
          <>
            Build efficient, well-structured, and high-performance databases
            with optimized queries, seamless integrations, and secure data
            handling.
          </>
        ),
        techStack: ["PostgreSQL", "MYSQL", "Neon Postgres", "Supabase"],
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
