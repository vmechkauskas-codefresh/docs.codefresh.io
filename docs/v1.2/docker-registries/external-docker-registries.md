---
layout: docs
title: "External Docker Registries"
description: ""
group: docker-registries
redirect_from:
  - /docs/docker-registry
toc: true
---
Codefresh enables you to integrate with several Docker container registries, including:

  * [Docker Hub]({{ site.baseurl }}/docs/{{ site.docs_version }}/docker-registries/external-docker-registries/dockerhub)
  * [Google Container Registry]({{ site.baseurl }}/docs/{{ site.docs_version }}/docker-registries/external-docker-registries/google-cloud-registry)
  * [Amazon EC2 Container Registry]({{ site.baseurl }}/docs/{{ site.docs_version }}/docker-registries/aws)
  * [Bintray.io]({{ site.baseurl }}/docs/{{ site.docs_version }}/docker-registries/external-docker-registries/bitrayio)
  * [Quay.io]({{ site.baseurl }}/docs/{{ site.docs_version }}/docker-registries/external-docker-registries/quayio)
  * [Other Registries]({{ site.baseurl }}/docs/{{ site.docs_version }}/docker-registries/external-docker-registries/other-registries)

For a different registry choose to configure using the [Other](https://docs.codefresh.io/docs/other-registries) option.

The registries can either be public or private.

## General configuration
To configure your registries navigate to the **Docker Registry** view under `Account Management > Integrations`.

{% include image.html lightbox="true" file="https://files.readme.io/c355ce9-integrations-page.png" url="https://files.readme.io/c355ce9-integrations-page.png" alt="Codefresh Account Integration" max-width="45%" %}

Add a new registry configuration from the drop down.

{% include image.html lightbox="true" file="https://files.readme.io/cf0975d-add-registry.png" url="https://files.readme.io/cf0975d-add-registry.png" alt="Add Docker Registry" max-width="45%" %}

Each configuration must be given a unique name, which you can later reference in a Codefresh.yaml file.

{% include image.html lightbox="true" file="https://files.readme.io/2924d81-registry-name.png" url="https://files.readme.io/2924d81-registry-name.png" alt="Specify Docker Registry Name" max-width="65%" %}

## Pushing an image
Once your registry configuration is all set up you can start pushing you images to it.

Codefresh provides you with two options of how to push an image to a registry.

{:.text-secondary}
### Using the Pipelines view

{:start="1"}
1. Navigate to a repository **Pipelines** view

{:start="2"}
2. Under **Build and Unit Test** select your preconfigured registry.
{% include image.html lightbox="true" file="https://files.readme.io/22ecd84-pipeline-registry.png" url="https://files.readme.io/22ecd84-pipeline-registry.png" alt="Pipeline Registry" max-width="45%" %}

{:.text-secondary}
### Using a Codefresh.yaml file
In a push step you can place your registry configuration name in the `registry` field

  `Codefresh.yaml`
{% highlight yaml %}
push_step:
  type: push
  description: Free text description
  candidate: ${{build_step}}
  tag: ${{CF_BRANCH}}
  registry: <your-registry-configuration-name>
{% endhighlight %}
