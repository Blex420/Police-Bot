# Police-Bot

## Installation 
1. docker installieren --> https://ddev.readthedocs.io/en/stable/users/install/docker-installation/
1. DDEV installieren --> https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/
    ``` 
    ddev start
   ```
1. Installation Dependencies JS & Run bot
    ```
    ddev npm install
    ddev npm run start
    ```

1. Installation Dependencies Py & Run bot
    ```
    ddev exec pip install -r ./pyBot/requirements.txt
    ddev exec python pyBot/pyBot.py
    ```
