---
id: 818
title: Bootstrap Feature Widgets WordPress Plugin
date: 2014-03-24T23:04:43+00:00
layout: post
guid: http://www.tallphil.co.uk/?p=818
permalink: /bootstrap-feature-widgets/
feature_image: files/2014/banner-772x250.png
categories:
  - "Things I've Made"
  - Website Design
tags:
  - plugin
  - widget
  - WordPress
---
> A WordPress plugin for creating homepage feature boxes using [Bootstrap](http://getbootstrap.com/) with nice big [Glyphicons](http://glyphicons.com/). Available from the [WordPress Plugin Repository](http://wordpress.org/plugins/bootstrap-feature-widgets/).

A mini-plugin this one, I wanted a way for a client to easily update some little homepage featurettes that I had made (similar to [these](http://getbootstrap.com/examples/carousel/), but using glyphicons instead of images). Widgets seemed easiest, due to their drag-and-drop nature, so I made Bootstrap Feature Widgets.

![Bootstrap Feature Widget example 1]({{ site.baseurl | prepend: site.github.url }}/files/2014/Screen-Shot-2014-03-24-at-22.21.28.png)
 
To use, install the plugin and make sure that your theme [supports widgets](http://codex.wordpress.org/Widgetizing_Themes). Go to Appearance » Widgets and you should see **Bootstrap Feature Widget** as an option on the left.

![Bootstrap Feature Widget example 2]({{ site.baseurl | prepend: site.github.url }}/files/2014/Screen-Shot-2014-03-24-at-22.25.50.png)

Drag and drop this into a widget area to use. When expanded, you have a number of options. You can set a title and select a glyphicon. You can choose to either list the latest news items (and how many) or to use some of your own text. You can add a link at the bottom, choose it's URL, choose whether it should open in a new window and choose it's colour. Finally, you can choose to let the plugin apply the default styles to the glyphicon, to make it super-sized.

You'll probably want to customise the CSS a little. You can see an example plus some nice code for `functions.php` and `front-page.php` below...

<script src="https://gist.github.com/ewels/9751176.js"></script>
