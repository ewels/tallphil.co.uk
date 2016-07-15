---
id: 685
title: LyX Tips for Thesis Writing – Part 2
date: 2012-12-16T16:06:58+00:00
layout: post
guid: http://www.tallphil.co.uk/?p=685
permalink: /lyx-tips-for-thesis-writing-part-two/
tmac_last_id:
  - 280345262508085248
categories:
  - Science
---

I'm glad to say that I passed my PhD viva a couple of days ago! As such I feel that I finally have a bit of spare time to write down some extra notes to follow on from my [first post about writing my thesis in LyX](http://www.tallphil.co.uk/lyx-tips-thesis-writing-part-1/). The first post has been one of the most read items on this website so I hope some people find them useful.

> Not sure exactly what LyX is or why you should use it for a thesis? Check out the [first post I wrote](http://www.tallphil.co.uk/lyx-tips-thesis-writing-part-1/) when starting my write up for an introduction.. [[ link ]](http://www.tallphil.co.uk/lyx-tips-thesis-writing-part-1/)

### Figures

Something that I realised very quickly is that whilst doing complicated things with figures in LyX is _possible_, it can be a pain in the arse. I am in love with Adobe Illustrator, so I created all figures there (including subfigures - I'd put each subfigure together into a single figure in Illustrator) and then export them as an `.eps`. This keeps all of the handling of figures in LyX simple and pain free.

My system within LyX was to insert a `Figure float` (I had a few `Figure Wrap Floats` but generally they were annoying and got converted back to standard `Figure floats`). This then had the `.eps` file set to 100% Column Width with 30% scale on screen so it's not massive. In the figure legend I would insert a label so that the figure could be referenced from the text, and then a long figure legend describing the figure in detail. This is far too long to go into the List of Figures at the start of the thesis, so I'd also add a `Short Title` (_Insert > Short Title_) with a title roughly 5 - 10 words long. I'd copy and paste this title and put it at the start of the figure legend in bold text. A bit manual, but it worked.

Finally, I found the LaTeX figure placement to be fairly annoying and random, so in _Document Settings > Float Placement_ I unticked everything except for `Here if possible` and `Ignore LaTeX rules`. I still had some frustrations, but things mostly worked then.

Tables were a bit of a nightmare in LyX, so I admit that some were done in Excel before being exported into Illustrator and embedded as an `.eps` in a `Table float`. Not recommended for big tables as changing anything is a pain.

### Bibliography when previewing a single chapter

This is a nice mini hint - as my thesis grew I found myself previewing chapters on their own most of the time (faster to produce the pdf, smaller file sizes etc). A big problem with doing this is that the bibliography doesn't come with the child file, so all of the references are empty.

I found a good way to get around this problem with the help of [this post](http://wiki.lyx.org/FAQ/Multidoc#multipart-bib). In short, you create a comment at the base of each child document containing a bibliography. When you create the pdf of the master document these are ignored as they are contained within a comment. However, with a small bit of preamble contained within the child document headers:

```
\usepackage&#123;comment&#125;
\includecomment&#123;comment&#125;
```

comments are rendered and so you get the bibliography. Easy to do and very useful.

### Reference styles

I changed my mind with quite a few style issues as I went through. One of the main changes was the style of my references. On the whole, I prefer small and unobtrusive reference styles such as [1] or the Nature super-script style <sup>2</sup>. I find that these don't disrupt the flow of the document and are easy to find quickly in the bibliography. However, in a document as large as a thesis, I started to find it a real pain to get to the back of the book and find each reference I wanted to check. The longer form references such as (Ewels P, 2012) take up more space but allow the reader to have a good idea of the reference in the text whilst being able to look up the complete reference only if they want. I figured that if I found this form easier to read then my examiners would too. I ended up using `Natbib` (`author-year`) _Citation Style_ in _Document Settings > Bibliography_ along with the bibliography style `klunamed` found when clicking the inserted bibliography itself.

This change in bibliography style relatively late on caused quite a bit of a headache, as the `plainnat` reference style has a number of different formatting options whereas the `numerical` setting only has one. All of my references defaulted to the wrong style. Thankfully this was fairly easy to fix by directly editing the `.lyx` files in a text editor:

  * _Find:_ **`LatexCommand cite`**
  * _Replace:_ **`LatexCommand citep`**

This was discussed in a little more details on [Stack Overflow](http://tex.stackexchange.com/questions/71570/lyx-citation-styles-after-insertion/71573). I also had to fix quite a lot of citations manually, as well as deliberately using some of the other citation styles.

Finally, the following line in the LaTeX preamble helps the resulting references to look nice:

```
\bibpunct[; ]&#123;(&#125;&#123;)&#125;&#123;;&#125;&#123;a&#125;&#123;,&#125;&#123;;&#125;
```

### Margins and Font Sizes

In my [first post](http://www.tallphil.co.uk/lyx-tips-thesis-writing-part-1/) I describe my setup as using 2 cm page margins, 3 cm inner. After a particular chat with my supervisor and subsequent measuring of other student's theses, I revised this to a much more comfortable 4 cm margin with a 3 cm outer.

The same happened with font sizes - I started with Base Size 10 font size which seemed sensible but after the above chat changed to Base Size 12. This looked ridiculously large and cumbersome at first but I soon got used to it and it made the thesis much easier to read.

### Reviews by lab mates

One of the main reasons that I chose to use LyX in the first place was that it could handle `Track Changes` for easy reviewing by my supervisor and helpful PostDocs. In reality, my supervisor was vaguely annoyed at me for not conforming and using MS Word and never installed LyX despite my detailed instructions, links and assurances that it was really very easy. One of the three PostDocs who helped me did use LyX, but everyone else simply printed out the `.pdf` and wrote on it with pen. Low tech, but it worked.

### Pimping Style Priorities

When I started my thesis I had grant plans about nice fonts, impressive styles and even [full bibliography references shown on the blank facing page of a single sided document](http://tex.stackexchange.com/questions/67569/bibtex-references-on-facing-page). What happened in reality is that I (thankfully) did not allow myself to spend any time on these things until _after_ I had the bulk of my thesis written. I reached this point approximately twelve minutes before I had to print my thesis ready for submission, so these fancy ideas were never implemented.

I ended up using Times Roman body text with Helvetica headings, and to be honest I think it looked fine. Whilst this has nothing to do with LyX or LaTeX, I recommend keeping a list of the cool stuff you think of doing rather than actually trying to do them - your productivity will thank you for it!

### Fancy Headers

I ended up using fairly small and unobtrusive fancy headers. In _Document Settings > Page Layout_ I set the _Headings Style_ to `Fancy`. I then used the following LaTeX code in the preamble:

```
\usepackage&#123;fancyhdr&#125;
   % don't make chapters and sections upper-case
\renewcommand&#123;\chaptermark&#125;[1]&#123;\markboth&#123;#1&#125;&#123;&#125;&#125;
\renewcommand&#123;\sectionmark&#125;[1]&#123;\markright&#123;#1&#125;&#123;&#125;&#125;
   % no lines
\renewcommand&#123;\headrulewidth&#125;&#123;0pt&#125;
\renewcommand&#123;\footrulewidth&#125;&#123;0pt&#125;
   % clear defaults
\fancyhf&#123;&#125;
   % set up font
\newcommand&#123;\headerfont&#125;&#123;\color[gray]&#123;0.7&#125;\fontfamily&#123;phv&#125;\fontsize&#123;10&#125;&#123;11&#125;\selectfont&#125;
\newcommand&#123;\footerfont&#125;&#123;\fontfamily&#123;phv&#125;\fontsize&#123;11&#125;&#123;11&#125;\selectfont&#125;
   % header - right
\renewcommand&#123;\chaptermark&#125;[1]&#123;\markboth&#123;\chaptername \ \thechapter: #1&#125;&#123;&#125;&#125;
\lhead&#123;\headerfont\leftmark&#125;
   % footer - center
\fancyfoot[C]&#123;\footerfont\thepage&#125;

\pagestyle&#123;plain&#125;
```

In short, this gets rid of the (in my opinion, fairly horrible) default styles for the header such as being ALL CAPS and having a black underline. It then sets to the font to be a fairly light grey (for the header, black for the footer), sans-serif and a suitable font size. It then templates the header to say the chapter number and name and the footer to say the page number.

An important usage note comes with the above code: the final line _disables_ the fancy header so that it's not shown. This is because I didn't want the initial pages (Summary, ToC etc) to have the header. Once those pages were out of the way and before the introduction, I put in the following LaTeX command in a red box in the file:

```
\pagestyle&#123;fancy&#125;
```

This turns the fancy headers on for the rest of the thesis.

### Sharing LaTeX Preamble in Child Documents

When you have a lot of different child documents, it's a pain when you want to add something to the LaTeX preamble and have to go through each file. Instead, you can create a separate document (eg. `lyx_preamble.tex`) and then simply put the following in the LaTeX preamble of each document:

```
\input&#123;lyx_preamble&#125;
```

### Miscellaneous LaTeX Preamble

These are all of the bits and pieces that ended up in my LaTeX preamble which aren't discussed above..

```
\hyphenpenalty=5000
```

This stops LaTeX from putting hyphens everywhere (but allows a few)

```
\clubpenalty=9999
\widowpenalty=9999
```

This apparently avoids nasty paragraph widows and orphans

```
\renewcommand&#123;\nomname&#125;&#123;List of Abbreviations&#125;
```

Uses the title _List of Abbreviations _instead of the default _Nomenclature_.

```
\usepackage[margin=10pt,font=&#123;footnotesize,sf&#125;,labelfont=bf,labelsep=endash]&#123;caption&#125;
```

Makes the figure captions look nice - small text, _sans-serif_ and **Fig X.X** in bold.

```
\usepackage[&#123;sf,bf&#125;]&#123;titlesec&#125;
```

Forces chapter headings to use a bold sans-serif font.

```
\makeatletter
\renewenvironment&#123;table&#125;%
 &#123;\renewcommand&#123;\familydefault&#125;&#123;\sfdefault&#125;\selectfont
 \@float&#123;table&#125;&#125;
 &#123;\end@float&#125;
\makeatother
```

Make tables use a small sans-serif font.

```
\let\originaltable\table
\let\endoriginaltable\endtable
\renewenvironment&#123;table&#125;[1][ht]&#123;%
 \originaltable[#1]
 \centering&#125;%
 &#123;\endoriginaltable&#125;
\let\originalfigure\figure
\let\endoriginalfigure\endfigure
\renewenvironment&#123;figure&#125;[1][ht]&#123;%
 \originalfigure[#1]
 \centering&#125;%
 &#123;\endoriginalfigure&#125;
```

Centres tables and figures on the page.

### Miscellaneous Formatting Fixes

As the printing of my thesis approached, I ended up fudging a few formatting fixes using LaTeX commands in LyX (the little red boxes). These weren't particularly pretty, and I'm sure that there is a more elegant way to achieve the same effects, but they did the job. For the desperate, they are listed below:

```
\\
```

The double backslash forces a line break. I used this quite a bit to make headings wrap in sensible places for example. Quite versatile!

```
\vspace*&#123;2cm&#125;
```

`vspace` simply adds vertical space to the document. I used this to space out my title page as I wanted it, as well as forcing sensible figure placement in a couple of places.

```
\singlespacing
\doublespacing
```

These do exactly what you'd expect. I had the Document Settings line spacing set to `OneHalf` in the master document but then switched manually between `\singlespacing` and `\doublespacing` throughout the document. Especially useful for sections such as the table of contents, lists of figures and bibliography where you don't want ridiculous line spacing.

```
\pagenumbering&#123;roman&#125;
\pagenumbering&#123;arabic&#125;
\setcounter&#123;page&#125;&#123;1&#125;
```

These commands are used to create the Roman numeral page numbering typically found for the Table of Contents and figure lengends (i, ii, iii, iv etc). This is then changed to arabic (1, 2, 3 etc) and reset to one for the start of the introduction.

### Conclusion

Looking back at my thesis, I am glad I used the **LyX** + **Mendeley** + **github** combination. On the whole I think it caused far less headaches than trying to get Microsoft Word whilst avoiding the endless opportunity for procrastination that writing in pure LaTeX would have provided.

If you're writing your thesis as you read this, good luck!