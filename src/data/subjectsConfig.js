const subjectsConfig = {
  "semester-1": {
    title: "Semester I",
    progress: "Semester 1 of 4",
    subjects: [
      {
        id: "pcc-101",
        code: "PCC 101",
        name: "Mathematical Foundations of Computer Science",
        path: "/units/semester-1/pcc-101"
      },
      {
        id: "pcc-102",
        code: "PCC 102",
        name: "Data Structures using C",
        path: "/units/semester-1/pcc-102"
      },
      {
        id: "pcc-103",
        code: "PCC 103",
        name: "Object Oriented Programming Using Java",
        path: "/units/semester-1/pcc-103"
      },
      {
        id: "pcc-104",
        code: "PCC 104",
        name: "Computer Architecture",
        path: "/units/semester-1/pcc-104"
      },
      {
        id: "pcc-105",
        code: "PCC 105",
        name: "Probability and Statistics",
        path: "/units/semester-1/pcc-105"
      },
      {
        id: "mgc-106",
        code: "MGC 106",
        name: "Managerial Economics and Accountancy",
        path: "/units/semester-1/mgc-106"
      }
    ]
  },

  "semester-2": {
    title: "Semester II",
    progress: "Semester 2 of 4",
    subjects: [
      {
        id: "pcc-201",
        code: "PCC 201",
        name: "Operating Systems",
        path: "/units/semester-2/pcc-201"
      },
      {
        id: "pcc-202",
        code: "PCC 202",
        name: "Database Management Systems",
        path: "/units/semester-2/pcc-202"
      },
      {
        id: "pcc-203",
        code: "PCC 203",
        name: "Design and Analysis of Algorithms",
        path: "/units/semester-2/pcc-203"
      },
      {
        id: "pcc-204",
        code: "PCC 204",
        name: "Data Engineering with Python",
        path: "/units/semester-2/pcc-204"
      },
      {
        id: "pcc-205",
        code: "PCC 205",
        name: "Machine Learning",
        path: "/units/semester-2/pcc-205"
      },
      {
        id: "mgc-206",
        code: "MGC 206",
        name: "Operations Research",
        path: "/units/semester-2/mgc-206"
      }
    ]
  },
"semester-3": {
  title: "Semester III",
  progress: "Semester 3 of 4",

  subjects: [
    {
      id: "pcc-301",
      code: "PCC 301",
      name: "Software Engineering",
      path: "/units/semester-3/pcc-301"
    },
    {
      id: "pcc-302",
      code: "PCC 302",
      name: "Computer Networks",
      path: "/units/semester-3/pcc-302"
    },
    {
      id: "pcc-303",
      code: "PCC 303",
      name: "Artificial Intelligence",
      path: "/units/semester-3/pcc-303"
    },
    {
      id: "pcc-304",
      code: "PCC 304",
      name: "Web Technologies",
      path: "/units/semester-3/pcc-304"
    }
  ],

  professionalElective1: {
    title: "Professional Elective – I (Choose One)",
    subjects: [
      {
        id: "pec-311",
        code: "PEC 311",
        name: "Digital Forensics",
        path: "/units/semester-3/pec-311"
      },
      {
        id: "pec-312",
        code: "PEC 312",
        name: "Distributed Systems",
        path: "/units/semester-3/pec-312"
      },
      {
        id: "pec-313",
        code: "PEC 313",
        name: "Internet of Things",
        path: "/units/semester-3/pec-313"
      },
      {
        id: "pec-314",
        code: "PEC 314",
        name: "Image Processing",
        path: "/units/semester-3/pec-314"
      },
      {
        id: "pec-315",
        code: "PEC 315",
        name: "DevOps Methodology",
        path: "/units/semester-3/pec-315"
      }
    ]
  },

  professionalElective2: {
    title: "Professional Elective – II (Choose One)",
    subjects: [
      {
        id: "pec-321",
        code: "PEC 321",
        name: "Network Security",
        path: "/units/semester-3/pec-321"
      },
      {
        id: "pec-322",
        code: "PEC 322",
        name: "Optimization Techniques",
        path: "/units/semester-3/pec-322"
      },
      {
        id: "pec-323",
        code: "PEC 323",
        name: "Deep Learning",
        path: "/units/semester-3/pec-323"
      },
      {
        id: "pec-324",
        code: "PEC 324",
        name: "Information Retrieval System",
        path: "/units/semester-3/pec-324"
      },
      {
        id: "pec-325",
        code: "PEC 325",
        name: "Data Visualization",
        path: "/units/semester-3/pec-325"
      }
    ]
  }
},
"semester-4": {
  title: "Semester IV",
  progress: "Semester 4 of 4",

  subjects: [],

  professionalElective1: {
    title: "Professional Elective – IV (Choose One)",
    subjects: [
      { id: "pec-421", code: "PEC 421", name: "Software Quality and Testing", path: "/units/semester-4/pec-421" },
      { id: "pec-422", code: "PEC 422", name: "Big Data Analytics", path: "/units/semester-4/pec-422" },
      { id: "pec-423", code: "PEC 423", name: "Database Security", path: "/units/semester-4/pec-423" },
      { id: "pec-424", code: "PEC 424", name: "UI / UX", path: "/units/semester-4/pec-424" },
      { id: "pec-425", code: "PEC 425", name: "Augmented Reality and Virtual Reality", path: "/units/semester-4/pec-425" }
    ]
  },

  professionalElective2: {
    title: "Open Elective (Choose One)",
    subjects: [
      { id: "oe-431", code: "OE 431", name: "Professional Ethics", path: "/units/semester-4/oe-431" },
      { id: "oe-432", code: "OE 432", name: "Constitution of India", path: "/units/semester-4/oe-432" },
      { id: "oe-433", code: "OE 433", name: "Disaster Management", path: "/units/semester-4/oe-433" },
      { id: "oe-434", code: "OE 434", name: "Organizational Behaviour", path: "/units/semester-4/oe-434" },
      { id: "oe-435", code: "OE 435", name: "Intellectual Property and Cyber Law", path: "/units/semester-4/oe-435" },
      { id: "oe-436", code: "OE 436", name: "Environmental Science", path: "/units/semester-4/oe-436" }
    ]
  },

  project: {
    title: "Project Work",
    subjects: [
      { id: "proj-401", code: "PROJ 401", name: "Major Project", path: "/units/semester-4/project" }
    ]
  }
}


};

export default subjectsConfig;
