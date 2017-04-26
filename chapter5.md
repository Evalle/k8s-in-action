## Chapter 5  
 
1. To create a service run
``` bash
$ kubectl create -f kubapp-svc.yaml
```
2. To list the services run:
``` bash
$ kubectl get svc
```

3. To remotely execute command in running container run:
``` bash
$ kubectl exec <name_of_the_pod> -- curl -s http://address
```

4. To configure session affinity on the service run:
``` bash
$ kubectl create -f kubapp-svc-affinity.yaml
$ kubectl exec <name_of_the_pod> -- curl -s http://address
```
Note: you will hit the same pod 

5. Accessing the bash shell in a container inside a pod
``` bash
$ kubectl exec -it <pods name> bash
```

Example:
```
  $ kubectl exec -it kubapp-ds72z bash
  root@kubapp-ds72z:/# curl http://kubapp
  You've hit kubapp-ds72z
  root@kubapp-ds72z:/# curl http://kubapp.default
  You've hit kubapp-ds72z
  root@kubapp-ds72z:/# cat /etc/resolv.conf
  search default.svc.cluster.local svc.cluster.local cluster.local
  nameserver 10.0.0.10
  options ndots:5
```

6. Create endpoints and service separately:
``` bash
$ kubectl create -f kubapp-endpoints.yaml
$ kubectl create -f kubapp-manual-svc-endpoint.yaml
```

Check service' functionality via:
``` bash 
$ kubectl exec <name of the pod> -- curl http://ip_of_the_service
```

7. An example of the ExternalName service can be found [here](Chapter_5/externalname.yaml)

8. An example of exposing service externally by setting an external IP address
on it can be found [here](Chapter_5/external_IP.yaml)

9. An example of a NodePort service can be found [here](Chapter_5/nodeport.yaml)

10. An example of a LoadBalancer service can be found [here](Chapter_5/kubapp-loadbalancer.yaml)

If you wanna test it with Minikube, run 
``` bash
$ minikube service <name of the service>
``` 

11. For the Ingress testing, activate Ingress addon in minikube first:
``` bash
$ minikube addons enable ingress
```
then create the Ingress service (example is [here](Chapter_5/ingress.yaml))
``` bash
$ kubectl create -f ingress.yaml
```
check that Ingress service was created successfully
```bash
$ kubectl get ing
NAME             HOSTS                ADDRESS          PORTS     AGE
kubapp-ingress   kubapp.example.com   192.168.99.100   80        18h
```
check Ingress functionality:
``` bash
$ curl 192.168.99.100
```


