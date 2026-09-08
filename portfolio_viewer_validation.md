# Portfolio Viewer Validation

- Opening Portfolio image 01 displays its image in the viewer with visible previous, next, and close controls.
- The on-screen next control advanced image 01 to image 02.
- The desktop right-arrow key advanced image 02 to image 03.
- Escape closed the viewer and restored the underlying Portfolio grid.
- The desktop left-arrow key from image 01 wrapped correctly to image 54, confirming continuous navigation across the full catalog boundary.
- Viewer images use a `90dvh` maximum height with width constrained to the viewport, so portrait and landscape assets remain adaptive without cropping.
- The revised desktop viewer places previous and next controls in dedicated space beyond the left and right image edges; controls no longer overlap the photograph.
- On screens at or below 860px, visible viewer arrows are suppressed and horizontal touch swipes above a 48px threshold advance or reverse the full catalog without intercepting vertical gesture movement.
- In the revised viewer, the previous control moved image 01 to image 54, and the right-arrow keyboard command returned it to image 01, reconfirming wraparound navigation after the control-layout change.
- Escape closed the revised viewer and restored the Portfolio grid, confirming that its existing dismissal behavior remains intact.
