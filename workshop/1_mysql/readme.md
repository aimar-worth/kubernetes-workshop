# MySQL Database deployment

## Secrets 

1. deploy the secrets

```bash
kubectl create -f secrets.yaml
```

2. check if secret was created

```bash
kubectl get secrets
```

should see something like this

```bash
NAME                  TYPE                                  DATA   AGE
default-token-l5l92   kubernetes.io/service-account-token   3      71m
mysql-root-password   Opaque                                1      59s
```

3. describe the secret to see the content

```bash
kubectl describe secret mysql-root-password
```

4. Decode the Secret

```bash
kubectl get secret mysql-root-password -o jsonpath='{.data.password}' | base64 --decode
```

## Persistent volumes

1. Apply to create PersistentVolume and PersistentVolumeClaim

```bash
kubectl apply -f 1_persistent-volumes.yaml
```

2. Check if volume is created

```bash
kubectl get PersistentVolume
```

3. Run describe on volume to get more info

```bash
kubectl describe PersistentVolume
```

4. Check if claim is created and pending

```bash
kubectl describe PersistentVolumeClaim
```

## MySQL service

1. Create mysql service

```bash
kubectl apply -f 2_service.yaml  
```

2. check if service is created

```bash
kubectl get services
```

3. describe to see more info

```bash
kubectl describe service mysql
```

## MySQL deployment

1. Create mysql deployment

```bash
kubectl apply -f 3_deployment.yaml 
```

2. check the status

```bash
kubectl get deploy
```

3. describe to see more info

```bash
kubectl describe deploy mysql
```

4. check if the mysql pod is running

```bash
kubectl get pods
```

```bash
NAME                    READY   STATUS    RESTARTS   AGE
mysql-f88f9c77b-f6rtj   1/1     Running   0          8m46s
```

5. check the mysql logs

```bash
kubectl logs mysql-f88f9c77b-f6rtj
```

## create database for strapi

By the way - this step could be automated with ConfigMap but to learn how to log in to running POD and do changes in there we will do this step manually.

1. get mysql pod name

```bash
kubectl get pods
```

should see something like this

```bash
NAME                    READY   STATUS             RESTARTS   AGE
mysql-f88f9c77b-rwpz8   1/1     Running            0          12m
```

2. "log in" to pod interactivly

```bash
kubedctl exec -it mysql-f88f9c77b-rwpz8 bash
```

you will see the normal bash command prompt

3. Login to mysql service

```bash
mysql -u root -p
```

Enter the password we crated as a secret before the mysql deployment.
You will see mysql client prompt

4. create an database called strapi

```bash
CREATE DATABASE strapi;
```

5. check if database was created

```bash
SHOW DATABASES;
```

you should see following:

```bash
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| strapi             |
+--------------------+
4 rows in set (0.00 sec)
```

# yay! we have running mysql database with presistent storage in our host (workstation)