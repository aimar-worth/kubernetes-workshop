# Kubernetes workshop preparation

## Prerequisites

To have a handson experience in this workshop you need to install couple of tools.

  - minikube - Kubernetes single node cluster made for daily local development and testing
  - kubectl - The Kubernetes command-line too

## Minikube installation

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

## Configure and start your minikube

## on Mac

1. Run minikube on hyperkit (we need this to use ingress service)

```bash
minikube config set vm-driver hyperkit
```

2. Start the engine! 

```bash
minikube start --cpus 2 --memory 4096
```

you will see something like this

```bash
😄  minikube v1.17.1 on Darwin 11.0.1
✨  Using the hyperkit driver based on user configuration
💾  Downloading driver docker-machine-driver-hyperkit:
    > docker-machine-driver-hyper...: 65 B / 65 B [----------] 100.00% ? p/s 0s
    > docker-machine-driver-hyper...: 11.44 MiB / 11.44 MiB  100.00% 6.39 MiB p
🔑  The 'hyperkit' driver requires elevated permissions. The following commands will be executed:

    $ sudo chown root:wheel /Users/aareleid/.minikube/bin/docker-machine-driver-hyperkit
    $ sudo chmod u+s /Users/aareleid/.minikube/bin/docker-machine-driver-hyperkit


💿  Downloading VM boot image ...
    > minikube-v1.17.0.iso.sha256: 65 B / 65 B [-------------] 100.00% ? p/s 0s
    > minikube-v1.17.0.iso: 212.69 MiB / 212.69 MiB [] 100.00% 6.98 MiB p/s 30s
👍  Starting control plane node minikube in cluster minikube
🔥  Creating hyperkit VM (CPUs=2, Memory=4000MB, Disk=20000MB) ...
🐳  Preparing Kubernetes v1.20.2 on Docker 20.10.2 ...
    ▪ Generating certificates and keys ...
    ▪ Booting up control plane ...
    ▪ Configuring RBAC rules ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

This means that minikube is running

### On Windows

1. Enable Hyper-V.

Open a PowerShell console as Administrator.

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

2. Run minikube on hyper-v (we need this to use ingress service)

```bash
minikube config set driver hyperv
```

3. Start the engine! 

```bash
minikube start --driver=hyperv
```
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

# You are ready to start with the workshop

After workshop you can stop the minikube to gain back the resources allocated to minikube

```bash
minikube stop
```

You can also pause the minikube. This will not destroy your running application and can be resumed quickly

```bash
minikube pause
```
