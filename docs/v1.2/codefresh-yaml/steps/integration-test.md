---
layout: docs
title: "Integration Test"
description: ""
group: codefresh-yaml
sub_group: steps
redirect_from:
  - /docs/integration-test
toc: true
---

The integration test step can help you run an integration using popular services, such as Redis, MySQL and MongoDB, and also using a Docker Composition as a means to execute finite commands in a more complex interaction of services.
[block:code]
{
  "codes": [
    {
      "code": "integration_test_step:\n    type: integration-test\n    preconfigured_services: [  redis, postgresql, mongodb, mysql, couchdb, rabbitmq, memcached ]\n    services: \n      cassandra:\n        image: cassandra:2.1.17\n        ports:\n          - 7000\n          - 7001\n          - 9042\n          - 7199\n        environment:\n          - CASSANDRA_RACK=\"test_rack\"\n    test:\n      image: node:7-onbuild\n      working_directory: ${{some_other_step}}\n      commands: \n        - npm install\n        - npm run prepare-db\n        - npm test full\n",
      "language": "yaml"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "h-2": "Required/Optional/Default",
    "1-0": "```description```",
    "1-1": "A basic, free-text description of the step.",
    "1-2": "Optional",
    "2-0": "```working_directory```",
    "2-1": "The directory in which to search for the composition file. It can be an explicit path in the container's file system, or a variable that references another step.\n\nThe default is ```${{main_clone}}```.",
    "2-2": "Default",
    "4-0": "```services```",
    "4-1": "This is a minimal composition that will be run. It should be an inline YAML definition, containing services. Each service can including its image, ports and environment variables.",
    "4-2": "Optional",
    "5-0": "```test```",
    "5-1": "The definition of the service to monitor, including the commands to execute and its working directory.",
    "5-2": "Required",
    "6-0": "```fail_fast```",
    "6-1": "If a step fails, and the process is halted. The default value is ```true```.",
    "6-2": "Default",
    "7-0": "```when```",
    "7-1": "Define a set of conditions which need to be satisfied in order to execute this step.\n\nYou can find more information in the [Conditional Execution of Steps]({{ site.baseurl }}/docs/{{ site.docs_version }}/codefresh-yaml/conditional-execution-of-steps/) article.",
    "7-2": "Optional",
    "8-1": "Define operations to perform upon step completion using a set of predefined [Post-Step Operations]({{ site.baseurl }}/docs/{{ site.docs_version }}/codefresh-yaml/post-step-operations/).",
    "8-0": "`on_success`, `on_fail` and `on_finish`",
    "8-2": "Optional",
    "0-0": "```title```",
    "0-1": "The free-text display name of the step.",
    "0-2": "Optional",
    "3-0": "```preconfigured_services```",
    "3-2": "Optional",
    "3-1": "This is a list containing the names of preconfigured services that will be executed in the context in the context of the composition."
  },
  "cols": 3,
  "rows": 9
}
[/block]
For more information about `services` and `test`, please check out the [Composition step](https://docs.codefresh.io/docs/composition-1).

Following are the supported services:
[block:parameters]
{
  "data": {
    "h-0": "Service Name",
    "h-1": "Default Version",
    "h-2": "Exposed Ports",
    "0-0": "mysql",
    "0-1": "5.7",
    "h-3": "Comments",
    "0-2": "3306",
    "0-3": "MYSQL_ROOT_PASSWORD=\"\"",
    "1-0": "postgresql",
    "1-1": "9.6",
    "1-2": "5432",
    "1-3": "POSTGRES_PASSWORD=\"\"",
    "2-0": "mariadb",
    "2-1": "10.1",
    "2-2": "3306",
    "2-3": "MYSQL_ROOT_PASSWORD=\"\"",
    "3-0": "mongodb",
    "3-1": "3.4",
    "3-2": "27017",
    "4-0": "couchdb",
    "4-1": "1.6",
    "4-2": "5984",
    "5-0": "rabbitmq",
    "5-1": "3.6",
    "5-2": "15672",
    "5-3": "RABBITMQ_DEFAULT_USER='guest'      RABBITMQ_DEFAULT_PASS='guest'\nRABBITMQ_DEFAULT_VHOST='/'=",
    "6-0": "memcached",
    "6-1": "1.4",
    "6-2": "11211",
    "7-0": "redis",
    "7-1": "3.2",
    "7-2": "6379",
    "8-0": "cassandra",
    "8-1": "3.10",
    "8-2": "7000, 7001, 9042, 7199, 9160",
    "9-0": "neo4j",
    "9-1": "3.1",
    "9-2": "7474, 7687",
    "10-0": "elasticsearch",
    "10-1": "5.2",
    "10-2": "9200, 9300",
    "11-0": "rethinkdb",
    "11-1": "2.3",
    "11-2": "28015, 8080"
  },
  "cols": 4,
  "rows": 12
}
[/block]
