# Moteurs
Remotion est le moteur principal : React/TypeScript/SVG, rendu déterministe par image. GSAP est installé mais inutilisé, faute d'intégration synchronisée vérifiée ; aucune animation CSS basée sur le temps.

Motion Canvas est isolé dans `apps/motion-canvas`, avec ses propres dépendances. Le projet contient une scène de démarrage indépendante de Remotion ; il ne reproduit pas encore les 15 secondes et aucun rendu comparatif n'a été validé. Démarrage : `cd apps/motion-canvas && npm ci && npm run dev`. Il faut poursuivre la timeline et les tests avant comparaison.
