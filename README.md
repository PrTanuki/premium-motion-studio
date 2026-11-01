# Premium Motion Studio

Composition de démonstration verticale : Remotion + React/TypeScript/SVG, 15 secondes, 30 images/s, sans audio. Les animations utilisent les images Remotion. GSAP est installé mais pas utilisé tant que sa synchronisation au rendu n'a pas été vérifiée. Motion Canvas est une expérience séparée.

## Installer et rendre

Node 22 et FFmpeg sont requis. Depuis la racine :

```bash
cd apps/remotion && npm ci && npm run check && cd ../..
npm run validate:brief
npm run render:demo
```

Le script produit `out/premium-demo-01.mp4`, des captures, une planche et les métadonnées. Pour le studio : `cd apps/remotion && npm run studio`.

## Hermes et GitHub Actions

Sur le VPS de 2 Go, ne pas lancer le rendu. Déclencher le workflow `Render motion on demand` avec `composition=PremiumDemo01` sur une branche qui contient ce workflow ; suivre le run et télécharger l'artifact `premium-demo-01`. Voir `docs/HERMES-INTEGRATION.md`. Le workflow n'accepte aucune commande ni chemin arbitraire.

Polices Space Grotesk et Inter via Fontsource : licences OFL disponibles dans les paquets npm ; Remotion comporte des conditions de licence à vérifier selon l'usage. Voir `docs/QA-REPORT.md` et `docs/ENGINE-COMPARISON.md`.
