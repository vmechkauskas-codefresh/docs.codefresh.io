---
layout: docs
title: "Codefresh inline YAML"
description: ""
group: codefresh-yaml
permalink: /:path/codefresh-inline-yaml/
redirect_from:
  - /docs/inline-yaml-editing
toc: true
---
Codefresh allows you to select between several options for YAML origin. You can use a codefresh YAML from your repository or  Create and edit a new YAML inline.
Inline yaml, allows you to work on your yaml file, apply changes to your pipeline and test it without committing to the source code for each change.
[block:api-header]
{
  "type": "basic",
  "title": "Configure pipeline using YAML"
}
[/block]
To build your pipeline using a codefresh YAML file, in the workflow section, toggle the configuration method to  ```YAML``` position.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/788b512-Screen_Shot_2017-10-16_at_9.50.48_PM.png",
        "Screen Shot 2017-10-16 at 9.50.48 PM.png",
        2038,
        996,
        "#f3fbfb"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Create advanced workflows by editing codefresh YAML inline"
}
[/block]
Use our inline YAML option to create and edit a codefresh YAML inline.
## Create Codefresh YAML from scratch
1. Select *'Inline YAML'* option.
2. Type in your YAML
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4a82e02-Screen_Shot_2017-10-16_at_10.17.17_PM.png",
        "Screen Shot 2017-10-16 at 10.17.17 PM.png",
        2040,
        788,
        "#f3fafa"
      ]
    }
  ]
}
[/block]
## Enrich basic workflow with advanced settings
After defining basic workflow using codefresh UI, you can enrich it with some advanced settings using *'inline YAML'* option.
1. Define workflow steps using basic workflow configuration
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5efdffc-Screen_Shot_2017-10-16_at_10.23.50_PM.png",
        "Screen Shot 2017-10-16 at 10.23.50 PM.png",
        2032,
        944,
        "#f3f8f8"
      ]
    }
  ]
}
[/block]
2. Switch workflow to YAML mode and select inline YAML option
3. Your workflow will be translated to codefresh YAML
4. Add advanced settings (for example - add image annotations) by editing the basic YAML
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/318b88b-Screen_Shot_2017-10-16_at_10.37.56_PM.png",
        "Screen Shot 2017-10-16 at 10.37.56 PM.png",
        2024,
        918,
        "#21818d"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Use a codefresh.yml from your repo"
}
[/block]
if you have a codefresh YAML in your repository, select *"Use YAML from Repository"* option. 
Enter path to your codefresh.YML file. The path must be relative to the repository root directory. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4035af3-Screen_Shot_2017-10-16_at_10.10.15_PM.png",
        "Screen Shot 2017-10-16 at 10.10.15 PM.png",
        2026,
        486,
        "#f3fafa"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Share single codefresh YAML across different pipelines"
}
[/block]
If you use the same YAML file for different repositories, you can use this option to point to a public url where the yaml resides. This way you can use the same yaml for multiple pipeline and update once when needed.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e6a4188-Screen_Shot_2017-10-23_at_6.58.06_PM.png",
        "Screen Shot 2017-10-23 at 6.58.06 PM.png",
        1968,
        776,
        "#f1f8f8"
      ]
    }
  ]
}
[/block]
The url that you enter must be a public url of a raw YAML file. For example, if you want to add a link to a yaml file located in a public Github repo, you can use the 'Raw' option from the editor menu:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4edbf2-Screen_Shot_2017-10-25_at_11.31.21_AM.png",
        "Screen Shot 2017-10-25 at 11.31.21 AM.png",
        2018,
        1064,
        "#29363f"
      ]
    }
  ]
}
[/block]
