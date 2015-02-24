---
layout: stylepage
title: TexasTribune
typekit: brb4jmm
css: texastribune.min.css
---


<!-- masthead -->
<div class="texastribune-page">
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
* [Feeds](#feeds)
* [Disclosures](#disclosures)
* [Ads](#ads)
* [Icons](#icons)
* [Social Media Integration](#social-media-integration)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->


Sass/CSS
--------

The Texas Tribune writes its CSS in Sass, both in .sass and in .scss. [Grunt](http://gruntjs.com/) is used to compile and minify the Sass.


JavaScript
----------

#### Loading

The Texas Tribune loads only essential JavaScript in the head. This includes [Typekit](https://typekit.com/) to avoid a flash of unstyled content (FOUC) before fonts load. Also included in the head is Google Analytics setup, ad setup, [jQuery](http://jquery.com/), [jQuery UI](http://jqueryui.com/), and [Modernizr](http://modernizr.com/).

#### Compression

[Django Compressor](http://django-compressor.readthedocs.org/en/latest/) is used to compress JavaScript. 

#### Organization

This JavaScript is grouped by core JS, plugins, project JS, JS for ads, and JS snippets for third-party social services.

#### Guidelines for Writing

JavaScript for The Texas Tribune should be written in a modular pattern. Immediately invoked function expressions (IIFE) should be used so that variables are locally scoped, and $document.ready should not be used.


Branding
--------

#### Logos

Masthead logo

![The Texas Tribune](https://s3.amazonaws.com/static.texastribune.org/common/images/logo.png)

5th anniversary masthead logo

![The Texas Tribune 5th Anniversary](https://s3.amazonaws.com/static.texastribune.org/media/logos/TT-5thAnniversary-logo.png)

Bug

![The Texas Tribune](http://static.texastribune.org/favicon/texastribune.org.png)

#### CTAs

Membership ribbon

![Join Us](http://static.texastribune.org/media/membership/TT-FMD14-JoinUs-btn001.png)

Typography
----------

#### Typekit

The Texas Tribune has its own font kit through Typekit that supplies the fonts for the site. Typekit is loaded in the head to avoid a flash of unstyled content (FOUC) when it comes to fonts.

#### Stories

Stories use Georgia, Times and serif. These fonts can be added with the `serif`
mixin.

```sass
.foo
  +serif
```

#### Headers

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

#### Header/Roofline

The header is enclosed in the `.wrapper-r` class. Header ads are contained within a div with a `#site_roofline` id. User account welcomes are contained within a div with a `#greeting` id. The navbar, membership ad, logo, and time are contained within a header tag with an id of `#site_header`.

```html
<div class="wrapper-r">
  <div id="site_roofline">
    Header ads
  </div>
  <div id="greeting">
    User account welcome
  </div>
  <header id="site_header">
    <nav class="navbar primary"></nav>
    <div class="ad last"></div>
    <div class="below_nav"></div>
  </header>
</div>
```

#### Main Content

The main site content is contained within a div with an id of `#site_content`. Within that div, main content is contained in a div with a `.main_column` class.

```html
<div id="site_content" class="content bare">
  <div class="grid">
    <div class="cell w-8 main_column"></div>
  </div>
</div>
```


#### Right Rail

The right rail is included on all pages that inherit from the two-column layout. Elements included in the right rail are the newsletter subscription widget, 300 x 250 ads, 'New on the Trib' featuring latest articles, and the Most.


#### Footer

The footer, like the header, is enclosed in a div with the `.wrapper-r` class. Inside of this div is a `footer` tag with an id of `#site_footer`. Inside of this `footer` element, there's a div with the id `footer`, and this contains a dl with an id of #staff_writers that lists staff writers, a div with an id of `footer_topics` that lists sections, a dl with id `offsite_outlets` with social media, and a ul with id `footer_nav` linking to pages like About Us and Donate.

```html
<div class="wrapper-r">
  <footer id="site_footer">
    <div id="footer">
      <dl id="staff_writers"></dl>
      <div id="footer_topics"></div>
      <dl id="offsite_outlets"></dl>
      <ul id="footer_nav"></ul>
    </div>
  </footer>
</div>
```


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
to twelve. On mobile devices, each div with the class of `.cell` becomes its own
row.


Responsiveness
----

#### Breakpoints

The Texas Tribune uses two defined breakpoints, a max-width of 799px (medium) and a max-width of 520px (mobile). These are set up in the breakpoint mixin.

Sass for mobile and medium breakpoints:

```sass
.foo
  +breakpoint(mobile)

.bar
  +breakpoint(medium)
```

In addition, styles based on custom points are used throughout where needed for a design to look best at all sizes. A body class of `.responsive` should be added for responsiveness. This gives elements with the `.content-wrapper` class a width of 100% and max-width of the page width.

#### Helper Classes

##### Hide on mobile

```sass
.hide-for-mobile
  +breakpoint(mobile)
    display: none
```

##### Show on mobile

```sass
.mobile-only
  @media screen and (min-width: 520px)
    display: none
```

##### Hide for medium down

```sass
.hide-for-medium-down
  @media screen and (max-width: 799px)
    display: none
```

##### Show for medium down

```sass
.show-for-medium-down
  display: none
  @media screen and (max-width: 799px)
    display: block
```


Navigation
----------

There are separate navbars for desktop and mobile. Updates to the desktop nav should also be reflected in the mobile menu. Both the desktop nav and mobile menu use the `.dropdown-toggle` class. Some JavaScript powers the dropdown nav, as well, and this can be found in megamini.js.


Multimedia
------

Multimedia elements are designated with the class `.media`, which is the container for images, audio, and video.

#### Images

##### Image Sizes

There are nine non-cropped image sizes, and there are nine cropped sizes. Image sizes are indicated using media_size in html templates.

##### Image Hosting

Images are hosted on Amazon Web Services.

#### Videos

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

#### Audio

TribCast and other audio files are Amazon-hosted Shockwave Flash files.


Articles
----

There are several ways to indicate that an element is part of an article. It can be placed inside the `article` tag, given the `.article` class, given the `.prose` class, or given the `.mceContentBody` class. Scoping an article within `#site_content` can also help avoid selecting any additional page elements.


Bylines & Credits
-----------------

#### Bylines for Stories

Bylines are styled with an unordered list with the classes `.meta` and `.separator`. The byline is inside of an `li` with the class `byline`. If available, the author's name should link to her or his staff page.

```html
<ul class="meta separator">
  <li class="byline">
    by <a href="/about/staff/first-last/">First Last</a>
  </li>
</ul>
```

#### Credits for Images

Image credits are styled with a `cite` inside of a div with the class `.photo_links`. Wording is: photo by: First Last. Images are credited beneath the image, and they float to the right, lining up with the right edge of the image.

<div class="photo_links">
  <cite>photo by: First Last</cite>
</div>

```html
<div class="photo_links">
  <cite>photo by: First Last</cite>
</div>
```


Forms
-----

#### Pretty Forms

Many forms throughout the site are styled with the `.pretty` class. Within these pretty forms, there are further subclasses of form, including `.errorlist`, `.required_field`, `.alert`, and `.help_text`.


Buttons
-------

These buttons are used throughout the site.

#### Button Neue

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


#### Yellow Button

This button is used in comments, account information, and contact info.

<input type="submit" value="Submit" class="btn_yellow">

```html
<input type="submit" value="Submit" class="btn_yellow">
```


#### Info Button

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

#### Featurebox

Featurebox is used for wire widgets around the site, including TribWire and TweetWire, and is often included in the right rail. For featurebox styles, use class `.featurebox`. Within the featurebox, there's a header with class `.featurebox-header`, main content with class `.featurebox-content`, and a footer with class `.featurebox-footer`. The footer often includes an adunit and a link to view more.


<aside class="featurebox">
<header class="featurebox-header">
  <h1>Header</h1>
</header>
<div class="featurebox-content">
   <a class="twitter-timeline" href="https://twitter.com/TexasTribune/lists/texas-elected-officials" data-widget-id="545984156623052800" data-chrome="nofooter noheader noborders" data-tweet-limit="1">TweetWire</a>
</div>
<footer class="featurebox-footer">
  <div class="ad adunit"></div>
  <a href="#">View All</a>
</footer>
</aside>


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


#### The Most

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


#### Trib newsletter signup

The Trib newsletter signup widget is included at the top of the right rail around the site on pages that inherit from the two-column layout. The widget includes a CTA for people to sign up for The Brief. The class `.trib_newsletter` gives the signup its styles. The newsletter signup widget includes a submit button with the `.btn_neue` class.

<section class="trib_newsletter">
<form>
<header><h2>Sign Up for The Brief</h2></header>
<p>Our daily news summary</p>
<div class="mc-field-group nowrap">
<input type="email" value="" name="EMAIL" class="input_neue required email"
       id="mce-EMAIL">
<input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe"
      class="btn_neue">
</div>
</form>
</section>


```html
<section class="trib_newsletter">
  <form>
    <header><h2>Sign Up for The Brief</h2></header>
    <p>Our daily news summary</p>
  </form>
</section>
```


Feeds
----

A list of The Texas Tribune feeds can be found [here](http://www.texastribune.org/feeds/).

#### Mailchimp

Feeds power daily and weekly Mailchimp digests for numerous topics, including education, health care, energy &amp; environment, economy, race &amp; immigration, transportation, and law &amp; order.


Disclosures
----

Disclosures are found at the bottom of stories and are styled as paragraphs with a class of `.disclosure`. The disclosure text can be edited in the "story-disclosure" chunk.

<p class="disclosure">
  Texas Tribune donors or members may be quoted or mentioned in our stories, or may be the subject of them.
</p>

```html
<p class="disclosure">
  "story-disclosure" chunk
</p>
```


Ads
----

Ads appear throughout the site at the top of the page, in the right rail, inside stories, and at the bottom of stories in the top of the footer. Ads are configured in Doubleclick for Publishers.

#### Roofline

Roofline ads appear at the top of most pages throughout the site, and they cycle through four ads. 

On desktop, these ads have dimensions of 728 x 90.

```html
<div id="site_roofline" style="position:relative;">
  <div class="hide-for-mobile large_ad_container">
    Include ad here
  </div>
</div>
```

On mobile, these ads have dimensions of 300 x 100.

```html
<div id="site_roofline" style="position:relative;">
  <div class="mobile-only">
    Include ad here
  </div>
</div>
```

#### Right rail

Ads in the right rail appear in pages that inherit the two-column layout, and the dimensions for these ads are 300 x 250. They are included inside a `div` with class of `.sponsor_image_holder`, which is inside a `section` with classes of `.ad_container` and `.sidebar_block`.

```html
<section class="ad_container sidebar_block">
  <div class="sponsor_image_holder">
    Include ad here
  </div>
</section>
```

#### Story ads

Ads inside stories are added with adify, and their dimensions are 468 x 60.

#### Footer ads

Ads below stories and at the top of the footer share the 728 x 90 dimensions with the roofline ads. On mobile, these ads have dimensions of 300 x 100.

#### Other ads

In wire widgets, ads have dimensions of 200 x 38.

On directory pages, there are also half banner ads with dimensions of 234 x 60.

Skyscraper ads have dimensions of 160 x 600. These appear on the right side of the Events index page, and they also appear on the search results page.


Icons
-----

#### Social Media

Font Awesome is used for icons throughout the site. Currently, Font Awesome 3.2.1 is used. Generally, social media links should include "target=_blank" so that they open in a new tab. Social links are set up with a `ul` with a class of `.social_links`.

<ul class="social_links">
<li class="comment">
  <a href="#"><i class="icon-comments-alt"></i> Comment</a>
</li>
<li class="republish">
  <a href="#"><i class="icon-share"></i> Republish</a>
</li>
<li class="email">
  <a href="#"><i class="icon-envelope"></i> Email</a>
</li>
<li class="twitter">
  <a href="#"><i class="icon-twitter"></i> Tweet</a>
</li>
<li class="facebook">
  <a href="#"><i class="icon-facebook"></i> Recommend</a>
</li>
</ul>

```html
<ul class="social_links">
  <li class="comment">
    <a><i class="icon-comments-alt"></i> Comment</a>
  </li>
  <li class="republish">
    <a><i class="icon-share"></i> Republish</a>
  </li>
  <li class="email">
    <a><i class="icon-envelope"></i> Email</a>
  </li>
  <li class="twitter">
    <a><i class="icon-twitter"></i> Tweet</a>
  </li>
  <li class="facebook">
    <a><i class="icon-facebook"></i> Recommend</a>
  </li>
</ul>
```

Social Media Integration
----

#### Facebook

Facebook comments are pulled in and included in articles' comments sections.

#### Twitter

Widgets displaying tweets on the site should all use the widget from Twitter. There are a number of customization options that can be made to the widget to fit The Texas Tribune brand and a particular page's needs, including link colors, tweet limits, and more. When adding a new Twitter widget, include a comment with information about the widget's setup.

Html setup:

```html
<a class="twitter-timeline" href="https://twitter.com/[profile]" data-widget-id="[provided by Twitter]" data-screen-name="[profile]">Tweets</a>
```

Javascript snippet:

```javascript
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
```
<!-- DELETEME add this space another way -->
<div style="height: 50px;"></div>


</div><!-- end main -->
</div>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
