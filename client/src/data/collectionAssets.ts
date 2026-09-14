export type PortfolioPiece = { title: string; src: string; alt: string };

export type PortfolioTriple = {
  orientation: "portrait" | "landscape";
  pieces: [PortfolioPiece, PortfolioPiece, PortfolioPiece];
};

const portfolioTriple = (
  orientation: PortfolioTriple["orientation"],
  pieces: [PortfolioPiece, PortfolioPiece, PortfolioPiece],
): PortfolioTriple => ({ orientation, pieces });

const officialPortfolioPiece = (number: string, src: string): PortfolioPiece => ({
  title: `Portfolio ${number}`,
  src,
  alt: `Official Sama Knitwear portfolio photograph ${number}`,
});

// Official Portfolio sequence supplied by Sama. Each numbered triplet is preserved as provided.
export const portfolioTriples: PortfolioTriple[] = [
  portfolioTriple("portrait", [officialPortfolioPiece("01", "/media/sama-portfolio-01-color-corrected_a6dd9565.webp"), officialPortfolioPiece("02", "/media/sama-portfolio-02_2dbbd388.jpg"), officialPortfolioPiece("03", "/media/sama-portfolio-03_9c4d9077.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("04", "/media/sama-portfolio-04_64f52409.jpg"), officialPortfolioPiece("05", "/media/sama-portfolio-05_8c83445c.jpg"), officialPortfolioPiece("06", "/media/sama-portfolio-21_54919b62.jpg")]),
  portfolioTriple("landscape", [officialPortfolioPiece("07", "/media/sama-portfolio-07-color-corrected_a2dbaa40.webp"), officialPortfolioPiece("08", "/media/sama-portfolio-08-color-corrected_d11e68e2.webp"), officialPortfolioPiece("09", "/media/sama-portfolio-09-color-corrected_bd291e78.webp")]),
  portfolioTriple("landscape", [officialPortfolioPiece("10", "/media/sama-portfolio-10-color-corrected_3fde04b0.webp"), officialPortfolioPiece("11", "/media/sama-portfolio-06_235a25b7.jpg"), officialPortfolioPiece("12", "/media/sama-portfolio-11-color-corrected_4d4168ea.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("13", "/media/sama-portfolio-13-color-corrected_fa26cf06.webp"), officialPortfolioPiece("14", "/media/sama-portfolio-14-color-corrected_d405c83d.webp"), officialPortfolioPiece("15", "/media/sama-portfolio-15-color-corrected_f00b6519.webp")]),
  portfolioTriple("landscape", [officialPortfolioPiece("16", "/media/sama-portfolio-16_5701bac0.jpg"), officialPortfolioPiece("17", "/media/sama-portfolio-17_342c5647.jpg"), officialPortfolioPiece("18", "/media/sama-portfolio-18-color-corrected_d01572e5.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("19", "/media/sama-portfolio-19-color-corrected_168ffddd.webp"), officialPortfolioPiece("20", "/media/sama-portfolio-20-color-corrected_dadaa417.webp"), officialPortfolioPiece("21", "/media/sama-portfolio-24_159cf047.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("22", "/media/sama-portfolio-22_1424c936.jpg"), officialPortfolioPiece("23", "/media/sama-portfolio-23_47fde963.jpg"), officialPortfolioPiece("24", "/media/sama-portfolio-12-color-corrected_fa4bdfcf.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("25", "/media/sama-portfolio-25_894a9ba8.jpg"), officialPortfolioPiece("26", "/media/sama-portfolio-26_f80a2a48.jpg"), officialPortfolioPiece("27", "/media/sama-portfolio-27_bc03d5a7.jpg")]),
  portfolioTriple("landscape", [officialPortfolioPiece("28", "/media/sama-portfolio-28_1392bc96.jpg"), officialPortfolioPiece("29", "/media/sama-portfolio-29_3a3d2415.jpg"), officialPortfolioPiece("30", "/media/sama-portfolio-30_1d5fab05.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("31", "/media/sama-portfolio-31_3c7b8105.jpg"), officialPortfolioPiece("32", "/media/sama-portfolio-32_037af758.jpg"), officialPortfolioPiece("33", "/media/sama-portfolio-33_693de08f.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("34", "/media/sama-portfolio-34_9720d0e4.jpg"), officialPortfolioPiece("35", "/media/sama-portfolio-35-replacement_6b977219.webp"), officialPortfolioPiece("36", "/media/sama-portfolio-36_9d523b8c.jpg")]),
  portfolioTriple("landscape", [officialPortfolioPiece("37", "/media/sama-portfolio-37_c3c050f9.jpg"), officialPortfolioPiece("38", "/media/sama-portfolio-38_9a12ca59.jpg"), officialPortfolioPiece("39", "/media/sama-portfolio-39_5b80aa45.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("40", "/media/sama-portfolio-40_1156cdff.jpg"), officialPortfolioPiece("41", "/media/sama-portfolio-41-replacement_7f0d954a.webp"), officialPortfolioPiece("42", "/media/sama-portfolio-42_977803cb.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("43", "/media/sama-portfolio-50_2127f54b.webp"), officialPortfolioPiece("44", "/media/sama-portfolio-44_99dcdb47.webp"), officialPortfolioPiece("45", "/media/sama-portfolio-45_ba52c13b.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("46", "/media/sama-portfolio-46_6d6483f6.webp"), officialPortfolioPiece("47", "/media/sama-portfolio-47_9e42b5cb.webp"), officialPortfolioPiece("48", "/media/sama-portfolio-48_78eb7f1f.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("49", "/media/sama-portfolio-49_ab9e190a.webp"), officialPortfolioPiece("50", "/media/sama-portfolio-51_37feec8f.webp"), officialPortfolioPiece("51", "/media/sama-portfolio-43_e55a042f.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("52", "/media/sama-portfolio-52_06d7f991.webp"), officialPortfolioPiece("53", "/media/sama-portfolio-53_d5d1b491.webp"), officialPortfolioPiece("54", "/media/sama-portfolio-54-replacement_6b4365d6.webp")]),
];