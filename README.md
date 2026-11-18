# BigBoss Corporate Consulting

The corporate website for BigBoss Corporate Consulting, presenting its organisation transformation services, industry expertise and Digital Solutions capability.

**Organisation Transformation Solutions**

- Corporate website: [bigbosscorporate.com](https://www.bigbosscorporate.com/)
- Source repository: [Mastermindddddd/bigboss](https://github.com/Mastermindddddd/bigboss)
- Website updates: [Commit history](https://github.com/Mastermindddddd/bigboss/commits/main)

## Website improvements

- Digital Solutions is integrated into the BigBoss parent website at `/digital-solutions`.
- Existing corporate pages, brand identity and imagery are retained.
- The corporate tagline is updated to “Organisation Transformation Solutions”.
- Digital Solutions prices and subscriptions are reduced by 50% against the original schedule.
- Seven interactive industry workspaces support distinct analysis tasks, alongside two original dashboard previews.
- Glass navigation, animated hero scenes and responsive interactions include support for reduced-motion preferences. Home, About and Services give the animated artwork its own layout column, with stacked layouts on smaller screens.

## Review the source and designs

The repository's `main` branch contains the website source. That confirms the source is available on GitHub; the version served by the public domain depends on the hosting project's production deployment.

- [Digital Solutions page](app/digital-solutions/page.tsx)
- [Interactive dashboard collection](app/components/DashboardStudio.tsx)
- [Website and dashboard previews](previews/)
- [Change notes and pricing comparison](CHANGE_NOTES.md)
- [Current integration verification](docs/INTEGRATION_VERIFICATION.md)
- [Original design verification](VERIFICATION.md)
- [Animation guide](ANIMATION_GUIDE.md)
- [Asset credits](ASSET_CREDITS.md)

## Publishing through the existing hosting project

The website owner should check the Vercel project currently assigned to `bigbosscorporate.com` and `www.bigbosscorporate.com`:

1. Under **Settings → Git**, confirm that the connected repository is `Mastermindddddd/bigboss`.
2. Confirm that the production branch is `main`.
3. Under **Deployments**, check that a successful production deployment uses the current `main` commit. If it does not, inspect the Git integration and any build errors before publishing through the owner's existing release process.
4. After publishing, verify the updated tagline and `/digital-solutions` on the public domain.

The application uses Next.js. The application root is the repository root, containing `package.json`; the build command is `npm run build`. Production publishing is managed by the existing Vercel project and its Git integration.

The GitHub repository, Vercel project and domain can be administered by different accounts. Access to this repository alone does not provide access to the live hosting project. Keep the existing project and domain configuration when publishing an update to that project.

## Existing website services

The NextGen Academy page, current corporate imagery, Google Analytics and the existing Contact, Careers and Product Waitlist endpoints are retained. Those existing submission endpoints use `MONGODB_URI` from the hosting environment. Preserve the configured database connection when publishing.

## Digital enquiry delivery

Configure `BIGBOSS_ENQUIRY_WEBHOOK_URL` in the hosting environment to receive enquiries from the Digital Solutions form. The endpoint must accept JSON POST requests. Without it, the form reports that delivery is unavailable and offers BigBoss email and WhatsApp links. Store credentials in environment settings, outside the repository.

## Development and maintenance

Optional installation, local preview, build checks and environment setup are documented in the [Developer Guide](docs/DEVELOPMENT.md). Visitors to the public website do not need to install or run this project.

| Area | Source |
| --- | --- |
| Corporate pages and navigation | `app/`, `app/components/Nav.tsx`, `app/components/Footer.tsx` |
| Digital Solutions content | `app/digital-solutions/page.tsx`, `app/data/digital.ts` |
| Digital pricing and subscriptions | `app/data/digitalPricing.ts` |
| Dashboard layouts and interactions | `app/components/DashboardStudio.tsx`, `app/components/StudioViews.tsx`, `app/components/StudioPrimitives.tsx` |
| Hero artwork and motion | `app/components/HeroScene.tsx`, `app/hero-scenes.css` |
| Enquiry endpoint | `app/api/enquiry/route.ts` |
| Brand and visual assets | `public/` |

Dashboard examples are front-end templates using demonstration data. Production data connections and AI or GPU services require their own implementation and infrastructure.
