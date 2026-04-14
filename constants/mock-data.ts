export const wordOfTheDay = {
  word: "Serendipity",
  definition:
    "The occurrence and development of events by chance in a happy or beneficial way.",
  example:
    'Example: "Technical innovation often involves a healthy dose of serendipity."',
};

export const myCollection = [
  {
    id: "petrichor",
    word: "Petrichor",
    definition:
      "A pleasant smell that frequently accompanies the first rain after a long drought.",
    example: 'Example: "Other than the petrichor emanating from the rapidly drying grass, there was not a trace of evidence that it had rained."',
    saved: false,
  },
  {
    id: "luminous",
    word: "Luminous",
    definition: "Shedding light; bright or shining, especially in the dark.",
    example: 'Example: "The luminous dial on his watch showed it was exactly midnight."',
    saved: false,
  },
  {
    id: "ethereal",
    word: "Ethereal",
    definition:
      "Extremely delicate and light in a way that seems too perfect for this world.",
    example: 'Example: "Her ethereal beauty made her look like she had stepped directly out of a fairy tale."',
    saved: true,
  },
] as const;
