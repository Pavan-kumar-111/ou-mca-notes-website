const PCC205 = {
  id: "pcc-205",
  code: "PCC 205",
  name: "Machine Learning",

  allUnitsPdf: "/pdfs/pcc205/PCC205_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description:
        "Overview of machine learning concepts and learning paradigms.",
      concepts: [
        "Machine learning overview",
        "Types of learning",
        "Supervised learning",
        "Unsupervised learning",
        "Reinforcement learning",
        "Applications of ML"
      ],
      pdf: "/pdfs/pcc205/unit1.pdf"
    },
    {
      id: 2,
      title: "Regression & Classification",
      description:
        "Regression and classification algorithms used in machine learning.",
      concepts: [
        "Linear regression",
        "Multiple regression",
        "Logistic regression",
        "k-NN algorithm",
        "Naive Bayes classifier",
        "Decision trees"
      ],
      pdf: "/pdfs/pcc205/unit2.pdf"
    },
    {
      id: 3,
      title: "Support Vector Machines & Neural Networks",
      description:
        "Advanced learning models including SVMs and neural networks.",
      concepts: [
        "Support vector machines",
        "Kernel functions",
        "Artificial neural networks",
        "Perceptron",
        "Backpropagation"
      ],
      pdf: "/pdfs/pcc205/unit3.pdf"
    },
    {
      id: 4,
      title: "Clustering & Dimensionality Reduction",
      description:
        "Unsupervised learning techniques and dimensionality reduction.",
      concepts: [
        "Clustering techniques",
        "K-means algorithm",
        "Hierarchical clustering",
        "PCA",
        "Dimensionality reduction techniques"
      ],
      pdf: "/pdfs/pcc205/unit4.pdf"
    },
    {
      id: 5,
      title: "Model Evaluation & Applications",
      description:
        "Model evaluation techniques and real-world applications of ML.",
      concepts: [
        "Training and testing",
        "Cross validation",
        "Bias-variance tradeoff",
        "Performance metrics",
        "Real-world ML applications"
      ],
      pdf: "/pdfs/pcc205/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2023", pdf: "/pdfs/pcc205/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc205/papers/2024.pdf" }
  ]
};

export default PCC205;
