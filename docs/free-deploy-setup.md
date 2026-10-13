# Guillaume-Shop — configuration gratuite de publication

## 1) Frontend gratuit

- Vercel (gratuit) pour le site React/Vite
- Netlify (gratuit) pour le site React/Vite

Choisir l'un de ces services pour le frontend, puis connecter le dépôt GitHub : `dawudguillaume12-beep/guillaume-shop`.

## 2) Base de données gratuite

- Supabase free tier
- Créer un nouveau projet Supabase
- Exécuter le fichier `supabase/schema.sql` dans le SQL editor de Supabase

## 3) Variables d'environnement

Créer un fichier `.env.local` basé sur `.env.example` :

```bash
cp .env.example .env.local
```

Puis remplir :

```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxx
VITE_APP_NAME=Guillaume-Shop
VITE_APP_URL=https://your-domain.vercel.app
VITE_NATCASH_DESTINATION=43367217
```

## 4) Authentification réelle

Le frontend doit utiliser l’auth Supabase réelle avec l’email/MDP, puis le rôle admin vérifié côté serveur.

Le repo embarque actuellement un mode démo local pour l’interface, mais le vrai accès admin nécessite :

- création de comptes Supabase Auth
- ajout des emails autorisés côté serveur
- vérification de possession du compte
- stockage des rôles dans la table `staff_members` et `roles`

## 5) Déploiement

1. Pousser le code sur GitHub
2. Connecter le dépôt à Vercel ou Netlify
3. Définir les variables d’environnement
4. Vérifier le build `npm run build`
5. Vérifier le HTTPS et le domaine

## 6) Vérifications finales

- page d’accueil fonctionnelle
- panier local
- commandes et paiement NatCash à configurer
- admin protégé par rôle
- données privées non exposées
- RLS Supabase à finaliser avant production

## 7) Limite importante

Le projet est prêt en mode storefront + structure serveur, mais ne prétend pas à une intégration officielle NatCash ou à l’authentification réelle tant que les clés et la configuration Supabase ne sont pas ajoutées.
