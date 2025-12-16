const MGC206 = {
  id: "mgc-206",
  code: "MGC 206",
  name: "Operations Research",

  allUnitsPdf: "/pdfs/mgc206/MGC206_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Operations Research",
      description:
        "Introduction to operations research concepts, models, and applications.",
      concepts: [
        "Meaning of OR",
        "Scope of OR",
        "Applications",
        "OR models",
        "Advantages and limitations"
      ],
      pdf: "/pdfs/mgc206/unit1.pdf"
    },
    {
      id: 2,
      title: "Linear Programming",
      description:
        "Linear programming problem formulation and solution methods.",
      concepts: [
        "Formulation of LPP",
        "Graphical solution",
        "Simplex method",
        "Big-M method",
        "Two-phase method"
      ],
      pdf: "/pdfs/mgc206/unit2.pdf"
    },
    {
      id: 3,
      title: "Transportation & Assignment Problems",
      description:
        "Optimization problems related to transportation and assignment.",
      concepts: [
        "Transportation problem",
        "North-West corner method",
        "Least cost method",
        "Vogel’s approximation",
        "Assignment problem",
        "Hungarian method"
      ],
      pdf: "/pdfs/mgc206/unit3.pdf"
    },
    {
      id: 4,
      title: "Inventory & Queuing Models",
      description:
        "Inventory control and queuing theory models.",
      concepts: [
        "Inventory models",
        "EOQ",
        "Quantity discounts",
        "Queuing theory",
        "Single server models",
        "Multi-server models"
      ],
      pdf: "/pdfs/mgc206/unit4.pdf"
    },
    {
      id: 5,
      title: "Project Management",
      description:
        "Project planning and scheduling techniques.",
      concepts: [
        "CPM",
        "PERT",
        "Network diagrams",
        "Critical path",
        "Project crashing"
      ],
      pdf: "/pdfs/mgc206/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/mgc206/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/mgc206/papers/2023.pdf" }
  ]
};

export default MGC206;
