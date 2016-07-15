---
id: 833
title: niceLiftOver
date: 2014-04-03T16:47:42+00:00
layout: post
guid: http://www.tallphil.co.uk/?p=833
permalink: /niceliftover/
categories:
  - Science
  - "Things I've Made"
tags:
  - bioinformatics
  - converter
  - coordinates
---
> A simple bioinformatics tool to take a data input file and liftOver the genome co-ordinates in place, leaving all other data intact. Available on [GitHub](https://github.com/tallphil/niceLiftOver).



In bioinformatics we often work with reference genomes. These references are frequently updated. This means that two datasets that we may want to compare could have co-ordinates from different genome builds.

Thankfully, the nice folks over at UCSC have released a tool called [liftOver](http://genome.ucsc.edu/cgi-bin/hgLiftOver), which is able to take a set of genome co-ordinates for one build and convert them to another.

The problem with this tool is that it requires its input to be in a fixed format - either BED or chr:start-end. Converting data to this format can be a pain and often means that you'll have to strip other information from your data file that you need.

[niceLiftOver](https://github.com/tallphil/niceLiftOver) is a wrapper script written in Perl. It takes input data in any format and does its best to interpret it, guessing what delimiter it uses and which columns contain the chromosome, start and end positions. It passes these co-ordinates to liftOver, gets the results and then puts them back _in-situ_, leaving all other information intact.

The tool should run on any command line environment and can be configured to work with any file format by using command line flags (if it isn't able to work it out for itself).

[niceLiftOver](https://github.com/tallphil/niceLiftOver) is an open source package, released with the GPLv3 licence. You can download (and contribute to) the software on GitHub, here: [https://github.com/tallphil/niceLiftOver](https://github.com/tallphil/niceLiftOver)