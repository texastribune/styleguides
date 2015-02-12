---
layout: stylepage
title: TexasTribune
typekit: brb4jmm
css: texastribune.min.css
---


<!-- masthead -->
<div class="masthead sixteen columns">
  <img class="logo" src="https://s3.amazonaws.com/static.texastribune.org/common/images/logo.jpg" title="TexasTribune">

Stylesheet
==========
{: .sg-header}

This is the styleguide for [texastribune.org](http://www.texastribune.org).
Below are styles that we're currently using that we'll continue to iterate on
and use in the redesign of the site planned for 2015.

</div><!-- end masthead -->

<div class="four columns"><div id='side-nav'><!-- side nav -->

* [Sass/CSS](#sass)
* [JavaScript](#javascript)
* [Branding](#branding)
* [Typography](#typography)
* [Color](#color)
* [Layout](#layout)
* [Grid](#grid)
* [Responsiveness](#responsiveness)
* [Navigation](#navigation)
* [Multimedia](#multimedia)
* [Articles](#articles)
* [Bylines & Credits](#bylines--credits)
* [Forms](#forms)
* [Buttons](#buttons)
* [Widgets](#widgets)
* [Disclosures](#disclosures)
* [Icons](#icons)
* [Social Media Integration](#social-media-integration)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->


Sass/CSS
--------

The Texas Tribune writes its CSS in Sass, both in .sass and in .scss. [Grunt](http://gruntjs.com/) is used to compile and minify the Sass.


JavaScript
----------

### Loading

The Texas Tribune loads only essential JavaScript in the head. This includes [Typekit](https://typekit.com/) to avoid a flash of unstyled content (FOUC) before fonts load. Also included in the head is Google Analytics setup, ad setup, [jQuery](http://jquery.com/), [jQuery UI](http://jqueryui.com/), and [Modernizr](http://modernizr.com/).

### Compression

[Django Compressor](http://django-compressor.readthedocs.org/en/latest/) is used to compress JavaScript. 

### Organization

This JavaScript is grouped by core JS, plugins, project JS, JS for ads, and JS snippets for third-party social services.

### Guidelines for Writing

JavaScript for The Texas Tribune should be written in a modular pattern. Immediately invoked function expressions (IIFE) should be used so that variables are locally scoped, and $document.ready should not be used.


Branding
--------

### Logos

Masthead logo

![The Texas Tribune](https://s3.amazonaws.com/static.texastribune.org/common/images/logo.png)

5th anniversary masthead logo

![The Texas Tribune 5th Anniversary](https://s3.amazonaws.com/static.texastribune.org/media/logos/TT-5thAnniversary-logo.png)

Bug

![The Texas Tribune](http://static.texastribune.org/favicon/texastribune.org.png)

### CTAs

Membership ribbon

![Join Us](http://static.texastribune.org/media/membership/TT-FMD14-JoinUs-btn001.png)

Typography
----------

### Typekit

The Texas Tribune has its own font kit through Typekit that supplies the fonts for the site. Typekit is loaded at the top of base.html to avoid a flash of unstyled content (FOUC) when it comes to fonts.

### Stories

Stories use Georgia, Times and serif. These fonts can be added with the `serif`
mixin.

```sass
.example-class
  +serif
```

### Headers

H1 Headers use Knockout 49 A, with fallbacks of Knockout 49 B, LeagueGothicRegular, Helvetica Neue, and sans-serif.


Color
-----

<div class="swatch three columns column">
  <div class="colorfield" style="background: #ffcc20;"></div>
  <span class="label">Tribune yellow<br/>$trib_yellow<br/>#ffcc20</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #008990;"></div>
  <span class="label">Tribune teal<br/>$trib_teal<br/>#008990</span>
</div>
<!-- DELETEME shouldn't need a clear here -->
<div style="clear: both;"></div>


Layout
----

### Header/Roofline

The header is enclosed in the `.wrapper-r` class. Header ads are contained within a div with a `#site_roofline` id. User account welcomes are contained within a div with a `#greeting` id. The navbar, membership ad, logo, and time are contained within a header tag with an id of `#site_header`.

### Main Content

The main site content is contained within a div with an id of `#site_content`. Within that div, main content is contained in a div with a `.main_column` class.

### Footer

The footer, like the header, is enclosed in a div with the `.wrapper-r` class. Inside of this div is a `footer` tag with an id of `#footer`. The footer element contains a dl with an id of #staff_writers that lists staff writers.


Grid
----

The site uses its own twelve-column grid system. Below is an example of the
code used to create a twelve-column row.

```html
<div class="grid">
  <div class="cell w-12">
    insert elements here
  </div>
</div>
```
Below is an example of the code used to create a row composed of two six-column
halves.

```html
<div class="grid">
  <div class="cell w-6">
    insert left elements
  </div>
  <div class="cell w-6">
    insert right elements
  </div>
</div>
```

This grid can be divided up into any number of columns as long as they add up
to twelve. On mobile devices, each div with the class of `cell` becomes its own
row.


Responsiveness
----

The Texas Tribune uses two defined breakpoints, a max-width of 799px (medium) and a max-width of 520px (mobile). These are set up in the breakpoint mixin.

Sass for mobile and medium breakpoints:

```sass
.foo
  +breakpoint(mobile)

.bar
  +breakpoint(medium)
```

In addition, styles based on custom points are used throughout where needed for a design to look best at all sizes. A body class of `.responsive` should be added for responsiveness. This gives elements with the `.content-wrapper` class a width of 100% and max-width of the page width.


Navigation
----------

There are separate navbars for desktop and mobile. Updates to the desktop nav should also be reflected in the mobile menu. Both the desktop nav and mobile menu use the `.dropdown-toggle` class. Some JavaScript powers the dropdown nav, as well, and this can be found in megamini.js.


Multimedia
------

### Images

##### Image Sizes

There are nine non-cropped image sizes, and there are nine cropped sizes. Image sizes are indicated using media_size in html templates.

##### Image Hosting

Images are hosted on Amazon Web Services.

### Videos

Videos can be included from Youtube, Vimeo, and Livestream. [FitVids.js](http://fitvidsjs.com/), a jQuery plugin for fluid width video embeds, is used to ensure that videos maintain their aspect ratio at all screen sizes. To trigger fitvids, the video must be set up with a div with a class of `.video` that contains a div with a class of `.youtube`, `.vimeo`, or `.livestream` to signal that the element is indeed a video.

```html
<div class="media">
  <div id="video_container">
    <div class="video">
      <div class="youtube/vimeo/livestream">
      </div>
    </div>
  </div>
</div>
```

##### Livestream

For livestreams, [Livestream](http://new.livestream.com/) is used.

### Audio

TribCast and other audio files are Amazon-hosted Shockwave Flash files.


Articles
----

There are several ways to indicate that an element is part of an article. It can be placed inside the article tag, given the `.article` class, given the `.prose` class, or given the `.mceContentBody` class. Scoping an article within `#site_content` can also help avoid selecting any additional page elements.


Bylines & Credits
-----------------

### Bylines for Stories

Bylines are styled with an unordered list with the classes `.meta` and `.separator`. The byline is inside of an li with the class `byline`. If available, the author's name should link to her or his staff page.

```html
<ul class="meta separator">
  <li class="byline">
    by <a href="/about/staff/first-last/">First Last</a>
  </li>
</ul>
```

### Credits for Images

Image credits are styled with a `cite` inside of a div with the class `.photo_links`. Wording is: photo by: First Last.

```html
<div class="photo_links">
  <cite>photo by First Last</cite>
</div>
```


Forms
-----

### Pretty Forms

Many forms throughout the site are styled with the `.pretty` class. Within these pretty forms, there are further subclasses of form, including `.errorlist`, `.required_field`, `.alert`, and `.help_text`.


Buttons
-------

These buttons are used throughout the site.

### Button Neue

Button neue is used in newsletter signup widgets; account login, register, and signup forms; newsletter archive pages; district brackets; and the event RSVP form.

Button neue can be a few different colors. There's the default with $trib_yellow_bg.

<input class="btn_neue" type="submit" value="Submit">

A class of `.teal` makes it $trib_teal with #fff font color. 

<input class="btn_neue teal" type="submit" value="Submit">

A class of `.gray` makes it #d7d7d7 with #aeaeae font color. 

<input class="btn_neue gray" type="submit" value="Submit">

A class of `.dark` makes it #555555 with #222222 font color.

<input class="btn_neue dark" type="submit" value="Submit">

```html
<input class="btn_neue" type="submit" value="Submit">
```

### Info Button

This button is used to link to more information throughout the site. By
default, this button is Tribune yellow. On hover, the button lightens by
10%.

<div>
  <a class="btn_info">Button</a>
</div>

```html
<div>
  <a class="btn_info">Button</a>
</div>
```

Widgets
----

Styles for widgets are included in the _widgets.sass partial.

### Featurebox

Featurebox is used for wire widgets around the site, including TribWire and TweetWire, and is often included in the right rail. For featurebox styles, use class `.featurebox`. Within the featurebox, there's a header with class `.featurebox-header`, main content with class `.featurebox-content`, and a footer with class `.featurebox-footer`. The footer often includes an adunit and a link to view more.

```html
<aside class="featurebox">
  <header class="featurebox-header">
    <h1>Header</h1>
  </header>
  <div class="featurebox-content">
  </div>
  <footer class="featurebox-footer">
    <div class="ad adunit"></div>
    <a href="#">View All</a>
  </footer>
</aside>
```


### The Most

The Most also uses featurebox styles, with the addition of tabs. The Most has three tabs: Shared, Viewed, and Commented. It's included on the homepage and in the right rail around the site. Add the id `#the_most` and tabs classes to a featurebox for The Most.

```html
<aside id="the_most" class="featurebox">
  <header class="featurebox-header">
    <h1>Header</h1>
  </header>
  <div class="featurebox-content tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
    <div id="most_shared" class="ui-tabs-panel ui-widget-content ui-corner-bottom"></div>
    <div id="most_viewed" class="ui-tabs-panel ui-widget-content ui-corner-bottom"></div>
    <div id="most_commented" class="ui-tabs-panel ui-widget-content ui-corner-bottom"></div>
  </div>
  <footer class="featurebox-footer">
    <div class="ad adunit"></div>
    <a href="#">View All</a>
  </footer>
</aside>
```


### Trib newsletter signup

The Trib newsletter signup widget is included at the top of the right rail around the site on pages that inherit from the two-column layout. The widget includes a CTA for people to sign up for The Brief. The class `.trib_newsletter` gives the signup its styles.

```html
<section class="trib_newsletter">
  <form>
    <header><h2>Sign Up for The Brief</h2></header>
    <p>Our daily news summary</p>
  </form>
</section>
```

Disclosures
----

Disclosures are found at the bottom of stories and are styled as paragraphs with a class of `.disclosure`.

```html
<p class="disclosure">
</p>
```


Icons
-----

### Social Media

Font Awesome is used for icons throughout the site. Generally, social media links should include "target=_blank" so that they open in a new tab.

```html
<a class="social" href="#" target="_blank">
  <i class="icon-[whatever]"></i>
</a>
```

Social Media Integration
----

### Facebook

Facebook comments are pulled in and included in articles' comments sections.

### Twitter

Widgets displaying tweets on the site should all use the widget from Twitter. There are a number of customization options that can be made to the widget to fit The Texas Tribune brand and a particular page's needs, including link colors, tweet limits, and more.

Html setup:

```html
<a class="twitter-timeline" href="https://twitter.com/[profile]" data-widget-id="[provided by Twitter]" data-screen-name="[profile]">Tweets</a>
```

Javascript snippet:

```javascript
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
```
<!-- DELETEME add this space another way -->
<div style="height: 100px;"></div>


</div><!-- end main -->
