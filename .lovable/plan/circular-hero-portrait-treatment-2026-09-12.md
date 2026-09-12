# Circular hero portrait treatment

## What will change
- Replace the current rectangular portrait card with a prominent, perfectly circular 1:1 portrait.
- Keep the existing photo and all hero copy, links, achievements, and calls to action unchanged.
- Add layered orbital rings, tiny light particles, and a soft depth glow centered behind the portrait.
- Make the portrait scale slightly and the rings respond on hover, while keeping movement restrained.
- Tune portrait sizing and spacing for desktop, tablet, and mobile so it remains a clear focal point.

## Technical details
- Implement the treatment in the existing hero component and global design utilities only.
- Use CSS borders, pseudo-elements, and keyframe animation rather than additional image assets or dependencies.
- Pause motion under `prefers-reduced-motion` and avoid effects that interfere with pointer or keyboard use.
- Verify the finished hero visually at desktop and mobile sizes and confirm the preview has no errors.
