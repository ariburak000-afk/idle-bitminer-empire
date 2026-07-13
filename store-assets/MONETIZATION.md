# Idle Crypto Miner - Monetization Plan

## Valuable Currency

`Data Kristali` is the premium currency. It is used only for optional boosts and cosmetics. `Şifre Anahtarı` is the gameplay-earned chest currency; it is awarded by missions, operation milestones and active mining. Core progression, prestige, locations and card collection remain playable without payment.

## Google Play Product IDs

| Product ID | Type | Content |
|---|---|---|
| `starter` | One-time | 120 crystals, one rare chest, permanent 10% income |
| `no_ads` | One-time | Removes future forced/interstitial ads; rewarded ads remain optional |
| `crystal_80` | Consumable | 80 crystals |
| `crystal_450` | Consumable | 450 crystals |
| `crystal_1000` | Consumable | 1,000 crystals |
| `founder` | One-time | 500 crystals, two epic chests, badge, permanent 15% offline income |
| `season_pass` | One-time per season | Unlocks the premium Hash Festival reward track and two limited seasonal cards |

## Current Safety Mode

`IAP_CONFIG.production` is `false`. Store buttons run a local test transaction and never charge real money. Before release:

1. Create matching products in Play Console.
2. Connect a maintained Google Play Billing/receipt validation adapter.
3. Read localized price strings from Google Play instead of hardcoding them.
4. Grant content only after a verified purchase callback.
5. Acknowledge non-consumables and consume crystal packs after server-side verification.
6. Restore `starter`, `no_ads`, `founder` and the active `season_pass` entitlement on reinstall.
7. Test with Play Console license testers and closed testing.
8. Set `IAP_CONFIG.production` to `true` only after verification is complete.

Do not ship real-money purchasing with the local test completion path enabled.
