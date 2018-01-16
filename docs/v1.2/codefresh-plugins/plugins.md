---
layout: docs
title: "Plugins"
description: ""
group: codefresh-plugins
redirect_from:
  - /docs/plugins
toc: true
---
Codefresh plug-ins are steps that can be added to the pipelines yamls and can help in easily crafting pipelines that execute common tasks like testing, security scanning, updating jira tickets etc.. 

Below you can find a list of plugins currently publicly available, we are working with the community to publish more steps so stay tuned. 

If you have a specific ask for a plug-in please email us at plugin-request@codefresh.io
[block:api-header]
{
  "title": "Stable"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "h-2": "Description",
    "0-0": "[Helm](https://github.com/codefresh-io/cf-plugin-helm)",
    "1-0": "[ Slack](https://github.com/codefresh-io/plugins/tree/master/stable/slack)",
    "2-0": "[Jenkins](https://github.com/codefresh-io/plugins/tree/master/stable/run-jenkins-job)",
    "3-0": "[ ECS](https://github.com/codefresh-io/cf-deploy-ecs.git)",
    "4-0": "[Kompose](https://github.com/codefresh-io/cf-kompose-plugin)",
    "5-0": "[GitHub PR](https://github.com/codefresh-io/github-pr-plugin)",
    "6-0": "[DC/OS](https://github.com/codefresh-io/cf-deploy-dcos)",
    "0-2": "Operate on Codefresh resources",
    "1-2": "Deploy a Helm chart",
    "2-2": "Send message to slack",
    "3-2": "Deploy docker image to ECS",
    "4-2": "Deploy Docker Compose to Kubernetes cluster with Kubernetes Kompose",
    "5-2": "Creates pull request to GitHub",
    "6-2": "Deploy application image to DC/OS cluster",
    "0-1": "Build & Deploy a Helm chart",
    "1-1": "Send a custom slack message from the pipeline",
    "2-1": "Run a Jenkins job from codefresh pipeline",
    "3-1": "Deploy a docker image to ECS",
    "4-1": "Deploy Docker Compose to Kubernetes cluster with Kubernetes Kompose",
    "5-1": "Creates pull request to GitHub",
    "6-1": "Deploy application image to DC/OS cluster",
    "7-0": "[Codefresh CLI](https://github.com/codefresh-io/plugins/tree/master/stable/codefresh-cli)",
    "7-1": "Operate on Codefresh resources"
  },
  "cols": 2,
  "rows": 8
}
[/block]

[block:api-header]
{
  "title": "Incubator"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "[Import Docker Images](https://github.com/codefresh-io/cf-import-image)",
    "0-1": "Import Docker images metadata into Codefresh"
  },
  "cols": 2,
  "rows": 1
}
[/block]
