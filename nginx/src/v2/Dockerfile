FROM nginx:alpine3.20-slim
# upgrade
RUN apk update; apk upgrade;
# mkdir
RUN mkdir  /usr/share/nginx/certs/
# copy
COPY certs /usr/share/nginx/certs/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY html /usr/share/nginx/html/
# expose port
EXPOSE 80
