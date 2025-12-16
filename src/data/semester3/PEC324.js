const PEC324 = {
  id: "pec-324",
  code: "PEC 324",
  name: "Information Retrieval System",

  allUnitsPdf: "/pdfs/pec324/PEC324_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Information Retrieval",
      description: "IR concepts and models.",
      concepts: [
        "Information retrieval system components",
        "Information retrieval models",
        "Search engines",
        "Web information retrieval"
      ],
      pdf: "/pdfs/pec324/unit1.pdf"
    },
    {
      id: 2,
      title: "Text Processing",
      description: "Text analysis and indexing.",
      concepts: [
        "Tokenization",
        "Stop word removal",
        "Stemming",
        "Indexing techniques"
      ],
      pdf: "/pdfs/pec324/unit2.pdf"
    },
    {
      id: 3,
      title: "Query Processing",
      description: "Query models and ranking.",
      concepts: [
        "Boolean retrieval",
        "Vector space model",
        "Probabilistic retrieval",
        "Ranking algorithms"
      ],
      pdf: "/pdfs/pec324/unit3.pdf"
    },
    {
      id: 4,
      title: "Evaluation of IR Systems",
      description: "Measuring retrieval effectiveness.",
      concepts: [
        "IR evaluation metrics",
        "Precision",
        "Recall",
        "Relevance feedback"
      ],
      pdf: "/pdfs/pec324/unit4.pdf"
    },
    {
      id: 5,
      title: "Modern IR Applications",
      description: "Advanced and real-world IR systems.",
      concepts: [
        "Web search engines",
        "Recommendation systems",
        "Semantic search",
        "Multimedia information retrieval"
      ],
      pdf: "/pdfs/pec324/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec324/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec324/papers/2023.pdf" }
  ]
};

export default PEC324;
