const PCC303 = {
  id: "pcc-303",
  code: "PCC 303",
  name: "Artificial Intelligence",

  allUnitsPdf: "/pdfs/pcc303/PCC303_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to AI",
      description:
        "Foundations of artificial intelligence and intelligent agents.",
      concepts: [
        "Definition of AI",
        "Intelligent agents",
        "Agents and environments",
        "Structure of intelligent agents",
        "Problem formulation"
      ],
      pdf: "/pdfs/pcc303/unit1.pdf"
    },
    {
      id: 2,
      title: "Problem Solving and Search",
      description:
        "Search strategies for problem solving in AI.",
      concepts: [
        "Uninformed search strategies",
        "Breadth-first search",
        "Depth-first search",
        "Uniform cost search",
        "Informed search strategies",
        "A* algorithm"
      ],
      pdf: "/pdfs/pcc303/unit2.pdf"
    },
    {
      id: 3,
      title: "Knowledge Representation",
      description:
        "Knowledge representation techniques and logical inference.",
      concepts: [
        "Propositional logic",
        "Predicate logic",
        "Inference rules",
        "Resolution",
        "Semantic networks",
        "Frames"
      ],
      pdf: "/pdfs/pcc303/unit3.pdf"
    },
    {
      id: 4,
      title: "Planning and Reasoning",
      description:
        "Planning systems and reasoning under uncertainty.",
      concepts: [
        "Planning systems",
        "STRIPS",
        "Forward and backward planning",
        "Reasoning under uncertainty",
        "Bayesian networks"
      ],
      pdf: "/pdfs/pcc303/unit4.pdf"
    },
    {
      id: 5,
      title: "Expert Systems",
      description:
        "Expert systems architecture and applications of AI.",
      concepts: [
        "Expert system architecture",
        "Knowledge acquisition",
        "Inference engine",
        "Applications of AI",
        "Limitations of AI"
      ],
      pdf: "/pdfs/pcc303/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc303/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc303/papers/2023.pdf" }
  ]
};

export default PCC303;
