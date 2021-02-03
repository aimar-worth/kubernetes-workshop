# Kubernetes Workshop in Worth

## Prerequisites

To have a handson experience in this workshop you need to install couple of tools.

  - minikube - Kubernetes single node cluster made for daily local development and testing
  - kubectl - The Kubernetes command-line too

The most easiest way to install minikube

## Minikube

### Install on Mac 

[Brew Package Manager](https://brew.sh/)

```bash
brew install minikube
```

If which minikube fails after installation via brew, you may have to remove the minikube cask and link the binary:

```bash
brew cask remove minikube
brew link minikube
```

Download Minikube directly

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
sudo install minikube-darwin-amd64 /usr/local/bin/minikube
```

### Install on Windows 

[Windows Package Manager](https://docs.microsoft.com/en-us/windows/package-manager/)

```powershell
winget install minikube
```

[Chocolatey Package Manager](https://chocolatey.org/)

```powershell
choco install minikube
```

[Download Minikube Windows Installer](https://storage.googleapis.com/minikube/releases/latest/minikube-installer.exe)

## Start your minikube

```bash
minikube start
```

you will see something like this

```bash
😄  minikube v1.17.1 on Darwin 11.0.1
✨  Automatically selected the docker driver. Other choices: hyperkit, virtualbox, ssh
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
💾  Downloading Kubernetes v1.20.2 preload ...
    > preloaded-images-k8s-v8-v1....: 491.22 MiB / 491.22 MiB  100.00% 23.98 Mi
🔥  Creating docker container (CPUs=2, Memory=1989MB) ...
🐳  Preparing Kubernetes v1.20.2 on Docker 20.10.2 ...
    ▪ Generating certificates and keys ...
    ▪ Booting up control plane ...
    ▪ Configuring RBAC rules ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

This means that minikube is running

## kubectl installation

### Install on Mac

```bash
brew install kubectl 
```

Test to ensure the version you installed is up-to-date

```bash
kubectl version --client
```

### Install on Windows

Download the latest kubectl to c:\kube

```powershell
curl -LO https://dl.k8s.io/release/v1.20.2/bin/windows/amd64/kubectl.exe
```

Add the binary in to your PATH by going to Advance System settings > Environment Variables
and edit path by adding “C:\kube”

Test to ensure the version on command promt

```cmd
kubectl version --client
```