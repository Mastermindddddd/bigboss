# Revision 2 verification — 16 November 2026

The final local production build passed. The website has not been deployed, uploaded to GitHub or linked to a hosting project.

Environment: Windows, Node.js 24.14.0, npm 11.9.0, Next.js 16.2.7 and React 19.2.4. Existing dependencies and framework versions were retained.

| Check | Result and evidence |
| --- | --- |
| Production build | Final `next build --webpack` exited 0. TypeScript passed and all 14 generated pages completed. |
| Pricing | All 51 acceptance checks passed against V2: eight service prices, four monthly/annual support plans and 24 scope estimates remain exactly 50% of the original amounts. |
| Route smoke checks | Home, About, Services, Products, Impact, Partnerships, Careers, Contact, Privacy and Digital Solutions returned HTTP 200. |
| Template assets | The two restored V2 dashboard images, digital globe and strategy artwork returned HTTP 200. |
| Corporate content | Seven original corporate marketing page files match the original content after removing only the new hero imports, class hooks and artwork elements. Privacy, the original stylesheet, logo and favicon match the original files exactly. Home retains its existing sections, with the agreed tagline and Digital Solutions link. |
| Template collection | Seven industry tabs render their respective application layouts. Home/End keyboard navigation changed the selected template correctly. |
| Workspace controls | Period and scope selection changed the displayed metrics. Search produced a matching record for `Visual` and a clear empty state for an unmatched query. Sidebar and view navigation changed the operating view. |
| Item inspection | GPU-04 opened a detail panel showing 91% utilisation and a workload-rebalancing action. Selecting DXB opened the Dubai hub context. |
| Full-size workspaces | `Open workspace` opened the selected template in a native dialog. The close control returned to the page. |
| CSV export | Browser downloads succeeded. The filtered AI export contained scope `Johannesburg`, period `90D` and `Inference / sec` value `2,815`, matching the UI. |
| V2 previews | Both original V2 templates opened in the full-size viewer. Zoom changed the image viewer to its enlarged state. |
| Mobile layouts | All seven workspaces were checked at a 390 × 844 browser viewport. Each had a document scroll width equal to the mobile content width (386 CSS pixels after the scrollbar); there was no horizontal page overflow. A full-size Healthcare preview was also reviewed on mobile. |
| Glass navigation | Corporate page tabs, section navigation, template selectors and architecture selectors were visually reviewed with their selected states. |
| Hero spacing | The corrected About hero had heading right edge 710.71 px and glass-card left edge 862.33 px in the measured desktop layout, with no overlap. Desktop and mobile hero styling were reviewed. |
| Pointer depth | Pointer interaction updated the visible hero's CSS depth offsets; observed x-offset was 4.48 px and y-offset −1.09 px. |
| Hero movement | Two captured frames of the same hero region differed by a mean RGB pixel value of 2.625, confirming that the scene changed over time. |
| Browser console | No errors or warnings were returned during the final production review. A development hydration warning caused by sub-pixel trigonometric differences was fixed by rounding chart coordinates before rendering. |
| Requested wording | The removed disclaimer sentence was absent from the rendered production page. Public examples use short numbered template and preview labels. |
| Enquiry API | Missing fields returned 400. Without a supplied webhook, a valid local test returned 503 rather than a false success. No external enquiry was sent. |
| Packaging | ZIP integrity and source-manifest checks are included in release creation. Dependencies, build caches, secrets, deployment state and the supplied videos are excluded. |

The release contains seven current screenshots covering the main hero, Digital Solutions hero, AI, treasury and logistics workspaces, mobile Healthcare and the restored V2 operations preview.

The canvas code and CSS respect reduced-motion preferences and pause rendering offscreen or when the tab is hidden. The operating system's motion setting was not changed during testing. The implementation caps drawing at approximately 30 frames per second and a pixel ratio of 1.5; no hardware benchmark or frame-rate guarantee is claimed.

These are front-end template experiences. Preview values are fictional design data. The V2 images are the supplied design artwork; embedded controls inside those images remain part of the artwork. There is no client database, GPU backend or NVIDIA affiliation in this package. Existing corporate claims and the inherited Contact-page behaviour were retained and were not independently substantiated or rebuilt. Actual webhook delivery requires an approved endpoint and was not tested without one.
