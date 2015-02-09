---
layout: stylepage_md
title: TexasTribune
typekit: brb4jmm
css: texastribune.min.css
---
<div class="texastribune-page container">
  <div class="masthead sixteen columns">
    <img class="logo" src="https://s3.amazonaws.com/static.texastribune.org/common/images/logo.jpg" title="TexasTribune">
    <h1 class="sg-header">Stylesheet</h1>
    <p>This is the styleguide for <a href="http://www.texastribune.org">texastribune.org</a>. Below are styles that we're currently using that we'll continue to iterate on and use in the redesign of the site planned for 2015.</p>
  </div><!-- end masthead -->
  <div class="four columns">
    <div id='side-nav'>
      <ul>
        <li><a href="#sass-section">Sass/CSS</a></li>
        <li><a href="#javascript-section">JavaScript</a></li>
        <li><a href="#branding-section">Branding</a></li>
        <li><a href="#typography-section">Typography</a></li>
        <li><a href="#color-section">Color</a></li>
        <li><a href="#grid-section">Grid</a></li>
        <li><a href="#navigation-section">Navigation</a></li>
        <li><a href="#images-section">Images</a></li>
        <li><a href="#credits-section">Bylines &amp; Credits</a></li>
        <li><a href="#paragraphs-section">Paragraphs</a></li>
        <li><a href="#lists-section">Lists</a></li>
        <li><a href="#forms-section">Forms</a></li>
        <li><a href="#buttons-section">Buttons</a></li>
        <li><a href="#icons-section">Icons</a></li>
      </ul>
    </div>
  </div>
  <div class="twelve columns omega">
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="sass-section"></a>
          <h2>Sass/CSS</h2>
          <p>Sass styles are written in .sass and in .scss. Grunt is used to compile and minify.</p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="javascript-section"></a>
          <h2>JavaScript</h2>
          <h3 class="sg-header">Analytics</h3>
          <h3 class="sg-header">jQuery Plugins</h3>
          <h3 class="sg-header">Third-Party Social Services</h3>
          <h3 class="sg-header">Other Third-Party</h3>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="branding-section"></a>
          <h2>Branding</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="typography-section"></a>
          <h2>Typography</h2>
          <h3 class="sg-header">Stories</h3>
          <p>Stories use Georgia, Times and serif. These fonts can be added with the serif mixin.</p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="color-section"></a>
          <h2>Color</h2>
          <div class="swatch three columns column">
            <div class="colorfield" style="background: #ffcc20;"></div>
            <span class="label">Tribune yellow<br/>$trib_yellow<br/>#ffcc20</span>
          </div>
          <div class="swatch three columns column">
            <div class="colorfield" style="background: #008990;"></div>
            <span class="label">Tribune teal<br/>$trib_teal<br/>#008990</span>
          </div>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="grid-section"></a>
          <h2>Grid</h2>
          <p>The site uses its own twelve-column grid system. Below is an example of the code used to create a twelve-column row.</p>
          <div class="example-code">
            <btn class="show-hide">Example Code</btn>
            <pre>
              <code>
                &lt;div class="grid"&gt;
                  &lt;div class="cell w-12"&gt;
                    insert elements here
                  &lt;/div&gt;
                &lt;/div&gt;
              </code>
            </pre>
          </div>
          <p>Below is an example of the code used to create a row composed of two six-column halves.</p>
          <div class="example-code">
            <btn class="show-hide">Example Code</btn>
            <pre>
              <code>
                &lt;div class="grid"&gt;
                  &lt;div class="cell w-6"&gt;
                    insert left elements
                  &lt;/div&gt;
                  &lt;div class="cell w-6"&gt;
                    insert right elements
                  &lt;/div&gt;
                &lt;/div&gt;
              </code>
            </pre>
          </div>
          <p>This grid can be divided up into any number of columns as long as they add up to twelve. On mobile devices, each div with the class of <span class="inline-class">.cell</span> becomes its own row.</p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="navigation-section"></a>
          <h2>Navigation</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="images-section"></a>
          <h2>Images</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="credits-section"></a>
          <h2>Bylines &amp; Credits</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="paragraphs-section"></a>
          <h2>Paragraphs</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="lists-section"></a>
          <h2>Lists</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="forms-section"></a>
          <h2>Forms</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="buttons-section"></a>
          <h2>Buttons</h2>
          <p>These buttons are used throughout the site.</p>
          <h3 class="sg-header">Info Button</h3>
          <p>This button is used to link to more information throughout the site. By default, this button is Tribune yellow. On hover, the button lightens by 10&#37;.</p>
          <a class="btn_info">Button</a>
          <div class="example-code">
            <btn class="show-hide">Example Code</btn>
            <pre>
              <code>
                &lt;a class="btn_info"&gt;
                  Info Button
                &lt;/a&gt;
              </code>
            </pre>
          </div>
        </article>
      </div>
    </div><!-- end row -->
    <div class="row article_detail">
      <div class="main">
        <article>
          <a name="icons-section"></a>
          <h2>Icons</h2>
          <p></p>
        </article>
      </div>
    </div><!-- end row -->
  </div><!-- end twelve columns -->
</div><!-- end container -->
