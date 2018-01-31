---
title: "GitLab webhooks don't work as expected"
excerpt: "Instructions for troubleshooting Gitlab webhooks."
---
If you are admin of the repository and the webhook wasn't added automatically to your GitLab repository you can use the following workaround to add the webhook manually. 
[block:callout]
{
  "type": "warning",
  "body": "https://docs.gitlab.com/ce/user/project/integrations/webhooks.html \n\n1. The URL should be: https://g.codefresh.io/api/providers/gitlab/hook\n2. Check the hook for `push_events` \n3. Please let us know on which pipeline you want the hook to work."
}
[/block]