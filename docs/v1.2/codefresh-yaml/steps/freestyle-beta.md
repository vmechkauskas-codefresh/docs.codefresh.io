---
layout: docs
title: "Freestyle Beta"
description: ""
group: codefresh-yaml
sub_group: steps
redirect_from:
  - /docs/freestyle
toc: true
---
The Freestyle step is designed so you can execute a series of commands in a container.
Select an image to start a container, then you can specify a working directory, and commands.
If you do not specify a working directory or commands, the step runs the organic commands specified by the image.

> Using complex commands in the untyped step requires use of [YAML block scalars](http://stackoverflow.com/questions/3790454/in-yaml-how-do-i-break-a-string-over-multiple-lines).
[block:code]
{
  "codes": [
    {
      "code": "step_name:\n  title: Step Title\n  description: Step description\n  image: image/id\n  working_directory: ${{step_id}}\n  commands: \n    - bash-command1\n    - bash-command2\n  entry_point:\n    - sh\n    - -c\n    - command\n  environment:\n    - key=value\n  fail_fast: false\n  when:\n    branch:\n      only: [ master ]\n  on_success:\n    ...\n  on_fail:\n    ...\n  on_finish:\n    ...",
      "language": "yaml"
    }
  ]
}
[/block]
__**Fields:**__
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "2-0": "```image```",
    "2-1": "The image from which the executable container is created. It can be an explicit ID of a Docker image, or a variable that references a **Build** or **Push** step.",
    "h-2": "Required/Optional/Default",
    "2-2": "Required",
    "3-2": "Default",
    "4-2": "Optional",
    "6-2": "Optional",
    "7-2": "Default",
    "3-0": "```working_directory```",
    "3-1": "The directory from which the commands are executed.  It can be an explicit path in the container's file system, or a variable that references another step.\n\nThe default ```working_directory``` is the cloned repository directory and not the working directory specified by the image.\n\nIf you need to use the default working directory of the image use ```IMAGE_WORK_DIR```.",
    "4-0": "```commands```",
    "4-1": "One or more bash commands to execute.",
    "6-0": "```environment```",
    "6-1": "A set of environment variables for the container.",
    "7-0": "```fail_fast```",
    "7-1": "If a step fails, and the process is halted. The default value is ```true```.",
    "8-0": "```when```",
    "8-1": "Define a set of conditions that need to be satisfied in order to execute this step.\n\nYou can find more information in the [Conditional Execution of Steps](doc:conditional-execution-of-steps) article.",
    "8-2": "Optional",
    "5-0": "```entry_point```",
    "5-1": "An alternative [Docker Container Entrypoint](https://docs.docker.com/engine/reference/builder/#/entrypoint).\nCan be a string or an array of strings.",
    "5-2": "Optional",
    "9-0": "`on_success`, `on_fail` and `on_finish`",
    "9-2": "Optional",
    "9-1": "Define operations to perform upon step completion using a set of predefined [Post-Step Operations]({{ site.baseurl }}/docs/{{ site.docs_version }}/codefresh-yaml/post-step-operations/).",
    "1-0": "```description```",
    "1-1": "A basic, free-text description of the step.",
    "1-2": "Optional",
    "0-0": "```title```",
    "0-1": "The free-text display name of the step.",
    "0-2": "Optional"
  },
  "cols": 3,
  "rows": 10
}
[/block]
__**Exported resources:**__
- Working Directory.
