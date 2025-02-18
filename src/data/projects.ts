import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    thumbnail:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: ["Full Stack", "E-commerce"],
    overview:
      "A comprehensive e-commerce solution built to handle high-volume transactions and real-time inventory management. The platform features a microservices architecture for scalability and resilience.",
    challenges: [
      {
        title: "Real-time Inventory Sync",
        description:
          "Maintaining accurate inventory levels across multiple warehouses and preventing overselling during high-traffic periods.",
      },
      {
        title: "Payment Processing",
        description:
          "Implementing secure, reliable payment processing with support for multiple payment methods and currencies.",
      },
      {
        title: "Performance at Scale",
        description:
          "Optimizing the application to handle thousands of concurrent users during peak shopping periods.",
      },
    ],
    solution:
      "Implemented an event-driven architecture using Redis pub/sub for real-time inventory updates. Utilized caching strategies and database optimization techniques to improve performance. Integrated Stripe for secure payment processing with automatic retries and failure handling.",
    features: [
      "Real-time inventory management",
      "Multi-currency support",
      "Advanced search and filtering",
      "Automated order processing",
      "Analytics dashboard",
      "Mobile-responsive design",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Product catalog with advanced filtering",
      },
      {
        url: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Admin dashboard with real-time analytics",
      },
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Mobile shopping experience",
      },
    ],
    architecture: [
      "Next.js for server-side rendering and optimal performance",
      "Node.js microservices for scalable backend operations",
      "PostgreSQL for reliable data storage with complex relationships",
      "Redis for caching and real-time event handling",
      "Stripe API for secure payment processing",
      "Docker containers for consistent deployment",
    ],
  },
  // Add more projects as needed
];
