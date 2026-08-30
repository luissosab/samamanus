# Sama Portfolio Rebuild — Art Direction

## Three possible framing directions

| Theme name | Very brief intro | Probability |
| --- | --- | ---: |
| **The Knit Archive** | A quiet, museum-like seasonal record where projects appear as full-bleed plates, captions, and material notes. | 0.07 |
| **Peruvian Fieldbook** | A location-and-process-led journal that places fibers, garments, landscape, and makers in a tactile documentary sequence. | 0.05 |
| **Studio Folios** | A graphic designer’s folio system: large campaign images, publication-scale project entries, and restrained technical annotations. | 0.08 |

## Chosen direction: Studio Folios

### Design movement

**Independent fashion publishing meets Swiss editorial typography.** The site behaves like a portfolio book, not a shop: visitors browse defined bodies of work and open individual folios to understand the collection, its material construction, and image sequence.

### Core principles

1. **Images establish the narrative.** Every project begins with the visual work; text reads as a caption, a margin note, or a closing statement.
2. **Collections are projects, not inventory.** AW21, AW22, and AW23 are presented as designed seasonal volumes with their own pace and image language.
3. **The layout turns pages rather than stacks sections.** Asymmetrical full-bleed plates, split spreads, running headers, and folio numbers replace boxed landing-page components.
4. **Material facts give the work substance.** The recovered fiber blends and construction names appear as concise archival metadata beside photography.

### Color philosophy

The dominant field is paper—warm ivory and soft mineral grey—so the photography carries visual density. Ink black establishes strong editorial hierarchy, while deep oxblood creates occasional depth. The supplied Sama orange exists only as a registration mark, edge rule, or small folio detail; it is never a large background field.

### Layout paradigm

The site is an **open art book**. Each project is a two-page spread: one side is image-forward, the other is a title, season, material notation, and short context. The homepage is a contents page made of full-width portfolio plates rather than a traditional hero followed by cards. The project pages are intentionally vertical image sequences with interspersed notes.

### Signature elements

1. **Folio system:** `SAMA / FOLIO 01`, seasonal markers, and small persistent page numerals.
2. **Registration rules:** fine orange registration marks and corner crops that echo a print proof, not a generic underline.
3. **Material captions:** monospace fiber percentages, garment title, season, and frame number alongside relevant imagery.

### Interaction philosophy

Navigation behaves like opening a book: project names underline on hover, images lift by a few pixels, and “next folio” actions are direct, unambiguous exits. Information is visible when needed, not hidden behind decorative panels. Long legal or service information stays on its own clearly labelled pages.

### Animation

The movement is minimal and print-like: a 180ms upward image shift on hover, subtle opacity cross-fades when changing folios, and 30–60ms stagger for small metadata. There are no large reveal effects, parallax theatrics, or automatic carousels. All non-essential motion respects `prefers-reduced-motion`.

### Typography system

**Bodoni Moda** provides the sharp, high-contrast display face for seasonal titles and decisive chapter statements. **IBM Plex Mono** carries folio numbers, dates, fiber blends, captions, and navigation labels. The contrast makes each page feel designed as a publication rather than a retail template.

### Brand essence

**Sama Knitwear is a Peruvian knitwear studio presenting seasonal material work with the clarity of an independent fashion folio.**

Personality: **considered, tactile, assured**.

### Brand voice

Headlines are spare, factual, and image-responsive. Captions name what is actually shown; calls to action invite a reader to open the next folio rather than buy a product.

> “AW23 / A study in rib, quiet volume, and worn timber.”

> “Open the seasonal folio.”

### Wordmark and logo

The **supplied full Sama Knitwear logo is used intact** as the sole brand lockup. No type is layered over, substituted for, or cropped from it. A small orange medallion crop may appear as a print-style registration mark only when the full lockup is already visible nearby.

### Signature brand color

**Sama Registration Orange — `#E86835`**. It functions as a rare proof mark: a small technical cue that makes the portfolio recognizably Sama.

## OneDrive image-library plan

| Portfolio role | Primary source | Why it fits |
| --- | --- | --- |
| Opening plate | AW23 `a2.jpg` | Horizontal timber composition creates a strong editorial first spread. |
| AW23 folio | AW23 `a1.jpg` + future AW23 frames | Strong portrait and knit texture; 38-image sequence supports a primary project. |
| AW22 folio | AW22 high-depth garment stories | Multiple groups with 13–29 frames can become curated seasonal subfolios. |
| AW21 folio | AW21 fiber-labelled product stories | Material percentages enable a technical-archive presentation. |
| House and process | Existing recovered Sama archive plus later OneDrive selections | Provides a bridge between seasonal imagery and the recovered craft/founder copy. |

## Proposed information architecture

| Route | Purpose |
| --- | --- |
| `/` | Portfolio contents / seasonal folio index |
| `/folio/aw23` | AW23 visual project with an image sequence and recovered collection context |
| `/folio/aw22` | AW22 seasonal project with selected garment stories and material notes |
| `/folio/aw21` | AW21 material archive with fiber-led details |
| `/house` | Mission and founder narrative with craft/process context |
| `/trade` | Wholesale and private-label capability statement |
| `/shipping-returns` | Full recovered service policy |
| `/terms` | Full recovered terms body |
| `/first-draft` | Preserved original concept for internal comparison only |

## Style Decisions

- The supplied full Sama Knitwear logo is the clear header and footer anchor; it is never replaced, cropped into a separate mark, or overprinted with additional text.
- Registration Orange is carried through the site as a visible, fine registration rule at important image boundaries, active cues, and folio annotations—not as a full-background color.
- The portfolio uses the seasonal titles together with clear public labels such as **Portfolio**, **Seasonal Folios**, and **Work with Sama**, ensuring the publishing metaphor does not make navigation cryptic.
- Each new image selection must contribute a distinct visual role—opening plate, collection image, material study, maker/place signal, or detail—rather than repeat the same product frame across unrelated pages.
