const PCC204 = {
  id: "pcc-204",
  code: "PCC 204",
  name: "Data Engineering with Python",

  allUnitsPdf: "/pdfs/pcc204/PCC204_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Python Fundamentals",
      description:
        "Fundamentals of Python programming required for data engineering tasks.",
      concepts: [
        "Python basics",
        "Data types",
        "Operators",
        "Control statements",
        "Functions",
        "Modules",
        "Exception handling"
      ],
      pdf: "/pdfs/pcc204/unit1.pdf"
    },
    {
      id: 2,
      title: "Data Handling & NumPy",
      description:
        "Data handling techniques using NumPy for numerical computations.",
      concepts: [
        "NumPy arrays",
        "Array operations",
        "Indexing and slicing",
        "Broadcasting",
        "Mathematical operations",
        "Statistical functions"
      ],
      pdf: "/pdfs/pcc204/unit2.pdf"
    },
    {
      id: 3,
      title: "Pandas & Data Analysis",
      description:
        "Data analysis and manipulation using Pandas library.",
      concepts: [
        "Series and DataFrames",
        "Data cleaning",
        "Handling missing values",
        "Data aggregation",
        "GroupBy operations",
        "Merging and joining"
      ],
      pdf: "/pdfs/pcc204/unit3.pdf"
    },
    {
      id: 4,
      title: "Data Visualization",
      description:
        "Visualizing data using Python libraries.",
      concepts: [
        "Matplotlib basics",
        "Line plots",
        "Bar charts",
        "Histograms",
        "Scatter plots",
        "Seaborn introduction"
      ],
      pdf: "/pdfs/pcc204/unit4.pdf"
    },
    {
      id: 5,
      title: "Big Data & ETL",
      description:
        "ETL processes and introduction to big data concepts.",
      concepts: [
        "ETL process",
        "Data pipelines",
        "Working with CSV and JSON",
        "APIs and web scraping",
        "Introduction to big data tools"
      ],
      pdf: "/pdfs/pcc204/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2023", pdf: "/pdfs/pcc204/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc204/papers/2024.pdf" }
  ]
};

export default PCC204;
