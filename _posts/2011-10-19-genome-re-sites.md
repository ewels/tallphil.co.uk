---
id: 565
title: Genome RE Sites
date: 2011-10-19T15:50:44+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=565
permalink: /genome-re-sites/
tmac_last_id:
  - 280345271613927424
categories:
  - Science
---
Rather than sitting on my hard disk getting dusty, I thought I should start publishing the bioinformatics scripts that I've written over the past few years of my PhD.

The first to go up is a Perl script called &#8220;Genome RE Sites&#8221; - it searches a genome of your choice for a [restriction endonuclease](http://en.wikipedia.org/wiki/Restriction_enzyme) recognition site and outputs the co-ordinates of all cut sites.

**[ Update ] : You can find an online version of this tool _[here](http://www.tallphil.co.uk/bioinformatics/genome_re_sites)._**



I use a technique called [Chromosome Conformation Capture](http://en.wikipedia.org/wiki/Chromosome_conformation_capture), which uses restriction enzymes, so I frequently need to generate a list of cut sites to help me analyse data.

This script needs to be run on the command line, either on a linux system or using something like [ActivePerl ](http://www.activestate.com/activeperl)on Windows. Usage of this script is:

```bash
perl genome_RE_sites.pl [output file] [search string]
```

..where [output file] is the filename that will hold your results and [search string] is the restriction enzyme recognition site. The latter can be ignored and will default to HindIII (AAGCTT). There are a few other configuration options that you'll need to edit before using the script, such as location of downloaded genome sequences and chromosome names. Please leave a comment if you have any problems with these.

Download the code [here](https://gist.github.com/tallphil/6175796/download), or copy and paste from below:

[gist id=&#8221;6175796&#8243;]