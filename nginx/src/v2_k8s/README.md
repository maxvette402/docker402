# v18_k8s
nginx https alpine with index.html in a minikube cluster

## deploy
cd ~/docker402/nginx/src/v2_k8s
scp ~/docker402/nginx/src/v2_k8s/*.yaml doraemon@doraemon:/home/doraemon/my_pods/

kubectl apply -f 001-nginx-deployment.yaml --namespace ingress-nginx
kubectl apply -f 002-nginx-cluster-ip-service.yaml --namespace ingress-nginx
kubectl apply -f 003-nginx-ingress.yaml --namespace ingress-nginx

### pods
kubectl get pods --namespace ingress-nginx -o wide
##### logs pods
kubectl logs minikube-nginx-deployment-85bc84ddb-4zwhp --namespace ingress-nginx

### services
kubectl get service -n ingress-nginx
  | ingress-nginx-controller | NodePort | 10.97.129.99 | <none> | 80:31438/TCP,443:31098/TCP
minikube service list
  | ingress-nginx | ingress-nginx-controller  | http/80   | http://192.168.49.2:31438
  |               |                           | https/443 | http://192.168.49.2:31098
minikube ip
  192.168.49.2
##### http internal
curl http://192.168.49.2
curl http://192.168.49.2:31392
curl -I http://192.168.49.2
curl -I http://192.168.49.2:31392
##### https internal
curl -k https://192.168.49.2
curl -k https://192.168.49.2:32520
curl -kI https://192.168.49.2
curl -kI https://192.168.49.2:32520
##### https external
curl -k https://192.168.1.62
curl -kI https://192.168.1.62
