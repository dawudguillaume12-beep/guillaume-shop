# Guillaume-Shop — Phase 2

## Ce qui a été préparé

- configuration Supabase prête pour le dépôt des données
- fichier SQL de base pour les tables de commerce, stock et sécurité
- fichier de variables d’environnement exemple
- mode démo d’authentification local pour la préparation des accès admin
- route de protection admin côté frontend

## Ce qu’il reste à faire avant la production

- créer le vrai projet Supabase
- configurer l’authentification réelle
- ajouter les politiques RLS
- finaliser les tables de paiement et de retrait
- compléter les workflows NatCash et livraison
- configurer le build Vercel/Netlify
- vérifier les variables d’environnement et le HTTPS

## Mode démo

Le projet utilise un “demo session” en localStorage pour afficher les protections admin et la logique d’accès.
Il doit être remplacé par une vraie session Auth Supabase avant le lancement réel.

## Personnalisation importante

Les emails suivants doivent être vérifiés côté serveur en production :
- dawudguillaume12@gmail.com
- dawudsong@gmail.com

Ils ne doivent pas être utilisés comme simple test de saisie, mais après vérification de l’identité et de la possession du compte.
