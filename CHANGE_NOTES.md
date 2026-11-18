# BigBoss website update — Revision 2 / 16 November 2026

## Final scope

The original `bigboss-main` remains the corporate content and identity baseline. Digital Solutions remains within BigBoss Corporate Consulting. This revision responds to the three supplied glass-dashboard videos and the request to improve the dashboard collection and animate the page heroes.

The seven corporate marketing page files retain their original content, with `HeroScene` imports and artwork inserted into their existing heroes. Privacy remains unchanged. The original global stylesheet, public logo and favicon remain unchanged. Home retains its original sections, with the new tagline and a link to Digital Solutions.

## Dashboard collection

- Replaced the earlier small chart compositions with seven complete application workspaces: AI Infrastructure, Global Logistics, Finance & Treasury, Manufacturing, Circular Economy, Retail & Customer and Healthcare.
- Added navigation, reporting-period controls, scope filtering, record search, item inspection, notification panels, compact mode, full-size workspace viewing and CSV snapshot export.
- Added a local geographic network map using Natural Earth land geometry, selectable hubs and animated route traces.
- Retained two original V2 designs as Templates 08 and 09: the Executive Command Centre and Global Operations Centre. Both have a full-size viewer and zoom controls.
- Removed the requested disclaimer sentence and replaced public labels with simple numbered templates and `Interactive preview`.
- Example data is fictional design data. The V2 images are design previews; their embedded controls are part of the supplied artwork. No NVIDIA customer, partner or certification claim has been added.

## Hero and glass design

- Added projected 3D network, orbital and wave scenes to Home, About, Services, Products, Impact, Partnerships, Careers, Contact and Digital Solutions.
- Added pointer-driven depth, floating translucent panels, moving specular highlights, separate atmospheric layers and heading entrances.
- Applied smoked-glass material styling to corporate navigation tabs, digital section tabs and template selectors. Active and keyboard-focus states remain visible.
- Added mobile layouts, reduced-motion support, offscreen/hidden-tab canvas pausing and capped rendering density.
- Earlier connector arrows and simple reveals were modest effects; the previous description overstated them. `ANIMATION_GUIDE.md` explains the previous effects and the new work precisely.

## Digital pricing — exactly 50% of V2

All values are USD. Starter prices are indicative and subject to confirmed scope.

| Service | V2 | Updated |
| --- | ---: | ---: |
| Digital transformation roadmap | $300 | $150 |
| Starter website | $400 | $200 |
| Software / enterprise application | $1,500 | $750 |
| Starter dashboard | $600 | $300 |
| GIS / spatial intelligence | $800 | $400 |
| Workflow automation | $750 | $375 |
| AI business assistant | $750 | $375 |
| ERP / systems advisory | $1,500 | $750 |
| Advanced dashboard indicative range | $1,000–$2,500+ | $500–$1,250+ |

| Managed plan | V2 monthly | Updated monthly | V2 annual | Updated annual |
| --- | ---: | ---: | ---: | ---: |
| Essential Care | $49 | $24.50 | $490 | $245 |
| Business Growth | $129 | $64.50 | $1,290 | $645 |
| Professional Digital | $249 | $124.50 | $2,490 | $1,245 |
| Premium Digital Partner | $499 | $249.50 | $4,990 | $2,495 |

The cards, catalogue and estimator share one numeric pricing source. The estimator retains the original rounding order, then halves the result, so every comparable estimate is exactly half (for example, the original $1,130 becomes $565). Digital enquiry budget boundaries are halved too. Synthetic financial dashboard values are analytical sample data, not service prices.

## Operational notes

- Nothing was deployed or uploaded to GitHub or Vercel. No existing deployment or project setting was changed.
- The original corporate Contact page is preserved, including its original behaviour.
- The new digital enquiry form supports the V2 webhook route. Set `BIGBOSS_ENQUIRY_WEBHOOK_URL` in `.env.local` to connect delivery. Without it, the form clearly reports that online delivery is unavailable and provides email and WhatsApp links; it does not falsely report success.
- Enterprise AI, GPU infrastructure, external integrations and cloud consumption require a separate scope. They are not working backend services included in this marketing website.
- Google Fonts requires internet access; system font fallbacks are provided for the digital page.
- The package contains source, a lockfile, the original assets and the digital visuals actually used. It excludes dependencies, builds, secrets, deployment links, old V2 pages and unused redesign mockups.

See `README.md` for local running and `VERIFICATION.md` for checks performed.
