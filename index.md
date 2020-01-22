---
layout: default
title: Blog
meta-title: Blog
meta-description: Home page of Raffaele's blog.
---
{% for post in site.posts %}
  <div id="post-short">
    <a href="{{site.url}}{{site.baseurl}}{{post.url}}">
      <h3>{{post.title}}</h3>
    </a>
    <i>posted on {{ post.date | date: "%-d %b %Y" }}</i>
    <p>
      {% if post.excerpt %}
        {{ post.excerpt }}
        <a href="{{site.url}}{{site.baseurl}}{{post.url}}" style="color: #0000EE">[READ MORE]</a>
      {% else %}
        {{ post.content }}
      {% endif %}
    </p>
  </div>
{% endfor %}
