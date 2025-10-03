# 💕 Findr

**Findr** est une application de rencontre moderne construite avec les dernières technologies web.

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Stack technologique](#stack-technologique)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)

## 🎯 À propos

Findr est une plateforme de rencontre innovante qui permet aux utilisateurs de se connecter et de créer des relations authentiques. L'application offre une expérience utilisateur fluide et moderne.

## ✨ Fonctionnalités

- 🔐 **Authentification sécurisée** - Système d'authentification complet avec Better Auth
- 👤 **Profils utilisateurs** - Gestion complète des profils
- 💬 **Messagerie en temps réel** - Communication instantanée entre utilisateurs
- 🎨 **Interface moderne** - Design responsive et élégant avec Tailwind CSS
- ⚡ **Performance optimale** - Utilisation de Next.js 15 avec Turbopack
- 🔄 **Gestion d'état** - State management efficace avec Zustand
- 📊 **Base de données** - Prisma ORM pour une gestion optimale des données

## 🛠 Stack technologique

### Frontend
- **[Next.js 15.5.4](https://nextjs.org/)** - Framework React avec App Router
- **[React 19.1.0](https://react.dev/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[Geist Font](https://vercel.com/font)** - Police optimisée de Vercel

### State Management & Data Fetching
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gestion d'état légère
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)** - Gestion des données asynchrones

### Backend & Base de données
- **[Prisma](https://www.prisma.io/)** - ORM moderne pour TypeScript
- **[Better Auth](https://www.better-auth.com/)** - Solution d'authentification complète
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Hachage de mots de passe
- **[Zod](https://zod.dev/)** - Validation de schémas TypeScript

### Outils de développement
- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rapide

## 📦 Installation

### Prérequis

- Node.js 20.x ou supérieur
- pnpm 8.x ou supérieur (recommandé)

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/findr.git
cd findr
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env` à la racine du projet :
```env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/findr"

# Better Auth
BETTER_AUTH_SECRET="votre-secret-key-ici"
BETTER_AUTH_URL="http://localhost:3000"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Configurer la base de données**
```bash
pnpm prisma generate
pnpm prisma db push
# ou pour les migrations
pnpm prisma migrate dev
```

## 🚀 Démarrage

### Mode développement

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

L'application se recharge automatiquement lorsque vous modifiez les fichiers source.

### Mode production

1. **Build de l'application**
```bash
pnpm build
```

2. **Démarrer le serveur de production**
```bash
pnpm start
```

## 📜 Scripts disponibles

| Script | Description |
|--------|-------------|
| `pnpm dev` | Démarre le serveur de développement avec Turbopack |
| `pnpm build` | Crée un build de production optimisé |
| `pnpm start` | Démarre le serveur de production |
| `pnpm lint` | Exécute ESLint pour vérifier la qualité du code |
| `pnpm prisma generate` | Génère le client Prisma |
| `pnpm prisma studio` | Ouvre Prisma Studio pour gérer la base de données |

## 📁 Structure du projet

```
findr/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout racine de l'application
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── favicon.ico        # Icône de l'application
├── public/                 # Fichiers statiques
├── prisma/                 # Schéma et migrations Prisma
├── node_modules/          # Dépendances
├── .next/                 # Fichiers de build Next.js
├── package.json           # Dépendances et scripts
├── pnpm-lock.yaml        # Lockfile pnpm
├── tsconfig.json         # Configuration TypeScript
├── next.config.ts        # Configuration Next.js
├── tailwind.config.ts    # Configuration Tailwind CSS
├── postcss.config.mjs    # Configuration PostCSS
├── eslint.config.mjs     # Configuration ESLint
└── README.md             # Ce fichier
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Conventions de code

- Utilisez TypeScript pour tous les nouveaux fichiers
- Suivez les règles ESLint configurées
- Écrivez des composants React fonctionnels avec des hooks
- Utilisez les conventions de nommage appropriées

## 📄 Licence

Ce projet est privé et propriétaire. Tous droits réservés.

---

## 📚 Ressources utiles

### Next.js
- [Documentation Next.js](https://nextjs.org/docs) - Apprenez les fonctionnalités de Next.js
- [Learn Next.js](https://nextjs.org/learn) - Tutoriel interactif Next.js

### Prisma
- [Documentation Prisma](https://www.prisma.io/docs) - Guide complet de Prisma
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference) - Référence du schéma

### Better Auth
- [Documentation Better Auth](https://www.better-auth.com/docs) - Guide d'authentification

### Déploiement

La façon la plus simple de déployer votre application Next.js est d'utiliser la [Plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

---

💡 **Développé avec ❤️ par l'équipe Findr**
