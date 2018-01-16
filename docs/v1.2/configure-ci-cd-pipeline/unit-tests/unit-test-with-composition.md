---
layout: docs
title: "Unit Tests with Composition"
description: ""
group: configure-ci-cd-pipeline/unit-tests
redirect_from:
  - /docs/setup-unit-tests
toc: true
---

Sometimes running unit tests require some additional services such as a Database (Mongo, MySql, Postgres etc) or third-party components like Redis, Memcache, etc.

Codefresh provides you an easy way to do this by using a Codefresh pipeline and docker-compose.

To run Unit Tests with a DB or other services you can create a composition and run your unit tests as part of it. 

Simple, right?
[block:callout]
{
  "type": "info",
  "title": "Example repository",
  "body": "Fork this <a href=\"https://github.com/codefreshdemo/cf-example-unit-tests-with-composition\" target=\"_blank\">__repository__</a> in Github to continue"
}
[/block]

[block:api-header]
{
  "title": "How to do it using option \"Replace Service\""
}
[/block]
1. Navigate to added example repository, select relevant pipeline and put in your test script in Unit Tests Section. For this example, your unit test script will be something like that. Just copy and paste this script to Unit Test Script section.
[block:code]
{
  "codes": [
    {
      "code": "\nwait_for_db() {\n  nslookup db\n  if ! nc -z db 3306; then\n    echo \"Waiting for db...\"\n    sleep 5\n    wait_for_db\n  fi\n}\n\nwait_for_db\n\nexport MYSQL_ROOT_PASSWORD=admin\nexport MYSQL_USER=my_user\nexport MYSQL_HOST=db\nexport MYSQL_PASSWORD=admin\nexport MYSQL_DATABASE=nodejs\n\nnpm test",
      "language": "yaml",
      "name": "script.sh"
    }
  ]
}
[/block]
2. Go to composition module and create a new composition just press ("+"), the wizard will propose a few options. The most useful is to create a new one or add `docker-compose.yml` from your repository. 
[block:code]
{
  "codes": [
    {
      "code": "version: '2'\nservices:\n  db:\n    image: mysql:latest\n    ports:\n      - 3306\n    environment:\n      - MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD\n      - MYSQL_USER=$MYSQL_USER\n      - MYSQL_PASSWORD=$MYSQL_PASSWORD\n      - MYSQL_DATABASE=$MYSQL_DATABASE\n  test:\n    image: owner/test:tag\n    links:\n      - db\n    command: bash -c '/usr/src/app/test-script.sh'\n    environment:\n      - MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD\n      - MYSQL_USER=$MYSQL_USER\n      - MYSQL_PASSWORD=$MYSQL_PASSWORD\n      - MYSQL_DATABASE=$MYSQL_DATABASE\n      - MYSQL_HOST=$MYSQL_HOST",
      "language": "yaml",
      "name": "docker-compose.yml"
    }
  ]
}
[/block]
3. In your composition, put the relevant component. For example, mysql and save with a relevant name.
3. Go to back to pipelines of this repository.
4. Select the `Run tests with composition` option and choose the created composition you wish to run your image in while running the Unit Tests.
5. Choose the option `Replace Service` and select which service in the composition will be replaced by the image built by this pipeline.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2346ab1-codefresh_replace_service.png",
        "codefresh_replace_service.png",
        734,
        181,
        "#f5f6f4"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
6. __Save__ and __Build__ this pipeline.
[block:api-header]
{
  "title": "See examples of unit tests with databases"
}
[/block]
- [Unit Tests with Redis](doc:python-redis) 
- [Unit Tests with Postgres](doc:unit-tests-with-postgres) 
- [Unit Tests with MySQL](doc:nodejsmysql) 
- [Unit Tests with Mongo](doc:nodejsmongo)
