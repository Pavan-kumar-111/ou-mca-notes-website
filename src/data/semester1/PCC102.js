const PCC102 = {
  id: "pcc-102",
  code: "PCC 102",
  name: "Data Structures using C",
  allUnitsPdf: "/pdfs/pcc102/PCC102_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Structure of a C Program",
      description: "C programming basics.",
      concepts: [
        "Compilation and linking",
        "Constants and variables",
        "Data types",
        "Operators and expressions",
        "Input and output",
        "Decision making",
        "Loops",
        "Arrays",
        "Strings",
        "Sorting and searching",
        "Matrix operations"
      ],
      pdf: "/pdfs/pcc102/unit1.pdf"
    },
    {
      id: 2,
      title: "Functions and Structures",
      description: "Functions, pointers and structures.",
      concepts: [
        "Pass by value",
        "Pass by reference",
        "Recursion",
        "Pointers",
        "Structures",
        "Unions",
        "Storage classes",
        "Preprocessor directives"
      ],
      pdf: "/pdfs/pcc102/unit2.pdf"
    },
    {
      id: 3,
      title: "Arrays and Linked Lists",
      description: "Linear data structures.",
      concepts: [
        "Arrays",
        "Stacks",
        "Queues",
        "Linked lists",
        "Circular linked lists",
        "Doubly linked lists"
      ],
      pdf: "/pdfs/pcc102/unit3.pdf"
    },
    {
      id: 4,
      title: "Trees and Graphs",
      description: "Non-linear data structures.",
      concepts: [
        "Binary trees",
        "Tree traversals",
        "Binary search trees",
        "AVL trees",
        "Graphs",
        "Graph traversals"
      ],
      pdf: "/pdfs/pcc102/unit4.pdf"
    },
    {
      id: 5,
      title: "Searching, Sorting and Hashing",
      description: "Advanced searching and sorting.",
      concepts: [
        "Linear search",
        "Binary search",
        "Selection sort",
        "Bubble sort",
        "Insertion sort",
        "Merge sort",
        "Quick sort",
        "Hashing",
        "Collision resolution"
      ],
      pdf: "/pdfs/pcc102/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc102/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc102/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc102/papers/2024.pdf" }
  ]
};

export default PCC102;
