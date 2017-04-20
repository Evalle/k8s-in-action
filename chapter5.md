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
