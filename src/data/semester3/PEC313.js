const PEC313 = {
  id: "pec-313",
  code: "PEC 313",
  name: "Internet of Things",

  allUnitsPdf: "/pdfs/pec313/PEC313_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to IoT",
      description:
        "Fundamentals, architecture, and applications of IoT.",
      concepts: [
        "Introduction to Internet of Things (IoT)",
        "Characteristics of IoT",
        "IoT architecture and components",
        "Applications of IoT"
      ],
      pdf: "/pdfs/pec313/unit1.pdf"
    },
    {
      id: 2,
      title: "Internet and Communication Technologies",
      description:
        "Communication protocols and networking technologies for IoT.",
      concepts: [
        "Internet communications overview",
        "IP, TCP, UDP protocols",
        "DNS",
        "Static and dynamic IP addressing",
        "MAC addressing",
        "HTTP and HTTPS",
        "UDP protocols",
        "Application layer protocols",
        "REST and HTTPS",
        "Cost versus ease of production",
        "Prototypes"
      ],
      pdf: "/pdfs/pec313/unit2.pdf"
    },
    {
      id: 3,
      title: "IoT Programming and Prototyping",
      description:
        "Programming platforms, embedded systems, and hardware prototyping.",
      concepts: [
        "IoT programming platforms",
        "Sensors and actuators",
        "Microcontrollers",
        "SoC",
        "Choosing a platform",
        "Prototyping hardware platforms",
        "Arduino programming",
        "Raspberry Pi",
        "Embedded C",
        "Linux",
        "GPIO",
        "ADC",
        "I2C",
        "SPI",
        "PWM",
        "LED blinking",
        "Control of motor using switch"
      ],
      pdf: "/pdfs/pec313/unit3.pdf"
    },
    {
      id: 4,
      title: "IoT Product Manufacturing",
      description:
        "From prototype to product and ethical issues in IoT.",
      concepts: [
        "IoT product manufacturing",
        "From prototype to reality",
        "Business model for IoT product manufacturing",
        "Printing",
        "Certification",
        "Scaling up software",
        "Ethical issues in IoT",
        "Privacy",
        "Control",
        "Environment",
        "Solutions to ethical issues"
      ],
      pdf: "/pdfs/pec313/unit4.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec313/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec313/papers/2023.pdf" }
  ]
};

export default PEC313;
