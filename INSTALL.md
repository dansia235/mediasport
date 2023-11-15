# Installation de Media Sport

Ce document décrit les étapes nécessaires pour installer et configurer Media Sport 235 sur votre machine locale pour le développement et les tests.

## Prérequis

Avant de commencer, assurez-vous que les éléments suivants sont installés sur votre système :
- Git
- Node.js et npm
- Python (version 3.6 ou ultérieure)
- PostgreSQL

## Installation du Backend

1. ### Cloner le Répertoire :
   ```bash
   git clone https://github.com/dansia235/mediasport.git
   cd mediasport/backend

2. ### Configurer l'Environnement Python :
- Créez un environnement virtuel Python :
    ```bash
   python -m venv venv
   
   
- Activez l'environnement virtuel :
     - Sur Windows : venv\Scripts\activate
     - Sur Unix ou MacOS : source venv/bin/activate


3. ### Installer les Dépendances :
    ```bash
   pip install -r requirements.txt


4. ### Configurer la Base de Données :
- Créez une base de données PostgreSQL pour le projet.
- Modifiez le fichier de configuration pour pointer vers votre base de données.


5. ### Lancer le Serveur Backend :
    ```bash
   python run.py
        

## Installation du Frontend

1. ### Naviguer dans le Dossier Frontend :
      ```bash
   cd ../frontend

   
2. ### Installer les Dépendances Node.js :
    ```bash
   npm install

            
3. ### Lancer l'Application Frontend :
    ```bash     
   npm run serve


## Accès à l'Application

Une fois le backend et le frontend lancés, ouvrez votre navigateur et accédez à 'http://localhost:8080' (ou le port configuré) pour visualiser l'application.

## Problèmes Communs et Solutions
Pour toute question ou problème relatif à l'installation, n'hésitez pas à ouvrir une issue dans le répertoire GitHub du projet.
