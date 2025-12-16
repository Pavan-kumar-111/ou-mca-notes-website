const PCC104 = {
  id: "pcc-104",
  code: "PCC 104",
  name: "Computer Architecture",

  allUnitsPdf: "/pdfs/pcc104/PCC104_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Data Representation & Computer Overview",
      description: "Representation of data and overview of computer components and interconnections.",
      concepts: [
        "Data types",
        "Complements",
        "Fixed-point representations",
        "Floating-point representations",
        "Binary codes",
        "Overview of computer function and interconnection",
        "Computer components",
        "Interconnection structures",
        "Bus interconnection",
        "Bus structure",
        "Data transfer"
      ],
      pdf: "/pdfs/pcc104/unit1.pdf"
    },
    {
      id: 2,
      title: "Register Transfer & Basic Computer Organization",
      description: "Register transfer language, micro-operations and basic computer organization.",
      concepts: [
        "Register transfer language",
        "Register transfer",
        "Bus and memory transfers",
        "Arithmetic micro-operations",
        "Logic micro-operations",
        "Shift micro-operations",
        "Arithmetic Logic Shift Unit",
        "Basic computer organization and design",
        "Instruction codes",
        "Computer registers",
        "Computer instructions",
        "Timing and control",
        "Instruction cycle",
        "Memory reference instruction",
        "Input-output instruction",
        "Interrupt"
      ],
      pdf: "/pdfs/pcc104/unit2.pdf"
    },
    {
      id: 3,
      title: "Microprogrammed Control & Central Processing Unit",
      description: "Control memory, CPU organization and computer arithmetic.",
      concepts: [
        "Control memory",
        "Address sequencing",
        "Micro program example",
        "Design of control unit",
        "Central Processing Unit",
        "General register organization",
        "Stack organization",
        "Instruction formats",
        "Addressing modes",
        "Data transfer and manipulation",
        "Program control",
        "Computer arithmetic",
        "Addition and subtraction",
        "Multiplication",
        "Division",
        "Floating-point arithmetic operations"
      ],
      pdf: "/pdfs/pcc104/unit3.pdf"
    },
    {
      id: 4,
      title: "Memory Organization",
      description: "Memory hierarchy and memory management hardware.",
      concepts: [
        "Memory hierarchy",
        "Main memory",
        "RAM and ROM",
        "Auxiliary memory",
        "Associative memory",
        "Cache memory",
        "Virtual memory",
        "Memory management hardware"
      ],
      pdf: "/pdfs/pcc104/unit4.pdf"
    },
    {
      id: 5,
      title: "Input-Output Organization & Performance",
      description: "I/O organization, pipelines and performance evaluation.",
      concepts: [
        "Peripheral devices",
        "Input-output interfaces",
        "Asynchronous data transfer",
        "Modes of transfer",
        "Priority interrupt",
        "Direct Memory Access (DMA)",
        "I/O processor",
        "Serial communication",
        "Pipeline processing",
        "Arithmetic pipeline",
        "Instruction pipeline",
        "RISC pipelines",
        "Assessing and understanding performance",
        "CPU performance and its factors",
        "Evaluating performance"
      ],
      pdf: "/pdfs/pcc104/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc104/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc104/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc104/papers/2024.pdf" }
  ]
};

export default PCC104;
