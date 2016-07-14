---
id: 540
title: Flickr Press
date: 2011-07-19T23:54:28+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=540
permalink: /flickr-press/
tmac_last_id:
  - 280345276236058624
categories:
  - Website Design
tags:
  - WordPress
---
I've been using the excellent [Flickr Press](http://www.fergusweb.net/software/flickr-press/) plugin to display flickr sets on a [website](http://www.mcr.trinhall.cam.ac.uk/photos/) that I've been working on lately, and I made a few changes to make life easier. In case anyone else may find them useful, I've uploaded the modified plugin here for general use. I've notified the original author, so hopefully if he likes the changes they may be pushed in a future update. For now you can [download it here]({{ site.baseurl | prepend: site.github.url }}/files/2011/flickr-press.zip).

Changes are:

  * Option to specify the size of the main photo
  * Option to change how frequently the cache is updated
  * Inclusion of a link around the main photo, so that clicking it advances
  * A bit of Javascript to allow the user to use the cursor keys to navigate

Also, in case anyone finds them useful, below are some CSS styles I've written for the website theme mentioned above. The main things that this CSS does are:

  * Floats the sets to the left, and clears every third set to give regular rows of three sets
  * Removes the background-image shadow and uses CSS3 shadows (which will fit the size of the image perfectly)
  * Removes some of the text styling (such as link underlines)
  * Changes the rollover behaviour of photo thumbnails, including CSS3 animations

[css]
  
#flickr_photosets .photoset {
	  
border:1px solid #999 !important;
	  
-moz-box-shadow: 0 0 8px #999;
	  
-webkit-box-shadow: 0 0 8px #999;
	  
box-shadow: 0 0 8px #999;
	  
width:280px;
	  
float:left;
	  
clear:none !important;
  
}
  
#flickr_photosets .photoset h3 {
	  
text-shadow:none !important;
	  
margin-top:0;
  
}
  
#flickr_photosets .photoset h3 a { text-decoration:none; font-size:medium; font-family: Garamond, Georgia, serif; }
  
#flickr_photosets .photoset p { font-size:smaller; color:#666; }
  
#flickr_photosets .photoset p a { text-decoration:none; color:#666; }
  
#flickr\_photosets .photoset h3 a:hover, #flickr\_photosets .photoset p a:hover { text-decoration:underline; }
  
#flickr_photosets .photoset:nth-of-type(2n+1) {
	  
clear:left !important;
  
}
  
#flickr\_album .thumbnails a.thumb img.thumb, #flickr\_photo .photo_context p a img { margin: 1px 8px 5px 1px; border:1px solid #FFF; }
  
#flickr_album a img.primary { margin: 2px 24px 8px 2px; border:1px solid #FFF; }
  
#flickr\_album .thumbnails a.thumb img.thumb, #flickr\_album a img.primary, #flickr\_photo .photo\_context p a img {
	  
padding:0;
	  
background:none;
	  
-moz-box-shadow: 2px 2px 4px #999;
	  
-webkit-box-shadow: 2px 2px 4px #999;
	  
box-shadow: 2px 2px 4px #999;
	  
-webkit-transition: all 100ms ease-in;
	  
-moz-transition: all 100ms ease-in;
	  
-o-transition: all 100ms ease-in;
	  
transition: all 100ms ease-in;
  
}
  
#flickr\_album .thumbnails a.thumb:hover img.thumb, #flickr\_album a:hover img.primary, #flickr\_photo .photo\_context p a:hover img { border:1px solid #666; }
  
#flickr_photo p.photo img.photo { border: 1px solid #999; }
  
#flickr_photo p.meta a { text-decoration:none; }
  
[/css]