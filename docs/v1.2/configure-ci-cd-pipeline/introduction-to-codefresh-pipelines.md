---
layout: docs
title: "Introduction to Codefresh pipelines"
description: ""
group: configure-ci-cd-pipeline
redirect_from:
  - /docs/introduction-to-codefresh-pipelines
toc: true
---
[block:api-header]
{
  "title": "What are Codefresh pipelines?"
}
[/block]
Codefresh pipelines are container native and can be configured to automate a sequence of steps that can ends in a deployment to production, push of an image to a Docker registry and more.
[block:api-header]
{
  "title": "Key Benefits"
}
[/block]
- Every step in the pipeline is running inside a container. 
- Steps in the pipeline share the same volume, hence later steps can use artifacts from previous steps.
- Steps can export [environment variables](doc:variables) that can be used in later steps in the pipeline.
- Steps can be set to run on certain conditions (branch, value of environment variable etc..)
- Steps can annotate the built Docker image with any attribute (test status, link to detailed test report etc...
- There are out of the box steps to spin up a composition (multiple services at once), then run UI / Integration / Performance text, then shut down the composition. Learn more about [Codefresh pipeline's steps](doc:steps) 
[block:api-header]
{
  "title": "Pipeline configuration"
}
[/block]
To configure existing pipeline or add new pipeline, click on the cogwheel icon on the relevant repository.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2254889-pipeline.png",
        "pipeline.png",
        280,
        175,
        "#e1e2df"
      ]
    }
  ]
}
[/block]
You can have one or more pipeline for the same repository. click on the '+' to add a new pipeline
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33f2a22-multi-pipeline.png",
        "multi-pipeline.png",
        738,
        133,
        "#f0f6f6"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Editing pipeline steps and flow"
}
[/block]
There are two modes to define the pipeline workflow/steps. 
- Using the built-in pre-defined steps in the UI
- Using [Codefresh's Yaml format](doc:what-is-the-codefresh-yaml)

You can switch between Yaml and the Built-in steps using the toggle in the pipeline's configuration view.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2d0c3d5-toggle.png",
        "toggle.png",
        122,
        28,
        "#ebf1f0"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Pipeline Triggers and webhook"
}
[/block]
On the General settings of the pipeline, you can configure the trigger for the pipeline. You can at any time trigger a pipeline manually as well.
Here are the options to trigger pipeline execution
- Manual from the **Build** button at the bottom of the pipeline or on the repository
- Setting a webhook on any commit or pull request on all branches or on specific branches (using a regular expression)
- From any other tool or command line by copying the webhook and calling it directly.
- Using the Jenkins plug-in to invoke it from Jenkins
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f77ae1-pipeline-trigger.png",
        "pipeline-trigger.png",
        1130,
        392,
        "#e5f2f2"
      ]
    }
  ]
}
[/block]
