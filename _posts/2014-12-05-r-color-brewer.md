---
id: 850
title: Using R Color Brewer
date: 2014-12-05T12:45:56+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=850
permalink: /r-color-brewer/
categories:
  - Science
tags:
  - bioinformatics
  - data visualization
  - R
  - rcolorbrewer
---
> Making nice plots with good colours is easy using [RColorBrewer](http://cran.r-project.org/web/packages/RColorBrewer/index.html). I put together a very simple tutorial walkthrough which you can see <span style="text-decoration: underline;"><strong>[here](https://cdn.rawgit.com/ewels/90c0fcc676bded22cd45/raw/5a72436417b4f924aaa55c0b162ff1816918918a/rcolorbrewer_example.html)</strong></span>.



I'm often asked how I make plot look nice for presentations and analysis. The answer is usually the same - start with nice colours! Thankfully this is made very easy if you use colours specified on the [Color Brewer](http://colorbrewer2.org/) website. If you're writing code in R there's even a package which provides all of the colours for you called [RColorBrewer](http://cran.r-project.org/web/packages/RColorBrewer/index.html).

To give some pointers to a colleague, I put together a quick demonstration explaining how to get started with RColorBrewer. This was done in R using knitr in [RStudio](http://www.rstudio.com/) to create nice HTML output. <span style="text-decoration: underline;"><strong>You can find the demonstration [here](https://cdn.rawgit.com/ewels/90c0fcc676bded22cd45/raw/5a72436417b4f924aaa55c0b162ff1816918918a/rcolorbrewer_example.html).</strong></span> You can also find the original script [here](https://gist.github.com/ewels/90c0fcc676bded22cd45#file-rcolorbrewer_example-r).

These are the Color Brewer palettes that you can find in the example:

![colorbrewer_cols]({{ site.baseurl | prepend: site.github.url }}/files/2014/colorbrewer_cols-e1417783539859.png)