# Shroomy Website

Marketing website for Shroomy - Your Personal Anxiety Companion.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import to Vercel: https://vercel.com/new
3. Vercel auto-detects Next.js settings
4. Add custom domain: `shroomyapp.com`

### Environment Variables

None required for basic deployment.

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles + Tailwind
│   ├── layout.tsx     # Root layout + metadata
│   └── page.tsx       # Homepage
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Exercises.tsx
│   ├── Features.tsx
│   ├── Reviews.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
public/
├── images/           # Logo, mascot, app icon
├── mockups/          # Phone screenshots
├── icons/            # Modality icons
└── gradients/        # Background gradients
```

## Links

- App Store: https://apps.apple.com/us/app/shroomy-daily-stress-relief/id6737152971
- Google Play: https://play.google.com/store/apps/details?id=uk.co.resetapp.reset
