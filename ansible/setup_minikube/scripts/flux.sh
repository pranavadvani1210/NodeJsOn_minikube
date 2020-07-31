#!/bin/bash
export GHUSER=pranavadvani1210
fluxctl install --git-user=${GHUSER} --git-email=${GHUSER}@users.noreply.github.com --git-url=git@github.com:${GHUSER}/NodeJS_on_Minikube --git-path=k8/dev,k8/prod --namespace=flux | kubectl apply -f -
apt install socat
fluxctl identity --k8s-fwd-ns flux
