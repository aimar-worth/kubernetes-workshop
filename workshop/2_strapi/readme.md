# Deploying Strapi

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
### Domain setup

Since we use minikube in our workstations, we need to fake the domain name services by modifying our host file

### Get Ingress IP address

```bash
kubectl get ingress
```

You should see this:

```bash
NAME                   CLASS    HOSTS                ADDRESS        PORTS   AGE
strapi-admin-ingress   <none>   kubernetesrocks.nl   192.168.64.2   80      5d21h
strapi-ingress         <none>   kubernetesrocks.nl   192.168.64.2   80      7d17h
```

Address you see is the ingress IP address

### On Mac

```bash
sudo nano /etc/hosts
```

add following line in the end of the file 

```bash
192.168.64.2   kubernetesrocks.nl 
```

control + X for save and exit

Try to ping kubernetesrocks.nl and you see that the ip is actually your localhost

```bash
➜ ✗ ping kubernetesrocks.nl             
PING kubernetesrocks.nl (192.168.64.2): 56 data bytes
64 bytes from 192.168.64.2: icmp_seq=0 ttl=64 time=0.049 ms
64 bytes from 192.168.64.2: icmp_seq=1 ttl=64 time=0.121 ms
```

### On Windows 10

On windows the IP address might be different. Just run the command to get all ingresses and get the IP address from there.

Run notepad as Administrator

![Windows 10](https://www.groovypost.com/wp-content/uploads/2018/01/notepad-as-administrator.jpg)

In Notepad, click File then Open… In the File name field, paste the following path in:

*c:\Windows\System32\Drivers\etc\hosts*

![Windows 10](https://www.groovypost.com/wp-content/uploads/2018/01/hosts-as-admini.jpg)

Now you’ll be able to edit and save changes to your HOSTS file.

add the line in the end of the file

```powershell
x.x.x.x  kubernetesrocks.nl 
```

Save the file!

## Deploy Strapi

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

5. Create ingress for Strapi routes

```bash
kubectl apply -f 3_api_ingress.yaml
```

Confim its created

```bash
kubectl describe ingress strapi-ingress
```

6. Create ingress for Strapi admin dashboard

```bash
kubectl apply -f 4_strapi_admin_ingress.yaml
```

Confirm its created

```bash
kubectl describe ingress strapi-admin-ingress
```
# hurray 🥳🥳🥳🥳 we have now strapi working and accessible from public

Strapi admin url > http://kubernetesrocks.nl/admin

Strapi home routes > http://kubernetesrocks.nl/api/home


## Troubleshooting tips


1. If ingress is not working then you can check the ingress logs

```bash
kubectl get pods -A
```

You should see something like this

```bash
kube-system   ingress-nginx-controller-558664778f-lh755   1/1     Running     7          4d19h
```

This is how you get the name of the pod

Access the logs 

```bash
kubectl logs ingress-nginx-controller-558664778f-lh755 -n kube-system
```

You can follow the log trail by adding -f in the end of the command

2. If your strapi pod is not able to start...

you can describe the pod and see the previous events

get the pod name:

```bash
kubectl get pods
```

```bash
strapi-675c749cd6-5h6q8   1/1     Running   5          4d
```

describe the pod

```bash
kubectl describe pod strapi-675c749cd6-5h6q8
```