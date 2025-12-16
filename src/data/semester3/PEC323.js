const PEC323 = {
  id: "pec-323",
  code: "PEC 323",
  name: "Deep Learning",

  allUnitsPdf: "/pdfs/pec323/PEC323_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Introduction to Deep Learning",
      description: "Foundations of neural networks.",
      concepts: [
        "Neural networks overview",
        "Perceptron",
        "Activation functions",
        "Loss functions"
      ],
      pdf: "/pdfs/pec323/unit1.pdf"
    },
    {
      id: 2,
      title: "Deep Neural Networks",
      description: "Training deep networks.",
      concepts: [
        "Backpropagation",
        "Gradient descent",
        "Regularization techniques",
        "Dropout"
      ],
      pdf: "/pdfs/pec323/unit2.pdf"
    },
    {
      id: 3,
      title: "Convolutional Neural Networks",
      description: "CNN models for vision tasks.",
      concepts: [
        "CNN architecture",
        "Convolution layers",
        "Pooling layers",
        "Image classification"
      ],
      pdf: "/pdfs/pec323/unit3.pdf"
    },
    {
      id: 4,
      title: "Recurrent Neural Networks",
      description: "Sequence learning models.",
      concepts: [
        "RNN fundamentals",
        "Long Short-Term Memory (LSTM)",
        "Gated Recurrent Units (GRU)",
        "Sequence modeling"
      ],
      pdf: "/pdfs/pec323/unit4.pdf"
    },
    {
      id: 5,
      title: "Deep Learning Applications",
      description: "Practical applications of deep learning.",
      concepts: [
        "Computer vision",
        "Speech recognition",
        "Natural language processing",
        "Deep learning frameworks"
      ],
      pdf: "/pdfs/pec323/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec323/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec323/papers/2023.pdf" }
  ]
};

export default PEC323;
