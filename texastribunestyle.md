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

<div class="four columns"><!-- side nav -->
  <div id='side-nav'>

* <a href="#sass">Sass/CSS</a>
* <a href="#javascript">JavaScript</a>
* <a href="#branding">Branding</a>
* <a href="#typography">Typography</a>
* <a href="#color">Color</a>
* <a href="#grid">Grid</a>
* <a href="#navigation">Navigation</a>
* <a href="#images">Images</a>
* <a href="#bylines--credits">Bylines & Credits</a>
* <a href="#paragraphs">Paragraphs</a>
* <a href="#lists">Lists</a>
* <a href="#forms">Forms</a>
* [Buttons](#buttons)
* [Icons](#icons)

  </div>
</div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->


Sass/CSS
--------

Sass styles are written in .sass and in .scss. Grunt is used to compile and
minify.


JavaScript
----------

### Analytics

### jQuery Plugins

### Third-Party Social Services

### Other Third-Party


Branding
--------


Typography
----------

### Stories

Stories use Georgia, Times and serif. These fonts can be added with the `serif`
mixin.


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


Navigation
----------


Images
------


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
