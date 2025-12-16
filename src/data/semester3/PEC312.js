const PEC312 = {
  id: "pec-312",
  code: "PEC 312",
  name: "Distributed Systems",

  allUnitsPdf: "/pdfs/pec312/PEC312_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Distributed Systems",
      description:
        "Goals, architecture, middleware, and communication models of distributed systems.",
      concepts: [
        "Goals and types of distributed systems",
        "Architectural styles",
        "System architectures versus middleware",
        "Self-management in distributed systems",
        "Processes",
        "Threads",
        "Virtualization",
        "Clients, servers, and code migration",
        "Communication fundamentals",
        "Remote procedure call",
        "Message-oriented communication",
        "Stream-oriented communication",
        "Multicast communication"
      ],
      pdf: "/pdfs/pec312/unit1.pdf"
    },
    {
      id: 2,
      title: "Naming and Synchronization",
      description:
        "Naming schemes, clock synchronization, coordination, and consistency models.",
      concepts: [
        "Naming identifiers and addresses",
        "Flat naming",
        "Structured naming",
        "Attribute-based naming",
        "Clock synchronization",
        "Logical clocks",
        "Mutual exclusion",
        "Global positioning of nodes",
        "Election algorithms",
        "Consistency and replication",
        "Data-centric consistency models",
        "Client-centric consistency"
      ],
      pdf: "/pdfs/pec312/unit2.pdf"
    },
    {
      id: 3,
      title: "Fault Tolerance and Security",
      description:
        "Fault tolerance, recovery, and security in distributed systems.",
      concepts: [
        "Introduction to fault tolerance",
        "Process resilience",
        "Reliable client-server communication",
        "Reliable group communication",
        "Distributed commitment and recovery",
        "Distributed object-based systems",
        "Architectural processes",
        "Communication",
        "Naming and synchronization",
        "Consistency and replication"
      ],
      pdf: "/pdfs/pec312/unit3.pdf"
    },
    {
      id: 4,
      title: "Distributed File Systems and Web Systems",
      description:
        "Distributed file systems and distributed web-based systems.",
      concepts: [
        "Distributed file system architecture",
        "Processes and communication",
        "Naming and synchronization",
        "Consistency and replication",
        "Fault tolerance",
        "Distributed web-based systems",
        "Architecture",
        "Processes",
        "Communication",
        "Security"
      ],
      pdf: "/pdfs/pec312/unit4.pdf"
    },
    {
      id: 5,
      title: "Distributed Coordination Systems",
      description:
        "Coordination models and big data processing frameworks.",
      concepts: [
        "Coordination models",
        "Architecture",
        "Processes",
        "Communication",
        "Naming",
        "Synchronization",
        "Consistency and replication",
        "MapReduce",
        "Example: search",
        "Apache Hadoop",
        "Amazon Elastic MapReduce",
        "MapReduce.NET",
        "Pig and Hive"
      ],
      pdf: "/pdfs/pec312/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec312/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec312/papers/2023.pdf" }
  ]
};

export default PEC312;
