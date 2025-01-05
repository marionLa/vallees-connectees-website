# Vallées Connectées

Vallées Connectées est une association de droit local (Alsace) basé dans la Vallée de Munster (68). 
Elle a pour but de de favoriser le lien social par le biais notamment des outils numériques, pour tous les publics, 
en territoire rural.

Nos actions : 
- 🤖 Ateliers robotique intergénérationnels à la médiathèque de Munster 
- ✨ Participation aux _Repair Café_ organisés par l'association _Vallée de Munster en Transition_ avec notre imprimante 3D 
- 💻 Formations (utilisation de Wordpress, éducation au numérique, etc.) pour tous les publics 
- 🛠️ Soutien technique ponctuel (utilisation de logiciels libres, questions sur Linux, etc.) 
- ... et on s'adapte aux besoins du territoire 🌟

Les ressources : 
- le [site web](https://vallees-connectees.alsace/)
- [l'espace Hello Asso](https://www.helloasso.com/associations/vallees-connectees) pour adhérer ou faire un don

## A propos du site

Ce site a été l'occasion pour moi de découvrir [Astro](https://astro.build/), dans toute sa simplicité et sa légèreté pour 
des sites statiques. 

J'en ai profité pour : 
- découvrir notre super hébergeur [O2switch](https://www.o2switch.fr/) et la gestion multi-site largement simplifiée qu'il propose via CPanel
- découvrir le nom de domaine local [.alsace](https://www.mondomaine.alsace/) 
- découvrir TailwindCSS
- ajouter des composants UI Flowbite
- travailler sur les méthodes de déploiement : 
  - directement via IntelliJ, 
  - via Vercel 
  - via des GitHub actions en connexion sFTP sur o2switch 🙌

Ce projet a aussi été l'occasion de me sensibiliser :
- à l'impact écologique du site ([EcoIndex A](https://www.ecoindex.fr/))
- à l'accessibilité [TODO] : le prochain objectif sur ce projet 🎯

... et à venir : 
- mise en place des tests UI avec Playwright [TODO]
  👉 l'occasion de tester des éléments d'accessibilité lorsque le site sera conforme

## 🛠️ Stack Technique
- **Framework** : [Astro 5.0.4](https://astro.build/)
- **CSS** : [TailwindCSS 3.4.16](https://tailwindcss.com/)
- **Icônes** : [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Composants UI** : [Flowbite 2.5.2](https://flowbite.com/)
- **Langage** : TypeScript ^5.7.2

## 🚀 Déploiement
Le projet est déployé 
- sur **Vercel** grâce à l'intégration avec `@astrojs/vercel` [TODO = prévoir ce déploiement pour l'intégration]
- sur **o2switch** (hébergeur de l'association) directement en sFtp

## 📂 Structure du Projet
- **Config principale** : `astro.config.mjs`
- **Gestion du style** : `tailwind.config.mjs`
- **Gestion des collections** : `src/content.config.ts`
- **TypeScript** : Config et composants dans `src`
- **Pages** : Pages principales dans `src/pages`
- **Composants** : Composants réutilisables dans `src/components`




## 🏗️ Installation et Démarrage

```bash
# 1. Clone ce dépôt
git clone https://github.com/marionLa/vallees-connectees-website.git
cd vallees-connectees-website

# 2. Installe les dépendances
npm install

# 3. Démarre l'application sur le serveur de dev local
npm run astro
```

## 📖 Build du projet

```bash
npm run build
```

## 🚧 Toujours en cours de développement 🚧