const PEC315 = {
  id: "pec-315",
  code: "PEC 315",
  name: "DevOps Methodology",

  allUnitsPdf: "/pdfs/pec315/PEC315_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to DevOps",
      description:
        "DevOps culture, lifecycle, and CI/CD fundamentals.",
      concepts: [
        "DevOps culture",
        "DevOps lifecycle",
        "Continuous integration",
        "Continuous delivery",
        "Continuous deployment",
        "Overview of DevOps tools"
      ],
      pdf: "/pdfs/pec315/unit1.pdf"
    },
    {
      id: 2,
      title: "Version Control and Build Tools",
      description:
        "Source control and build automation tools.",
      concepts: [
        "Git",
        "GitHub",
        "Branching strategies",
        "Build automation",
        "Maven",
        "Gradle"
      ],
      pdf: "/pdfs/pec315/unit2.pdf"
    },
    {
      id: 3,
      title: "Configuration Management",
      description:
        "Infrastructure automation and configuration management tools.",
      concepts: [
        "Infrastructure as Code",
        "Ansible",
        "Chef",
        "Puppet"
      ],
      pdf: "/pdfs/pec315/unit3.pdf"
    },
    {
      id: 4,
      title: "Continuous Testing and Monitoring",
      description:
        "Automated testing, monitoring, and logging.",
      concepts: [
        "Automated testing",
        "Monitoring tools",
        "Log management",
        "Performance monitoring"
      ],
      pdf: "/pdfs/pec315/unit4.pdf"
    },
    {
      id: 5,
      title: "Deployment and Containerization",
      description:
        "Deployment strategies and container-based infrastructure.",
      concepts: [
        "Docker",
        "Kubernetes",
        "Cloud deployment models",
        "DevOps security practices"
      ],
      pdf: "/pdfs/pec315/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec315/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec315/papers/2023.pdf" }
  ]
};

export default PEC315;
