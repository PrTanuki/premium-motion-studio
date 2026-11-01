# Rendre et décliner la publicité depuis Hermes (2 Go)

Hermes prépare les textes et lance un calcul distant. **Ne pas lancer npm ci, Chromium ou le rendu vidéo sur son VPS de 2 Go.** Le workflow GitHub Actions effectue installation, contrôle TypeScript, rendu H.264 et extraction des 21 images.

## Depuis GitHub

Actions → **Render motion on demand** → **Run workflow** → composition **CNARMRecruitment01**. Après réussite, télécharger l'artefact **CNARMRecruitment01**. Il contient le MP4, les captures, la planche contact, le contrôle des métadonnées, le brief et le rapport visuel de la version de référence.

Attention : le rapport fourni est celui de la version inspectée dans ce dépôt. Un nouveau texte ou un nouvel asset impose une nouvelle inspection visuelle ; un workflow vert valide les contrôles techniques, pas la qualité graphique.

## Depuis Hermes avec GitHub CLI déjà authentifié

```bash
gh workflow run render-on-demand.yml --repo PrTanuki/premium-motion-studio --ref main -f composition=CNARMRecruitment01
gh run list --repo PrTanuki/premium-motion-studio --workflow render-on-demand.yml --limit 5
# Remplacer RUN_ID par l'identifiant de l'exécution réellement lancée :
gh run watch RUN_ID --repo PrTanuki/premium-motion-studio
gh run download RUN_ID --repo PrTanuki/premium-motion-studio --name CNARMRecruitment01 --dir cnarm-render
```

Ne jamais inclure de jeton dans un brief, un prompt ou un commit. Pas de publication automatique sur les réseaux sociaux.

## Décliner le template

La source principale des textes est `briefs/cnarm-recruitment-01.json`, champ `props`. Les éléments `.job`, `.destination`, `.project`, `.pillars`, `.ctaTitle` et `.cta` sont réutilisables. Le composant importe réellement ce JSON : ce n'est pas un brief décoratif. Conserver les cinq plages nominales de 90 images et les paramètres techniques. Trois notions exactement ; deux lignes pour le titre final.

Les mots sont mesurés avec Space Grotesk chargée puis réduits si nécessaire ; pas de déformation des caractères. Si la réduction rend le texte petit, raccourcir le texte. Relire accords, accents, promesses et destination. La marque est définie dans `apps/remotion/src/cnarm/brand.ts`. Changer le logo seulement avec un fichier officiel autorisé. Le symbole flèche est du décor et ne remplace jamais le logo.

Prompt réutilisable :

> Lis AGENTS.md, les skills motion, docs/cnarm/STORYBOARD.md et docs/cnarm/QA-REPORT.md. Adapte uniquement les textes autorisés du brief CNARM pour [métier/message], conserve la palette et le vrai logo. Ne modifie pas PremiumDemo01. Valide le brief et le TypeScript, pousse les sources, lance CNARMRecruitment01 dans GitHub Actions. Télécharge le MP4 et les captures, inspecte chaque scène et chaque raccord ; corrige et relance en cas de défaut. Ne rends pas sur le VPS 2 Go. Ne publie pas sur les réseaux.

## Rendu local sur une machine de production

Node indiqué dans `.nvmrc`, Python 3 avec Pillow et FFmpeg/ffprobe disponibles.

```bash
npm ci --prefix apps/remotion
python3 -m pip install Pillow==11.3.0
npm run validate:brief
npm run validate:cnarm
npm run check --prefix apps/remotion
npm run render:cnarm
```

Sortie : `out/cnarm/cnarm-recrutement-01.mp4`. Avec un Chromium installé hors cache Remotion :

```bash
REMOTION_BROWSER_EXECUTABLE=/chemin/vers/chrome npm run render:cnarm
```

On peut aussi transmettre des props JSON au CLI Remotion :

```bash
cd apps/remotion
npx remotion render src/index.tsx CNARMRecruitment01 ../../out/variation.mp4 --props=../../briefs/variation-props.json --codec=h264 --pixel-format=yuv420p --concurrency=2
```

Ce fichier de variation contient uniquement les clés de `props`, sans enveloppe `props`. Il ne remplace ni la validation rédactionnelle ni le contrôle visuel. Le script de capture de référence reste réservé à 450 images / 1080×1920 / 30 fps.
