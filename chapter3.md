## Chapter 3

1. To get the whole yaml output from the pod run:
``` bash
$ kubectl get po <pod's name> -o yaml
```

2. Deploy an app manually:
``` bash
$ kubectl create -f nodejs_app.yaml
```

3. Expose the port to connect to the pod directly (not through the service)
``` bash
$ kubectl port-forward kubapp-manual 8888:8080
...
$ curl 127.0.0.1:8888
...
```
Note: `The port exsposion is really helpful when you're trying to debug your pod`

4. Create an app with labels:
``` bash
$ kubectl create -f  nodejs-app-with-labels.yaml
$ kubectl get po --show-labels
```

5. To modify label of existing container run:
``` bash
$ kubectl label po kubapp-manual creation_method=manual
$ kubectl label po kubapp-manual-v2 env=debug --overwrite
```

6. To see the namespaces run:
``` bash
$ kubectl get ns
```

7. To create the namespace from the file run:
``` bash
$ kubectl create -f custom-namespace.yaml
```

8. To create a resource in the new namespace run:
``` bash
$ kubectl create -f nodejs_app.yaml --namespace=custom-namespace
$ kubectl get po --all-namespases
```
