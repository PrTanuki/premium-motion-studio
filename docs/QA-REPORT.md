# Contrôle PremiumDemo01

Rendu réel local : `npx remotion render src/index.tsx PremiumDemo01 ../../out/premium-demo-01.mp4 --concurrency=2`. L'environnement local a nécessité une adaptation temporaire de `os.networkInterfaces` ; le workflow GitHub n'en dépend pas.

FFprobe : H.264, 1080 × 1920, 30/1 fps, 450 images, 15,000 s. Aucune piste audio prévue. Les captures 0, 30, 84, 90, 99, 120, 173, 180, 189, 220, 289, 300, 309, 340, 379, 390, 399, 420 et 449 ont été extraites du MP4 et vérifiées sur planche contact. Les quatre transitions, la lisibilité des titres en maintien et le maintien final ont été examinés.

Premier rendu : fragment de texte visible à l'image 0 et titre entrant trop près du bord à la transition noire. Correction de l'opacité initiale et de la translation, puis second rendu et nouvelle inspection. Le texte se déplace volontairement lors des entrées/sorties ; les petites mentions éditoriales restent secondaires sur smartphone. Aucun contrôle audio n'est applicable. La lecture continue complète et les conditions réelles sur téléphone restent à valider. Motion Canvas ne reproduit pas encore la timeline.
