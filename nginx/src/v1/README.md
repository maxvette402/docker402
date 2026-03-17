# v17
nginx http alpine with index.html rendering the Bitcoin Block Count

### build
cd ~/docker402/nginx/src/v1
docker build --no-cache -t nginx:v17 .

### run
docker run -d --rm --name nginx.v17 -p 80:80 nginx:v17

### access the image as root
docker run -it nginx:v17 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http://localhost
