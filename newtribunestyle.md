---
layout: stylepage
title: NewTribune
typekit: brb4jmm
---

<!-- masthead -->
<div class="texastribune-page">
<div class="masthead sixteen columns">
  <img class="logo" src="https://s3.amazonaws.com/static.texastribune.org/common/images/logo.jpg" title="TexasTribune">

Stylesheet
==========
{: .sg-header}

This is the new styleguide for [texastribune.org](http://www.texastribune.org), charting the direction our styles are heading in 2015. Some of its goals are to establish naming conventions, to create more modular, reusable styles for the Tribune, and to increase cohesion between the Tribune's styles and our <a href="http://apps.texastribune.org/styles/">News Apps styles</a>.

</div><!-- end masthead -->

<div class="four columns"><div id='side-nav'><!-- side nav -->

* [Sass](#sass)
* [Naming Conventions](#naming)
* [Buttons](#buttons)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->

Sass
----

CSS is written in Sass in .scss files.  

Naming Conventions
------------------

### Element, Class, and Id Naming

Element, class, and id names should be used with the ultimate goal of creating modular elements
that can be reused in different ways throughout the site. There are no rules
that always must be followed; however, this set of guidelines should be applicable
to most situations.

Taking some inspiration from SMACSS and some inspiration from BEM, there are four 
categories into which element, class, and id styles might fall: base, layout, module, and state.

#### Base

Base styles are those applied generally with an element selector, a descendant selector, or a child selector.

#### Layout

Layout styles are for the major elements included on a page, such as the header, main body area, and the footer.

#### Module

Module styles exist inside the major layout styles.

#### State

State styles are applied to layout and module styles. They include such states as active, hover, and focus. State classes should be written descriptively. For example, the class for an active element should be "is-active" and the class for a hovered element should be "is-hovered".

Buttons
-------

### Default Button

#### Yellow

#### Teal

#### Ghost

</div><!-- end main -->
</div>
