---
layout: stylepage
title: NewTribune
css: newtribune.min.css
---

<!-- masthead -->
<div class="texastribune-page">
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Open Sans:400,700,400italic,700italic', 'PT Serif:400,700,400italic, 700italic']
    }
  });
</script>
<div class="masthead sixteen columns">
  <img class="logo" src="https://s3.amazonaws.com/static.texastribune.org/common/images/logo.jpg" title="TexasTribune">

Stylesheet
==========
{: .sg-header}

This is the new styleguide for [texastribune.org](http://www.texastribune.org), charting the direction our styles are heading in 2016. Its goals are to establish naming conventions and to create more modular, reusable styles for the Tribune. These modular styles will correspond with our content. They will also be designed mobile-first.

The styleguide has three distinct sections. The first section s Styles, and this defines reusable style elements such as color and typography. The second section encompasses Content Elements, and this defines which styles are applied based on an element's content and context within the site. The third section is State, and this defines how states are applied to content elements based on actions taken by a person.

</div><!-- end masthead -->

<div class="four columns"><div id='side-nav'><!-- side nav -->

* [Design Goals](#design-goals)
* [Sass](#sass)
* [Javascript](#javascript)
* [Naming Conventions](#naming-conventions)
* [Accessibility](#accessibility)
* [Performance](#performance)
* [Browser Compatibility](#browser-compatibility)
* [Schema.org](#schemaorg)
* [Color](#color)
* [Typography](#typography)
* [Responsive](#responsive)
* [Images](#images)
* [Links](#links)
* [Inputs](#inputs)
* [Buttons](#buttons)
* [Ads](#ads)
* [Related Content](#related-content)
* [Experimental](#experimental)

</div></div><!-- end side nav -->

<div class="twelve columns omega"><!-- main -->

# Style goals, conventions, and budgets

Design Goals
----------------

There are design goals each entity should contribute to before being included in the new style guide. These should be referenced throughout the process to keep our focus on our design goals as we iterate.

* Increases enjoyment and engagement
* Creates a good experience for people using it
* Is part of a positive association with The Texas Tribune

Sass
----

CSS is written in Sass. It's preferred that the Sass be .sass files.

#### Nesting

Sass should preferably be nested no more than three levels deep. It should be the exception and there should be a reason that it's being nested beyond three.

Javascript
----------

#### Third-party scripts

There are a few questions that should be asked and actions that should be taken before adding a new third-party script to the project.

* Know how much time a third-party script takes to load. This can be estimated by adding the script to the desired pages on our staging site and doing a WebPageTest there.

* Determine if the script can be loaded asynchronously. If it's possible, it should be set up to load async.

* Determine if a cache-header for the script can and should be set.


Naming Conventions
------------------

### Variable Names

Variables are used for colors and fonts. They're defined in settings.scss. If the color or font name is more than one word, start with the more general word first. 

Color variable names should always begin with $color. For example, for Tribune yellow, name use $color-yellow-tribune.

### Naming Conventions

Classes following the [BEM naming convention](https://en.bem.info/method/naming-convention/) should be used in most cases. Ids should only be used in HTML as Javascript hooks.

The naming of classes and ids should be done with the goal of creating modular entities to be reused and remixed throughout the site. There are no rules that always must be followed; however, this set of guidelines should be applicable to most situations. Things to keep in mind are also how easily searchable the classes and ids that you're using are, as well as if there are any potential clashes with current naming systems.

Naming will follow the BEM methodology. Modular entities can be blocks or elements. They can have modifiers that describe their appearance and behavior.

We will use the following words to refer to different entities within a page.

#### Base

Base styles are those applied generally with an element selector, a descendant selector, or a child selector.

#### Layout

Layout entities are the major elements included on a page, such as the header, main body area, and the footer.

#### Blocks

Blocks exist within the major layout sections.

#### Elements

Elements are entities that exist within a particular block, and not outside of that block. There should not be an element that exists within another element.

#### Modifiers

Modifiers are elements that indicate states or themes. These include such states as active, expanded, and collapsed.

Accessibility
-------------

#### Alt text

Use alt text to provide function, and not to provide content.

#### Navigation

It should be possible to tab through navigation.

Performance
-----------

Browser Compatibility
---------------------

All styles should be tested in IE9+, Firefox, Safari, and Chrome. They should be tested at mobile, tablet, and desktop widths.

Schema.org
----------

#### Articles
Articles should be tagged with Schema.org item properties. These properties should be included after an HTML element's classes. An article should have an itemprop of 'articleBody'. Headlines should be given an itemprop of 'headline'. Lead art should be given the itemprop of 'associatedMedia'. Bylines' authors should have the itemprops of 'author' and 'creator.'  

# Style Elements

Color
-----

Color should not be relied on to indicate something. Color enhances our content.

#### Yellows

<div class="swatch three columns column">
  <div class="colorfield" style="background: #ffc200;"></div>
  <span class="label">Tribune Yellow<br/>$color-yellow-tribune<br/>#ffc200</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #ffb900;"></div>
  <span class="label">Dark Yellow<br/>$color-yellow-dark<br/>#ffb900</span>
</div>

<div style="clear: both;"></div>

#### Teal and Blue

<div class="swatch three columns column">
  <div class="colorfield" style="background: #a1d2df;"></div>
  <span class="label">Light Blue<br/>$color-blue-light<br/>#a1d2df</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #539bae;"></div>
  <span class="label">Gray Teal<br/>$color-teal-gray<br/>#539bae</span>
</div>

<div style="clear: both;"></div>

#### Grayscale

The grayscale includes five shades of gray, and you should not need to use a gray outside of these options.

Gray light is used for borders around ads.

Off white is used as a background color.

<div class="swatch three columns column">
  <div class="colorfield" style="background: #222222;"></div>
  <span class="label">Black<br/>$color-black<br/>#222222</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #4a4a4a;"></div>
  <span class="label">Dark Gray<br/>$color-gray-dark<br/>#4a4a4a</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #797979;"></div>
  <span class="label">Medium Gray<br/>$color-gray-medium<br/>#797979</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #D0D0D0;"></div>
  <span class="label">Light Gray<br/>$color-gray-light<br/>#D0D0D0</span>
</div>
<div class="swatch three columns column">
  <div class="colorfield" style="background: #F3F3F3;"></div>
  <span class="label">Off White<br/>$color-white-off<br/>#F3F3F3</span>
</div>

<div style="clear: both;"></div>

Typography
----------

#### Fonts

The new official fonts for The Texas Tribune website are PT Serif and Open Sans.

##### Loading &amp; Performance

Fonts will be loaded from [Google Fonts](https://www.google.com/fonts/) using [Web Font Loader](https://github.com/typekit/webfontloader). Please keep load time and use cases in mind when diversifying your font-weight choices.

##### Sans-serif

Open Sans is a sans serif font that comes in five weights. Similarly, only "regular" and "bold" will be used on Tribune proper. However, for this font pairing, the Interactive Data & Visuals Team is encouraged to use more than just the two main weights designated to the Tribune site. 

##### Serif

 PT Serif is a serif font that comes in three weights. Only "regular" and "bold" will be used on Tribune proper.

#### Font Size Sass

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

# Content Elements

#### Headers

Each header (h1-h6) is then given font sizes, weights, and any other styles. Header tags should be used on each page in the correct order to provide meaning and structure to the page with their use.

<h1 class="header--xxl">h1 header example</h1>
<h2 class="header--xl">h2 header example</h2>
<h3 class="header--l">h3 header example</h3>
<h4 class="header--m">h4 header example</h4>
<h5 class="header--s">h5 header example</h5>
<h6 class="header--xs">h6 header example</h6>

#### Headlines

Headlines are elements that exist inside story blocks. Article headlines will use an h1 header. They will have a class of .story_headline. 

#### Bylines

Bylines are elements that exist within story blocks. They should use the class .story_byline. The times in bylines should use the HTML time tag.

#### Paragraphs

Paragraph entities are given base font sizes and styles.

<p class="font-xs">This is an example paragraph.</p>

#### Icons

Icons usually fall into two categories, decorative and functional.

##### Decorative

Decorative icons usually act as a signposts and live near the content that they describe.

##### Functional

Functional icons tend to be action-oriented or link to other content.

Some functional icons can also be considered buttons. These buttons should always have a background color of $color-blue-light and a color of $color-white-pure. If the icon is a corporate logo, use the official color specified in their brand guidelines for the background color. The icon should be 55 percent of the size of its background color and visually centered within this space. This is based on either height or width (whichever is larger). To obtain this measurement, multiply the largest button dimension H or W by 0.55 - the outcome is the size of the icon’s H or W respectively. 

##### Font

For icons, we'll likely use Font Awesome, which is what we currently use.

We'll follow the PRO method outlined on [this page](http://fortawesome.github.io/Font-Awesome/get-started/) in the Font Awesome documentation. We'll include the font-awesome directory inside the Sass for the Tribune project. Only icons currently used in the project will be precompiled; comment out any unused icons so they aren't included in the CSS, and then uncomment icons as they're included in the project.

##### Documents
For visual representations of documents, including PDFs, we'll use the Font Awesome [file-text-o icon](http://fortawesome.github.io/Font-Awesome/icon/file-text-o/).

Responsive
----------

#### Media Queries

We'll use [Sass MQ](https://github.com/sass-mq/sass-mq) to organize our media queries in a clear, readable manner.

#### Grid

How to approach using a responsive grid framework is still undecided.

Images
------

#### Lead art

Lead art is an element inside of a story block. It uses the figure html tag and has a class of .story_leadart. It should have a figcaption that contains a caption and credit. Alt should be set to "" to instruct a screen reader to skip, as its purpose is decorative.

Video
-----

Videos should have captions.

Links
-----

Links are a base style element. To be more accessible, links should not be signified only by the use of color. Links should not unexpectedly open a new window.

<a href="#">Click me, I go nowhere</a>

Inputs
------

#### Newsletter signups

Newsletter signups are considered blocks, as they should be able to be reused on any place around the site. There may be times when newsletter signups are also elements; for example, there may be specific styles that apply to newsletter signups that appear inside of a story block. The class to use for newsletter signups is `.signup`.

If a newsletter signup appears inside of a story block, it will also include the class `.story_signup`.

Buttons
-------

Buttons are module elements. These updated button styles are inspired by styles 
originally used by news apps projects.

#### Yellow (default)

The default button uses the class .button_default.

<button class="button">.button_default</button>

#### Teal

The teal button uses the teal theme modifier and applies it to the default button.

<button class="button-teal">.button_default--teal</button>

#### Ghost

The ghost button can be applied to either the default yellow button or the teal button. The classes for these buttons are .button_default--ghost.

<button class="button-ghost">.button_default--ghost</button>

Ads
---

We have an [ad styleguide](http://adstyles.herokuapp.com/) that encompasses ad units, ad sizes, and ad targeting. This styleguide defines which style elements should be applied to these ads.

Advertisements should always have a surrounding padding of 10px in $color-white-off plus a 1px border of $color-gray-light.

The top leaderboard (728x90) ad is the exception, in that it's not completely surrounded by this border, but is still segregated inside the same background color and contains a border on the side facing the site.

Ads should be centered within the story content.

Related Content
---------------

There will be a few related content blocks.

# States of Content

# Experimental

This includes classes and information on elements that represent what we're trying out, looking into next, and currently testing and iterating upon.

#### Read more

This is a block entity that can be reused in many different contexts. The class to use for this is `.readmore`.

```html
<a href="#" class="readmore">Read More</a>
```

#### Related Content Link

This is an element of the story block, since it's an inline related content element. The class to use for this is `.story_related--link`. If a related link exists outside of a story, then it would just have a class of `.related--link`.

```html
<ul class="story_relatedlink">
  <li></li>
  <li></li>
  <li></li>
</ul>
```

#### Related Media

This related image is an element of the story block. If a related image exists outside of a story, then it would just have a class of `.related--image`, since related content that can be added to other blocks would be its own block.

.story_relatedimage

```html
<figure class="story_relatedimage" itemprop="associatedMedia">
  <figcaption></figcaption>
</figure>
```

.story_relatedvideo

```html
<div class="video story_relatedvideo" itemprop="associatedMedia">
  <div class="youtube">
    <iframe>
  </div>
</div>
```

#### Story Quotes

These quotes exist as elements that must be found within a story block. They are considered quote elements within story blocks, with a modifier of pull.

.story_quote--pull

```html
<p class="story_quote--pull"></p>
```


#### Story subheaders
For subheaders, use a header class for the size of header you want, such as `.header--l`. Subheaders should not be h1 and should be either size l or size m. Headers are their own blocks and are not elements of the story block.

</div><!-- end main -->
</div>
