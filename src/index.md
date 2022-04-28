--- 
title: Hello World
layout: "base.njk"
--- 
Hello Jamstack fam!

{%- for posts in collections.posts -%}
<li>[{{ posts.data.title }}]({{posts.url}})</li>
{%- endfor -%}