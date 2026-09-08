# Portfolio Hover Treatment — Research Notes

## Reviewed sources

- [Framer, “12 hover effects that transform user experience”](https://www.framer.com/blog/hover-effects/), published May 14, 2025.
- [Awwwards, “Images on Hover” by Cenitz Studio](https://www.awwwards.com/inspiration/images-on-hover).

## Applicable conclusions

Framer’s guidance emphasizes treating hover as purposeful interaction feedback, with strong visual contrast, light-weight movement, consistent shadow direction, and fast transitions. It warns against overusing decorative effects and recommends maintaining accessible, non-hover alternatives for touch devices. Its portfolio example uses image scaling to signal that an image is interactive, while its border-animation example recommends subtle edge changes paired with restrained depth.

For Sama Knitwear, the selected direction is a universal desktop-only **hover focus frame**: an inset, high-contrast limestone keyline placed inside the image edge, paired with a light 3D lift and temporary deep-ink surround. It makes every preview read as clickable while avoiding persistent mats, card boxes, labels, or ornamental color marks. The effect uses transform and opacity-friendly properties, carries no essential content, and is absent on coarse-pointer/mobile devices.
