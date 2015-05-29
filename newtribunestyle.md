---
layout: stylepage
title: NewTribune
typekit: brb4jmm
css: newtribune.min.css
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
* [Naming Conventions](#naming-conventions)
* [Typography](#typography)
* [Grid](#grid)
* [Links](#links)
* [Buttons](#buttons)
* [Ads](#ads)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->

Sass
----

CSS is written in Sass. It's preferred that the Sass be .sass files.

Naming Conventions
------------------

### Variable Names

Variables are used for colors and fonts. They're defined in settings.scss. If the color or font name is more than one word, start with the more general word first. For example, for Tribune brand colors, name them "$tribune-yellow" and "$tribune-teal" instead of "$yellow-tribune" or "$teal-tribune".

### Element, Class, and Id Naming

Element, class, and id names should be used with the ultimate goal of creating modular elements
that can be reused in different ways throughout the site. There are no rules
that always must be followed; however, this set of guidelines should be applicable
to most situations.

Taking some inspiration from [SMACSS](https://smacss.com/) and some inspiration from [BEM](https://en.bem.info/), there are four categories into which element, class, and id styles might fall: base, layout, module, and state.

#### Base

Base styles are those applied generally with an element selector, a descendant selector, or a child selector.

#### Layout

Layout styles are for the major elements included on a page, such as the header, main body area, and the footer.

#### Module

Module styles exist inside the major layout styles.

#### State

State styles are applied to layout and module styles. They include such states as active, expanded, and collapsed. State classes should be written descriptively. For example, the class for an active element should be "is-active" and the class for an expanded element should be "is-expanded".

Typography
----------

A base font size and font family, defined in settings, sets a default. 

#### Headers

Each header (h1-h6) is then given base font sizes, weights, and any other styles.

#### Paragraphs

Paragraph elements are given base font sizes and styles.

Grid
----

How to approach using a responsive grid framework is still undecided.

Links
-----

Links are a base style element. They are $tribune-teal, and they are underlined when their state is hover.

<a href="#">Click me, I go nowhere</a>

Buttons
-------

Buttons are module elements. These updated button styles are inspired by styles 
originally used by news apps projects.

#### Yellow (default)

<button class="button">.button</button>

#### Teal

<button class="button-teal">.button-teal</button>

#### Ghost

<button class="button-ghost">.button-ghost</button>

Ads
---

The goal for ads is to develop a system that seamlessly responds across desktop and mobile. One possibility is to standardize ad sizes as much as possible across desktop and mobile. For example, most ads might be 300X250 px.

</div><!-- end main -->
</div>

