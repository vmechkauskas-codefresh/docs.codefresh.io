---
layout: docs
title: "Unit Test with Database"
description: ""
group: configure-ci-cd-pipeline
sub_group: unit-tests
redirect_from:
  - /docs/unit-tests-with-database
toc: true
---
Sometimes running unit tests requires some additional services like a Database (Mongo, MySql, Postgres etc), or third-party components like Redis, Memcache, etc.

Codefresh provides you an easy way to do it by using the Codefresh pipeline and docker-compose.

To run Unit Tests with a DB or other services, you can create a composition and run your unit tests as part of it. 
[block:callout]
{
  "type": "info",
  "title": "Example repository",
  "body": "Fork this <a href=\"https://github.com/codefreshdemo/cf-example-unit-tests-with-composition\" target=\"_blank\">__repository__</a> in Github to continue"
}
[/block]

[block:api-header]
{
  "title": "How to do it using option \"Attach to Composition\""
}
[/block]
1. Navigate to added example repository, select relevant pipeline and put in your test script in Unit Tests Section. For this example, your unit test script will be something like this. Just copy and paste this script to section of Unit Test Script
 
[block:code]
{
  "codes": [
    {
      "code": "\nwait_for_db() {\n  nslookup db\n  if ! nc -z db 3306; then\n    echo \"Waiting for db...\"\n    sleep 5\n    wait_for_db\n  fi\n}\n\nwait_for_db\n\nexport MYSQL_ROOT_PASSWORD=admin\nexport MYSQL_USER=my_user\nexport MYSQL_HOST=db\nexport MYSQL_PASSWORD=admin\nexport MYSQL_DATABASE=nodejs\n\nnpm test",
      "language": "text",
      "name": "script.sh"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7605c78-codefresh_unit_test_script.png",
        "codefresh_unit_test_script.png",
        1685,
        367,
        "#24343c"
      ]
    }
  ]
}
[/block]
2. Go to composition module and create a new composition just press ("+"), the wizard will propose you a few options. The most useful options is to create a new one or add `docker-compose.yml` from your repository. For this example just copy paste the following `docker-compose.yml`
[block:code]
{
  "codes": [
    {
      "code": "version: '2'\nservices:\n  db:\n    image: 'mysql:latest'\n    ports:\n      - 3306\n    environment:\n      - MYSQL_ROOT_PASSWORD=admin\n      - MYSQL_USER=my_user\n      - MYSQL_PASSWORD=admin\n      - MYSQL_DATABASE=nodejs",
      "language": "yaml",
      "name": "docker-compose.yml"
    }
  ]
}
[/block]
3. Put in the relevant composition component, for example, `mysql` and save with relevant name.
3. Go to back to pipelines of this repository
4. Select the `Run tests with composition` option and choose the created composition you wish to run your image in while running the Unit Tests.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a0dd7e8-codefresh_unit_test_dropdown-1.png",
        "codefresh_unit_test_dropdown-1.png",
        750,
        322,
        "#f7f7f6"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
5. __Save__ and __Build__ this pipeline
[block:api-header]
{
  "title": "See unit test examples with other databases"
}
[/block]
- [Unit Tests with Redis](doc:python-redis) 
- [Unit Tests with Postgres](doc:unit-tests-with-postgres) 
- [Unit Tests with MySQL](doc:nodejsmysql) 
- [Unit Tests with Mongo](doc:nodejsmongo)
