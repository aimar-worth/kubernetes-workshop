# Deploying SPA application

## Deploy frontend

1. deploy frontend service

```bash
kubectl apply -f 1_service.yaml
```

2. Validate the pod

```bash
kubectl describe service frontend
```

3. Deploy frontend

```bash
kubectl apply -f 2_deployment.yaml
```

4. Validate frontend pod

```bash
kubectl get pods
```

should see this

```bash
frontend-74b946b69-8vz28   1/1     Running       0          53s
```

5. Describe frontend pod to check if everything is ok

```bash
kubectl describe pod frontend-74b946b69-8vz28
```

6. Apply frontend ingress

```bash
kubectl apply -f 3_frontend-ingress.yaml 
```

7. Check if ingress was created

```bash
kubectl get ingress
```

should see...

```bash
NAME                   CLASS    HOSTS                ADDRESS        PORTS   AGE
frontend-ingress       <none>   kubernetesrocks.nl   192.168.64.2   80      15s
```

Its time to test website via browser