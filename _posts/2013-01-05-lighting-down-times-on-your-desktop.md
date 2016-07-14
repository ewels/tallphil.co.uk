---
id: 745
title: CUCBC Lighting down times on your desktop
date: 2013-01-05T16:58:16+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=745
permalink: /lighting-down-times-on-your-desktop/
categories:
  - Personal
---
A bit of geekery for this post - many rowers and coaches in Cambridge organise their lives around the [CUCBC lighting up and lighting down times](http://www.cucbc.org/lighting). These change every day and dictate when college rowing boats are allowed on the river.

The CUCBC provide a handy URL with a very simple [output](http://www.cucbc.org/darkness.txt) of the lighting up and lighting down times for webmasters to use on their websites. With a little bit of geekery anyone can use this URL to display this information on their desktop for quick reference.



If you're using OS X, you can use an excellent program called [GeekTool](https://itunes.apple.com/gb/app/geektool/id456877552?mt=12) which allows you to display all kinds of dynamic content on your desktop. It's very flexible and allows you to display the output of any terminal command. I'm sure that you can achieve something similar on linux and windows, but I'm not sure exactly how ([Rainmeter](http://rainmeter.net/cms/) for windows perhaps?)

Anyway, once GeekTool is installed, drag a new Shell object onto your desktop and paste the following into the Command box:

```bash
echo "Lighting down today:"; echo "Lighting up today:"; echo "Lighting down tomorrow:"; echo "Lighting up tomorrow:";
```

Create a second Shell object and place it alongside (using two makes it easy to align the results). Paste the following into the second:

```bash
curl http://www.cucbc.org/darkness.txt | tail +2
```

You can hack these around to make it work as you'd like. Here's an explanation of what each bit is doing:

```bash
echo "Lighting down today:";
```

`echo` prints whatever you put in the quotation marks. Optional extra - any commands you put within a $() will be executed and printed.

```bash
curl http://www.cucbc.org/darkness.txt
```

`curl` gets the contents of the URL with the lighting up and down times.

```bash
tail +2
```

`tail` returns the end of the results. +2 means start from the second line, so this trims off the first line.

Optional extra - if you want to print out one specific line you can use `tail +<em>n</em>` and pipe that into:

```bash
head -n 1
```

`head` returns the start of the results. -n 1 means return only one line.

All of these commands are connected to each other with pipes (the `|` character), which passes their results from one to the next.

Hopefully, your desktop should now be looking something like this:

![Lighting up and down times on my desktop]({{ site.baseurl }}/files/2013/lighting_up_down.png)

[Full size here]({{ site.baseurl }}/files/2013/desktop.jpg).