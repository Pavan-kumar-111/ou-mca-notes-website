const PCC304 = {
  id: "pcc-304",
  code: "PCC 304",
  name: "Web Technologies",

  allUnitsPdf: "/pdfs/pcc304/PCC304_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Web Fundamentals",
      description:
        "Fundamentals of the internet, web architecture, and protocols.",
      concepts: [
        "Internet basics",
        "WWW architecture",
        "HTTP protocol",
        "Client-server model",
        "Web browsers and servers"
      ],
      pdf: "/pdfs/pcc304/unit1.pdf"
    },
    {
      id: 2,
      title: "HTML and CSS",
      description:
        "Web page structure and styling using HTML and CSS.",
      concepts: [
        "HTML elements",
        "Forms",
        "Tables",
        "CSS selectors",
        "Box model",
        "Responsive web design"
      ],
      pdf: "/pdfs/pcc304/unit2.pdf"
    },
    {
      id: 3,
      title: "JavaScript",
      description:
        "Client-side scripting using JavaScript.",
      concepts: [
        "JavaScript basics",
        "DOM manipulation",
        "Event handling",
        "Form validation",
        "Client-side scripting"
      ],
      pdf: "/pdfs/pcc304/unit3.pdf"
    },
    {
      id: 4,
      title: "Server-Side Technologies",
      description:
        "Server-side programming and MVC architecture.",
      concepts: [
        "Servlets",
        "JSP",
        "Session management",
        "Cookies",
        "MVC architecture"
      ],
      pdf: "/pdfs/pcc304/unit4.pdf"
    },
    {
      id: 5,
      title: "Modern Web Technologies",
      description:
        "Modern web development practices and security basics.",
      concepts: [
        "AJAX",
        "RESTful services",
        "Web security",
        "Introduction to frameworks",
        "Single page applications"
      ],
      pdf: "/pdfs/pcc304/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc304/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc304/papers/2023.pdf" }
  ]
};

export default PCC304;
