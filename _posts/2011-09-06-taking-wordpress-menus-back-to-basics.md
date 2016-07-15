---
id: 554
title: Taking WordPress Menus back to basics
date: 2011-09-06T17:43:43+00:00
layout: post
guid: http://www.tallphil.co.uk/?p=554
permalink: /taking-wordpress-menus-back-to-basics/
tmac_last_id:
  - 280345271613927424
categories:
  - Website Design
tags:
  - WordPress
---
I was working on a project earlier where I was using the [wp_nav_menu](http://codex.wordpress.org/Function_Reference/wp_nav_menu) function in WordPress to create a menu. By default, WordPress creates menus which are wrapped in layers (`<div>`), an unordered list (`<ul>`), list items (`<li>`) and then a link (`<a>`). However, on this project I wanted to use [jQuery UI](http://jqueryui.com/demos/button/#radio) to generate a navigation, and that required _just_ links (`<a> <a> <a>`).

So, to strip out all of those extra HTML tags, I used the following javascipt (as I was already relying on jQuery and javascript anyway).

```js
var newmenu = '';
jQuery("#nav ul li").each(function() {
  newmenu += jQuery(this).html();
});
jQuery("#nav").html(newmenu);
```

This works by firstly looping through all of the list items in my navigation layer, and copying their contents (the menu link) into a variable. Then, I replace all of the HTML contained within my navigation layer with that string. Easy!