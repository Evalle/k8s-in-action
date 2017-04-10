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
