# Fire framework (Fork of [Bootstrap SASS Starterkit])

Below are instructions on how to create a Bootstrap site using a SASS preprocessor.

## Requirements
This starter theme assumes that you have:
- NPM (Node Package Manager) (NPM Version 2.x or greater)


## Setup
Clone the repo

-  Run `npm install`

If you do not have npm, follow these instructions. If you do, continue to next section:

- Run `brew`. If command is not found, you need to install Brew
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- Install npm
`brew install node`

- Install grunt
`npm install -g grunt-cli`


## Using NPM & Grunt in workflow

Next run `grunt init` to copy the bootstrap files and compile SASS for the first time into the css folder.

You can now edit the files in the /sass folder to make changes. Start by reviewing and editing variables in the `/sass/base/_variable-overrides.scss` file.

After you've run the initial `grunt init` you can then use `grunt watch` to continuously watch the sass folder for changes, or you can run `grunt sass` to just do a single run and compile the sass.

To add Browsersync to workflow for live reload:

- Edit the proxy IP in the gruntfile.js file to match the IP or hostname of your dev website
- Run `grunt browsersync` (Watches the sass folder, and sets up a browsersync session. Use this instead of `grunt watch`.)

## Override Styles
The `./assets/sass/base/_variable-overrides.scss` file is generally where you will
the majority of your time overriding the variables provided by the [Bootstrap
Framework].

The `./assets/sass/_bootstrap.scss` file is nearly an exact copy from the
[Bootstrap Framework Source Files]. The only difference is that it injects the
`_variable-overrides.scss` file directly before it has imported the[Bootstrap
Framework]'s `_variables.scss` file. This allows you to easily override variables
without having to constantly keep up with newer or missing variables during an
upgrade.

The `./assets/sass/style.scss` file is the glue that combines the
`_bootstrap.sass` and `_overrides.scss` files together. Generally, you will not
need to modify this file unless you need to add or remove files to be imported.
This is the file that you should compile to `./assets/css/styles.css` (note
the same file name, using a different extension of course).

[Bootstrap Framework]: http://getbootstrap.com
[Bootstrap Framework Source Files]: https://github.com/twbs/bootstrap/releases
[SASS]: http://sass-lang.com/
[Bootstrap SASS Starterkit]: https://www.drupal.org/sandbox/wrender/2627564
