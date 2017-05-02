## Chapter 6
## Sharing disk storage between containers in the Pod

Auxiliary files for the emptyDir pod's example can be found [here](Chapter_6)

To build the image run
``` bash
$ docker build -t <your_name>/fortune .
$ docker push <your_name>/fortune
```
To create a Kubernetes pod run
``` bash
$ kubectl create -f fortune-pod.yaml
```
