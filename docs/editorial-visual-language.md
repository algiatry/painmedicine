# Editorial visual language

- **Color** — Use warm paper and deep ink for reading. Teal marks links, navigation, and confirmed review. Use amber for existing caution and editorial-review states. Pair color with explicit text. Use the semantic tokens in `src/app/globals.css` so light, dark, and low-glare modes share the same components.
- **Type** — Use Newsreader for headings and Source Sans 3 for reading and controls. Keep monospaced type for compact data. Use `.editorial-title` for page titles and `.editorial-reading` for long-form copy, with a maximum measure of 65ch and a 1.7 line height.
- **Spacing** — Use the shared editorial gutter and section spacing. Group trust information beneath the title, and separate guide entries and citations with fine rules. Use restrained corner radii and reserve elevation for surfaces that benefit from separation.
- **Interaction** — Keep links identifiable, focus visible, and motion optional. Prefer the existing native disclosure and dialog controls. Keep citations and review language visible in the reading flow.
- **Performance** — Keep essential content in static HTML. Self-host font files through Next and preload the fonts used in the initial reading experience. Use one responsive figure when its content is shared across breakpoints.
