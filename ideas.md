# Sama Knitwear — Consolidated Website Redesign

## Three possible directions

| Theme Name | Very Brief Intro | Probability |
| --- | --- | ---: |
| **The Fiber Library** | A warm, scholarly archive where collection images and fiber facts carry the story, with calm reading rooms for substantive brand and policy copy. | 0.06 |
| **Pacific Workshop** | A contemporary atelier defined by generous white space, candid location photography, and a pragmatic workroom tone. | 0.04 |
| **Lima Material House** | A modern Latin American design house that pairs sun-faded mineral color, strong image sequences, and precise, highly legible editorial layouts. | 0.09 |

## Chosen direction: Lima Material House

### Design Movement

**Contemporary Latin American editorial design with a modernist catalogue sensibility.** The site is a useful design-house website, not a fashion zine and not a shop: it presents the work with the scale of a lookbook, then gives every visitor an unmistakable route to the studio, collaboration capabilities, and complete service/legal information.

### Core Principles

1. **Original photography carries authority.** Every prominent image is a high-resolution, original OneDrive collection image—never a screenshot of an image, a generic stock visual, or a decorative stand-in.
2. **One path at a time.** Visitors always know whether they are viewing Collections, Portfolio, the Studio, Collaboration, or Information. The navigation uses plain-language labels; seasonal details remain inside Collection and Portfolio pages rather than competing in the global header.
3. **Editorial without fragility.** High-impact image scale is balanced by highly legible type sizes, sufficient contrast, generous line height, and conventional readable body columns.
4. **Nothing important disappears.** Brand narrative, trade detail, shipping, returns, and terms stay complete; the visual system organizes their reading instead of concealing or reducing them.

### Color Philosophy

The ground is a warm limestone white that keeps the full color and textile texture of the photography intact. Ink is an almost-black brown rather than pure black, making long copy calmer while retaining clear contrast. A sun-washed cobalt is drawn from the AW23 blue-cabinet lookbook image and used only for wayfinding and small structural accents; an earthy Peruvian red appears as a restrained section marker. Neither becomes a gradient or a decorative wash. Photography provides the saturation.

### Layout Paradigm

The site is a **sequence of rooms**, not a centered page of cards. A visitor moves from an image vestibule into a collection gallery, a studio reading room, a collaboration worktable, and an information library. On desktop, major pages use offset image-and-text spreads with an anchored side label. On mobile, the same order becomes a clear vertical walk, preserving full image crops and readable copy rather than compressing into tiny panels.

### Signature Elements

1. **Material tabs:** small fiber and season labels in a cobalt rule that identify a collection photograph without turning it into a product card.
2. **Room headers:** a full-width title band with a location-style breadcrumb and an oversized, readable serif title.
3. **Image rails:** deliberately varied portrait, landscape, and close-detail images that create a sequence for each season rather than repeating one visual at different scales.

### Interaction Philosophy

Navigation is explicit. The header offers `Collections`, `Portfolio`, `Studio`, `Collaborate`, and `Information`; active sections are visibly underlined and the mobile menu presents the same full hierarchy. Collection pages offer direct next/previous season paths. The Portfolio is a browsable original-photo library organized by the supplied OneDrive folder names. Large photographs are links only when an obvious caption tells visitors where they go. Text links look like text links and policy pages never hide their reading content behind unnecessary controls.

### Animation

Motion is quiet and functional. Image rails fade in and shift up by no more than four pixels as they enter view; menu state changes are immediate enough to feel responsive; links darken and underline in 160ms. There are no parallax effects, automatic carousels, scroll-jacking, or slow reveal theatrics. All non-essential transitions are disabled for reduced-motion preferences.

### Typography System

**Source Serif 4** is used for page titles, pull quotes, and all long-form body copy because its open forms are readable at editorial scale. **Manrope** is used for navigation, captions, material notes, and buttons because its broad letterforms remain clear on small screens. Headings do not use compressed all-caps; metadata may use small caps with generous tracking. Body copy is at least 18px desktop / 16px mobile with 1.65–1.75 line height, and every policy page uses a measure suitable for extended reading.

### Brand Essence

**Sama Knitwear is a Peruvian knitwear studio for people who value material integrity, lasting design, and a clear partnership from concept to finished piece.**

Personality: **grounded, exacting, warm**.

### Brand Voice

Headlines are concrete and human. CTAs name the next destination plainly; microcopy describes the material, season, or practical action without fashion-industry abstraction.

> “Knitwear with a point of view—and the craft to carry it through.”

> “See the collection, then meet the studio behind it.”

### Wordmark & Logo

The supplied full Sama Knitwear logo is retained as the only logotype. It appears unaltered in the header and footer with enough surrounding space to read clearly. A compact woven-square motif made from three offset lines may function as a secondary navigation marker, but never replaces or crops the supplied logo.

### Signature Brand Color

**Sama Cobalt — `#12728A`**. A precise, saturated blue used for active navigation, material tabs, and fine rules, inspired by the blue cabinetry in the original AW23 lookbook imagery.

## Unified public information architecture

| Visitor destination | Route | Purpose |
| --- | --- | --- |
| Collections | `/` | An image-led collection overview introducing AW23, AW22, and AW21 through original high-resolution photography. |
| Portfolio | `/portfolio` | A browsable set of native-ratio photography grids, grouped under the actual OneDrive collection-folder names. |
| AW23 Lookbook | `/folio/aw23` | A primary editorial collection sequence using AW23 original images and season context. |
| AW22 Collection | `/folio/aw22` | A multi-story collection page using Alpaca Knit Dress, Fisherman Sweater, and Turtleneck Poncho originals. |
| AW21 Material Archive | `/folio/aw21` | A material record using original Inca Spun imagery and verified fiber information. |
| Studio | `/house` | The complete mission, women-owned, founder, and craft narrative. |
| Collaborate | `/trade` | The complete wholesale and private-label capability narrative with direct inquiry paths. |
| Information | `/shipping-returns` and `/terms` | Full, clear service and legal information, retained without reduction. |

## Asset commitment

The public redesign will retire screenshot-derived archive visuals. The primary image system will use the original high-resolution OneDrive images retrieved for AW21, AW22, and AW23, then expand the image rails with further source selections where a page needs more distinct visual material.

## Style Decisions

- Sama Cobalt `#12728A` is reserved for active navigation, fine rules, material tabs, small numerals, and link emphasis; it is not used as a large background field.
- The header uses a deep ink field so the supplied full Sama Knitwear logo—orange mark and wordmark—remains fully readable and intentionally present.
- Collections, Studio, Collaborate, and Information have their own dominant visual identities. The blue-cabinet AW23 lookbook image anchors the Collections home, while Studio leads with relationship/craft imagery and Collaborate leads with a distinct product silhouette.
- Portfolio is a primary navigation destination, not an alternate website. It groups original image grids by literal OneDrive collection-folder name; grid cards retain native portrait or landscape ratios so heads, hands, and footwear are never lost to forced crops.
- Studio opens with a relationship-led reading room, then moves immediately into the supplied founder portrait within the Founder and CEO narrative so it cannot be mistaken for another collection page.
- The small earthy-red square is a recurring catalogue marker; it supports section labels, image-folder indexing, and information-library dividers without becoming a decorative surface color.
- Portfolio begins with a dedicated AW23 original before the literal folder-name grids, establishing the image library as evidence rather than a text-only archive.
- Seasonal folios carry a substantial native-ratio image rail before their continuation, arranged across garment stories rather than repeating near-identical angles of one garment.
- Individual gallery images remain intentionally unlabeled. Collection titles and original garment-story folder names provide the only public framing; filenames, source metadata, and frame numbers never appear.
- Portfolio treats image discovery as primary: native-ratio photography leads, while collection and folder names provide secondary structural framing.
