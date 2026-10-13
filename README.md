# Guillaume-Shop

Boutique e-commerce pour le marché haïtien, développée avec React + TypeScript + Vite.

## Démarrage rapide

```bash
npm install
cp .env.example .env.local
npm run dev
```

Puis ouvrir : http://localhost:5173

## Fonctionnalités de cette base

- interface mobile-first en français
- palette Guillaume-Shop (orange corail, orange doré, rose pâle, crème, noir)
- catalogue produits et catégories
- panier, checkout et confirmation
- espace connexion/inscription en mode démonstration local
- routes admin sécurisées en mode prototype
- base SQL Supabase préparée pour la suite
- configuration gratuite pour Vercel/Netlify + Supabase

## Sécurité et configuration

- les clés Supabase ne doivent pas être exposées côté frontend
- l’auth réelle doit être activée via Supabase Auth
- les emails administrateurs principaux doivent être vérifiés côté serveur :
  - dawudguillaume12@gmail.com
  - dawudsong@gmail.com
- l’accès admin ne doit être accordé qu'après vérification de l’identité et de la possession du compte

## Commandes utiles

```bash
npm install
npm run dev
npm run build
```

## Documentation complémentaire

- `docs/free-deploy-setup.md`
- `docs/phase2-summary.md`
- `supabase/schema.sql`

## Déploiement gratuit recommandé

- frontend : Vercel ou Netlify
- base : Supabase free tier
- stockage privé : Supabase Storage
