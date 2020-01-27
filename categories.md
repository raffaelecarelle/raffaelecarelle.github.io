---
layout: default
title: Categories
permalink: /categories/
meta-title: Categories
meta-description: Categories page
---
{% for category in site.categories %}
  - [{{category | first}}]({{site.url}}{{site.baseurl}}{{page.url}}{{category | first}})
{% endfor %}
