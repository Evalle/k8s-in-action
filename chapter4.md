## Chapter 4  

1. To create the RC via
``` bash
$ kubectl create -f kubapp-rc.yaml
```

2. To add and remove labels from the pod (so pod will be removed from the 
scope of RC) run
``` bash
$ kubectl label pod <pods name> type=special
$ kubectl label pod <pods name> app=kubapp2 --overwrite
$ kubectl get po
```

3. To scale your RC up run
``` bash
$ kubectl scale rc kubapp --replicas=10
```

4. To delete the RC without all pods, run:
``` bash
$ kubectl delete rc kubapp --cascade=false
```

5. To start a new ReplicaSet run
``` bash
$ kubectl create -f kubapp-rs.yaml
```

6. To see information about yours ReplicaSet run:
``` bash
$ kubectl describe rs
```


