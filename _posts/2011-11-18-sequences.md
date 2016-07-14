---
id: 600
title: Sequences
date: 2011-11-18T17:10:43+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=600
permalink: /sequences/
tmac_last_id:
  - 280345267000184832
categories:
  - Science
---
> A lightweight HTML file which quickly gives you reverse compliments of DNA sequences. Available at <http://www.tallphil.co.uk/bioinformatics/sequences/>

A very common task for anyone involved in genetics is the manipulation of DNA or RNA sequences. I need to find the [reverse compliment](http://en.wikipedia.org/wiki/Complementarity_(molecular_biology)) of sequences all the time, and I've been getting increasingly frustrated with the lack of a simple, robust tool to do that - most require strictly formatted sequences, use Java applets which take ages to load, and are generally faffy.

I thought I'd do something about this, so I made my own:
  
<http://www.tallphil.co.uk/bioinformatics/sequences/>

It does a couple of cool things, such as remembering your settings using 

[HTML5 local storage](http://diveintohtml5.ep.io/storage.html), and giving the option to automatically copy results to the clipboard in internet explorer.

It's free for anyone to use, and everything is included in the one HTML file. To host it on your own server just View Source, copy and paste..

**_[ Update : ]_** This project is now hosted on [github](https://github.com/tallphil/Sequences) - it's still only one file (so you can still use or grab it by viewing source above), but github allows nice things like issue tracking, collaboration and forking&#8230;