---
layout: docs
title: "Unit tests not working with composition"
description: ""
group: troubleshooting
redirect_from:
  - /docs/unit-tests-not-working-with-composition
  - /docs/v1.2/unit-tests-not-working-with-composition
toc: true
---
**Problem***: I want run unit tests with my composition, but nothing is happen.
***Solution:*** In order to use unit tests you need mark your service as "test" in composition:

{% include 
image.html 
lightbox="true" 
file="https://files.readme.io/a41664d-2016-10-14_16-12-02.png" 
url="https://files.readme.io/a41664d-2016-10-14_16-12-02.png"
alt="2016-10-14_16-12-02.png" 
max-width="40%"
caption="Test Results"
%}
