const PEC322 = {
  id: "pec-322",
  code: "PEC 322",
  name: "Optimization Techniques",

  allUnitsPdf: "/pdfs/pec322/PEC322_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Optimization",
      description: "Fundamentals of optimization and engineering applications.",
      concepts: [
        "Optimization problems",
        "Engineering applications",
        "Single-variable optimization",
        "Multi-variable optimization",
        "Constrained and unconstrained problems"
      ],
      pdf: "/pdfs/pec322/unit1.pdf"
    },
    {
      id: 2,
      title: "Linear Programming",
      description: "Linear programming models and solution methods.",
      concepts: [
        "Linear programming problem formulation",
        "Graphical method",
        "Simplex method",
        "Duality"
      ],
      pdf: "/pdfs/pec322/unit2.pdf"
    },
    {
      id: 3,
      title: "Transportation and Assignment Problems",
      description: "Special linear programming problems.",
      concepts: [
        "Transportation problem",
        "North-West corner method",
        "Least cost method",
        "Vogel’s approximation method",
        "Assignment problem"
      ],
      pdf: "/pdfs/pec322/unit3.pdf"
    },
    {
      id: 4,
      title: "Non-Linear Programming",
      description: "Optimization techniques for nonlinear systems.",
      concepts: [
        "Non-linear programming problems",
        "Lagrange multipliers",
        "Quadratic programming",
        "Kuhn-Tucker conditions"
      ],
      pdf: "/pdfs/pec322/unit4.pdf"
    },
    {
      id: 5,
      title: "Advanced Optimization Techniques",
      description: "Advanced and real-world optimization methods.",
      concepts: [
        "Dynamic programming",
        "Integer programming",
        "Goal programming",
        "Engineering optimization case studies"
      ],
      pdf: "/pdfs/pec322/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec322/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec322/papers/2023.pdf" }
  ]
};

export default PEC322;
