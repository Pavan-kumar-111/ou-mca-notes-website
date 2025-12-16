const PCC301 = {
  id: "pcc-301",
  code: "PCC 301",
  name: "Software Engineering",

  allUnitsPdf: "/pdfs/pcc301/PCC301_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Software Engineering",
      description:
        "Introduction to software, software engineering principles, and process frameworks.",
      concepts: [
        "Nature of software",
        "Software characteristics",
        "Software crisis",
        "Software myths",
        "Software engineering process",
        "Generic process framework",
        "Process patterns",
        "Capability Maturity Model (CMM)"
      ],
      pdf: "/pdfs/pcc301/unit1.pdf"
    },
    {
      id: 2,
      title: "Software Process Models",
      description:
        "Different software development life cycle and agile process models.",
      concepts: [
        "Waterfall model",
        "Incremental process models",
        "Evolutionary process models",
        "Spiral model",
        "Agile process models",
        "Scrum",
        "Extreme programming"
      ],
      pdf: "/pdfs/pcc301/unit2.pdf"
    },
    {
      id: 3,
      title: "Requirements Engineering",
      description:
        "Requirements elicitation, analysis, specification, and management.",
      concepts: [
        "Requirements engineering tasks",
        "Initiation and elicitation",
        "Requirements analysis",
        "Requirements specification",
        "SRS document",
        "Requirements validation",
        "Requirements management"
      ],
      pdf: "/pdfs/pcc301/unit3.pdf"
    },
    {
      id: 4,
      title: "Software Design",
      description:
        "Software design concepts, principles, and architectural approaches.",
      concepts: [
        "Design concepts",
        "Design principles",
        "Architectural design",
        "Component-level design",
        "Interface design",
        "Data design",
        "Design patterns"
      ],
      pdf: "/pdfs/pcc301/unit4.pdf"
    },
    {
      id: 5,
      title: "Testing and Maintenance",
      description:
        "Software testing techniques and maintenance practices.",
      concepts: [
        "Software testing fundamentals",
        "Unit testing",
        "Integration testing",
        "Validation testing",
        "System testing",
        "Software maintenance",
        "Software quality assurance"
      ],
      pdf: "/pdfs/pcc301/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc301/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc301/papers/2023.pdf" }
  ]
};

export default PCC301;
