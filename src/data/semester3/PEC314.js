const PEC314 = {
  id: "pec-314",
  code: "PEC 314",
  name: "Image Processing",

  allUnitsPdf: "/pdfs/pec314/PEC314_All_Units.pdf",

  units: [
    {
      id: 1,
      title: "Fundamentals of Image Processing",
      description:
        "Basics of digital image processing and image acquisition.",
      concepts: [
        "Need for digital image processing",
        "Fundamentals of digital image processing",
        "Elements of visual perception",
        "Image sensing and acquisition",
        "Image sampling and quantization",
        "Image geometry",
        "Discrete image mathematical characterization"
      ],
      pdf: "/pdfs/pec314/unit1.pdf"
    },
    {
      id: 2,
      title: "Image Transforms",
      description:
        "Transform techniques used in image processing.",
      concepts: [
        "Two-dimensional Fourier transform",
        "Properties",
        "Fast Fourier Transform",
        "Discrete cosine transform",
        "Karhunen-Loeve transform",
        "Discrete short time Fourier transform",
        "Wavelet transform",
        "Discrete wavelet transform",
        "Application of wavelet transform in compression"
      ],
      pdf: "/pdfs/pec314/unit2.pdf"
    },
    {
      id: 3,
      title: "Image Enhancement",
      description:
        "Enhancement techniques in spatial and frequency domains.",
      concepts: [
        "Spatial domain methods",
        "Gray level transformations",
        "Histogram processing",
        "Smoothing spatial filters",
        "Sharpening spatial filters",
        "Frequency domain enhancement",
        "Homomorphic filtering"
      ],
      pdf: "/pdfs/pec314/unit3.pdf"
    },
    {
      id: 4,
      title: "Image Restoration and Segmentation",
      description:
        "Restoration models and segmentation techniques.",
      concepts: [
        "Image restoration",
        "Degradation models",
        "Unconstrained and constrained restoration",
        "Inverse filtering",
        "Wiener filter",
        "Feature extraction",
        "Edge detection",
        "Region-based segmentation",
        "Morphological processing"
      ],
      pdf: "/pdfs/pec314/unit4.pdf"
    },
    {
      id: 5,
      title: "Image Reconstruction",
      description:
        "Principles and techniques of image reconstruction.",
      concepts: [
        "Image reconstruction principles",
        "Need for reconstruction",
        "Radon transform",
        "Back projection operator",
        "Projection theorem",
        "Inverse Radon transform"
      ],
      pdf: "/pdfs/pec314/unit5.pdf"
    }
  ],

  previousPapers: [
    { year: "2022", pdf: "/pdfs/pec314/papers/2022.pdf" },
    { year: "2023", pdf: "/pdfs/pec314/papers/2023.pdf" }
  ]
};

export default PEC314;
