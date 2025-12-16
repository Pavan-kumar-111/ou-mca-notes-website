const PEC423 = {
  id: "pec-423",
  code: "PEC 423",
  name: "Database Security",

  units: [
    {
      id: 1,
      title: "Introduction to Database Security",
      concepts: [
        "Database security issues",
        "Threats and vulnerabilities",
        "Security requirements",
        "Database access control",
        "Security policies"
      ]
    },
    {
      id: 2,
      title: "Authentication and Authorization",
      concepts: [
        "User authentication",
        "Role-based access control",
        "Mandatory access control",
        "Discretionary access control",
        "Authorization mechanisms"
      ]
    },
    {
      id: 3,
      title: "Data Encryption and Auditing",
      concepts: [
        "Encryption techniques",
        "Key management",
        "Database auditing",
        "Audit trails",
        "Intrusion detection"
      ]
    },
    {
      id: 4,
      title: "Secure Database Design",
      concepts: [
        "Secure schema design",
        "Inference control",
        "Statistical databases",
        "View-based security",
        "Data masking"
      ]
    },
    {
      id: 5,
      title: "Advanced Database Security",
      concepts: [
        "Cloud database security",
        "Distributed database security",
        "Blockchain for databases",
        "Privacy preservation",
        "Future trends"
      ]
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec423/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec423/papers/2023.pdf" }
  ]
};

export default PEC423;
