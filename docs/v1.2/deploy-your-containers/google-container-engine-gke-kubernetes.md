---
layout: docs
title: "Google Container Engine (GKE) - Kubernetes"
description: ""
group: deploy-your-containers
redirect_from:
  - /docs/google-container-engine-gke-kubernetes
toc: true
---
Google Container Engine is a powerful cluster manager and orchestration system for running your Docker containers built on Kubernetes. Deploying to GKE will follow the standard Kubernetes steps outlined below.
 
## Deploy to Kubernetes on Google Container Engine (GKE)
The deployment script makes the following assumptions about your application and Kubernetes configuration:

- The application is deployed using the Kubernetes deployment API (versus the the replication controller directly). For more information read http://kubernetes.io/docs/user-guide/deployments/
- The tested codebase has a yaml file that describes the Kubernetes deployment parameters and configuration of your application.
- At the moment, only the basic username/pass authentication is supported.

{{site.data.callout.callout_info}}
##### Try this example

Just head over to the example [__repository__](https://github.com/codefreshdemo/cf-deploy-kubernetes){:target="_blank"} in Github.
{{site.data.callout.end}}

{{site.data.callout.callout_info}}
Edit `codefresh.yml` and `deployment.yml.tmpl` files. Change `$docker-image` with the name of the docker image you would like to create.
{{site.data.callout.end}}

  `codefresh.yml`
{% highlight yaml %}
{% raw %}

----

{% endraw %}
{% endhighlight %}

[block:code]
{
  "codes": [
    {
      "code": "version: '1.0'\n\nsteps:\n  build:\n    type: build\n    working-directory: ${{initial-clone}}\n    image-name: ncodefresh/cf-kubernetes-test\n    tag: '${{CF_REVISION}}'\n\n  push:\n    type: push\n    candidate: ${{build}}\n    tag: ${{CF_BRANCH}}\n\n  deploy-to-kubernetes-staging:\n    image: codefreshio/kubernetes-deployer:master\n    tag: latest\n    working-directory: ${{initial-clone}}\n    commands:\n      - /deploy/bin/deploy.sh ./root\n    environment:\n      - ENVIRONMENT=${{ENVIRONMENT}}\n      - KUBERNETES_USER=${{KUBERNETES_USER}}\n      - KUBERNETES_PASSWORD=${{KUBERNETES_PASSWORD}}\n      - KUBERNETES_SERVER=${{KUBERNETES_SERVER}}\n      - DOCKER_IMAGE_TAG=${{CF_REVISION}}",
      "language": "yaml",
      "name": "codefresh.yml"
    }
  ]
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: alpine-nginx\nspec:\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: alpine-nginx\n    spec:\n      containers:\n        - name: alpine-nginx\n          image: $docker-image:$DOCKER_IMAGE_TAG\n          ports:\n            - containerPort: 80\n              name: http",
      "language": "yaml",
      "name": "deployment.yml.tmpl"
    }
  ]
}
[/block]
Set up the following environment variables to specify the Kubernetes cluster we'll use to deploy the project.
[block:parameters]
{
  "data": {
    "h-0": "Variable",
    "h-1": "Description",
    "0-0": "KUBERNETES_USER",
    "1-0": "KUBERNETES_PASSWORD",
    "2-0": "KUBERNETES_SERVER",
    "2-1": "The server (HTTPS endpoint) of the Kubernetes cluster's API. Mandatory.",
    "0-1": "The user for the Kubernetes cluster. Mandatory.",
    "1-1": "The password for the Kubernetes cluster. Mandatory.",
    "3-0": "ENVIRONMENT",
    "3-1": "The name of the file with environment variables. Note, this file should be located in the folder 'environments' that is located by the same path like deployment.yml.tmpl. For this example use filename 'staging'"
  },
  "cols": 2,
  "rows": 4
}
[/block]
1. Run the build in Codefresh.io
2. Check that the deployment succeeded with kubectl:
[block:code]
{
  "codes": [
    {
      "code": "kubectl get pods -l app=alpine-nginx",
      "language": "text",
      "name": "command"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/670df2f-codefresh_deploy_to_kubernetes.png",
        "codefresh_deploy_to_kubernetes.png",
        1724,
        772,
        "#2c3434"
      ]
    }
  ]
}
[/block]
