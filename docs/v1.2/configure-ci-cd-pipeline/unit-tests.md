---
layout: docs
title: "Unit Tests"
description: ""
group: configure-ci-cd-pipeline
redirect_from:
  - /docs/setup-unit-tests
toc: true
---
With Codefresh, you can easily set your unit tests to run on every build.
You configure your unit test script inside the service's settings page or YML file.
[block:api-header]
{
  "type": "basic",
  "title": "Run Unit Tests from the Codefresh UI"
}
[/block]
1. Click **Pipelines** (gear icon) on your service.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a3236fd-2016-10-14_13-28-57.png",
        "2016-10-14_13-28-57.png",
        435,
        188,
        "#a8a7a7"
      ]
    }
  ]
}
[/block]
2. Define your unit test script.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e70a039-2016-10-14_13-35-42.png",
        "2016-10-14_13-35-42.png",
        1833,
        744,
        "#adadad"
      ],
      "caption": "For example we input command(will print the date) - echo $(date)"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Make sure your testing frameworks are installed in your service Docker image. For full documentation on Dockerfile commands, visit the [Docker documentation](https://docs.docker.com/engine/reference/builder/).",
  "title": "IMPORTANT:"
}
[/block]
3.  Click **Save** and **Build** the project.

### **What to do next**: 
Expand the **Running Unit Tests** section to view the actions taken during the test.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2b48af2-2016-10-14_13-46-53.png",
        "2016-10-14_13-46-53.png",
        1828,
        384,
        "#aaaaab"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Run unit tests using the codefresh.yml file"
}
[/block]
### What is a YAML file?
For more information about the ```codefresh.yml``` file, click [here](https://docs.codefresh.io/v1.0/docs/what-is-the-codefresh-yaml).

1. Add a unit-test step to your ```codefresh.yml``` file.
 Example:
[block:code]
{
  "codes": [
    {
      "code": "version: '1.0'\n\nsteps:\n  build-prj-name:\n    type: build\n    description: codefresh example\n    image-name: codefreshexamples/expressangular\n    dockerfile: Dockerfile\n    tag: latest\n  unit-tests:\n    image: node:latest # image that contains installed tools for performing test commands\n    commands:\n      - echo $(date)",
      "language": "yaml",
      "name": "codefresh.yml"
    }
  ]
}
[/block]
2. In your pipeline switch to the **Use YML build**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd47675-codefresh_yml_build.png",
        "codefresh_yml_build.png",
        1686,
        387,
        "#f0f1f0"
      ]
    }
  ]
}
[/block]
3. Click **Save** and **Build**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eca7ebb-2016-10-14_14-10-09.png",
        "2016-10-14_14-10-09.png",
        1746,
        344,
        "#dde4e4"
      ]
    }
  ]
}
[/block]
### **What to do next**: 
Expand the **Running Unit Tests** section to view the actions taken during the test.
[block:api-header]
{
  "type": "basic",
  "title": "Run tests with composition"
}
[/block]
A **Composition** is a number of containers that define a micro-services based application. For example, it can include all services, or a sub-subset of services.

1. Select the 'Run tests with composition' check box.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d4b5997-6c54eef-2016-10-13_20-09-41.png",
        "6c54eef-2016-10-13_20-09-41.png",
        1762,
        325,
        "#b4b4b4"
      ]
    }
  ]
}
[/block]
2. Select a composition.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fde5fc0-acce127-2016-10-13_20-15-53.png",
        "acce127-2016-10-13_20-15-53.png",
        883,
        311,
        "#b8b8b8"
      ]
    }
  ]
}
[/block]
3. There are two ways to run with composition: 
   *    **Attach to Composition** - The image will be attached to the composition as a new service named `cf_unit_test` and the script will run inside it.
   *    **Replace service** - Choose a candidate service from your composition which Codefresh will use to run your unit tests on. Notice that the image of that candidate will be replaced with the built image from the previous step and the command will be overridden by the unit test script. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5052f19-image4.png",
        "image4.png",
        905,
        219,
        "#f7f7f8"
      ],
      "caption": "Selecting the Replace Service option"
    }
  ]
}
[/block]
4. In Pipelines your service click **Save** and build your project.

### **Result**: In the log of process “Unit tests”, we can see which actions the test makes.
