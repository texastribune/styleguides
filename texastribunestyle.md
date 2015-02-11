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
* [Images](#images)
* [Articles](#articles)
* [Bylines & Credits](#bylines--credits)
* [Paragraphs](#paragraphs)
* [Lists](#lists)
* [Forms](#forms)
* [Buttons](#buttons)
* [Icons](#icons)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->


Sass/CSS
--------

The Texas Tribune writes its CSS in Sass, both in .sass and in .scss. [Grunt](http://gruntjs.com/) is used to compile and minify the Sass.


JavaScript
----------

### Analytics

### jQuery Plugins

### Third-Party Social Services

### Other Third-Party


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

The Texas Tribune uses four defined breakpoints -- 960px, 799px, 520px, and 320px. In addition, styles based on custom points are used throughout where needed for a design to look best at all sizes. A body class of `.responsive` should be added for responsiveness. This gives elements with the `.content-wrapper` class a width of 100% and max-width of the page width.


Navigation
----------

There are separate navbars for desktop and mobile. Updates to the desktop nav should also be reflected in the mobile menu. Both the desktop nav and mobile menu use the `.dropdown-toggle` class. Some JavaScript powers the dropdown nav, as well, and this can be found in megamini.js.


Images
------

### Image Sizes

There are nine non-cropped image sizes, and there are nine cropped sizes. Image sizes are indicated using media_size in html templates.

### Image Hosting

Images are hosted on Amazon Web Services.


Articles
----

There are several ways to indicate that an element is part of an article. It can be placed inside the article tag, given the `.article` class, given the `.prose` class, or given the `.mceContentBody` class. Scoping an article within `#site_content` can also help avoid selecting any additional page elements.


Bylines & Credits
-----------------


Paragraphs
----------


Lists
-----


Forms
-----


Buttons
-------

These buttons are used throughout the site.

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

Icons
-----

</div><!-- end main -->
