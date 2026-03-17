# v18
nginx https alpine with index.html rendering the Bitcoin Block Count

### build
cd ~/docker402/nginx/src/v2
docker build --no-cache -t nginx:v18 .

### run
docker run -d --rm --name nginx.v18 -p 443:443 nginx:v18

### access the image as root
docker run -it nginx:v18 /bin/sh
cat /etc/alpine-release

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -kI https://localhost

# TAG and PUSH nginx:v18 as marco27/simple-nginx:v1
docker tag nginx:v18 marco27/nginx-bitcoin-block-count:v1
docker login
docker push marco27/nginx-bitcoin-block-count:v1
