---
layout: docs
title: "Introduction"
description: ""
group: codefresh-yaml
permalink: /:path/what-is-the-codefresh-yaml/
redirect_from:
  - /docs/what-is-the-codefresh-yaml
toc: true
---
Quick example:

  `Text`
{% highlight yaml %}
version: '1.0'
steps:
  build_image:
    type: build
    description: Building the image...
    image-name: myuser/myservice
    tag: develop # ${{CF_BRANCH}}

  perform_tests:
    image: node:5
    working_directory: ${{main_clone}}
    description: Performing unit tests...
    commands:
      - npm install gulp -g 
      - npm install
      - gulp unit_test
{% endhighlight %}

You can customize your build environment (pipeline) by using the Codefresh YAML file, ```codefresh.yml```. Codefresh uses the build specifications in the ```codefresh.yml``` file to execute your build. The ```codefresh.yml``` can be basic, or include intricate build specifications.

A YAML file is comprised of a series of steps that are executed in the order in which they are specified.

  `codefresh.yml`
{% highlight yaml %}
version: '1.0'

steps:
  step-name:
    [step-contents]
  another-step:
    [step-contents]
  the-very-last-step:
    [step-contents]
{% endhighlight %}
 
You must define a step type for each step. Each step uses Docker images and containers as facilitators for execution. For example, the [**Freestyle**](doc:steps#section-freestyle) step spins up a container and executes the specified shell commands from the YAML file. 

Each step produces a resource, which you can reference in other steps, and are executed in real-time. For example, a [**Freestyle**](doc:steps#section-freestyle) step can reference an image that was produced by a [**Build**](doc:steps#section-build) step. This allows you to chain steps together, and create highly-customized builds.

<div class="bd-callout bd-callout-info" markdown="1">
##### Variables

Steps chaining and referencing is possible due to implementation of variables in yml file - read more on relevant [section]({{ site.baseurl }}/docs/{{ site.docs_version }}/codefresh-yaml/variables/)
</div>

{: .table .table-bordered .table-hover}
| Step Type                                   | Description                                    |
| ------------------------------------------- | ---------------------------------------------- |
| [Build](build-1)                            | Builds a Docker image.                         |
| [Push](push-1)                              | Pushes a Docker image to a Docker registry.    |
| [Git Clone](git-clone)                      | That step not required and added automatically |
| [Composition](composition-1)                | Start a finite Docker Composition.             |
| [Launch Composition](launch-composition-2)  | Start a long term Docker composition           |
| [Freestyle](freestyle)                      | Execute one or more shell commands.            |

To build your pipeline using a ```codefresh.yml``` file, in the General Settings section, toggle the ```Use YML build``` option to the **ON** position.

{% include image.html lightbox="true" file="https://files.readme.io/5c37025-Screen_Shot_2017-10-16_at_9.50.48_PM.png" url="https://files.readme.io/5c37025-Screen_Shot_2017-10-16_at_9.50.48_PM.png" alt="pipeline definition options" caption="Switching between the legacy build engine and the YAML build engine" max-width="40%" %}
