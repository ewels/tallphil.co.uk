---
id: 738
title: Making a Website (Cambridge Students)
date: 2013-01-29T01:54:15+00:00
author: Phil
layout: post
guid: http://www.tallphil.co.uk/?p=738
permalink: /making-a-website-srcf/
categories:
  - Tutorials
  - Website Design
---
In a couple of days I'll be [giving a talk](http://www.mcr.trinhall.cam.ac.uk/events/event/mcmenemy-seminar-phil-ewels-how-websites-work-a-beginners-guide/) about web design - a very simple talk, just about the basics of how web pages are delivered and built. You can see the slides here:

<iframe src="//www.slideshare.net/slideshow/embed_code/key/HTJx0ImHfYnTNO" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

I thought that to accompany the talk, I'd write a quick blog post about how to set up a simple WordPress website for free if you're a student at Cambridge.

## What we'll be using

Members of the university can set up accounts with the [SRCF](http://www.srcf.net/) (student-run computing facility). These chaps provide a fantastic resource, hosting hundreds of personal and society websites across the university. Whether you want to make a blog for yourself or a static site for your society of choice, you should come to these guys first to sort you out with somewhere to store your files.

Once you have hosting sorted, I recommend using [WordPress](http://wordpress.org/) to manage your site. WP started off as a blogging platform but has evolved into a fully featured [Content Management System](http://en.wikipedia.org/wiki/Content_management_system). This means that with a few clicks and virtually no knowledge of website design or coding, you can have a very professional site up and running which is easy to update and maintain. WordPress has huge user and development bases meaning that there is a lot of help available, as well as a plugin to handle just about any desired function. A recent statistic stated that [nearly a quarter of new websites built are using WordPress at their core](http://techcrunch.com/2011/08/19/wordpress-now-powers-22-percent-of-new-active-websites-in-the-us/).

## Hosting set up

### Signing up with the SRCF

First things first, we need to sort out our hosting with the SRCF. Go to their website and click [Join](https://www.srcf.net/signup/), the admins are usually very fast at sorting you out with an account. If you're making a website for a society you'll need to [request a society account](https://www.srcf.net/signup/newsoc/) too.

WordPress needs a MySQL database to run. This works a bit like Excel, storing all of the data for your website in tables and loading this into templates when each page is loaded. You'll need to [request a MySQL database](http://www.srcf.net/faq/databases) (part of the form when requesting a society account).

### Accessing your files

Once the sysadmins have got back to you and your account has been set up, try logging in with an FTP client. FTP stands for &#8216;file transfer protocol' and is another method of connecting to a web server (different to HTTP). It's the quickest and easiest way to transfer files between the computer you're working on and the web server where they'll be supplied to people viewing your website.  Two good (free) clients are [WinSCP](http://winscp.net/eng/index.php) for windows and [Cyberduck](http://cyberduck.ch/) for Mac.

You can see connection details on the [SRCF FAQ](http://www.srcf.net/faq/basics), but in short you'll want to connect to `files.srcf.net` via SFTP (the S stands for secure). You should see a folder called `public_html` which we'll be uploading all of our files to.

Next up, check that you can access your database: log in to [phpMyAdmin](https://www.srcf.net/phpmyadmin/). This is a web-based control panel where you can view and edit your database manually. You should see your personal database on the left along with any society account databases. They should all look pretty empty at this point.

If everything is working so far and you have all of your login details and passwords, we're good to go! Congratulations, that was the hardest bit of the whole process...

## Installing WordPress

Head over to [wordpress.org](http://wordpress.org/download/) and hit the big blue download button. Make sure you don't get confused with wordpress_.com_ - that's where you can set up a blog directly with the WordPress organisation using their hosting. We want to host our own copy of WordPress on the SRCF.

Once your `.zip` file has finished downloading, we need to get the files from your computer onto the SRCF hosting. Unzip the file on your computer and upload the files into `public_html`, making sure that they're not in a subfolder called `wordpress`_. Note:_ _you can do this more efficiently by uploading the .zip file and unzipping it using the terminal, but I'm trying to keep everything as simple as possible in this tutorial._

Great! Now if you head to your website in a browser (`http://<em><username></em>.user.srcf.net` for an indvidual account or `http://<em><username></em>.soc.srcf.net` for a society) you should see a friendly welcome screen. Fill in all of the details that it asks for - leave `localhost` as it is, try not to use `wp_` as the database prefix or `admin` as the administrator username _(this makes it harder for hackers to infiltrate your site)._

That's it - you have a website! Told you it was easy.

## Customising WordPress

You'll probably want to make your site look a little different and certainly contain some content, so the first thing to do is log in to the WordPress administration panel. There's usually a link saying something obvious, but if you can't find it the URL should look like `http://<em><username></em>.user.srcf.net/wp-admin`. Log in with the username and password set up in the previous step.

### Content

How you create content will depend on how you intend to use the site. **Posts** are designed for small regular news updates, **Pages** are for larger static content. You don't have to use either, you can use both. If you don't want to use Posts at all, you can display a page on your homepage in (`Settings` > `Reading`).

### Visual changes

WordPress websites use **themes** to customise the way that they look. Thankfully lots of people are nice enough to write these for you and give them away for free (there are plenty of paid-for themes a google search away too). You can browse these directly through the WordPress admin back end (`Appearance` > `Themes`) or find one online.

### Features

If you want to extend the functionality of WordPress, you need to install a Plugin. Millions of plugins have been written and are dead easy to install. The chances are that if you want your site to do something then someone has probably written a plugin to do it.

### Domain name

You may have thought that the web address of your spangly new site isn't particularly inspiring. Don't panic! You can register any domain you like (or even multiple domains) and point them to your SRCF address without anyone knowing. For instructions, check out the [SRCF FAQ]( http://www.srcf.net/faq/web-hosting#dns) point about it. I usually buy domain names from [123-reg.co.uk](http://www.123-reg.co.uk).