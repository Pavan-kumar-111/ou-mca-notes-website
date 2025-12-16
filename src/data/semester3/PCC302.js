const PCC302 = {
  id: "pcc-302",
  code: "PCC 302",
  name: "Computer Networks",

  allUnitsPdf: "/pdfs/pcc302/PCC302_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Computer Networks",
      description:
        "Basic concepts of data communication and network models.",
      concepts: [
        "Data communication",
        "Components of data communication",
        "Network types",
        "Network topologies",
        "Protocols and standards",
        "OSI reference model",
        "TCP/IP model"
      ],
      pdf: "/pdfs/pcc302/unit1.pdf"
    },
    {
      id: 2,
      title: "Data Link Layer",
      description:
        "Error control, flow control, and medium access protocols.",
      concepts: [
        "Error detection and correction",
        "Flow control",
        "ARQ protocols",
        "Medium access control",
        "Ethernet",
        "IEEE standards"
      ],
      pdf: "/pdfs/pcc302/unit2.pdf"
    },
    {
      id: 3,
      title: "Network Layer",
      description:
        "Routing, logical addressing, and congestion control.",
      concepts: [
        "Logical addressing",
        "IPv4 and IPv6",
        "Routing algorithms",
        "Distance vector routing",
        "Link state routing",
        "Congestion control"
      ],
      pdf: "/pdfs/pcc302/unit3.pdf"
    },
    {
      id: 4,
      title: "Transport Layer",
      description:
        "Process-to-process delivery and transport layer protocols.",
      concepts: [
        "Process-to-process delivery",
        "UDP",
        "TCP",
        "Flow control",
        "Congestion control",
        "Error control"
      ],
      pdf: "/pdfs/pcc302/unit4.pdf"
    },
    {
      id: 5,
      title: "Application Layer",
      description:
        "Network applications and basic security concepts.",
      concepts: [
        "DNS",
        "HTTP",
        "FTP",
        "SMTP",
        "POP",
        "SNMP",
        "Network security basics"
      ],
      pdf: "/pdfs/pcc302/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc302/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc302/papers/2023.pdf" }
  ]
};

export default PCC302;
