# CNARMRecruitment01 — contrôle qualité de production

Version contrôlée le 1er novembre 2026. Le contrôle porte sur le MP4 réellement encodé, ses images extraites et les cinq scènes dans Remotion Studio/Chromium. Aucune diffusion sur les plateformes n'a été effectuée.

## Résultat technique

| Contrôle | Résultat mesuré |
|---|---|
| Composition | CNARMRecruitment01 |
| Codec / format pixels | H.264 / yuv420p |
| Dimensions | 1080 × 1920 |
| Cadence | 30/1 fps |
| Durée / nombre d'images | 15,000 s / 450 |
| Audio | Aucun, vidéo compréhensible sans son |
| Décodage FFmpeg intégral | Réussi, aucune erreur de décodage |
| TypeScript | `npm run check --prefix apps/remotion` réussi |
| Brief initial et brief CNARM | Les deux validateurs réussis |
| Captures demandées | 21/21 extraites du MP4 |
| Logo | PNG officiel 700×200, ratio préservé, fond blanc natif |
| SHA-256 du MP4 | `1a3a8d2e6301df7e3a798dd4d7b036dfc73f756d39bb96e12def89c621b81d59` |

## Revue visuelle réellement effectuée

- Les 21 captures demandées : 0, 15, 30, 60, 85, 95, 120, 150, 175, 185, 210, 240, 265, 275, 300, 330, 355, 365, 390, 420, 449.
- Une planche contact avec numéro d'image et temps pour chaque capture.
- Une planche supplémentaire des raccords, tous les trois frames autour de 83–99, 172–189, 262–279 et 352–369, incluant explicitement 89/90, 179/180, 269/270, 359/360.
- Les cinq scènes stabilisées réduites à 360×640, en bande comparative smartphone.
- Contrôle DOM des textes aux images 60, 150, 240, 330 et 449 dans Remotion Studio avec Chromium. Rectangle prudent prévu : x=90..900, y=240..1480. Étendue mesurée des textes : x=90..890, y=280..1435 ; **aucun débordement de cette zone**. Logo initial à y=240 ; ratio et implantation contrôlés visuellement.
- Retour non chronologique 449→150→60→449 : les positions et tailles typographiques sont identiques aux visites initiales. GSAP utilise exclusivement le hook officiel `useGsapTimeline` et sa timeline pause/seek contrôlée par Remotion. Aucun ticker libre, callback temporel ou hasard.
- URL finale : texte de 54 px, rectangle mesuré x=90, y=1370, largeur ≈361 px, hauteur 65 px ; à 360 px de large, équivalent 18 px. CTA : 41 px, équivalent ≈13,7 px. Accroches et mots clés plus grands. Les petits labels sont secondaires et ne portent pas le message essentiel.
- Maintien final : tous les éléments sont établis à l'image 398 et restent fixes jusqu'à 449, soit 52 images ≈1,73 seconde.

## Corrections appliquées après le premier MP4

1. Entrée des textes avancée dans les scènes 2, 3, 4 et 5 pour supprimer les passages composés seulement d'un label après changement de fond.
2. Premier aplat orange ouvert depuis l'emplacement réel du filet (y=625), pour que le filet devienne le masque de transition.
3. Flèche retracée en silhouette SVG pleine afin de retirer les petits dépassements de jonction de traits.
4. Nouveau MP4 intégral généré après corrections ; captures et planches régénérées depuis ce nouveau fichier, puis inspectées.

Les fragments de lettres aux images intermédiaires de révélation (ex. 95, 185, 275) sont les masques d'entrée intentionnels. Aucun caractère coupé ou chevauchement involontaire constaté pendant les maintiens. Accents vérifiés : ÉTAIT, MÉTROPOLE, OPPORTUNITÉS, RÉUNION, MOBILITÉ, DÉCOUVREZ.

## Limites et éléments de marque

La palette est celle de travail du brief : le dépôt ne contenait pas de charte officielle certifiée. Le logo provient bien du site officiel ; aucune signature inventée. Le trajet est symbolique et ne revendique aucune précision cartographique. Aucun chiffre, aide ou garantie d'embauche ajouté.

Les marges ont été contrôlées dans le rendu, mais **les interfaces réelles Instagram, Facebook et TikTok ne sont pas testées**. Leurs éléments peuvent varier selon le placement publicitaire et l'appareil. Pas de test audio, la vidéo étant volontairement muette. Pas de validation éditoriale de direction CNARM ou d'exigences éventuelles de financeurs prétendue. La page finale est exploitable comme image fixe.

## Reproduire

```bash
npm run validate:brief
npm run validate:cnarm
npm run check --prefix apps/remotion
npm run render:cnarm
ffmpeg -v error -i out/cnarm/cnarm-recrutement-01.mp4 -f null -
```

L'environnement de production de cette session a utilisé Chromium Headless Shell 157 avec le chemin fourni via `REMOTION_BROWSER_EXECUTABLE`. Le téléchargement par Node a expiré ; le même binaire a été téléchargé avec curl puis utilisé pour le rendu. Un préchargement local temporaire a compensé une erreur de l'hôte `os.networkInterfaces()` ; il n'est ni nécessaire sur GitHub Actions standard, ni ajouté au dépôt.

Le workflow distant a été adapté pour les deux compositions. La réussite du rendu local ne doit pas être présentée comme une exécution distante du workflow.
