# k8s-in-action
Examples from the book ["Kubernetes in Action"](https://www.manning.com/books/kubernetes-in-action) by Marko Luksa

### Chapter 2 
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
note: `--generator=run/v1` is for creating a Replication controller not Deployment

