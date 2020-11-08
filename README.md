# ReApp


## Docker


### build

docker build -t name:tag . 

### run 
Après un build d'image : docker run -p PORT:PORT -d -rm  --name NAME IMAGE_ID
=> Ecoute sur le port prevue, en détaché sur la console, s'auto-remove au stop
