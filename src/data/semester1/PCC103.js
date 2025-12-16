const PCC103 = {
  id: "pcc-103",
  code: "PCC 103",
  name: "Object Oriented Programming Using Java",

  allUnitsPdf: "/pdfs/pcc103/PCC103_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Object-Oriented System Development & Java Fundamentals",
      description:
        "Introduction to object-oriented development and Java programming fundamentals.",
      concepts: [
        "Understanding object concepts",
        "Benefits of Object-Oriented Development",
        "Java Programming Fundamentals",
        "Introduction",
        "Overview of Java",
        "Data Types",
        "Variables and Arrays",
        "Operators",
        "Control Statements",
        "Classes",
        "Methods",
        "Inheritance",
        "Packages and Interfaces",
        "Inner Classes"
      ],
      pdf: "/pdfs/pcc103/unit1.pdf"
    },
    {
      id: 2,
      title: "I/O Basics, Strings, Exceptions & Multithreading",
      description:
        "Input-output mechanisms, exception handling and multithreaded programming.",
      concepts: [
        "I/O basics",
        "Stream and Byte classes",
        "Character Streams",
        "Reading console input and output",
        "PrintWriter class",
        "String handling",
        "Exception handling",
        "Multithreaded programming"
      ],
      pdf: "/pdfs/pcc103/unit2.pdf"
    },
    {
      id: 3,
      title: "Exploring Java Language & Collections Framework",
      description:
        "Java collections framework and utility classes.",
      concepts: [
        "Collections overview",
        "Collections interfaces",
        "Collections classes",
        "Iterators",
        "Random access interface",
        "Maps",
        "Comparators",
        "Arrays",
        "Legacy classes and interfaces",
        "StringTokenizer",
        "BitSet",
        "Date",
        "Calendar",
        "Timer"
      ],
      pdf: "/pdfs/pcc103/unit3.pdf"
    },
    {
      id: 4,
      title: "AWT, Swing & Graphics",
      description:
        "GUI development using AWT and Swing with event handling.",
      concepts: [
        "Introduction to AWT",
        "Working with Graphics",
        "AWT classes",
        "Working with Graphics",
        "Event handling",
        "Two event handling mechanisms",
        "Delegation event model",
        "Event classes",
        "Sources of events",
        "Event listener interfaces",
        "AWT controls",
        "Control fundamentals",
        "Labels",
        "Using buttons",
        "Applying check boxes",
        "CheckboxGroup",
        "Choice controls",
        "Using lists",
        "Managing scroll bars",
        "Using text field",
        "Using TextArea",
        "Understanding layout managers",
        "Menu bars and menus",
        "Dialog boxes",
        "File dialog",
        "Handling events by extending AWT components",
        "Exploring controls, menus and layout manager"
      ],
      pdf: "/pdfs/pcc103/unit4.pdf"
    },
    {
      id: 5,
      title: "Swing, JDBC, Servlets & Java Network Programming",
      description:
        "Advanced Java topics including Swing, JDBC, Servlets and networking.",
      concepts: [
        "Introduction to Swing package",
        "Introduction to JDBC",
        "JDBC drivers and architecture",
        "Connecting to non-conventional databases",
        "Introduction to Servlet",
        "Servlet life cycle",
        "Developing and deploying servlets",
        "Exploring deployment",
        "Handling request and response",
        "JSP",
        "Introduction to Java network programming"
      ],
      pdf: "/pdfs/pcc103/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc103/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc103/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc103/papers/2024.pdf" }
  ]
};

export default PCC103;
