---
id: 529
title: Flickr Badge
date: 2011-07-08T14:56:43+00:00
author: Phil
layout: post
guid: http://tallphil.ewels.co.uk/?p=529
permalink: /flickr-badge/
dsq_thread_id:
  - 352998167
tmac_last_id:
  - 280345276236058624
categories:
  - Website Design
tags:
  - WordPress
---
> A simple WordPress plugin that creates a flickr badge widget which you can drop into your site. Available from the [WordPress Plugin Repository](http://wordpress.org/plugins/flickr-badge/).

I've been using the excellent [flickr badge](http://www.flickr.com/badge.gne) on a website lately, and decided that it would be nice to put the script in as a widget, with easy to update options to customise it. So, I wrote a [quick plugin](http://wordpress.org/extend/plugins/flickr-badge/) which does just that...
  


_Please note that this plugin is not associated with [flickr](http://www.flickr.com) in any way, it is purely a convenient way to embed an [existing tool](http://www.flickr.com/badge.gne) written by flickr into a WordPress website._

#### Download

The easiest way to install this plugin is through the WordPress administration pages (&#8216;Plugins > Add New', then search for &#8216;Flickr Badge'). It also has its own [WordPress plugin page](http://wordpress.org/extend/plugins/flickr-badge/).

#### Description

The plugin creates a Widget to display a customised [flickr badge](http://www.flickr.com/badge.gne) on your WordPress site. The output is images wrapped in links to that photo's flickr page.

The widget lets you specify:

  * Title
  * Number of photos to display
  * How to sort photos (Random or Latest)
  * Photo size

You can choose to get public photos from either a flickr _user_, a flickr _group_ or from the _whole_ of flickr. Photos can also be filtered for a tag, or a user Set ID.

#### Installation

To use the plugin, you can either install it through the WordPress control panel _(search for &#8216;Flickr Badge') _or you can download the .zip file from the [WordPress repository page](http://wordpress.org/extend/plugins/flickr-badge/) and upload / install it yourself.

Please note that your theme must have Widgets enabled to use this plugin..

#### Basic Use

To use the new Widget, go to _Appearance > Widgets_ in your WordPress administration. Here you should see an available widget called &#8216;Flickr Badge'. Drag and drop this into the sidebar on the right, where you would like the photos to be shown.

Once placed in a sidebar, expanding the Flickr Badge widget will reveal the following options:

  * Title 
      * Any text here will be set as the title of the widget, above the photos in your sidebar. If left blank there will be no title.
  * Number of photos to display
  * Sort Photos 
      * Show the most recent photos, or a random selection
  * Photo size
  * Layout
  * Source of photos 
      * You can choose to display photos from either an individual flickr user, a flickr group, or the whole flickr pool.
  * User / Group ID 
      * If displaying photos from a user or group, you need to tell the plugin which one to choose. This is done with a flickr ID. There is a handy tool to find this called [idGettr](http://idgettr.com/), and should look something like this: <span class="Apple-style-span" style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px; white-space: pre;">123456%78A90</span>
      * If you are displaying photos from the whole flickr pool, you can leave this field blank.
  * Tag / User Set ID (optional) 
      * If you want, you can choose to filter the result with a tag. For example, you could show a random selection of photos from the whole flickr pool which are tagged with the word &#8216;blue', or &#8216;unicorns'. This also works for group and user photos.
      * If you want to show photos from a single set, you can enter its ID here. If you visit a photo in that set, it will have a URL that looks something like this: <span class="Apple-style-span" style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px; white-space: pre;">http://www.flickr.com/photos/user/1234567890/in/set-12345678901234567/</span>
  
        The last number in that URL is the set ID

#### Customisation

The output from this plugin is <span style="text-decoration: underline;">unstyled</span>. If you are not comfortable editing the styles in your theme, please use the [flickr badge](http://www.flickr.com/badge.gne) tool directly, and embed the resulting html in a &#8216;Text' widget (Arbitrary text or HTML) .

Extra CSS styles should be added to the &#8216;styles.css' file, which can be edited for your theme in &#8216;Appearance > Editor'.

Some example CSS is included below to help you on your way, though please note that this may not work for all themes. This CSS will give a vertical bar of photos, wide enough for the largest photo size (Small).

```css
.flickrBadge {
  text-align:center;
  width:256px;
}
.flickrBadge ul, .flickrBadge li {
  margin:0;
  list-style-type:none;
}
.flickrBadge img{
  margin:5px 0 5px 5px;
  padding:0;
  border:1px solid #000;
}
```

#### Limits

Please note that this plugin does not offer all of the features available with the full [flickr badge](http://www.flickr.com/badge.gne), such as the flash version of the badge, display of a user badge or easy styling. If you would like to take advantage of these features, please create your own flickr badge using the tool on the flickr website, and embed the resulting html in a &#8216;Text' widget (Arbitrary text or HTML) .

If there are any features that you'd like to see added to this plugin, please use the comments below to let me know.