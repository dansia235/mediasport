```mermaid
graph TD;
    A[Création d'un Utilisateur] -->|Étape 1| B(Enregistrement des informations utilisateur dans la base de données)
    B -->|Étape 2| C[Assignation de rôles aux utilisateurs]
    C -->|Étape 3| D[Utilisateur tente de se connecter]
    D -->|Étape 4| E[Envoi des identifiants au serveur]
    E -->|Étape 5| F{Validation des identifiants}
    F -->|Identifiants valides| G[Génération d'un token JWT]
    F -->|Identifiants invalides| H[Retour d'une erreur d'authentification]
    G -->|Étape 6| I[Retour du token JWT au client]
    I -->|Étape 7| J[Client inclut le token JWT dans les en-têtes de requêtes]
    J -->|Étape 8| K[Serveur valide le token JWT]
    K -->|Token valide| L{Contrôle d'accès basé sur les rôles}
    K -->|Token invalide| M[Retour d'une erreur d'autorisation]
    L -->|Accès autorisé| N[Accès à la route restreinte]
    L -->|Accès refusé| O[Retour d'une erreur d'autorisation]

    style A fill:#f9f,stroke:#333,stroke-width:2px;
    style B fill:#d3f,stroke:#333,stroke-width:2px;
    style C fill:#b5d,stroke:#333,stroke-width:2px;
    style D fill:#88b,stroke:#333,stroke-width:2px;
    style E fill:#669,stroke:#333,stroke-width:2px;
    style F fill:#446,stroke:#333,stroke-width:2px;
    style G fill:#224,stroke:#333,stroke-width:2px;
    style H fill:#422,stroke:#333,stroke-width:2px;
    style I fill:#644,stroke:#333,stroke-width:2px;
    style J fill:#866,stroke:#333,stroke-width:2px;
    style K fill:#a88,stroke:#333,stroke-width:2px;
    style L fill:#caa,stroke:#333,stroke-width:2px;
    style M fill:#ecc,stroke:#333,stroke-width:2px;
    style N fill:#fee,stroke:#333,stroke-width:2px;
    style O fill:#fdd,stroke:#333,stroke-width:2px;
```markdown
