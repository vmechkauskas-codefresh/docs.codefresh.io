---
layout: docs
title: "Working Directories"
description: ""
group: codefresh-yaml
redirect_from:
  - /docs/working-directories
toc: true
---
In the context of a step, a working directory can be of the following type:
[block:parameters]
{
  "data": {
    "h-0": "Working Directory",
    "h-1": "Description",
    "0-0": "**Empty**",
    "0-1": "Defaults to the cloned directory of the service. Also can be available by variable `${{main_clone}}`",
    "1-0": "Variable that contains the ID of a [**git-clone**](steps#section-git-clone) step",
    "1-1": "Runs the step within the cloned directory.",
    "2-0": "Variable that contains the ID of any other step",
    "2-1": "Runs the step within the same working directory that the specified was executed.\nThis option is not available for for [**Git Clone**](doc:steps#section-git-clone) steps.",
    "3-0": "Absolute filesystem path",
    "3-1": "Treated as is within the container.",
    "4-0": "Relative filesystem path",
    "4-1": "Treated as relative path from the cloned directory of the service",
    "5-0": "'IMAGE_WORK_DIR'",
    "5-1": "When using a freestyle step, by default the working directory will be the cloned directory of the service. Use this value in-order to use the image working directory\nfor example:\n`working_directory: IMAGE_WORK_DIR`"
  },
  "cols": 2,
  "rows": 6
}
[/block]
