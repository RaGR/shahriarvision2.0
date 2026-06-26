# Final Asset Manifest

Generated: 2026-06-09

These are finalized local web assets prepared from `VIsuals/images` and `VIsuals/Vectors`.

## Brand

| File | Source | Notes | Later code use |
|---|---|---|---|
| `brand/logo-primary.png` | `VIsuals/images/logo.png` | Quick transparent crop, no redesign | Navbar, footer |
| `brand/logo-primary@2x.png` | `VIsuals/images/logo.png` | Upscaled transparent crop | High-density displays if needed |
| `brand/brand-script-white.png` | `VIsuals/images/333-845x321.png` | Cropped white script mark | Dark footer/CTA watermark |

## Hero

| File | Source | Notes | Later code use |
|---|---|---|---|
| `hero/home-hero-shahriar-vision.webp` | `VIsuals/images/shahriarvision-banner-new.png` | 1920x1080 desktop hero, slogan/person preserved | Home hero |
| `hero/home-hero-shahriar-vision-1280.webp` | same | Smaller desktop/tablet variant | Responsive source |
| `hero/home-hero-shahriar-vision-mobile.webp` | same | Mobile crop, face-safe | Mobile hero source |

Recommended object position:

- Desktop: `object-position: center center`
- Mobile: use the mobile file directly, or `object-position: 68% center`

## People

| File | Source | Notes | Recommended object-position |
|---|---|---|---|
| `people/founder-desk-consultation.webp` | `VIsuals/images/3.jpg` | Desk consultation portrait, face/hands visible | `50% 36%` |
| `people/founder-standing-cactus-dark-suit.webp` | `VIsuals/images/23.jpg` | Standing dark-suit portrait, face/upper body visible | `48% 28%` |
| `people/founder-lounge-strategy.webp` | `VIsuals/images/32-2.jpg` | Seated strategy portrait | `46% 35%` |
| `people/founder-standing-cactus-light-shirt.webp` | `VIsuals/images/444.jpg` | Clean torso crop for about/contact cards | `50% 28%` |

## Article/Card Squares

| File | Source | Use |
|---|---|---|
| `articles/founder-desk-consultation-square.webp` | `3.jpg` | CRM/consulting article card |
| `articles/founder-standing-cactus-dark-suit-square.webp` | `23.jpg` | HR/org chart/service card |
| `articles/founder-lounge-strategy-square.webp` | `32-2.jpg` | SWOT/strategy/business development card |
| `articles/founder-standing-cactus-light-shirt-square.webp` | `444.jpg` | Contact/about secondary card |

## Backgrounds

| File | Source | Use |
|---|---|---|
| `backgrounds/footer-contact-background.webp` | generated from brand mark/colors | Footer/contact CTA background |

## Vectors

All files from `VIsuals/Vectors` were copied into `vectors/`:

- `vectors/11668756_20945346.svg`
- `vectors/12083138_Wavy_Bus-06_Single-09.svg`
- `vectors/28157810_consulting_2.eps`
- `vectors/4352659_952.svg`
- `vectors/5561830_21207.svg`
- `vectors/8274380_3867433.svg`

## Source Copies

Original raster source files were copied into `source-copies/` for traceability. Do not reference these directly from production components.

## Code Wiring Notes

Later replacements should remove `/input_file_*.png` references and use semantic paths:

```tsx
<img src="/assets/final/brand/logo-primary.png" alt="لوگوی شهریار ویژن" />
<img src="/assets/final/hero/home-hero-shahriar-vision.webp" alt="شهریار ویژن - ما برند شما را می‌سازیم" />
<img src="/assets/final/people/founder-desk-consultation.webp" alt="مشاوره تخصصی شهریار ویژن" />
```

Use `object-fit: cover` with the object-position values above for portrait containers so the face stays visible.
