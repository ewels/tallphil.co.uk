---
id: 780
title: 'Saving space - finding big text files'
date: 2013-06-25T16:27:34+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=780
permalink: /finding-big-text-files/
categories:
  - Science
tags:
  - bioinformatics
  - compression
  - perl
  - script
  - zip
---
Anyone working with big data will know the sinking feeling of seeing a job fail because a hard disk ran out of space. We even have a trophy in our office which is passed around to whoever manages to fill a disk up.

In biology and bioinformatics, we often work with text files. These things can be fairly huge and we tend to work with them as raw ASCII text. When the job is no longer being actively worked on, the files can be compressed and this can save an awful lot of space. The problem is remembering to compress stuff!

To help with this, I wrote a mini-script which I thought may be useful to others. You can use the script to print out a list of paths to potentially compressible files. The output is printed as STOUT, so can be [saved to a file](http://linuxwave.blogspot.co.uk/2008/03/redirecting-stdout-and-stderr.html) or piped to other commands.

[gist id=&#8221;6175673&#8243;]