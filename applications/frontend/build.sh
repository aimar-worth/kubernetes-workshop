#!/bin/bash

docker build -t aimaraa/workshop-frontend:latest --build-arg http://kubernetesrocks.nl/api .
docker push aimaraa/workshop-frontend:latest