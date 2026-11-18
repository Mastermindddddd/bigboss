# BigBoss Developer Guide

These instructions are for developers maintaining or previewing the website on their own computers. A local preview is separate from the website published at `bigbosscorporate.com`.

## Requirements

Use Node.js 20.9 or newer with npm. The website was verified with Node.js 24.14.0 and npm 11.9.0. Dependencies are pinned through `package-lock.json`.

## Install and preview

Clone the repository or open an existing checkout. In PowerShell, run these commands from the folder containing `package.json`:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) for the local homepage or [http://localhost:3000/digital-solutions](http://localhost:3000/digital-solutions) for Digital Solutions. Stop the server with **Ctrl+C**.

On Windows, `npm.cmd` avoids PowerShell execution-policy restrictions on `npm.ps1`. On macOS or Linux, use `npm` instead.

If port 3000 is occupied:

```powershell
npm.cmd run dev -- --port 3001
```

Open [http://localhost:3001](http://localhost:3001). Alternatively, `RUN_LOCAL.bat` installs dependencies on the first run and starts the local development server.

## Validate a change

```powershell
npm.cmd run test:pricing
npm.cmd run typecheck
npm.cmd run build
```

The pricing script covers services, monthly and annual support plans, and scope estimates. `typecheck` generates Next.js route types before checking TypeScript. The build and development commands use Webpack.

To preview the production build on your computer:

```powershell
npm.cmd start
```

This command starts a local server. It does not publish the website. Publishing is managed through the live hosting project's release process, described in the [project README](../README.md#publishing-through-the-existing-hosting-project).

## Optional enquiry webhook

For local testing:

```powershell
Copy-Item .env.example .env.local
```

Set `BIGBOSS_ENQUIRY_WEBHOOK_URL` to an approved endpoint that accepts a JSON POST. Restart the local server after changing environment settings. Configure the equivalent variable separately in the hosting environment when enabling production enquiry delivery.

The payload includes `name`, `email`, `organisation`, `country`, `budget`, `start`, `details`, `service`, `source` and `receivedAt`. Without a webhook, the form reports unavailable delivery and provides contact alternatives. Keep `.env.local` and credentials outside Git.

## Maintaining the site

- Keep Digital Solutions price amounts in `app/data/digitalPricing.ts` so service cards, subscriptions and estimates use the same values.
- Keep distinct industry layouts in `app/components/StudioViews.tsx`; shared controls and interactions belong in `app/components/DashboardStudio.tsx` and `app/components/StudioPrimitives.tsx`.
- Preserve reduced-motion behaviour, keyboard controls and responsive layouts when changing hero scenes or dashboards.
- Keep brand assets and supplied visuals in `public/`.
- Review [CHANGE_NOTES.md](../CHANGE_NOTES.md), [VERIFICATION.md](../VERIFICATION.md) and [ANIMATION_GUIDE.md](../ANIMATION_GUIDE.md) for the existing implementation and validation record.

The dashboard templates do not include a production data service or GPU backend. Webhook delivery requires an approved receiver. The original corporate Contact page is maintained separately from the Digital Solutions form.

## Existing corporate submissions

The corporate Contact, Careers and Product Waitlist APIs use `MONGODB_URI`. Configure it locally only when testing actual database delivery, and keep it in the existing hosting environment for production. The production build and empty-field validation checks do not require database credentials. Never commit connection strings.
