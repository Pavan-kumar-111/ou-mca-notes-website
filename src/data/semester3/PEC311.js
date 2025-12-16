const PEC311 = {
  id: "pec-311",
  code: "PEC 311",
  name: "Digital Forensics",

  allUnitsPdf: "/pdfs/pec311/PEC311_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Computer Forensics Fundamentals",
      description:
        "Introduction to computer forensics, its benefits, legal aspects, and privacy concerns.",
      concepts: [
        "Benefits of forensics",
        "Computer crimes",
        "Computer forensics evidence and courts",
        "Legal concerns",
        "Private issues"
      ],
      pdf: "/pdfs/pec311/unit1.pdf"
    },
    {
      id: 2,
      title: "Understanding Computing Investigations",
      description:
        "Procedures and tools used in corporate high-tech investigations.",
      concepts: [
        "Understanding computing investigations",
        "Procedure for corporate high-tech investigations",
        "Understanding data recovery workstation and software",
        "Conducting an investigation"
      ],
      pdf: "/pdfs/pec311/unit2.pdf"
    },
    {
      id: 3,
      title: "Data Acquisition",
      description:
        "Methods and tools for acquiring and validating digital evidence.",
      concepts: [
        "Understanding storage formats and digital evidence",
        "Determining the best acquisition method",
        "Acquisition tools",
        "Validating data acquisitions",
        "Performing RAID data acquisitions",
        "Remote network acquisition tools",
        "Other forensics acquisition tools"
      ],
      pdf: "/pdfs/pec311/unit3.pdf"
    },
    {
      id: 4,
      title: "Processing Crime and Incident Scenes",
      description:
        "Securing, storing, and reviewing digital evidence from crime scenes.",
      concepts: [
        "Securing a computer incident or crime scene",
        "Seizing digital evidence at the scene",
        "Storing digital evidence",
        "Obtaining digital hash",
        "Reviewing case"
      ],
      pdf: "/pdfs/pec311/unit4.pdf"
    },
    {
      id: 5,
      title: "Forensic Tools and Email Investigations",
      description:
        "Modern forensic tools, validation, and email crime investigations.",
      concepts: [
        "Software forensic tools",
        "Hardware forensic tools",
        "Validating and testing forensic software",
        "Addressing data-hiding techniques",
        "Performing remote acquisitions",
        "Email investigations",
        "Investigating email crime and violations",
        "Understanding email servers",
        "Specialized email forensics tools"
      ],
      pdf: "/pdfs/pec311/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec311/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec311/papers/2023.pdf" }
  ]
};

export default PEC311;
