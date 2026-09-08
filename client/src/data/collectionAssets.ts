/**
 * SAMA — LIMA MATERIAL HOUSE / FOLDER-FIRST COLLECTION LIBRARY
 * The original OneDrive garment-story hierarchy determines the AW21 and AW22 gallery structure.
 * Every gallery image preserves native source framing; no public record carries file, source, or frame metadata.
 */

export type CollectionFrame = { src: string; alt: string };
export type PortfolioImage = { src: string; alt: string };
export type PortfolioGroup = { season: string; title: string; images: PortfolioImage[] };

const aw23 = {
  b1: "/media/aw23-b1_8e07d7cd.jpg", b2: "/media/aw23-b2_6cd02b95.jpg", b3: "/media/aw23-b3_3790d13a.jpg",
  d1: "/media/aw23-d1-blue-cabinet_71f358f9.jpg", d2: "/media/aw23-d2_0af2a2f4.jpg", d3a: "/media/aw23-d3-1_0787c28c.jpg", d3: "/media/aw23-d3_ae5a98b9.jpg", d5: "/media/aw23-d5_c5f90968.jpg",
  e1: "/media/aw23-e1_90fb4984.jpg", e2: "/media/aw23-e2_9329a1be.jpg", e3: "/media/aw23-e3_5fb67d56.jpg", e4a: "/media/aw23-e4-1_c74efae9.jpg", e4: "/media/aw23-e4_89c1093f.jpg", e5: "/media/aw23-e5_d2ceb081.jpg", e6: "/media/aw23-e6_88ce5b5f.jpg", e7a: "/media/aw23-e7-1_47279e33.jpg", e7: "/media/aw23-e7_8b3a309d.jpg",
  f1: "/media/aw23-f1_2a93a00f.jpg", f2: "/media/aw23-f2_d58c7af8.jpg", f3: "/media/aw23-f3_e7e15e48.jpg", f4: "/media/aw23-f4_0fb45bff.jpg", f5: "/media/aw23-f5_79b95864.jpg",
  g1: "/media/aw23-g1_ec09000a.jpg", g2: "/media/aw23-g2_955a08db.jpg", g3: "/media/aw23-g3_236783ab.jpg", g4: "/media/aw23-g4_261d6165.jpg", g6: "/media/aw23-g6_56f8c900.jpg", g7: "/media/aw23-g7_ee26bc0e.jpg",
  h1: "/media/aw23-h1_7f732852.jpg", h2: "/media/aw23-h2_ede3bf6f.jpg", h3: "/media/aw23-h3_c3fb179c.jpg", h5: "/media/aw23-h5_d5d647fe.jpg", j1: "/media/aw23-j1_9bbb320a.jpg", j2: "/media/aw23-j2_f3d4d3c4.jpg",
} as const;

const aw22Portfolio = {
  alpacaDress: "/media/aw22-01-sama-alpaca-knit-dress-5-785-jpg_8dfc9220.jpg", blanket: "/media/aw22-02-sama-blanket-5-336-jpg_d9ebd641.jpg", buttonCardigan: "/media/aw22-03-sama-button-cardigan-1p9a6198-jpg_c1fa2edf.jpg", pantsAndTee: "/media/aw22-04-sama-knit-pants-and-id-scoop-tee-5-328-pdpa-jpg_1acb15b9.jpg", skirt: "/media/aw22-05-sama-knit-skirt-sama-knit-skirt-navy-pdpa-jpg_a9ad6b20.jpg", tank: "/media/aw22-06-sama-knit-tank-5-915-jpg_1ffd55d4.jpg", littlePullover: "/media/aw22-07-sama-little-knit-alpaca-pullover-5-483-jpg_93e193b4.jpg", laceCardigan: "/media/aw22-08-sama-long-lace-rib-cardigan-5-261-jpg_ab2e41c6.jpg", naturalMelange: "/media/aw22-09-sama-natural-melanege-turtleneck-and-pants-5-770-pdpa-11-jpg_56ae9b2c.jpg", fishermanCardigan: "/media/aw22-10-sama-new-fisherman-cardigan-5-375-pdpa-7-jpg_376e6943.jpg", fishermanSweater: "/media/aw22-11-sama-new-fishermans-sweater-1p9a6059-jpg_43811438.jpg", ponchoVest: "/media/aw22-12-sama-poncho-vest-5-286-jpg_78fc2024.jpg", skirtAndTop: "/media/aw22-13-sama-skirt-and-cross-back-toop-5-448pdpa-7-jpg_7cc9bdd0.jpg", turtleneckPoncho: "/media/aw22-14-sama-turtleneck-poncho-5-914-cata-jpg_cf3f5004.jpg",
} as const;

const aw22Folio = {
  alpacaDress: "/media/aw22-folio-01-sama-alpaca-knit-dress-5-771-jpg_96981eee.jpg", blanket: "/media/aw22-folio-02-sama-blanket-5-334-jpg_1af3319d.jpg", buttonCardigan: "/media/aw22-folio-03-sama-button-cardigan-5-253-jpg_c9d21052.jpg", pantsAndTee: "/media/aw22-folio-04-sama-knit-pants-and-id-scoop-tee-5-333-pdpa-jpg_14a567cf.jpg", skirt: "/media/aw22-folio-05-sama-knit-skirt-sama-knit-skirt-navy-2-pdpa-jpg_d20c412d.jpg", tank: "/media/aw22-folio-06-sama-knit-tank-1p9a5189-jpg_38aded39.jpg", littlePullover: "/media/aw22-folio-07-sama-little-knit-alpaca-pullover-5-252-jpg_ed565053.jpg", laceCardigan: "/media/aw22-folio-08-sama-long-lace-rib-cardigan-5-269-jpg_aad81b62.jpg", naturalMelange: "/media/aw22-folio-09-sama-natural-melanege-turtleneck-and-pants-5-770-pdpa-2-jpg_7a074033.jpg", fishermanCardigan: "/media/aw22-folio-10-sama-new-fisherman-cardigan-5-375-pdpa-1-jpg_4261d0ae.jpg", fishermanSweater: "/media/aw22-folio-11-sama-new-fishermans-sweater-5-529-jpg_9b16d70f.jpg", ponchoVest: "/media/aw22-folio-12-sama-poncho-vest-5-250-jpg_77e2a657.jpg", skirtAndTop: "/media/aw22-folio-13-sama-skirt-and-cross-back-toop-5-448pdpa-14-jpg_48b1da89.jpg", turtleneckPoncho: "/media/aw22-folio-14-sama-turtleneck-poncho-5-473pdpa-10-jpg_817704d9.jpg",
} as const;

const aw21Portfolio = {
  colorTurtleneck: "/media/aw21-01-3-color-turtleneck-61-alpaca-10-polyamide-21-cotton-8-wool-sama13-jpg_be26c41a.jpg", circleRuana: "/media/aw21-02-circle-ruana-79-alpaca-13-polymide-5-merino-3-cotton-sama8-jpg_fba2143b.jpg", crazySweater: "/media/aw21-03-crazy-sweater-sama21-jpg_76695afc.jpg", dropNeedleVest: "/media/aw21-04-drop-needle-vest-100-pima-cotton-sama10-jpg_d52bbb2c.jpg", fishermanCardigan: "/media/aw21-05-fisherman-cardigan-54-baby-suri-alpaca-23-wool-23-polyamide-sama1-jpg_f511587f.jpg", fishermanSweater: "/media/aw21-06-fisherman-sweater-100-highland-wool-sama6-jpg_536c88b8.jpg", jerseySet: "/media/aw21-07-jersey-pants-and-boxy-short-sleeve-crop-top-100-pima-cotton-sama19-jpg_2714df01.jpg", laceTank: "/media/aw21-08-lace-tank-100-pima-cotton-sama-14-jpg_cc58be9d.jpg", meandersSweater: "/media/aw21-09-meanders-sweater-25-alpaca-52-cotton-11-merino-wool-1-donegal-sama7-jpg_e24c1a07.jpg", babyAlpaca: "/media/aw21-10-mens-baby-alpaca-crew-neck-100-baby-alpaca-sama49-jpg_a6b77a39.jpg", ecoBabyCotton: "/media/aw21-11-mens-eco-baby-cotton-crew-neck-68-baby-alpaca-32-pima-cotton-sama44-jpg_0de08ad3.jpg", incaSpun: "/media/aw21-12-mens-inca-spun-sweater-50-alpaca-50-highland-wool-sam53-jpg_26832e28.jpg", pimaCashmere: "/media/aw21-13-mens-lightweight-pima-cashmere-crew-neck-90-pima-cotton-10-cashmere-sama60-jpg_67b4c0f4.jpg", pimaCrewneck: "/media/aw21-14-mens-pima-cotton-crewneck-100-pima-cotton-sama50-jpg_83366a7e.jpg", raquCrewneck: "/media/aw21-15-mens-raqu-crewneck-33-5-alpaca-50-merino-16-5-viscose-sama46-jpg_6a10728b.jpg", threeFiber: "/media/aw21-16-mensthree-fiber-crew-neck-25-alpaca-55-eco-wool-20-linen-sama47-jpg_a77ca757.jpg", pleatedSet: "/media/aw21-17-pleated-pants-and-pleated-short-sleeve-top-100-flame-pima-cotton-sama39-jpg_759ee8a1.jpg", pleatedVest: "/media/aw21-18-pleated-vest-100-pima-flame-cotton-sama16-jpg_dc27f6b0.jpg", ribDress: "/media/aw21-19-rib-knit-tie-dress-82-alpaca-4-merino-15-polyamide-sama29-jpg_6c7a11c6.jpg", rollNeck: "/media/aw21-20-roll-neck-sweater-sama-32-jpg_08509fd8.jpg", snood: "/media/aw21-21-snood-61-wool-29-alpaca-8-cotton-2-polyamide-sama26-jpg_1b9f0749.jpg",
} as const;

const aw21Folio = {
  colorTurtleneck: "/media/aw21-folio-01-3-color-turtleneck-61-alpaca-10-polyamide-21-cotton-8-wool-sam-17-jpg_2f8bbc38.jpg", circleRuana: "/media/aw21-folio-02-circle-ruana-79-alpaca-13-polymide-5-merino-3-cotton-5-jpg_4ad4adf3.jpg", crazySweater: "/media/aw21-folio-03-crazy-sweater-sama23-jpg_1e850be3.jpg", dropNeedleVest: "/media/aw21-folio-04-drop-needle-vest-100-pima-cotton-sama10-jpg_a4d93369.jpg", fishermanCardigan: "/media/aw21-folio-05-fisherman-cardigan-54-baby-suri-alpaca-23-wool-23-polyamide-sama36-jpg_3ed73096.jpg", fishermanSweater: "/media/aw21-folio-06-fisherman-sweater-100-highland-wool-sama4-jpg_86bcc6c7.jpg", jerseySet: "/media/aw21-folio-07-jersey-pants-and-boxy-short-sleeve-crop-top-100-pima-cotton-5-5-jpg_b00730a3.jpg", laceTank: "/media/aw21-folio-08-lace-tank-100-pima-cotton-sama-38-jpg_60acaeea.jpg", meandersSweater: "/media/aw21-folio-09-meanders-sweater-25-alpaca-52-cotton-11-merino-wool-1-donegal-sama59-jpg_92bb3916.jpg", babyAlpaca: "/media/aw21-folio-10-mens-baby-alpaca-crew-neck-100-baby-alpaca-sama48-jpg_df0bc91a.jpg", ecoBabyCotton: "/media/aw21-folio-11-mens-eco-baby-cotton-crew-neck-68-baby-alpaca-32-pima-cotton-sama44-jpg_93631e74.jpg", incaSpun: "/media/aw21-folio-12-mens-inca-spun-sweater-50-alpaca-50-highland-wool-5-2-jpg_ffe0c12f.jpg", pimaCashmere: "/media/aw21-folio-13-mens-lightweight-pima-cashmere-crew-neck-90-pima-cotton-10-cashmere-5-8-jpg_1e32a580.jpg", pimaCrewneck: "/media/aw21-folio-14-mens-pima-cotton-crewneck-100-pima-cotton-sama52-jpg_e05659f1.jpg", raquCrewneck: "/media/aw21-folio-15-mens-raqu-crewneck-33-5-alpaca-50-merino-16-5-viscose-sama45-jpg_4526feac.jpg", threeFiber: "/media/aw21-folio-16-mensthree-fiber-crew-neck-25-alpaca-55-eco-wool-20-linen-sama56-jpg_60b6aad0.jpg", pleatedSet: "/media/aw21-folio-17-pleated-pants-and-pleated-short-sleeve-top-100-flame-pima-cotton-sama17-jpg_3adb9518.jpg", pleatedVest: "/media/aw21-folio-18-pleated-vest-100-pima-flame-cotton-sama15-jpg_6e7c5518.jpg", ribDress: "/media/aw21-folio-19-rib-knit-tie-dress-82-alpaca-4-merino-15-polyamide-sama27-jpg_55f1a5f4.jpg", rollNeck: "/media/aw21-folio-20-roll-neck-sweater-sama3-jpg_c948a6f2.jpg", snood: "/media/aw21-folio-21-snood-61-wool-29-alpaca-8-cotton-2-polyamide-sama26-jpg_2ca7d7e8.jpg",
} as const;

const makeFrames = (season: string, entries: readonly [string, string][]): CollectionFrame[] => entries.map(([story, src]) => ({ src, alt: `${season} original photograph from the ${story} garment story` }));
const oneImageGroup = (season: string, title: string, src: string): PortfolioGroup => ({ season, title, images: [{ src, alt: `${season} original photograph from the ${title} garment story` }] });

export const folioFrames = {
  aw23: makeFrames("AW23", [["AW23 Lookbook", aw23.b1], ["AW23 Lookbook", aw23.e3], ["AW23 Lookbook", aw23.d1], ["AW23 Lookbook", aw23.b3], ["AW23 Lookbook", aw23.d2], ["AW23 Lookbook", aw23.d3a], ["AW23 Lookbook", aw23.d3], ["AW23 Lookbook", aw23.d5], ["AW23 Lookbook", aw23.e1], ["AW23 Lookbook", aw23.e2], ["AW23 Lookbook", aw23.e4a], ["AW23 Lookbook", aw23.e4], ["AW23 Lookbook", aw23.e6], ["AW23 Lookbook", aw23.e7a], ["AW23 Lookbook", aw23.e7], ["AW23 Lookbook", aw23.f2], ["AW23 Lookbook", aw23.f3], ["AW23 Lookbook", aw23.f5], ["AW23 Lookbook", aw23.g1]]),
  aw22: makeFrames("AW22", [["Sama Alpaca Knit Dress", aw22Folio.alpacaDress], ["Sama Blanket", aw22Folio.blanket], ["Sama Button Cardigan", aw22Folio.buttonCardigan], ["Sama Knit Pants and ID Scoop Tee", aw22Folio.pantsAndTee], ["Sama Knit Skirt", aw22Folio.skirt], ["Sama Knit Tank", aw22Folio.tank], ["Sama Little Knit Alpaca Pullover", aw22Folio.littlePullover], ["Sama Long Lace Rib Cardigan", aw22Folio.laceCardigan], ["Sama Natural Melange Turtleneck and Pants", aw22Folio.naturalMelange], ["Sama New Fisherman Cardigan", aw22Folio.fishermanCardigan], ["Sama New Fishermans Sweater", aw22Folio.fishermanSweater], ["Sama Poncho Vest", aw22Folio.ponchoVest], ["Sama Skirt and Cross Back Toop", aw22Folio.skirtAndTop], ["Sama Turtleneck Poncho", aw22Folio.turtleneckPoncho]]),
  aw21: makeFrames("AW21", [["3 Color Turtleneck", aw21Folio.colorTurtleneck], ["Circle Ruana", aw21Folio.circleRuana], ["Crazy Sweater", aw21Folio.crazySweater], ["Drop Needle Vest", aw21Folio.dropNeedleVest], ["Fisherman Cardigan", aw21Folio.fishermanCardigan], ["Fisherman Sweater", aw21Folio.fishermanSweater], ["Jersey Pants and Boxy Short Sleeve Crop Top", aw21Folio.jerseySet], ["Lace Tank", aw21Folio.laceTank], ["Meanders Sweater", aw21Folio.meandersSweater], ["Mens Baby Alpaca Crew Neck", aw21Folio.babyAlpaca], ["Mens Eco Baby Cotton Crew Neck", aw21Folio.ecoBabyCotton], ["Mens Inca Spun Sweater", aw21Folio.incaSpun], ["Mens Lightweight Pima Cashmere Crew Neck", aw21Folio.pimaCashmere], ["Mens Pima Cotton Crewneck", aw21Folio.pimaCrewneck], ["Mens Raqu Crewneck", aw21Folio.raquCrewneck], ["Mens Three Fiber Crew Neck", aw21Folio.threeFiber], ["Pleated Pants and Pleated Short Sleeve Top", aw21Folio.pleatedSet], ["Pleated Vest", aw21Folio.pleatedVest], ["Rib Knit Tie Dress", aw21Folio.ribDress], ["Roll Neck Sweater", aw21Folio.rollNeck], ["Snood", aw21Folio.snood]]),
} as const;

export const portfolioGroups: PortfolioGroup[] = [
  { season: "AW23", title: "AW23 Lookbook", images: [aw23.b2, aw23.f1, aw23.h1, aw23.e5, aw23.f4, aw23.g2, aw23.g3, aw23.g4, aw23.g6, aw23.g7, aw23.h2, aw23.h3, aw23.h5, aw23.j2].map((src) => ({ src, alt: "AW23 original lookbook photograph" })) },
  oneImageGroup("AW22", "Sama Alpaca Knit Dress", aw22Portfolio.alpacaDress), oneImageGroup("AW22", "Sama Blanket", aw22Portfolio.blanket), oneImageGroup("AW22", "Sama Button Cardigan", aw22Portfolio.buttonCardigan), oneImageGroup("AW22", "Sama Knit Pants and ID Scoop Tee", aw22Portfolio.pantsAndTee), oneImageGroup("AW22", "Sama Knit Skirt", aw22Portfolio.skirt), oneImageGroup("AW22", "Sama Knit Tank", aw22Portfolio.tank), oneImageGroup("AW22", "Sama Little Knit Alpaca Pullover", aw22Portfolio.littlePullover), oneImageGroup("AW22", "Sama Long Lace Rib Cardigan", aw22Portfolio.laceCardigan), oneImageGroup("AW22", "Sama Natural Melange Turtleneck and Pants", aw22Portfolio.naturalMelange), oneImageGroup("AW22", "Sama New Fisherman Cardigan", aw22Portfolio.fishermanCardigan), oneImageGroup("AW22", "Sama New Fishermans Sweater", aw22Portfolio.fishermanSweater), oneImageGroup("AW22", "Sama Poncho Vest", aw22Portfolio.ponchoVest), oneImageGroup("AW22", "Sama Skirt and Cross Back Toop", aw22Portfolio.skirtAndTop), oneImageGroup("AW22", "Sama Turtleneck Poncho", aw22Portfolio.turtleneckPoncho),
  oneImageGroup("AW21", "3 Color Turtleneck", aw21Portfolio.colorTurtleneck), oneImageGroup("AW21", "Circle Ruana", aw21Portfolio.circleRuana), oneImageGroup("AW21", "Crazy Sweater", aw21Portfolio.crazySweater), oneImageGroup("AW21", "Drop Needle Vest", aw21Portfolio.dropNeedleVest), oneImageGroup("AW21", "Fisherman Cardigan", aw21Portfolio.fishermanCardigan), oneImageGroup("AW21", "Fisherman Sweater", aw21Portfolio.fishermanSweater), oneImageGroup("AW21", "Jersey Pants and Boxy Short Sleeve Crop Top", aw21Portfolio.jerseySet), oneImageGroup("AW21", "Lace Tank", aw21Portfolio.laceTank), oneImageGroup("AW21", "Meanders Sweater", aw21Portfolio.meandersSweater), oneImageGroup("AW21", "Mens Baby Alpaca Crew Neck", aw21Portfolio.babyAlpaca), oneImageGroup("AW21", "Mens Eco Baby Cotton Crew Neck", aw21Portfolio.ecoBabyCotton), oneImageGroup("AW21", "Mens Inca Spun Sweater", aw21Portfolio.incaSpun), oneImageGroup("AW21", "Mens Lightweight Pima Cashmere Crew Neck", aw21Portfolio.pimaCashmere), oneImageGroup("AW21", "Mens Pima Cotton Crewneck", aw21Portfolio.pimaCrewneck), oneImageGroup("AW21", "Mens Raqu Crewneck", aw21Portfolio.raquCrewneck), oneImageGroup("AW21", "Mens Three Fiber Crew Neck", aw21Portfolio.threeFiber), oneImageGroup("AW21", "Pleated Pants and Pleated Short Sleeve Top", aw21Portfolio.pleatedSet), oneImageGroup("AW21", "Pleated Vest", aw21Portfolio.pleatedVest), oneImageGroup("AW21", "Rib Knit Tie Dress", aw21Portfolio.ribDress), oneImageGroup("AW21", "Roll Neck Sweater", aw21Portfolio.rollNeck), oneImageGroup("AW21", "Snood", aw21Portfolio.snood),
];

export const portfolioOpener = aw23.j1;

export type PortfolioPiece = { title: string; src: string; alt: string };

export const portfolioPieces: PortfolioPiece[] = [
  { title: "Alpaca Knit Dress", src: aw22Portfolio.alpacaDress, alt: "AW22 Alpaca Knit Dress" },
  { title: "Blanket", src: aw22Portfolio.blanket, alt: "AW22 Sama Blanket" },
  { title: "Button Cardigan", src: aw22Portfolio.buttonCardigan, alt: "AW22 Button Cardigan" },
  { title: "Knit Pants & Scoop Tee", src: aw22Portfolio.pantsAndTee, alt: "AW22 Knit Pants and Scoop Tee" },
  { title: "Knit Skirt", src: aw22Portfolio.skirt, alt: "AW22 Knit Skirt" },
  { title: "Knit Tank", src: aw22Portfolio.tank, alt: "AW22 Knit Tank" },
  { title: "Little Alpaca Pullover", src: aw22Portfolio.littlePullover, alt: "AW22 Little Alpaca Pullover" },
  { title: "Long Lace Rib Cardigan", src: aw22Portfolio.laceCardigan, alt: "AW22 Long Lace Rib Cardigan" },
  { title: "Natural Melange Set", src: aw22Portfolio.naturalMelange, alt: "AW22 Natural Melange Turtleneck and Pants" },
  { title: "New Fisherman Cardigan", src: aw22Portfolio.fishermanCardigan, alt: "AW22 New Fisherman Cardigan" },
  { title: "New Fisherman Sweater", src: aw22Portfolio.fishermanSweater, alt: "AW22 New Fisherman Sweater" },
  { title: "Poncho Vest", src: aw22Portfolio.ponchoVest, alt: "AW22 Poncho Vest" },
  { title: "Skirt & Cross-Back Top", src: aw22Portfolio.skirtAndTop, alt: "AW22 Skirt and Cross-Back Top" },
  { title: "Turtleneck Poncho", src: aw22Portfolio.turtleneckPoncho, alt: "AW22 Turtleneck Poncho" },
  { title: "3 Color Turtleneck", src: aw21Portfolio.colorTurtleneck, alt: "AW21 3 Color Turtleneck" },
  { title: "Circle Ruana", src: aw21Portfolio.circleRuana, alt: "AW21 Circle Ruana" },
  { title: "Crazy Sweater", src: aw21Portfolio.crazySweater, alt: "AW21 Crazy Sweater" },
  { title: "Drop Needle Vest", src: aw21Portfolio.dropNeedleVest, alt: "AW21 Drop Needle Vest" },
  { title: "Fisherman Cardigan", src: aw21Portfolio.fishermanCardigan, alt: "AW21 Fisherman Cardigan" },
  { title: "Fisherman Sweater", src: aw21Portfolio.fishermanSweater, alt: "AW21 Fisherman Sweater" },
  { title: "Jersey Pants & Boxy Crop Top", src: aw21Portfolio.jerseySet, alt: "AW21 Jersey Pants and Boxy Crop Top" },
  { title: "Lace Tank", src: aw21Portfolio.laceTank, alt: "AW21 Lace Tank" },
  { title: "Meanders Sweater", src: aw21Portfolio.meandersSweater, alt: "AW21 Meanders Sweater" },
  { title: "Men’s Baby Alpaca Crew", src: aw21Portfolio.babyAlpaca, alt: "AW21 Men’s Baby Alpaca Crew" },
  { title: "Eco Baby Cotton Crew", src: aw21Portfolio.ecoBabyCotton, alt: "AW21 Eco Baby Cotton Crew" },
  { title: "Inca Spun Sweater", src: aw21Portfolio.incaSpun, alt: "AW21 Inca Spun Sweater" },
  { title: "Pima Cashmere Crew", src: aw21Portfolio.pimaCashmere, alt: "AW21 Pima Cashmere Crew" },
  { title: "Pima Cotton Crew", src: aw21Portfolio.pimaCrewneck, alt: "AW21 Pima Cotton Crew" },
  { title: "Raqu Crewneck", src: aw21Portfolio.raquCrewneck, alt: "AW21 Raqu Crewneck" },
  { title: "Three Fiber Crew", src: aw21Portfolio.threeFiber, alt: "AW21 Three Fiber Crew" },
  { title: "Pleated Pants & Short-Sleeve Top", src: aw21Portfolio.pleatedSet, alt: "AW21 Pleated Pants and Short-Sleeve Top" },
  { title: "Pleated Vest", src: aw21Portfolio.pleatedVest, alt: "AW21 Pleated Vest" },
  { title: "Rib Knit Tie Dress", src: aw21Portfolio.ribDress, alt: "AW21 Rib Knit Tie Dress" },
  { title: "Roll Neck Sweater", src: aw21Portfolio.rollNeck, alt: "AW21 Roll Neck Sweater" },
  { title: "Snood", src: aw21Portfolio.snood, alt: "AW21 Snood" },
];

export type PortfolioPair = { orientation: "portrait" | "landscape"; pieces: [PortfolioPiece, PortfolioPiece] };
const portfolioPiece = (title: string, src: string, alt: string): PortfolioPiece => ({ title, src, alt });

export const portfolioPairs: PortfolioPair[] = [
  { orientation: "landscape", pieces: [portfolioPiece("Button Cardigan", aw22Folio.buttonCardigan, "AW22 Button Cardigan"), portfolioPiece("Knit Tank", aw22Portfolio.tank, "AW22 Knit Tank")] },
  { orientation: "landscape", pieces: [portfolioPiece("New Fisherman Sweater", aw22Portfolio.fishermanSweater, "AW22 New Fisherman Sweater"), portfolioPiece("Poncho Vest", aw22Portfolio.ponchoVest, "AW22 Poncho Vest")] },
  { orientation: "landscape", pieces: [portfolioPiece("Fisherman Cardigan", aw21Portfolio.fishermanCardigan, "AW21 Fisherman Cardigan"), portfolioPiece("Fisherman Sweater", aw21Portfolio.fishermanSweater, "AW21 Fisherman Sweater")] },
  { orientation: "landscape", pieces: [portfolioPiece("Meanders Sweater", aw21Portfolio.meandersSweater, "AW21 Meanders Sweater"), portfolioPiece("Men’s Baby Alpaca Crew", aw21Portfolio.babyAlpaca, "AW21 Men’s Baby Alpaca Crew")] },
  { orientation: "landscape", pieces: [portfolioPiece("Pima Cashmere Crew", aw21Portfolio.pimaCashmere, "AW21 Pima Cashmere Crew"), portfolioPiece("Pima Cotton Crew", aw21Portfolio.pimaCrewneck, "AW21 Pima Cotton Crew")] },
  { orientation: "landscape", pieces: [portfolioPiece("Pleated Vest", aw21Portfolio.pleatedVest, "AW21 Pleated Vest"), portfolioPiece("Roll Neck Sweater", aw21Portfolio.rollNeck, "AW21 Roll Neck Sweater")] },
  { orientation: "landscape", pieces: [portfolioPiece("Snood", aw21Portfolio.snood, "AW21 Snood"), portfolioPiece("AW23 Lookbook", aw23.b2, "AW23 original lookbook photograph")] },
  { orientation: "portrait", pieces: [portfolioPiece("Alpaca Knit Dress", aw22Portfolio.alpacaDress, "AW22 Alpaca Knit Dress"), portfolioPiece("Blanket", aw22Portfolio.blanket, "AW22 Sama Blanket")] },
  { orientation: "portrait", pieces: [portfolioPiece("Knit Pants & Scoop Tee", aw22Portfolio.pantsAndTee, "AW22 Knit Pants and Scoop Tee"), portfolioPiece("Knit Skirt", aw22Portfolio.skirt, "AW22 Knit Skirt")] },
  { orientation: "portrait", pieces: [portfolioPiece("Little Alpaca Pullover", aw22Portfolio.littlePullover, "AW22 Little Alpaca Pullover"), portfolioPiece("Long Lace Rib Cardigan", aw22Folio.laceCardigan, "AW22 Long Lace Rib Cardigan")] },
  { orientation: "portrait", pieces: [portfolioPiece("Natural Melange Set", aw22Portfolio.naturalMelange, "AW22 Natural Melange Turtleneck and Pants"), portfolioPiece("New Fisherman Cardigan", aw22Portfolio.fishermanCardigan, "AW22 New Fisherman Cardigan")] },
  { orientation: "portrait", pieces: [portfolioPiece("Skirt & Cross-Back Top", aw22Portfolio.skirtAndTop, "AW22 Skirt and Cross-Back Top"), portfolioPiece("Turtleneck Poncho", aw22Portfolio.turtleneckPoncho, "AW22 Turtleneck Poncho")] },
  { orientation: "portrait", pieces: [portfolioPiece("3 Color Turtleneck", aw21Portfolio.colorTurtleneck, "AW21 3 Color Turtleneck"), portfolioPiece("Circle Ruana", aw21Portfolio.circleRuana, "AW21 Circle Ruana")] },
  { orientation: "portrait", pieces: [portfolioPiece("Crazy Sweater", aw21Portfolio.crazySweater, "AW21 Crazy Sweater"), portfolioPiece("Drop Needle Vest", aw21Portfolio.dropNeedleVest, "AW21 Drop Needle Vest")] },
  { orientation: "portrait", pieces: [portfolioPiece("Jersey Pants & Boxy Crop Top", aw21Portfolio.jerseySet, "AW21 Jersey Pants and Boxy Crop Top"), portfolioPiece("Lace Tank", aw21Portfolio.laceTank, "AW21 Lace Tank")] },
  { orientation: "portrait", pieces: [portfolioPiece("Eco Baby Cotton Crew", aw21Portfolio.ecoBabyCotton, "AW21 Eco Baby Cotton Crew"), portfolioPiece("Inca Spun Sweater", aw21Portfolio.incaSpun, "AW21 Inca Spun Sweater")] },
  { orientation: "portrait", pieces: [portfolioPiece("Raqu Crewneck", aw21Portfolio.raquCrewneck, "AW21 Raqu Crewneck"), portfolioPiece("Three Fiber Crew", aw21Portfolio.threeFiber, "AW21 Three Fiber Crew")] },
  { orientation: "portrait", pieces: [portfolioPiece("Pleated Pants & Short-Sleeve Top", aw21Portfolio.pleatedSet, "AW21 Pleated Pants and Short-Sleeve Top"), portfolioPiece("Rib Knit Tie Dress", aw21Portfolio.ribDress, "AW21 Rib Knit Tie Dress")] },
];

export type PortfolioTriple = { orientation: "portrait" | "landscape"; pieces: [PortfolioPiece, PortfolioPiece, PortfolioPiece] };
const portfolioTriple = (orientation: PortfolioTriple["orientation"], pieces: [PortfolioPiece, PortfolioPiece, PortfolioPiece]): PortfolioTriple => ({ orientation, pieces });
const officialPortfolioPiece = (number: string, src: string): PortfolioPiece => ({ title: `Portfolio ${number}`, src, alt: `Official Sama Knitwear portfolio photograph ${number}` });

// Official 42-image Portfolio sequence supplied by Sama. Each numbered triplet is preserved as provided.
export const portfolioTriples: PortfolioTriple[] = [
  portfolioTriple("portrait", [officialPortfolioPiece("01", "/media/sama-portfolio-01-color-corrected_a6dd9565.webp"), officialPortfolioPiece("02", "/media/sama-portfolio-02_2dbbd388.jpg"), officialPortfolioPiece("03", "/media/sama-portfolio-03_9c4d9077.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("04", "/media/sama-portfolio-04_64f52409.jpg"), officialPortfolioPiece("05", "/media/sama-portfolio-05_8c83445c.jpg"), officialPortfolioPiece("06", "/media/sama-portfolio-06_235a25b7.jpg")]),
  portfolioTriple("landscape", [officialPortfolioPiece("07", "/media/sama-portfolio-07-color-corrected_a2dbaa40.webp"), officialPortfolioPiece("08", "/media/sama-portfolio-08-color-corrected_d11e68e2.webp"), officialPortfolioPiece("09", "/media/sama-portfolio-09-color-corrected_bd291e78.webp")]),
  portfolioTriple("landscape", [officialPortfolioPiece("10", "/media/sama-portfolio-10-color-corrected_3fde04b0.webp"), officialPortfolioPiece("11", "/media/sama-portfolio-11-color-corrected_4d4168ea.webp"), officialPortfolioPiece("12", "/media/sama-portfolio-12-color-corrected_fa4bdfcf.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("13", "/media/sama-portfolio-13-color-corrected_fa26cf06.webp"), officialPortfolioPiece("14", "/media/sama-portfolio-14-color-corrected_d405c83d.webp"), officialPortfolioPiece("15", "/media/sama-portfolio-15-color-corrected_f00b6519.webp")]),
  portfolioTriple("landscape", [officialPortfolioPiece("16", "/media/sama-portfolio-16_5701bac0.jpg"), officialPortfolioPiece("17", "/media/sama-portfolio-17_342c5647.jpg"), officialPortfolioPiece("18", "/media/sama-portfolio-18-color-corrected_d01572e5.webp")]),
  portfolioTriple("portrait", [officialPortfolioPiece("19", "/media/sama-portfolio-19-color-corrected_168ffddd.webp"), officialPortfolioPiece("20", "/media/sama-portfolio-20-color-corrected_dadaa417.webp"), officialPortfolioPiece("21", "/media/sama-portfolio-21_54919b62.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("22", "/media/sama-portfolio-22_1424c936.jpg"), officialPortfolioPiece("23", "/media/sama-portfolio-23_47fde963.jpg"), officialPortfolioPiece("24", "/media/sama-portfolio-24_159cf047.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("25", "/media/sama-portfolio-25_894a9ba8.jpg"), officialPortfolioPiece("26", "/media/sama-portfolio-26_f80a2a48.jpg"), officialPortfolioPiece("27", "/media/sama-portfolio-27_bc03d5a7.jpg")]),
  portfolioTriple("landscape", [officialPortfolioPiece("28", "/media/sama-portfolio-28_1392bc96.jpg"), officialPortfolioPiece("29", "/media/sama-portfolio-29_3a3d2415.jpg"), officialPortfolioPiece("30", "/media/sama-portfolio-30_1d5fab05.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("31", "/media/sama-portfolio-31_3c7b8105.jpg"), officialPortfolioPiece("32", "/media/sama-portfolio-32_037af758.jpg"), officialPortfolioPiece("33", "/media/sama-portfolio-33_693de08f.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("34", "/media/sama-portfolio-34_9720d0e4.jpg"), officialPortfolioPiece("35", "/media/sama-portfolio-35_3c251838.jpg"), officialPortfolioPiece("36", "/media/sama-portfolio-36_9d523b8c.jpg")]),
  portfolioTriple("landscape", [officialPortfolioPiece("37", "/media/sama-portfolio-37_c3c050f9.jpg"), officialPortfolioPiece("38", "/media/sama-portfolio-38_9a12ca59.jpg"), officialPortfolioPiece("39", "/media/sama-portfolio-39_5b80aa45.jpg")]),
  portfolioTriple("portrait", [officialPortfolioPiece("40", "/media/sama-portfolio-40_1156cdff.jpg"), officialPortfolioPiece("41", "/media/sama-portfolio-41_cee18b10.jpg"), officialPortfolioPiece("42", "/media/sama-portfolio-42_977803cb.jpg")]),
];
