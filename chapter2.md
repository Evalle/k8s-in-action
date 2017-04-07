## Chapter 2

0. Use [minikube](https://github.com/kubernetes/minikube) or another 'fast deployment solution' for Kubernetes cluster
1. Create the Docker image from the `app.js` and `Dockerfile`
``` bash
$ docker build -t kubeapp
```
2. Tag and push your Docker image to the Docker hub
``` bash
$ docker tag kubeapp <username>/kubeapp
$ docker push <username>/kubeapp
```
3. Deploy the app.js app
``` bash
$ kubectl run kubeapp --image=evalle/kubeapp --port=8080 --generator=run/v1
```
note: `--generator=run/v1` option is here for creating the *Replication controller* not the *Deployment*

4. Create a service
``` bash
$ kubectl expose rc kubeapp --type=LoadBalancer --name=kubeapp-http
```
note: `rc` is for `replicationcontroller`

5.  If you'tre using minikube for Kubernetes cluster run
``` bash
$ minikube service kubeapp-http
```
to get an `ip address` and `port` of your Kubernetes cluster, see this [issue](https://github.com/kubernetes/minikube/issues/384) for more info.

6. Scale up an application via:
``` bash
$ kubectl scale rc kubeapp --replicas=3
```

