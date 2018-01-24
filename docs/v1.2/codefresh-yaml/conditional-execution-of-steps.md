---
layout: docs
title: "Conditional Execution of Steps"
description: ""
group: codefresh-yaml
redirect_from:
  - /docs/conditional-execution-of-steps
toc: true
---
For each step in a ```codefresh.yml``` file, you can define a set of conditions which need to be satisfied in order to execute the step. (An introduction to the ```codefresh.yml``` file can be found [here](doc:what-is-the-codefresh-yaml).)

There are currently two main methods to define conditions: branch conditions and expression conditions. 
[block:api-header]
{
  "type": "basic",
  "title": "Branch Conditions"
}
[/block]
Usually, you'll want to define a branch condition, be it of the type ```ignore``` for blacklisting a set of branches or of the type ```only``` for whitelisting a set of branches. Each branch specification can either be an exact branch name, e.g. ```master```, or a regular expression, e.g. ```/hotfix$/```. Case insensitive regexps (```/^FB-/i```) are also supported.

Here are some examples:

Only execute for the ```master``` branch:
[block:code]
{
  "codes": [
    {
      "code": "  build-step:\n    description: Building the image.\n    type: build\n    dockerfile: Dockerfile\n    image-name: someRepo/someUser\n    when:\n      branch:\n        only:\n          - master\n",
      "language": "text",
      "name": "only-master-branch"
    }
  ]
}
[/block]
Only execute for branches whose name begins with ```FB-``` prefix (feature branches):
[block:code]
{
  "codes": [
    {
      "code": "  build-step:\n    description: Building the image.\n    type: build\n    dockerfile: Dockerfile\n    image-name: someRepo/someUser\n    when:\n      branch:\n        only:\n          - /^FB-.*/i\n",
      "language": "text",
      "name": "only-feature-branches"
    }
  ]
}
[/block]
Ignore the develop branch and master branch:
[block:code]
{
  "codes": [
    {
      "code": "  build-step:\n    description: Building the image.\n    type: build\n    dockerfile: Dockerfile\n    image-name: someRepo/someUser\n    when:\n      branch:\n        ignore:\n          - master\n          - develop\n",
      "language": "text",
      "name": "ignore-master-and-develop-branch"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Regular Expressions Flavour",
  "body": "The [JavaScript regular expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions) flavour is the one used in branch conditions."
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Expression Conditions"
}
[/block]
Alternatively, you can use more advanced expression conditions.

This follows the standard [expression condition syntax](doc:expression-condition-syntax). In this case, you can choose to execute if ```all``` expression conditions evaluate to ```true```, or to execute if ```any``` expression conditions evaluate to ```true```.

Here are some examples. Execute if the string ```[skip ci]``` is not part of the main repository commit message AND if the branch is ```master```
[block:code]
{
  "codes": [
    {
      "code": "  build-step:\n    description: Building the image.\n    type: build\n    dockerfile: Dockerfile\n    image-name: someRepo/someUser\n    when:\n      condition:\n        all:\n          noSkipCiInCommitMessage: 'includes(lower(\"${{CF_COMMIT_MESSAGE}}\"), \"skip ci\") == false'\n          masterBranch: '\"${{CF_BRANCH}}\" == \"master\"'",
      "language": "text",
      "name": "all-conditions"
    }
  ]
}
[/block]
Execute if the string ```[skip ci]``` is not part of the main repository commit message, OR if the branch is not a feature branch (i.e. name starts with FB-)
[block:code]
{
  "codes": [
    {
      "code": "  build-step:\n    description: Building the image.\n    type: build\n    dockerfile: Dockerfile\n    image-name: someRepo/someUser\n    when:\n      condition:\n        any:\n          noSkipCiInCommitMessage: 'includes(lower(\"${{CF_COMMIT_MESSAGE}}\"), \"skip ci\") == false'\n          notFeatureBranch: 'match(\"${{CF_BRANCH}}\", \"^FB-\", true) == false'",
      "language": "text",
      "name": "any-condition"
    }
  ]
}
[/block]
