const PCC105 = {
  id: "pcc-105",
  code: "PCC 105",
  name: "Probability and Statistics",

  allUnitsPdf: "/pdfs/pcc105/PCC105_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Vector Spaces",
      description: "Linear algebra foundations required for probability and statistics.",
      concepts: [
        "Vector spaces",
        "Subspaces",
        "Null spaces",
        "Column spaces",
        "Linear transformations",
        "Linearly independent sets",
        "Bases",
        "Coordinate systems"
      ],
      pdf: "/pdfs/pcc105/unit1.pdf"
    },
    {
      id: 2,
      title: "Probability & Probability Distributions",
      description: "Fundamental probability concepts and distributions.",
      concepts: [
        "Basic terminology",
        "Three types of probability",
        "Probability rules",
        "Statistical independence",
        "Statistical dependency",
        "Bayes’ theorem",
        "Probability distributions",
        "Random variables",
        "Expected values",
        "Binomial distribution",
        "Poisson distribution",
        "Normal distribution",
        "Choosing the correct distribution"
      ],
      pdf: "/pdfs/pcc105/unit2.pdf"
    },
    {
      id: 3,
      title: "Sampling & Sampling Distributions",
      description: "Sampling methods and estimation techniques.",
      concepts: [
        "Random sampling",
        "Non-random sampling",
        "Sampling distributions",
        "Operational considerations in sampling",
        "Estimation",
        "Point estimates",
        "Interval estimates",
        "Confidence intervals",
        "Calculating interval estimates of the mean and proportion",
        "t-distribution",
        "Determination of sample size in estimation"
      ],
      pdf: "/pdfs/pcc105/unit3.pdf"
    },
    {
      id: 4,
      title: "Testing of Hypothesis",
      description: "Statistical hypothesis testing techniques.",
      concepts: [
        "One-sample tests",
        "Hypothesis testing of the mean when population standard deviation is known",
        "Hypothesis testing of proportions",
        "Hypothesis testing when standard deviation is not known",
        "Two-sample tests",
        "Tests for difference between means",
        "Large sample tests",
        "Small sample tests",
        "Dependent samples",
        "Testing for difference between proportions"
      ],
      pdf: "/pdfs/pcc105/unit4.pdf"
    },
    {
      id: 5,
      title: "Chi-square Test, Regression & Correlation",
      description: "Inferential statistics and predictive analysis.",
      concepts: [
        "Chi-square as a test of independence",
        "Chi-square as a test of goodness of fit",
        "Analysis of variance",
        "Inference about population variance",
        "Regression",
        "Estimation using regression line",
        "Correlation analysis",
        "Making inferences about population parameters",
        "Limitations, errors and caveats in regression and correlation",
        "Multiple regression",
        "Multiple correlation analysis",
        "Finding multiple regression equations",
        "Inference about population parameters using regression"
      ],
      pdf: "/pdfs/pcc105/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pcc105/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pcc105/papers/2023.pdf" },
    { year: "2024", pdf: "/pdfs/pcc105/papers/2024.pdf" }
  ]
};

export default PCC105;
