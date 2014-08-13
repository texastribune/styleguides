Texas Tribune Style Guides
===========

This is the project repo for the Texas Tribune style guides, living documents of Texas Tribune sites and platforms, including TribTalk, the Texas Tribune festival, and more. Check out the style guides on GitHub pages [here](http://texastribune.github.io/styleguides/).

## Getting Started

To add to the style guides, clone down the project repo.

You'll need the Ruby gem bundler. To install the bundler, run:

    gem install bundler

Install the necessary gems for the style guides from the Gemfile by running:

    bundle install

Grunt is used to watch and compile CSS files from Sass. Grunt requires that Node/npm be installed. Before installing Grunt, be sure the latest version of [Node](http://nodejs.org) is installed. Using [Homebrew](http://brew.sh/) is the recommended option here:

    brew install node

To install Grunt, run:

    npm install -g grunt-cli

Once Grunt is installed, install the necessary Node dependencies by running:

    npm install

## Running Grunt Tasks

Use Grunt to compile the Sass into CSS by running:

    grunt build

Use Grunt while developing to compile into CSS and then watch by running:

    grunt dev

By default, compile Sass into CSS by running:

    grunt

## Running Jekyll

GitHub pages are powered by Jekyll. To start the local Jekyll build/serve/watch process and preview what the style guides will look like on GitHub pages, run:

    make serve

## Contributing and deploying

Content for the project is stored on the gh-pages branch.

To contribute to style guides, create a new branch, make your changes there, and submit a PR. When the PR is approved, merge it into the gh-pages branch. Then push the updated gh-pages branch to GitHub, and the new content will be deployed.

## Adding a new style guide

To add a new style guide to the project, add the Sass for the project to the _sass directory. Each style guide's Sass should go into its own appropriately named directory. Then, add a new HTML page to the root directory, following the established naming convention. Update the Gruntfile to build Sass for and watch the new project's style guide.

## Additional Resources

The [Jekyll docs](http://jekyllrb.com/docs/github-pages/) provide a helpful overview on Jekyll and deploying GitHub pages.


