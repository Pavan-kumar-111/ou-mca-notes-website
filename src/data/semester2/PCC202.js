const PCC202 = {
  id: "pcc-202",
  code: "PCC 202",
  name: "Database Management Systems",

  allUnitsPdf: "/pdfs/pcc202/PCC202_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction & ER Model",
      description:
        "Introduction to database systems, ER modeling, and database design concepts.",
      concepts: [
        "Database system applications",
        "Purpose of database systems",
        "Views of data",
        "Database languages",
        "Relational databases",
        "Database architecture",
        "Database users and administrators",
        "ER model",
        "ER constraints",
        "ER diagrams",
        "Weak entity sets",
        "Extended ER features",
        "Reduction to relational schemas",
        "Database design issues"
      ],
      pdf: "/pdfs/pcc202/unit1.pdf"
    },
    {
      id: 2,
      title: "Relational Model & SQL",
      description:
        "Relational database concepts, relational algebra, and SQL fundamentals.",
      concepts: [
        "Structure of relational databases",
        "Fundamental relational algebra operations",
        "Additional relational algebra operations",
        "Extended relational algebra",
        "Null values",
        "Modification of databases",
        "SQL data definition",
        "Basic SQL queries",
        "Set operations",
        "Aggregate functions",
        "Handling null values in SQL"
      ],
      pdf: "/pdfs/pcc202/unit2.pdf"
    },
    {
      id: 3,
      title: "Advanced SQL & Database Design",
      description:
        "Advanced SQL features and principles of relational database design.",
      concepts: [
        "SQL data types and schemas",
        "Integrity constraints",
        "Authorization",
        "Embedded SQL",
        "Dynamic SQL",
        "Procedural constructs",
        "Recursive queries",
        "Advanced SQL features",
        "Features of good relational design",
        "Atomic domains",
        "First Normal Form",
        "Functional dependency theory",
        "Decomposition using functional dependencies"
      ],
      pdf: "/pdfs/pcc202/unit3.pdf"
    },
    {
      id: 4,
      title: "Indexing, Hashing & Transactions",
      description:
        "Indexing techniques, hashing methods, and transaction processing concepts.",
      concepts: [
        "Indexing basics",
        "Ordered indices",
        "B+ tree index files",
        "B tree index files",
        "Multiple-key access",
        "Static hashing",
        "Dynamic hashing",
        "Bitmap indices",
        "Transaction concepts",
        "Transaction states",
        "Atomicity and durability",
        "Concurrent executions",
        "Serializability",
        "Recoverability",
        "Isolation implementation"
      ],
      pdf: "/pdfs/pcc202/unit4.pdf"
    },
    {
      id: 5,
      title: "Concurrency Control, Recovery & NoSQL",
      description:
        "Concurrency control mechanisms, recovery systems, and NoSQL databases.",
      concepts: [
        "Lock-based protocols",
        "Timestamp-based protocols",
        "Validation-based protocols",
        "Multiple granularity",
        "Multi-version schemes",
        "Deadlock handling",
        "Recovery system",
        "Log-based recovery",
        "Failure classification",
        "Buffer management",
        "Need for NoSQL",
        "Aggregate data models",
        "Key-value databases",
        "Document databases",
        "Column-family stores",
        "Graph databases",
        "MapReduce",
        "Schema migrations"
      ],
      pdf: "/pdfs/pcc202/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc202/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc202/papers/2023.pdf" }
  ]
};

export default PCC202;
