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

This is the new styleguide for [texastribune.org](http://www.texastribune.org), charting the direction our styles are heading in 2015. Some of its goals are to establish naming conventions and to create more modular, reusable styles for the Tribune. These modular styles will correspond with our content. They will also be designed mobile-first.

</div><!-- end masthead -->

<div class="four columns"><div id='side-nav'><!-- side nav -->

* [Design Goals](#design-goals)
* [Sass](#sass)
* [Naming Conventions](#naming-conventions)
* [Typography](#typography)
* [Grid](#grid)
* [Links](#links)
* [Buttons](#buttons)
* [Ads](#ads)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->

Design Goals
----------------

There are design goals each entity should contribute to before being included in the new style guide. Including these here will help us maintain our focus on our design goals as we iterate.

* Increases enjoyment and engagement
* Creates a good experience for people using it
* Is part of a positive association with The Texas Tribune

Sass
----

CSS is written in Sass. It's preferred that the Sass be .sass files.


Naming Conventions
------------------

### Variable Names

Variables are used for colors and fonts. They're defined in settings.scss. If the color or font name is more than one word, start with the more general word first. For example, for Tribune brand colors, name them "$tribune-yellow" and "$tribune-teal" instead of "$yellow-tribune" or "$teal-tribune".

### Element, Class, and Id Naming

Element, class, and id names should be used with the ultimate goal of creating modular elements that can be reused in different ways throughout the site. There are no rules
that always must be followed; however, this set of guidelines should be applicable
to most situations.

Naming will follow the [BEM](https://en.bem.info/method/naming-convention/) methodology. Modular entities can be blocks or elements. They can have modifiers that describe their appearance and behavior.

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

A root font size, defined in settings, sets the absolute font size. This base font size should be set in px on the root html element. Root font size differs based on the device width, and changes at tablet (799px) and mobile (520px). Root font size determines the absolute size of typography elements while keeping their relative sizing consistent.

```sass
$font-root: 18px
$font-root-tablet: 16px
$font-root-mobile: 14px
```

There will likely be a base serif and a base sans-serif font. These are yet to be determined.

We then have different sizes that are relative to this root font size. There are two smaller sizes and three larger sizes. These are sized in rems, to make their sizes relative to the root px size. If every font size should be larger, an update can be made to the $font-root settings. If only one font size should be larger, then an update can be made to that specific relative setting.

```sass
$xxl: 2.4rem
$xl: 2rem
$l: 1.8rem
$m: 1.5rem
$s: 1.2rem
$xs: 1rem
```

The classes for these sizes are ".font-xs", ".font-s", ".font-m", ".font-l", ".font-xl", and ".font-xxl".

This is meant to roughly begin establishing a system to follow; the system and these sizes may be adjusted as we decide on what fonts we are using moving forward. This system was inspired in part by [our news apps typography styles](http://apps.texastribune.org/styles/#typography) to keep cohesion where it makes sense between the two sets of styles.

#### Headers

Each header (h1-h6) is then given font sizes, weights, and any other styles.

<h1 class="font-xxl">h1 header example</h1>
<h2 class="font-xl">h2 header example</h2>
<h3 class="font-l">h3 header example</h3>
<h4 class="font-m">h4 header example</h4>
<h5 class="font-s">h5 header example</h5>
<h6 class="font-xs">h6 header example</h6>

#### Paragraphs

Paragraph elements are given base font sizes and styles.

<p class="font-xs">This is an example paragraph.</p>

#### Icons

For icons, we'll likely use Font Awesome, which is what we currently use.

We'll follow the PRO method outlined on [this page](http://fortawesome.github.io/Font-Awesome/get-started/) in the Font Awesome documentation. We'll include the font-awesome directory inside the Sass for the Tribune project. Only icons currently used in the project will be precompiled; comment out any unused icons so they aren't included in the CSS, and then uncomment icons as they're included in the project.

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

