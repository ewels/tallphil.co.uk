---
id: 623
title: 'LyX Tips for Thesis Writing - Part 1'
date: 2012-06-13T16:46:28+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=623
permalink: /lyx-tips-thesis-writing-part-1/
tmac_last_id:
  - 280345266975019009
categories:
  - Science
tags:
  - lyx
  - thesis
---
The saga that is writing my PhD thesis is just beginning and after after quite a bit of deliberation, I've decided to write in LyX. There's quite a bit written about LyX already, but I've found a [blog post by the same name as this one](http://longair.net/blog/2009/11/11/lyx-tips-for-thesis-writing/) particularly useful. As such, I thought I'd try to give a little back to the interwebs and write my own hints and tips posts as I go.

Warning, this is a pretty geeky post by my standards. It will be a very dull read if you're _not_ writing a thesis and thinking of using LyX..



> **UPDATE:** I have written a [second part to this series](http://www.tallphil.co.uk/lyx-tips-for-thesis-writing-part-two/), written after the submission of my thesis which covers a lot more specific details of my LyX set up.

### Why LyX?

I must hold up a disclaimer here that I am a bit of a geek. My PhD is in [molecular biology](http://www.babraham.ac.uk/), and most other students in my year are using Microsoft Word to write up. I _hate_ MS Word when it comes to writing large documents, especially when they contain a lot of figures, so I've been interested in alternatives for a while. I've found LyX to be an excellent half way point between the WYSIWIG (what you see is what you get) clutter free environment of Word and the codemonkey-plaintext environment of LaTeX. The documentation actually refers to LyX as WYSIWYM (what you see is what you mean) and I really like how clear it is to write in.

### LyX + LaTeX

I should mention that when I come to polishing this particular <del>turd</del> thesis, I'm pretty sure that I'll export it as LaTeX and then use the full power of LaTeX to do funky stuff. But for the actual writing content bit I prefer LyX. I read somewhere (?) that a good way to do this is by just having a separate LaTeX include file so that you can overwrite the LaTeX export files each time you change something in LyX.

### Structure

LyX handles child documents really rather well, and so I have a main thesis_master.lyx file which consists of a Title, Author, Table of Contents, List of Figures / Tables, Bibliography and then a tonne of child file includes for each chapter. Whilst editing each child file you can preview the pdf of just that chapter or use the adjacent button to view the entire thesis pdf.

### Bibliography - Mendeley

For any academic document such as a thesis, there are going to be a lot of references. Again, the traditional choice in my field is to use EndNote as a reference manager in concert with MS Word. I've gone for [Mendeley](http://www.mendeley.com/) though, a free to use reference manager which stores all of its references in the cloud. This means that my library is up to date whatever computer I use. Best of all though, it has the option to automatically sync BibTeX files (Tools » Options » BibTeX). This means that I can have a folder within Mendeley called Thesis, and whatever papers I drop into this will appear in my BibTeX file. LyX then links to this, and I can reference all of my papers. If you're writing in pure LaTeX you can hit Ctrl-K within Mendeley and copy the citation key too, very easy.

### github

I'm using [github](https://github.com) to manage version control. In lay terms this means that I won't end up with thesis\_v1.lyx, thesis\_v2.lyx, thesis\_final.lyx, thesis\_final_v2.lyx and so on.. At any point I can revert to any earlier checkpoint in any file, which is nice. Also, uploading to the github cloud is another layer of backup (I also store these files on dropbox, so there really is no way I can lose this thing). If you're in full time education, you can get an [education account](https://github.com/edu) with github which allows you to have free private repositories, perfect for thesis writing!

### Initial LyX Setup

Ok, into the details. These are the first things that I changed in my master document and child documents (you need to do each one separately if you intend to preview them in their own pdfs)... All of this stuff is in Document » Settings.

> **UPDATE:** I later changed both margins and bibliography style. You can read more details in [Part 2 of this post](http://www.tallphil.co.uk/lyx-tips-for-thesis-writing-part-two/).

  * Document Class - I set the document class to report. This has far reaching consequences, so do it early.
  * Modules - I added Number Equations / Figures / Tables by Section. This has the effect of naming each figure according to the chapter and section that it's within, rather than simply by the number of figures that there has been.
  * Fonts - I kept this simple to start with, using Sans Serif as the Default family, and Helvetica for Sans Serif. I imagine that I'll move to XeTeX and possibly fancier fonts at the end once I move into pure LaTeX.
  * Page Margins - LaTeX always defaults to massive margins. I changed mine to 2cm Top, Bottom, Outer and 3cm Inner.
  * Bibliography - Natbib, style Numerical.
  * PDF Properties - Use hyperref support (No frames around links). This allows the table of contents to act as clickable links to the parts of your document, and gives the PDF bookmarks which I find very helpful.

If you're forward thinking enough to do all of this before you start creating your child documents you should only have to do this once. I wasn't.

### Part 1 Conclusion

And.. this is as far as I've got. Stay tuned for more posts on the topic as I encounter more <del>problems</del> solutions.