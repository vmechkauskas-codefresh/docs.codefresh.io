---
layout: docs
title: "Image Metadata Annotations"
description: ""
group: codefresh-yaml
permalink: /:path/metadata-annotations/
redirect_from:
  - /docs/metadata-annotations
toc: true
---
Images built by Codefresh can be annotated with customized metadata.
This article explains how to create advanced view of your images and enrich them with custom metadata which perfectly fits your flow and image management process.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/72f58a8-Screen_Shot_2017-10-17_at_1.55.17_PM.png",
        "Screen Shot 2017-10-17 at 1.55.17 PM.png",
        2472,
        1316,
        "#2fb8a9"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Metadata types"
}
[/block]
Images built by Codefresh can be annotated with an array of key-value metadata.
Metadata values may be of the following types:
[block:parameters]
{
  "data": {
    "h-0": "Annotation type",
    "h-1": "Guidelines",
    "h-2": "Example",
    "0-0": "String",
    "0-2": "'Example note'",
    "1-0": "Number",
    "1-1": "use numeric value to set this kind of annotation",
    "1-2": "9999",
    "2-0": "Boolean",
    "2-1": "Use true / false value",
    "2-2": "true",
    "3-0": "Percentage bar",
    "3-1": "use 0-100 value ending with %",
    "3-2": "85%",
    "4-0": "Link",
    "0-1": "Use string",
    "4-1": "use url",
    "4-2": "'${{CF_COMMIT_URL}}'"
  },
  "cols": 3,
  "rows": 5
}
[/block]
You can also use [Expression evaluations](doc:expression-condition-syntax) to set metadata.
[block:api-header]
{
  "title": "Annotate your images using codefresh YAML"
}
[/block]
You can annotate an image as part of it's builds process and also on post build steps.

## Build step Image Metadata Annotation
You can annotate an image as part of its build process by declaring the metadata value on the [Build step](doc:steps#section-build):
1. The `metadata` attribute
2. The `set` operation
3. An array of key-value metadata
[block:code]
{
  "codes": [
    {
      "code": "build_step:\n  type: build\n  ...\n  metadata: # Declare the metadata attribute\n    set: # Specify the set operation\n      - qa: pending\n      - commit_message: ${{CF_COMMIT_MESSAGE}}\n      - exit_code: 0\n      - is_main: \n          evaluate: \"'${{CF_BRANCH}}' == 'main'\"",
      "language": "yaml",
      "name": "build-metadata-annotation"
    }
  ]
}
[/block]
## Adding annotations to Built images on post-build steps
Any step in the YAML workflow can annotate built images by using [Post-Step Operations]({{ site.baseurl }}/docs/{{ site.docs_version }}/codefresh-yaml/post-step-operations/).
To annotate a built image, configure any step with:
1. The post-step operation
2. The `metadata` attribute
3. The `set` operation
4. A list of target images with the variable syntax of `${{build_step_name.imageId}}`
5. An array of key-value metadata
[block:code]
{
  "codes": [
    {
      "code": "build_step:\n  type: build\n  ...\n\nany_step:\n  ...\n  on_success: # Execute only once the step succeeded\n    metadata: # Declare the metadata attribute\n      set: # Specify the set operation\n        - ${{build_step.imageId}}: # Select any number of target images\n          - qa: pending\n          \n  on_fail: # Execute only once the step failed\n    metadata: # Declare the metadata attribute\n      set: # Specify the set operation\n        - ${{build_step.imageId}}: # Select any number of target images\n          - exit_code: 1\n\n  on_finish: # Execute in any case\n    metadata: # Declare the metadata attribute\n      set: # Specify the set operation\n        - ${{build_step.imageId}}: # Select any number of target images\n          - is_main: \n              evaluate: \"'${{CF_BRANCH}}' == 'main'\"",
      "language": "yaml",
      "name": "annotating-step"
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Viewing Image Metadata Annotations"
}
[/block]
You can view an image's metadata annotation by:
1. Navigating to the `Images` view
2. Selecting the target image
3. Selecting the `Annotations` tab
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d4f8f7-Screen_Shot_2017-10-08_at_8.28.35_AM.png",
        "Screen Shot 2017-10-08 at 8.28.35 AM.png",
        2536,
        1312,
        "#2cbaaa"
      ]
    }
  ]
}
[/block]
In addition, you can add selected annotations to the images table on images page. To display an annotation in the image table, click on the gear icon at the top right corner of image page and then select all annotations you want to display.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aec92e8-Screen_Shot_2017-10-17_at_3.01.26_PM.png",
        "Screen Shot 2017-10-17 at 3.01.26 PM.png",
        2323,
        421,
        "#eef5f5"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Example - Quality Image Metadata Annotation"
}
[/block]
You can set a quality indicator to images to show if they passed or failed tests. An image with the boolean annotation `CF_QUALITY` set to true will have a quality indicator in the 'Images' view. 

[block:code]
{
  "codes": [
    {
      "code": "version: '1.0'\nsteps:\n  build_step:\n    type: build\n    image_name: myrepo/imagename\n    working_directory: ./\n    dockerfile: Dockerfile\n    \n  unit_test:\n    image: '${{build_step}}'\n    working_directory: IMAGE_WORK_DIR\n    commands:\n    \t- echo test\n    on_success:\n      metadata:\n        set:\n          - '${{build_step.imageId}}':\n              - CF_QUALITY: true\n    on_fail:\n      metadata:\n        set:\n          - '${{build_step.imageId}}':\n              - CF_QUALITY: false\n",
      "language": "yaml"
    }
  ]
}
[/block]
Image quality has 3 indicators:
* true - this image is considered a quality image (ex. passed tests)
* false - this image is not considered a quality image  (ex. when tests failed but the image was already built)
* no value (nobody set the annotation) - this image has no quality indicator
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c39a9a2-QUALI.png",
        "QUALI.png",
        1027,
        297,
        "#e7edea"
      ],
      "caption": ""
    }
  ]
}
[/block]
