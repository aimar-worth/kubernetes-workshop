# Deploying Rest API

## Preparations

1. enable ingress addon in minikube. 
Since we have SPA application as frontend and we want to expose rest api to the world.

```bash
minikube addons enable ingress
```

```bash
🔎  Verifying ingress addon...
🌟  The 'ingress' addon is enabled
```

2. verify that ingress is running

```bash
kubectl get pods -A
```

you should see this:

```bash
kube-system   ingress-nginx-controller-558664778f-lh755   1/1     Running     0          4m5s
```

## Deploy the strapi

1. deploy the service

```bash
kubectl apply -f 1_service.yaml
```

2. describe the service

```bash
kubectl describe service strapi
```

3. create the deployment

```bash
kubectl apply -f 3_deployment.yaml
```

4. confirm that strapi is running

```bash
kubectl describe deploy strapi
```

or 

```bash
kubectl get pods
```

you should see something like this:

```bash
NAME                    READY   STATUS    RESTARTS   AGE
mysql-f88f9c77b-rwpz8   1/1     Running   0          20m
strapi-9695574c-7bpsv   1/1     Running   12         45m
```

you can also check the strapi logs and ensure that everything is running

```bash
kubectl logs strapi-9695574c-7bpsv
```

## Setup ingress for strapi to be able to access it.

Since we use minikube in our workstations, we need to fake the domain name services by modifying our host file

### On Mac

```bash
sudo nano /etc/hosts
```

add following line in the end of the file 

```bash
127.0.0.1   kubernetesrocks.nl 
```

control + X for save and exit

Try to ping kubernetesrocks.nl and you see that the ip is actually your localhost

```bash
➜ ✗ ping kubernetesrocks.nl             
PING kubernetesrocks.nl (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.049 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.121 ms
```
# hurray 🥳🥳🥳🥳 we have now strapi working and accessible from public
