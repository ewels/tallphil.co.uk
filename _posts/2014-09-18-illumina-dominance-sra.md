---
id: 840
title: Illumina Dominance in the SRA
date: 2014-09-18T18:05:58+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=840
permalink: /illumina-dominance-sra/
categories:
  - Science
---
> Looking into the dominance of Illumina Sequencing in Human samples stored in the Sequence Read Archive (SRA)



I work in biology research, specifically bioinformatics - managing data analysis for high throughput DNA sequencing. Like many labs, we use sequencing machines made by [Illumina](http://www.illumina.com) - this company is pretty dominant in the field and I was interested in just how much data has been produced on these machines.

The [Sequence Read Archive](http://www.ncbi.nlm.nih.gov/sra) is a resource where sequencing data from publications can be uploaded and made available to other researchers. I looked into the metadata associated with these samples to find out how widespread Illumina data is.

### [Click here to read the full knitr output from my quick R script.]({{ site.baseurl }}/files/2014/SRA_illumina_stats.html)

Remember that this is for fun only, so don't take it too seriously! You can see the raw script that generated it [here](https://gist.github.com/ewels/6fc0717eac64c7fbc8bc). I've dropped a couple of images in below for those who want the quick overview..

![samples_pie]({{ site.baseurl }}/files/2014/samples_pie.png)
  
![bp_pie]({{ site.baseurl }}/files/2014/bp_pie.png)
  
![samples_platform]({{ site.baseurl }}/files/2014/samples_platform.png)
  
![bp_platform]({{ site.baseurl }}/files/2014/bp_platform.png)