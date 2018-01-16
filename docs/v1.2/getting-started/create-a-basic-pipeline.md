---
layout: docs
title: "Getting Started - Create a Basic Pipeline"
description: "Configure a basic single-service container-based CI/CD pipeline."
excerpt: ""
group: getting-started
redirect_from:
  - /docs/getting-started-create-a-basic-pipeline
toc: true
---

Welcome to Codefresh, the Docker-native CI/CD platform. 

This getting started guide will show you how to configure a basic single-service container-based CI/CD pipeline. At the end of the configuration process you will see how a “commit” will automatically initiate the newly created pipeline process, including creating a Docker image, pushing it to the Docker Hub registry, and viewing the result in a production/staging environment.   
For multi-service pipelines, on-demand dev and test environments, image management and other advanced features, please refer to the Codefresh documentation.  
[block:api-header]
{
  "type": "basic",
  "title": "What is a CI/CD pipeline?"
}
[/block]
Basically a pipeline automates steps in your software delivery process. A typical single-service pipeline includes the following basic steps:

- **Build** - initiates a build process, in which the code is turned into a compiled artifact and packaged in a Docker image. 
- **Test** - runs unit tests inside the Docker container using any testing tool that supports your framework.  
- **Push** - pushes the tested Docker Image to a Docker registry service, such as Docker Hub.  
- **Deploy** - uploads the docker images to staging/production environment, such as ECS, Kubernetes.

[block:api-header]
{
  "type": "basic",
  "title": "What you need to get started:"
}
[/block]
- A Github account (Codefresh also supports Bitbucket, but in the following example we will be using Github).
- On Github, fork our Demo Chat project into your Github account (See [Forking the Demo Project on Github](https://docs.codefresh.io/docs/forking-the-demo-project-on-github) for instructions) 
- A Docker Hub account.  
[block:api-header]
{
  "type": "basic",
  "title": "Step 1. Add a Repository"
}
[/block]
A service, also known as micro-service, is a part of an application that is independently deployable (e.g. user authentication service). Each repo may include multiple services, but for the purpose of our example, the repo project that you have forked includes a single service called “demo-chat”. As part of the configuration of the pipeline you will need to configure “demo-chat” as a service.

## To add a repository:
1. In the **Repositories** page, click **Add Repository**.
{:toc}

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d7982ed-codefresh_add_repo.png",
        "codefresh_add_repo.png",
        1802,
        616,
        "#17b2a3"
      ]
    }
  ]
}
[/block]
2. Select the relevant repository. In this case select the **<your-repo-name>/demochat**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/94b6a4d-codefresh_demochat_select.png",
        "codefresh_demochat_select.png",
        811,
        543,
        "#396a6e"
      ]
    }
  ]
}
[/block]
You can use the search box to find the repository. If you can’t find it, turn on **Add by URL**, and type the URL of the repository. 
3. In the **Branch for first build** drop-down menu, select the relevant Branch. By default your repository has one branch named master which is considered to be the definitive branch. If you have not created a feature branch-off, you should select **Master**.

4. Click **Next**.
The Select Build Method screen appears.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a40b27-codefresh_demochat_build_method.png",
        "codefresh_demochat_build_method.png",
        812,
        541,
        "#ecefed"
      ]
    }
  ]
}
[/block]
The following options are available:
- **Use existing Codefresh.yml** - use this option if you have previously created a Codefresh.yml file. Codefresh YAML is used to customize your build environment (pipeline) by configuring specific build specifications that will be executed as part of the build process. This is the most flexible and customizable option as it can include very basic or intricate build specifications.
- **Use existing Dockerfile** - use this option if you have previously created a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Dockerfile is used to instruct Docker how to build images automatically. This is a relatively basic option, as it is based on a predefined codefresh flow. 
- **Create a new Dockerfile using Codefresh templates** - use this option if you don’t have an existing Codefresh YAML or Dockerfile in your repo. Selecting this option will create a basic pre-defined Dockerfile based on Dockerfile templates that were created by Codefresh. 

For the purpose of our example we will use the existing Dockerfile, which is located at the root of the “demo-chat” repo. 
5. Select the **Dockerfile** (middle) option. 
6. By default, Codefresh searches for your Dockerfile at the root level of your repository, by the name Dockerfile. The demo-chat example includes a Dockerfile in the root level.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d81622a-cf_demochat_dockerfile.png",
        "cf_demochat_dockerfile.png",
        813,
        541,
        "#366e73"
      ]
    }
  ]
}
[/block]
7. Click **Next**.
8. Review the Dockerfile and when you're done, click **Create**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/30f0a3a-cf_demochat_review.png",
        "cf_demochat_review.png",
        810,
        539,
        "#25343c"
      ]
    }
  ]
}
[/block]
Congratulations, the new service is added!
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4c1b6db-cf_demochat_done.png",
        "cf_demochat_done.png",
        810,
        503,
        "#ebcc6a"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Step 2 - Preview your Basic Docker Build Pipeline"
}
[/block]
At this point you have configured a basic Docker build pipeline that can take code from the repository, run it through a build process, and create a Docker image. To check if this build process runs properly, you can preview it by running a “build” or continue with the configuration of the pipeline (test and deploy processes) in the next step/section.

## To test the basic build pipeline:
1. On the last screen of the service configuration process, click **Build**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fa8d30-cf_demochat_done.png",
        "cf_demochat_done.png",
        810,
        503,
        "#ebcb6a"
      ]
    }
  ]
}
[/block]
The **Builds** screen of the newly created service is displayed showing the build progress.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/31e9222-cf_demochat_build.png",
        "cf_demochat_build.png",
        1709,
        238,
        "#ebebeb"
      ]
    }
  ]
}
[/block]
2. Wait until the process has successfully finished:

The new Docker image is saved in Codefresh’s  internal registry.
3. To view the image details, click **Images** and then click on the relevant image from the list.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5613e4c-codefresh_images_repo.png",
        "codefresh_images_repo.png",
        1710,
        199,
        "#ebebeb"
      ]
    }
  ]
}
[/block]
The **Images** screen is displayed with details of the newly created image.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/26353f1-codefresh_image_demochat.png",
        "codefresh_image_demochat.png",
        1429,
        704,
        "#eaebea"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Step 3 - Add a Unit Test to the Pipeline (Optional)"
}
[/block]
You can optionally add unit test to the pipeline. The unit test is a bash-like script that will run in the root of the repository, inside the Docker container, using any testing tool that supports your framework. You can either configure your unit test script within the pipeline configuration page itself or, if you have selected to use a YAML file during the configuration of the pipeline, inside the YML script. In this example we will show how to add it within the pipeline configuration page.

##To add a unit test:  
1. On the main navigation menu, click **Services**.
2. Click the **Pipelines** icon of the “demochat” service. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/15bf4d8-Services_screen.JPG",
        "Services_screen.JPG",
        1009,
        476,
        "#22927e"
      ]
    }
  ]
}
[/block]
3. In the **Workflow** section (at the middle of the **Pipelines **screen), in the **Unit Test Script **command line box, type `npm test`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9832cfd-npmtest.JPG",
        "npmtest.JPG",
        833,
        551,
        "#25353d"
      ]
    }
  ]
}
[/block]
4. At the bottom of the screen, click **Save**.
The test is added to the pipeline.  

[block:api-header]
{
  "type": "basic",
  "title": "Step 4 - Setting a Webhook to the Pipeline"
}
[/block]
You can configure your pipeline to automatically trigger by setting a webhook on your git repository. Only the repository owners can set webhooks. 
Webhook configuration can be refined to trigger only on specific branches. By default, Codefresh activates a webhook to a Commit submitted in the defined first service, however does not activate this webhook by default for a second service. In our example, we will make sure the webhook to all the branches of our “Demochat” repo is activated. 

You can also trigger codefresh pipelines from command line / build script (or any 3rd party system). 

##To add a webhook to the pipeline: 
1. On the main navigation, click **Repositories**.
2. Click the gear icon of the “demochat” service. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a8e599a-Screen_Shot_2017-10-23_at_7.17.58_PM.png",
        "Screen Shot 2017-10-23 at 7.17.58 PM.png",
        1462,
        742,
        "#15af9f"
      ]
    }
  ]
}
[/block]
3. In the **General** section, make sure the** Add webhook** toggle is at **ON ** position.

4. In the **Trigger flow on** drop down, select the **All Branches and Tags** option.  
5. Pipeline default trigger is commit. You can also change/add a pull request trigger (this shall be usually used for last changes before merging to master)
6. At the bottom of the screen, click **Save** if changes were made.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5bb09fb-Screen_Shot_2017-10-23_at_7.13.26_PM.png",
        "Screen Shot 2017-10-23 at 7.13.26 PM.png",
        1798,
        736,
        "#eaf4f4"
      ]
    }
  ]
}
[/block]
##To trigger codefresh pipeline from command line/script/3rd party
Copy CURL command (click “Copy” button) and use it in any place where you want. You can also update command text and replace branch with any other name (by default it’s a master branch). 
[block:api-header]
{
  "type": "basic",
  "title": "Step 5 - Add \"Push to Docker Registry\""
}
[/block]
We are almost there. The last step in configuring the pipeline is to configure the mechanism that will push the tested Docker Image to a Docker registry service. In our example, we will use Docker Hub as the Docker registry (public or private). Codefresh also offer its own Docker registry service. In order to push the image to your Dockerhub registry, you must activate this option in the pipeline and add your Dockerhub registry credentials in your account management integration page. If you haven’t done so yet, follow the instructions below.


##To add Docker Hub credentials:
1. On the top navigation bar, click on your user account icon to open the account menu and click **Account Management**.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/341ed85-accountmanagement.PNG",
        "accountmanagement.PNG",
        565,
        331,
        "#1dbc9c"
      ]
    }
  ]
}
[/block]
2. Click the **Integration** tab
3. Select the **Docker Registries** section
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/38e2b04-integrations-page.png",
        "integrations-page.png",
        1510,
        1026,
        "#323d43"
      ]
    }
  ]
}
[/block]
4. Configure your registry according to the [Docker Registry Integration Guide](https://docs.codefresh.io/v1.0/docs/docker-registry)

## Activate Push to Docker Hub option in the **Pipelines** view 
1. On the main navigation, click **Services**.
2. Click the **Pipelines** icon of the “demochat” service. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3463993-Services_screen.JPG",
        "Services_screen.JPG",
        1009,
        476,
        "#22927e"
      ]
    }
  ]
}
[/block]
3. In the Workflow section under the **Push to Registry** section, select your registry configuration
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/719c804-screenshot-g.codefresh.io-2017-11-21-14-59-59.png",
        "screenshot-g.codefresh.io-2017-11-21-14-59-59.png",
        409,
        370,
        "#d9d8cb"
      ]
    }
  ]
}
[/block]
4. At the bottom of the screen, click **Save**.
[block:api-header]
{
  "type": "basic",
  "title": "Step 6 - View the Entire Pipeline in Action"
}
[/block]
Congratulations! You have just finished configuring an entire pipeline, which includes Build, Test, and Push processes. This means that any “commit” or “Pull request” in the Github repo will initiate the entire pipeline, resulting the the pushing of a new image to Docker Hub. 

##To see the pipeline in action:
1. On Github, go to your Github repository.
2. Create a new branch by clicking the drop down at the top of the file list that says **branch: master **and then type **“feature1”** into the new branch text box. 
3. Select the blue **Create branch** box or hit “Enter” on your keyboard.
At this point the pipeline has been initiated and a new Docker image has been created. This Docker image can be used to perform Feature Preview and Integration Tests. 
4. Now let’s modify the code and submit a new Commit. In Github, go to **<your-repo-name>/demochat/templates/login.html**  
5. Click the **Edit this file** button and add a line in the code. You can use the following example (the new line is marked in red): 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f18d734-Capture10.PNG",
        "Capture10.PNG",
        1753,
        275,
        "#e7e9e9"
      ]
    }
  ]
}
[/block]
6. Add a description for the change and click **Commit Changes**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e892f64-myfirstcommit.PNG",
        "myfirstcommit.PNG",
        1344,
        811,
        "#f3f3f2"
      ]
    }
  ]
}
[/block]
The new Commit invokes the Codefresh pipeline, generating a new Docker image. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af69126-Capture3.PNG",
        "Capture3.PNG",
        1748,
        254,
        "#ebebeb"
      ]
    }
  ]
}
[/block]
The process success is also indicated in Github:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/25398b5-Capture4.PNG",
        "Capture4.PNG",
        1027,
        143,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
After some iterations you are ready to submit a **Pull Request**. 
7. In Github, open a **Pull Request**, enter your request message, and click **Create pull request**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/45e070b-Capture6.PNG",
        "Capture6.PNG",
        1119,
        772,
        "#faf9f7"
      ]
    }
  ]
}
[/block]
8. The pull request is displayed in Codefresh under the **Services > <your-repo-name> > demochat **under the **Pipelines** tab:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9b6f1da-Capture10.PNG",
        "Capture10.PNG",
        1753,
        275,
        "#e7e9e9"
      ]
    }
  ]
}
[/block]
At this point, the Pull Request reviewers could click the **Launch** () button to preview the service/feature in a realistic web environment, however in this case, the Demochat service is part of a composition and would require defining another service (mongo DB).    
9. After additional iterations you are ready to merge the pull request. In Github, click the Merge pull request button. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0eb485-Capture11.PNG",
        "Capture11.PNG",
        807,
        656,
        "#f5f7f6"
      ]
    }
  ]
}
[/block]
10. Click **Confirm Merge**. 
The pipeline is invoked once again and a new image, containing the merged code, is generated in Codefresh:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b2ac192-Capture15.PNG",
        "Capture15.PNG",
        1806,
        332,
        "#eaebeb"
      ]
    }
  ]
}
[/block]
In the Images screen, you can see the new image, which is labeled as Master, has passed the quality checks, and includes a new SHA:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2162d7a-Capture16.PNG",
        "Capture16.PNG",
        1797,
        311,
        "#1db89b"
      ]
    }
  ]
}
[/block]
#Congratulations!
By completing this tutorial, you’ve learned how to create a single service pipeline, which includes the following steps:
  * Build 
  * Test  
  * Push
