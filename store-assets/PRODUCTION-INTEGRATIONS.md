# Production Integrations

The game is fully playable with localStorage, local telemetry, simulated purchases and test rewarded ads. The following boundaries must be connected before a production Play Store release.

## Google Play Billing

- Keep `IAP_CONFIG.production` disabled until a maintained Capacitor Billing adapter is installed.
- Map all seven product IDs in `MONETIZATION.md` to Play Console products.
- Read localized product names and prices from Google Play.
- Grant content only after verified purchase callbacks; acknowledge one-time products and consume crystal packs.
- Restore `starter`, `no_ads`, `founder` and the current season pass after reinstall.
- Receipt validation should run on a trusted backend. Never trust a client-only success flag for production purchases.

## Cloud Save

- The current JSON export/import flow is the offline-safe fallback.
- A production provider should store a user ID, save revision, updated timestamp and encrypted save payload.
- Resolve conflicts by comparing revisions and present local/cloud timestamps when both changed.
- Keep an automatic local snapshot before applying a cloud save.

## Analytics and Crash Reporting

- The local Denge panel records only on-device economy samples and recent errors.
- A production adapter may forward consented events such as `session_start`, `upgrade_bought`, `prestige`, `season_claim`, `fault`, `repair` and `purchase_verified`.
- Do not send full save files or advertising IDs unless the privacy policy and consent flow explicitly cover them.
- Rate-limit economy samples and scrub stack traces before upload.

## Live Community Goals

True shared goals require an authoritative backend. The client may display a server-signed total and submit verified personal contribution increments. Do not calculate a global total from localStorage or trust arbitrary client totals.

## Required External Inputs

Production activation needs the Play Console application/products, billing configuration, backend endpoint, authentication choice, analytics project and privacy-policy URL. These account-specific values are intentionally not committed to the repository.
