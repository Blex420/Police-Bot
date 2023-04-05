# Police-Bot
1. docker installieren --> https://ddev.readthedocs.io/en/stable/users/install/docker-installation/
1. DDEV installieren --> https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/

``` 
ddev start
ddev npm install
ddev npm run start
ddev exec pip install -r ./pyBot/requirements.txt
ddev exec python pyBot/pyBot.py
```