---
layout: docs
title: "Expression Condition Syntax"
description: ""
group: codefresh-yaml
redirect_from:
  - /docs/expression-condition-syntax
toc: true
---
Each step in `codefresh.yml` file can contain expression conditions that must be satisfied for the step to execute. 

This is a small example of where an expression condition can be used:
  `YAML`
{% highlight yaml %}
step-name:
  description: Step description
  image: image/id
  commands: 
    - bash-command1
    - bash-command2
  when:
    condition:
      all:
        executeForMasterBranch: "{% raw %}'${{CF_BRANCH}}{% endraw %}' == 'master'"
{% endhighlight %}

A expression condition is a basic expression that is evaluated to true/false (to decide whether to execute or not to execute), and can have the following syntax:

### Types

[block:parameters]
{
  "data": {
    "0-0": "String",
    "h-0": "Type",
    "h-1": "True/False Examples",
    "h-2": "True/False",
    "0-1": "True: \"hello\"\nFalse: \"\"",
    "0-2": "- String with content = true\n- Empty string = false\n- String with contenet = true\n\nString comparison is lexicographic.",
    "1-0": "Number",
    "1-1": "True: 5\nTrue: 3.4\nTrue: 1.79E+308",
    "1-2": "- Any number other than 0 = true.\n- 0 = false",
    "2-0": "Boolean",
    "2-1": "True: true\nFalse: false",
    "3-0": "Null",
    "3-1": "False: null",
    "3-2": "Always false",
    "2-2": "- True = true\n- False = false"
  },
  "cols": 3,
  "rows": 4
}
[/block]

### Variables
  * You can use the User Provided variables as explained in the [Variables]({{ site.baseurl }}/docs/{{ site.docs_version }}/codefresh-yaml/variables/) article.
  * Each step creates a variable based on the name of the variable. A standard variable that always exists is *main_clone*. You can then use the members of each variable.  
  * To access variables that have a non-standard (i.e. only alphanumeric and _ characters) names, use the Variable() function.

### Members
Variables that are created by steps can have members. The members depend on the variable type.

[block:parameters]
{
  "data": {
    "h-0": "Step Type",
    "h-1": "Members",
    "0-0": "All step types",
    "0-1": "- name\n- type\n- description\n- failFast\n- workingDirectory\n- environment",
    "1-0": "[**Freestep**](doc:steps#section-freestyle)",
    "1-1": "-",
    "2-0": "[**Build**](doc:steps#section-build)",
    "2-1": "- dockerfile\n- imageName\n- tag\n- buildArguments",
    "3-0": "[**Git-clone**](doc:steps#section-git-clone)",
    "3-1": "- revision\n- credentials\n- repo\n- imageId",
    "4-0": "[**Composition**](doc:steps#section-composition)",
    "4-1": "- compositionCandidates\n- composition\n- startImmediately\n- environmentName\n- assets\n- compositionVariables",
    "5-0": "[**Push**](doc:steps#section-push)",
    "5-1": "- candidate\n- tag\n- registry\n- credentials\n- imageId"
  },
  "cols": 2,
  "rows": 6
}
[/block]

  * To access members that have a non-standard (i.e., only alphanumeric and _ characters) names, use the Member() function. 

### Unary Operators

[block:parameters]
{
  "data": {
    "h-0": "Operator",
    "h-1": "Operation",
    "0-0": "-",
    "0-1": "Negation of numbers",
    "1-0": "!",
    "1-1": "Logical NOT"
  },
  "cols": 2,
  "rows": 2
}
[/block]

### Binary Operators

[block:parameters]
{
  "data": {
    "h-0": "Operator",
    "h-1": "Operation",
    "0-0": "Add, String Concatenation",
    "0-1": "+",
    "1-0": "Subtract",
    "1-1": "-",
    "2-0": "Multiply",
    "2-1": "*",
    "3-0": "Divide",
    "3-1": "/",
    "4-0": "Modulus",
    "4-1": "%",
    "5-0": "Logical AND",
    "5-1": "&&",
    "6-0": "Logical OR",
    "6-1": "||"
  },
  "cols": 2,
  "rows": 7
}
[/block]

### Comparisons

[block:parameters]
{
  "data": {
    "h-0": "Operator",
    "h-1": "Operation",
    "0-0": "==",
    "0-1": "Equal to",
    "1-0": "!=",
    "2-0": ">",
    "1-1": "Not equal to",
    "2-1": "Greater than",
    "3-1": "Greater than or equal",
    "4-1": "Less than",
    "5-1": "Less than or equal",
    "5-0": "<=",
    "4-0": "<",
    "3-0": ">="
  },
  "cols": 2,
  "rows": 6
}
[/block]

### Functions

[block:parameters]
{
  "data": {
    "0-0": "String",
    "h-0": "Function Name",
    "h-1": "Parameters",
    "h-2": "Return value",
    "0-1": "0: number or string",
    "0-2": "String of input value.",
    "h-3": "Example",
    "0-3": "String(40) == '40'",
    "1-0": "Number",
    "1-1": "0: number or string",
    "1-2": "Number of input value.",
    "1-3": "Number('50') == 50\nNumber('hello') is invalid",
    "2-0": "Boolean",
    "2-1": "0: number or string",
    "2-2": "Boolean of input value.",
    "2-3": "Boolean('123') == true\nBoolean('') == false\nBoolean(583) == true\nBoolean(0) == false",
    "3-0": "round",
    "3-1": "0: number",
    "3-2": "Rounded number.",
    "3-3": "round(1.3) == 1\nround(1.95) == 2",
    "4-0": "floor",
    "4-1": "0: number",
    "4-2": "Number rounded to floor.",
    "4-3": "floor(1.3) == 1\nfloor(1.95) == 1",
    "5-0": "upper",
    "5-1": "0: string",
    "5-2": "String in upper case.",
    "5-3": "upper('hello') == 'HELLO'",
    "6-0": "lower",
    "6-1": "0: string",
    "6-2": "String in lower case.",
    "6-3": "lower('BYE BYE') == 'bye bye'",
    "7-0": "trim",
    "8-0": "trimLeft",
    "9-0": "trimRight",
    "10-0": "replace",
    "11-0": "substring",
    "12-0": "length",
    "13-0": "includes",
    "14-0": "indexOf",
    "15-0": "match",
    "7-1": "0: string",
    "8-1": "0: string",
    "7-2": "Trimmed string.",
    "8-2": "Left-trimmed string.",
    "9-2": "Right-trimmed string.",
    "9-1": "0: string",
    "7-3": "trim(\"   abc   \") == \"abc\"",
    "8-3": "trimLeft(\"   abc   \") == \"abc   \"",
    "9-3": "trimRight(\"   abc   \") == \"   abc\"",
    "10-1": "0: string - main string\n1: string - substring to find\n2: string - substring to replace",
    "11-1": "0: string - main string\n1: string - index to start\n2: string - index to end",
    "10-2": "Replace all instances of the sub-string (1) in the main string (0) with the sub-string (2).",
    "10-3": "replace('hello there', 'e', 'a') == 'hallo thara'",
    "11-2": "Returns a sub-string of a string.",
    "11-3": "substring(\"hello world\", 6, 11) == \"world\"",
    "12-1": "string",
    "12-2": "Length of a string.",
    "12-3": "length(\"gump\") == 4",
    "13-1": "0: string - main string\n1: string - string to search for",
    "13-2": "Whether a search string is located within the main string.",
    "13-3": "includes(\"codefresh\", \"odef\") == true",
    "14-1": "0: string - main string\n1: string - string to search for",
    "14-2": "Index of a search string if it is found inside the main string",
    "14-3": "indexOf(\"codefresh\", \"odef\") == 1",
    "15-1": "0: string - main string\n1: string - regular expression string, [JS style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)\n2: boolean - ignore case",
    "15-2": "Search for a regular expression inside a string, ignoring or not ignoring case",
    "15-3": "match(\"hello there you\", \"..ll.\", false) == true\nmatch(\"hello there you\", \"..LL.\", false) == false\nmatch(\"hello there you\", \"hell$\", true) == false\nmatch(\"hello there you\", \"^hell\", true) == true\nmatch(\"hello there you\", \"bye\", false) == false",
    "16-0": "Variable",
    "16-2": "Search for the value of a variable",
    "17-0": "Member",
    "16-1": "string",
    "17-1": "0: string - variable name\n1: string - member name",
    "16-3": "Variable('some-clone')",
    "17-3": "Member('some-clone', 'working-directory')",
    "17-2": "Search for the value of a variable member"
  },
  "cols": 4,
  "rows": 18
}
[/block]
