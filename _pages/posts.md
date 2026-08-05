---
title: Posts
subtitle: a listing of all our random stuff that we put out 
layout: default
permalink: /posts/
is-in-header: true
summary: a simple post list
---

<div class="window-page-section" markdown="1">
<div class="page-section-title" markdown="1">
posts-list
</div>
<div class="page-content" markdown="1" style="display: flex; justify-content: center;align-items: center;flex-direction: column;">
Below is a list of posts; I *should* have pagination installed in here in the future; but for now this will do.

{% assign sitePostAmount = site.posts | size %}
{% include postfeed.html recentPages = sitePostAmount %}
</div>
</div>