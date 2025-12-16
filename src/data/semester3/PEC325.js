const PEC325 = {
  id: "pec-325",
  code: "PEC 325",
  name: "Data Visualization",

  allUnitsPdf: "/pdfs/pec325/PEC325_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Data Visualization",
      description: "Fundamentals of data visualization.",
      concepts: [
        "Importance of visualization",
        "Data types",
        "Visual perception",
        "Visualization pipeline"
      ],
      pdf: "/pdfs/pec325/unit1.pdf"
    },
    {
      id: 2,
      title: "Basic Visualization Techniques",
      description: "Common charts and plots.",
      concepts: [
        "Bar charts",
        "Line charts",
        "Scatter plots",
        "Heat maps"
      ],
      pdf: "/pdfs/pec325/unit2.pdf"
    },
    {
      id: 3,
      title: "Advanced Visualization",
      description: "Complex and multivariate visualization.",
      concepts: [
        "Multivariate visualization",
        "Time series visualization",
        "Geospatial visualization"
      ],
      pdf: "/pdfs/pec325/unit3.pdf"
    },
    {
      id: 4,
      title: "Interactive Visualization",
      description: "User interaction and dashboards.",
      concepts: [
        "Interactive visualization",
        "Dashboards",
        "User interaction techniques",
        "Visual analytics"
      ],
      pdf: "/pdfs/pec325/unit4.pdf"
    },
    {
      id: 5,
      title: "Visualization Tools and Applications",
      description: "Tools and real-world use cases.",
      concepts: [
        "Visualization tools",
        "Business intelligence dashboards",
        "Scientific visualization",
        "Real-world applications"
      ],
      pdf: "/pdfs/pec325/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec325/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec325/papers/2023.pdf" }
  ]
};

export default PEC325;
