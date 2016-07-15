---
id: 885
title: How to write a good log file
date: 2016-05-26T14:27:42+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=885
permalink: /writing-good-log-files/
feature_image: files/2016/G-C-Woolley-page-of-diary-No2-e1464269232251.jpg
categories:
  - Science
tags:
  - bioinformatics
  - software
---

Software log messages are not a sexy topic. In fact, they're usually pretty
low down the list of priorities that most bioinformaticians have when writing
software. But logs are important! Here are some of my tips on how to get it
right.


I've just finished reading Simon Andrews'
[excellent blog post](http://proteo.me.uk/2016/05/defensive-strategies-to-get-through-software-paper-reviews/)
about tips for writing good scientific software (and getting through paper
reviews). It's prompted me to write up a blog post that I've had in the back
of my mind for a while now. For the past six months or so, I've been writing a
tool called [MultiQC](http://multiqc.info/) which parses results and logs from
other bioinformatics tools to create an overview report. Spending so much time
looking at the output from a wide range of tools has given me strong opinions on
what makes a good (and bad!) log output.

Before I kick off, what do I mean by
log output? In the context of MultiQC, I mean status updates, details of the
execution environment and summary statistics. Most bioinformatics tools
typically should output all three of these things. Updates are important to let
the user know that stuff is happening, and how. Details of the execution are
important when revisiting an old analysis, so you can be sure of how it was run.
Summary statistics are relied upon by the user when assessing whether your
program works.

## Suggestion 1: Write to a file
This is probably the most controversial of all my suggestions. Lots of
bioinformatics tools output great logs, but they only go to `STDERR`
(the standard error stream). This makes sense when running the tool, as you
see the results come up on the console as you run the tool. However, it also
means that the log messages _aren't saved by default_. Users will often do
this themselves by redirecting this stream, but this file won't have a
standard file name pattern and may be concatenated with output from other tools.

Instead, I humbly suggest that you make life easy
for your users - write logs and summary statistics to files. Using `STDERR` in
addition to this is fine, worst case scenario is that the information will be
saved twice. Giving your outputs a standard filename or filename extension has
the added benefit that they're easier to find for downstream use.

## Suggestion 2: Repeat Yourself
When a user executes a command and sees the
resulting log, it's obvious to them what they ran. However, ask them again a
week later and the chances are that they'll have forgotten the fifteen command
line flags that they specified. Ask them a month later and they'll have
forgotten why they ran it and what the data was. If you repeat all of this
information in your log output files, it is stored for future reference which
can be enormously useful.

A great example of a tool that does this well is
the RNA-seq aligner [STAR](https://github.com/alexdobin/STAR) which creates a
log file listing all of it's hundreds of parameters. An abbreviated version of
this file looks as follows:

```
STAR version=STAR_2.5.1b
STAR compilation time,server,dir=Tue Jan 26 13:48:00 CET 2016 milou-b.uppmax.uu.se:/sw/apps/bioinfo/star/2.5.1b/src/source
##### DEFAULT parameters:
versionSTAR 20201
versionGenome 20101 20200
parametersFiles -
sysShell -
runMode alignReads
_[...]_
##### Command Line:
STAR --genomeDir STARIndex --sjdbGTFfile genes.gtf --readFilesIn short_human_3_R1_trimmed.fq.gz --runThreadN 8 --twopassMode Basic --outWigType bedGraph --outSAMtype BAM SortedByCoordinate --readFilesCommand zcat --outFileNamePrefix short_human_1_R1
##### Initial USER parameters from Command Line:
outFileNamePrefix short_human_1_R1
###### All USER parameters from Command Line:
genomeDir STARIndex ~RE-DEFINED
sjdbGTFfile genes.gtf ~RE-DEFINED
readFilesIn short_human_3_R1_trimmed.fq.gz ~RE-DEFINED
runThreadN 8 ~RE-DEFINED
twopassMode Basic ~RE-DEFINED
outWigType bedGraph ~RE-DEFINED
outSAMtype BAM SortedByCoordinate ~RE-DEFINED
readFilesCommand zcat ~RE-DEFINED
outFileNamePrefix short_human_1_R1 ~RE-DEFINED
##### Finished reading parameters from all sources

##### Final user re-defined parameters-----------------:
runThreadN 8
_[...]_
```

This is silently printed to a file for future reference, along with a much
simpler `*Log.final.out` file which summarises the final results of the
execution.

## Suggestion 3: Use Nice Formats
With a little forethought, it's a trivial job
to write output which is easy to read for both Humans and computers. This
suggestion is best explained with a couple of examples. [Bowtie
2](http://bowtie-bio.sourceforge.net/bowtie2/index.shtml) is a common and very
capable short read aligner. Unfortunately, its logged output is really difficult
to parse. It looks something like this:

```
314537 reads; of these:
  314537 (100.00%) were paired; of these:
    111016 (35.30%) aligned concordantly 0 times
    193300 (61.46%) aligned concordantly exactly 1 time
    10221 (3.25%) aligned concordantly >1 times
    ----
    111016 pairs aligned concordantly 0 times; of these:
      11377 (10.25%) aligned discordantly 1 time
    ----
    99639 pairs aligned 0 times concordantly or discordantly; of these:
      199278 mates make up the pairs; of these:
        112779 (56.59%) aligned 0 times
        85802 (43.06%) aligned exactly 1 time
        697 (0.35%) aligned >1 times
82.07% overall alignment rate
```
This goes to `STDERR` and doesn't repeat the parameters or input
filenames. However, what makes it really tricky to use is its format - the
syntax of each line is very similar to others and can only be properly
understood in the context of what's written around it _(MultiQC counts the
indentation spaces with nested loops)._

Compare this to the summary output from
[Salmon](https://combine-lab.github.io/salmon/) - a tool for quantifying
RNA-seq data. This saves data to files called `cmd_info.json`
and `meta_info.json` (amongst others). These look like this:

```json
{
    "salmon_version": "0.6.0",
    "samp_type": "none",
    "frag_dist_length": 2001,
    "bias_correct": true,
    "num_bias_bins": 4096,
    "mapping_type": "mapping",
    "num_targets": 209539,
    "num_bootstraps": 0,
    "num_processed": 439147,
    "num_mapped": 367866,
    "percent_mapped": 83.76830537382699,
    "call": "quant",
    "start_time": "Thu Mar 31 13:09:43 2016"
}
```


By contrast, this output is trivial to find. Once found, it can be parsed
in a single line of code. `cmd_info.json` lists the input files, the
parameters, the version of the software and other key information. To be fair,
Salmon was written with single-cell data in mind so the authors expected it
to be run on thousands of samples, making machine parsing inevitable.
However, there is no reason that Bowtie 2 couldn't do the same in addition
to it's nice Human-readable log output.

If you're in doubt, I'd recommend using YAML, JSON or tab-separated
output. I think YAML is the easiest to read for Humans; whilst tab-separated
files can be most easily opened in Excel.

## In Conclusion
Even though it might not seem obvious to you whilst developing, good logging
practices can really help your users in the long run. It only takes a moment
to set these things up if done early and can save a lot of heartache further
down the line.
