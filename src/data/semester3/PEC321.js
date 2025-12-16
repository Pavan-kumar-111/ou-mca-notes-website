const PEC321 = {
  id: "pec-321",
  code: "PEC 321",
  name: "Network Security",

  allUnitsPdf: "/pdfs/pec321/PEC321_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Network Security",
      description: "Security goals, threats, attacks, and security architecture.",
      concepts: [
        "Security goals",
        "Security attacks",
        "Security services",
        "Security mechanisms",
        "OSI security architecture"
      ],
      pdf: "/pdfs/pec321/unit1.pdf"
    },
    {
      id: 2,
      title: "Cryptography Fundamentals",
      description: "Encryption techniques and cryptographic foundations.",
      concepts: [
        "Classical encryption techniques",
        "Symmetric key encryption",
        "Public key encryption",
        "Key management",
        "Cryptographic hash functions"
      ],
      pdf: "/pdfs/pec321/unit2.pdf"
    },
    {
      id: 3,
      title: "Authentication and Access Control",
      description: "Authentication mechanisms and access control models.",
      concepts: [
        "Message authentication",
        "Digital signatures",
        "Authentication protocols",
        "Access control models"
      ],
      pdf: "/pdfs/pec321/unit3.pdf"
    },
    {
      id: 4,
      title: "Network Security Mechanisms",
      description: "Security mechanisms used to protect networks.",
      concepts: [
        "IP security (IPSec)",
        "Web security",
        "Email security",
        "Secure socket layer (SSL)",
        "Transport layer security (TLS)"
      ],
      pdf: "/pdfs/pec321/unit4.pdf"
    },
    {
      id: 5,
      title: "Firewalls and Intrusion Detection",
      description: "Network defense systems and monitoring techniques.",
      concepts: [
        "Firewalls",
        "Firewall design principles",
        "Intrusion detection systems",
        "Intrusion prevention systems",
        "Network security policies"
      ],
      pdf: "/pdfs/pec321/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec321/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec321/papers/2023.pdf" }
  ]
};

export default PEC321;
