const PCC201 = {
  id: "pcc-201",
  code: "PCC 201",
  name: "Operating Systems",

  allUnitsPdf: "/pdfs/pcc201/PCC201_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Unix & OS Fundamentals",
      description:
        "Introduction to Unix operating system, process concepts, and CPU scheduling fundamentals.",
      concepts: [
        "Unix commands",
        "File system and permissions",
        "Shell programming",
        "Process concepts",
        "Multithreading",
        "CPU scheduling",
        "Process synchronization",
        "Deadlocks"
      ],
      pdf: "/pdfs/pcc201/unit1.pdf"
    },
    {
      id: 2,
      title: "Memory Management",
      description:
        "Memory allocation techniques, virtual memory, and performance issues.",
      concepts: [
        "Swapping",
        "Contiguous allocation",
        "Paging",
        "Segmentation",
        "Virtual memory",
        "Demand paging",
        "Page replacement algorithms",
        "Thrashing"
      ],
      pdf: "/pdfs/pcc201/unit2.pdf"
    },
    {
      id: 3,
      title: "File Systems",
      description:
        "File system structure, storage management, and I/O systems.",
      concepts: [
        "File concepts",
        "Access methods",
        "Directory structures",
        "Allocation methods",
        "Mass storage structure",
        "I/O systems"
      ],
      pdf: "/pdfs/pcc201/unit3.pdf"
    },
    {
      id: 4,
      title: "Protection and Security",
      description:
        "System protection mechanisms and basic security concepts.",
      concepts: [
        "Access matrix",
        "Capability systems",
        "Cryptography basics",
        "User authentication",
        "Firewalls",
        "Security classifications"
      ],
      pdf: "/pdfs/pcc201/unit4.pdf"
    },
    {
      id: 5,
      title: "Case Studies",
      description:
        "Real-world operating system designs and architectures.",
      concepts: [
        "Linux design",
        "Process management",
        "Memory management",
        "File systems",
        "Windows 7 architecture"
      ],
      pdf: "/pdfs/pcc201/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc201/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc201/papers/2023.pdf" }
  ]
};

export default PCC201;
