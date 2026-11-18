# Motion and interface guide — Revision 2

## What the previous revision actually added

The earlier update used scroll reveals, staggered card entrances, chart line/bar entrances, hover lifts, orbiting hero chips, a reading-progress line and small moving connectors in an architecture diagram. The connector arrows were a simple diagram treatment. They were not an advanced dashboard or a substantial motion system, and the previous description overstated their significance.

## What changed after reviewing the videos

All three supplied videos were visually reviewed at eight timestamps each. The design cues were:

- `19.44.25`: warm smoked-glass surfaces, a complete finance workspace, account cards and a contextual side area.
- `19.44.29`: graphite surfaces, layered navigation, a denser application frame and changes between operating views.
- `19.44.34`: a lighter service workspace with clear cards, a supporting context area and a mix of light and dark material treatment.

The new collection adapts those ideas to BigBoss instead of copying the videos or the code shown inside them. The clips and their audio are not included in the website package.

## New hero motion

- `HeroScene.tsx` draws projected 3D wire geometry on canvas. The scene rotates over time; visible points move through the geometry. Home, Impact, Partnerships and Digital use the spherical network; About, Products and Contact use orbital geometry; Services and Careers use a flowing spatial field.
- Pointer movement changes the depth and position of the scene and the floating glass cards.
- Floating panels use transparent layers, blur, a bright upper border, internal highlights and a moving specular reflection. This is a CSS glass treatment, not a claim of physically accurate refraction.
- Headings resolve from blur and vertical movement. Atmospheric layers and orbital planes move at separate rates to create depth.
- The original corporate text and identity remain. The added artwork sits beside the text, with mobile adjustments to prevent overlap.
- Canvas rendering is capped at approximately 30 frames per second and a device-pixel ratio of 1.5. It pauses outside the viewport and in a hidden tab. Reduced-motion preferences render a static scene and disable the CSS motion.

## New dashboard motion and interaction

- Seven industry workspaces replace the earlier small chart compositions. They have application navigation, a period selector, scope controls, search, contextual inspection, notifications, compact mode, full-size viewing and CSV snapshot export.
- The AI view adds a selectable accelerator grid and a moving fabric highlight. The logistics view adds a local geographic map with moving route traces and hub selection. The factory view includes moving conveyors and selectable stations. Other templates use material-flow composition, treasury cards, customer segments or patient-flow layouts.
- Chart paths animate on entry and show values under pointer inspection. Report periods and scope change the displayed preview values. The CSV export uses those same values.
- Navigation, template selectors and architecture selectors use glass material treatments, with selected and keyboard-focus states.
- The two V2 command-centre images are retained as Templates 08 and 09. These are image previews, with a working full-size viewer and zoom controls. Their embedded controls are part of the original artwork.

## Template collection

| Template | Industry | Main composition |
| --- | --- | --- |
| 01 | AI Infrastructure | Accelerator topology, workload queue, inference performance and resource balance |
| 02 | Global Logistics | Geographic network, hubs, fleet distribution and route performance |
| 03 | Finance & Treasury | Liquidity, account balances, treasury card, payment ledger and coverage |
| 04 | Manufacturing | Production floor, equipment condition, quality and interventions |
| 05 | Circular Economy | Material flows, recovery network, programme goals and environmental performance |
| 06 | Retail & Customer | Revenue, customer segments, product opportunities and acquisition |
| 07 | Healthcare | Patient journey, capacity, clinical services and coordination |
| 08 | V2 Executive | Original globe-led executive command-centre artwork |
| 09 | V2 Operations | Original global operations artwork |

The public page uses short labels such as `Template 01` and `Interactive preview`. All example values remain fictional design data. The website does not claim these are live client deployments, a GPU backend, or NVIDIA-affiliated systems.
