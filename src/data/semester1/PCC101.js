const PCC101 = {
  id: "pcc-101",
  code: "PCC 101",
  name: "Mathematical Foundations of Computer Science",
  allUnitsPdf: "/pdfs/pcc101/PCC101_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Fundamentals of Logic",
      description:
        "Basic connective and truth tables, logical equivalence, implications and predicates.",
      concepts: [
        "Use of quantifiers",
        "Definitions and proof of theorems",
        "Set theory – sets and subsets",
        "Set operations and laws",
        "Counting and Venn diagrams",
        "Properties of integers",
        "Well-ordering principle",
        "Recursive definitions",
        "Division algorithm",
        "Fundamental theorem of arithmetic"
      ],
      pdf: "/pdfs/pcc101/unit1.pdf"
    },
    {
      id: 2,
      title: "Relations and Functions",
      description: "Relations, functions and applications.",
      concepts: [
        "Cartesian product",
        "Functions onto functions",
        "Special functions",
        "Pigeon-hole principle",
        "Composition and inverse functions",
        "Partial orders",
        "Equivalence relations",
        "Principle of inclusion and exclusion"
      ],
      pdf: "/pdfs/pcc101/unit2.pdf"
    },
    {
      id: 3,
      title: "Generating Functions & Recurrence Relations",
      description: "Generating functions and recurrence relations.",
      concepts: [
        "Generating functions",
        "Partitions of integers",
        "First-order linear recurrence relations",
        "Second-order homogeneous recurrence relations"
      ],
      pdf: "/pdfs/pcc101/unit3.pdf"
    },
    {
      id: 4,
      title: "Algebraic Structures",
      description: "Basic algebraic structures.",
      concepts: [
        "Algebraic systems",
        "Semigroups",
        "Monoids",
        "Groups",
        "Homomorphisms",
        "Residue arithmetic"
      ],
      pdf: "/pdfs/pcc101/unit4.pdf"
    },
    {
      id: 5,
      title: "Graph Theory",
      description: "Graphs, trees and applications.",
      concepts: [
        "Graphs and subgraphs",
        "Complements",
        "Degree of graph",
        "Planar graphs",
        "Hamiltonian paths and cycles",
        "Trees",
        "Minimal spanning trees"
      ],
      pdf: "/pdfs/pcc101/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc101/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc101/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc101/papers/2024.pdf" }
  ]
};

export default PCC101;
