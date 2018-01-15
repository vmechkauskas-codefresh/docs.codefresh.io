---
layout: docs
title: "Create a Codefresh Account"
description: "Welcome to Codefresh! To get started, create a Codefresh account."
excerpt: ""
group: getting-started
redirect_from:
  - /docs/
  - /docs/v1.2/
  - /docs/v1.2/getting-started/
  - /docs/getting-started/
toc: true
---
Welcome to Codefresh! 

To get started, create a Codefresh account.

### 1. Create Your Account

Navigate to the [Sign Up page](https://g.codefresh.io).  
Sign up with Codefresh by linking your account to your Git provider.  
We currently support Github and Bitbucket.

{% callout info %}
Codefresh also supports Stash. Check out our [documentation](doc:stash) for more information.
{% endcallout %} 

<figure markdown="1">
![Codefresh.io SignIn]({{ "https://files.readme.io/6a22e1e-screenshot-g.codefresh.io-2017-11-21-14-57-20.png"}}){:.img-thumbnail .mx-auto .d-block }
</figure>

{::comment}
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a22e1e-screenshot-g.codefresh.io-2017-11-21-14-57-20.png",
        "Codefresh.io SignIn",
        444,
        592,
        "#11b4b5"
      ]
    }
  ]
}
[/block]
{:/comment}

### 2. Accept the Permissions Request
After you select which Git provider to link to, Codefresh requests permission to access your Git provider account.

#### **Github**{:.text-secondary}
<figure markdown="1">
![Codefresh.io SignIn with Github]( https://files.readme.io/782b804-Screen_Shot_2016-09-28_at_4.36.01_PM.png "Github authorization page (click image to enlarge)"){:.img-thumbnail .mx-auto .d-block style="max-width: 50%"}
<figcaption class="text-center">
Github authorization page (click image to enlarge)
</figcaption>
</figure>

{::comment}
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/782b804-Screen_Shot_2016-09-28_at_4.36.01_PM.png",
        "Screen Shot 2016-09-28 at 4.36.01 PM.png",
        843,
        690,
        "#dfe1da"
      ],
      "caption": "Github authorization page (click image to enlarge)",
      "sizing": "smart",
      "border": false
    }
  ]
}
[/block]
{:/comment}

#### **Bitbucket**{:.text-secondary}
<figure markdown="1">
![Verify new account Codefresh.io page ]( https://files.readme.io/11802db-imageedit_3_2860379237.gif "Bitbucket authorization page (click image to enlarge)"){:.img-thumbnail .mx-auto .d-block style="max-width: 50%"}
<figcaption class="text-center">
Bitbucket authorization page (click image to enlarge)
</figcaption>
</figure>

{::comment}
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/11802db-imageedit_3_2860379237.gif",
        "imageedit_3_2860379237.gif",
        732,
        491,
        "#716868"
      ],
      "caption": "Bitbucket authorization page (click image to enlarge)"
    }
  ]
}
[/block]
{:/comment}

### 3. Verify Your Account Details
{::comment}
[block:api-header]
{
  "type": "basic",
  "title": "3. Verify Your Account Details"
}
[/block]
{:/comment}
After you grant permission to access your Git provider account, you will be redirected to the Codefresh platform to verify your account details. Review your account details, make the relevant changes, and click ** SIGN UP**. 

<figure markdown="1">
![Verify new account Codefresh.io page ]( https://files.readme.io/8756a0b-Screen_Shot_2016-09-28_at_4.40.20_PM.png "Verify new account page (click image to enlarge)"){:.img-thumbnail .mx-auto .d-block style="max-width: 50%"}
<figcaption class="text-center">
Verify new account page (click image to enlarge)
</figcaption>
</figure>

{::comment}
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8756a0b-Screen_Shot_2016-09-28_at_4.40.20_PM.png",
        "Screen Shot 2016-09-28 at 4.40.20 PM.png",
        758,
        781,
        "#3db4b9"
      ],
      "caption": "Verify new account page (click image to enlarge)"
    }
  ]
}
[/block]
{:/comment}

{::comment}
[block:callout]
{
  "type": "info",
  "title": "Multiple repositories / git providers with one account",
  "body": "If you have an account with more than one repository / git provider, we can allow a single Codefresh account connect to all of your repository / git accounts. First, create separate Codefresh accounts for each of your providers (GitHub, GitLab, BitBucket). Then, let us know which account you would like to be the primary account. We will merge the accounts together so you have a single Codefresh login that lets you access all of your repositories."
}
[/block]
{:/comment}

{% callout info %}
##### Multiple repositories / git providers with one account

Currently, it is possible to have only one git provider per account. You have to create a separate Codefresh account for each of your git providers.
{% endcallout %}
