# Passing configuration and sensitive information to containters

## Passing command-line arguments to containers

Create a fortune script:

``` bash
#!/bin/bash

INTERVAL=$1
echo Configured to generate new fortune every $INTERVAL seconds

mkdir -p /var/htdocs

while :
do 
    echo $(date) Writing fortune to /var/htdocs/index.html 
    /usr/games/fortune > /var/htdocs/index.html
    sleep $INTERVAL
done
```

Create a Dockerfile:

``` dockerfile
FROM ubuntu:latest
RUN apt-get update ; apt-get -y install fortune
ADD fortuneloop.sh /bin/fortuneloop.sh
ENTRYPOINT ["/bin/fortuneloop.sh"]
CMD ["10"]
```

Build a docker image:

``` console
$ docker build -t <your_name>/fortune:args .
```

Push the docker image:

``` console
$ docker push <your_name>/fortune:args 
``` 

Test the docker image:

``` console
$ docker run -it <your_name>/fortune:args
Configured to generate new fortune every 10 seconds
...
```

Create yaml file:

``` yaml
---
apiVersion: v1
kind: Pod
metadata: 
  name: fortune2s
spec:
  containers:
  - image: evalle/fortune:args
    args: ["2"]
    name: html-generator
    volumeMounts:
    - name: html 
      mountPath: /var/htdocs
  - image: nginx:alpine
    name: web-server
    volumeMounts:
    - name: html
      mountPath: /usr/share/nginx/html
      readOnly: true
    ports:
    - containerPort: 80
      protocol: TCP
  volumes:
  - name: html
    emptyDir: {}
...
```

Create a kubernetes pod from the yaml file:

``` console
$ kubectl create -f fortune2s.yaml
```

