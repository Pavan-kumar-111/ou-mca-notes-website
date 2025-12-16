const PEC422 = {
  id: "pec-422",
  code: "PEC 422",
  name: "Big Data Analytics",

  units: [
    {
      id: 1,
      title: "Introduction to Big Data",
      concepts: [
        "Big data characteristics",
        "Types of big data",
        "Big data challenges",
        "Big data ecosystem",
        "Applications of big data"
      ]
    },
    {
      id: 2,
      title: "Big Data Processing Frameworks",
      concepts: [
        "Hadoop architecture",
        "HDFS",
        "MapReduce programming model",
        "YARN",
        "Spark overview"
      ]
    },
    {
      id: 3,
      title: "Data Analytics Techniques",
      concepts: [
        "Descriptive analytics",
        "Predictive analytics",
        "Prescriptive analytics",
        "Data preprocessing",
        "Data visualization"
      ]
    },
    {
      id: 4,
      title: "NoSQL Databases",
      concepts: [
        "NoSQL concepts",
        "Key-value stores",
        "Document databases",
        "Column family stores",
        "Graph databases"
      ]
    },
    {
      id: 5,
      title: "Big Data Applications",
      concepts: [
        "Business analytics",
        "Healthcare analytics",
        "Social media analytics",
        "IoT analytics",
        "Future trends in big data"
      ]
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec422/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec422/papers/2023.pdf" }
  ]
};

export default PEC422;
