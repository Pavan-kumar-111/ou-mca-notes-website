const PCC203 = {
  id: "pcc-203",
  code: "PCC 203",
  name: "Design and Analysis of Algorithms",

  allUnitsPdf: "/pdfs/pcc203/PCC203_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction & Algorithm Analysis",
      description:
        "Introduction to algorithms and analysis of time and space complexity.",
      concepts: [
        "Algorithm definition",
        "Performance analysis",
        "Time complexity",
        "Space complexity",
        "Asymptotic notations",
        "Worst, average and best cases",
        "Growth of functions"
      ],
      pdf: "/pdfs/pcc203/unit1.pdf"
    },
    {
      id: 2,
      title: "Divide and Conquer",
      description:
        "Divide and conquer strategy and its application to classical problems.",
      concepts: [
        "Divide and conquer strategy",
        "Recurrence relations",
        "Master theorem",
        "Binary search",
        "Merge sort",
        "Quick sort",
        "Strassen’s matrix multiplication"
      ],
      pdf: "/pdfs/pcc203/unit2.pdf"
    },
    {
      id: 3,
      title: "Greedy Algorithms",
      description:
        "Greedy strategy and optimization problems.",
      concepts: [
        "Greedy strategy",
        "Knapsack problem",
        "Job sequencing",
        "Minimum spanning trees",
        "Prim’s algorithm",
        "Kruskal’s algorithm",
        "Huffman coding"
      ],
      pdf: "/pdfs/pcc203/unit3.pdf"
    },
    {
      id: 4,
      title: "Dynamic Programming",
      description:
        "Dynamic programming approach for solving optimization problems.",
      concepts: [
        "Optimal substructure",
        "Overlapping subproblems",
        "Matrix chain multiplication",
        "Longest common subsequence",
        "Optimal binary search trees",
        "Floyd’s algorithm",
        "Bellman-Ford algorithm"
      ],
      pdf: "/pdfs/pcc203/unit4.pdf"
    },
    {
      id: 5,
      title: "Backtracking & NP-Completeness",
      description:
        "Backtracking techniques and NP-complete problem analysis.",
      concepts: [
        "Backtracking",
        "N-Queens problem",
        "Hamiltonian cycles",
        "Graph coloring",
        "NP problems",
        "NP-complete problems",
        "Cook’s theorem"
      ],
      pdf: "/pdfs/pcc203/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc203/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc203/papers/2023.pdf" }
  ]
};

export default PCC203;
