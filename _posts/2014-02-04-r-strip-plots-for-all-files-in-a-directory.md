---
id: 809
title: 'R - Strip Plots for all files in a directory'
date: 2014-02-04T15:32:11+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=809
permalink: /r-strip-plots-for-all-files-in-a-directory/
categories:
  - Science
  - "Things I've Made"
tags:
  - bioinformatics
  - R
  - Strip Plot
---
I often have directories full of text files (usually containing probe reports from SeqMonk). This little snippet will use R to create a strip plot with a column for each file.



![R strip plots]({{ site.baseurl | prepend: site.github.url }}/files/2014/r-strip-plots-for-all-files-in-a-directory.png)

The files don't have to be the same length and there can be any number of them. As the code stands it only reads in column 13 of the file (typically the column with the quantitated values in [SeqMonk ](http://www.bioinformatics.babraham.ac.uk/projects/seqmonk/)reports).

I hope this little snippet comes in handy for someone!

<div style="clear: both;">
</div>

[gist id=&#8221;8805738&#8243;]