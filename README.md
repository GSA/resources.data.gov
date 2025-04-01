[![GitHub Actions](https://github.com/GSA/resources.data.gov/actions/workflows/build.yml/badge.svg)](https://github.com/GSA/resources.data.gov/actions/workflows/build.yml)
[![GitHub Actions](https://github.com/GSA/resources.data.gov/actions/workflows/qa.yml/badge.svg)](https://github.com/GSA/resources.data.gov/actions/workflows/qa.yml)

# resources.data.gov

Resources for open data and enterprise data inventory management.

## Usage

### Editing content

This site uses Netlify to manage its editorial workflow. Content is added and
edited in collections via the Netlify interface, which can be accessed by
approved contributors at
[resources.data.gov/admin](https://resources.data.gov/admin). Collections are
managed via the config.yml file in pages/admin.


## Branches and environments

Environment | Branch | Description
----------- | ------ | -----------
resources.data.gov | `main` | The production instance of r.d.g.
resources-staging.data.gov | `develop` | A preview site used for ad-hoc development or significant changes requiring partner review.
\* | feature branches | Feature branches to preview a single change.

Federalist builds all branches and creates previews for them. Two branches are
special, `main` which is automatically deployed by Federalist to
[resources.data.gov](https://resources.data.gov/) and `develop` which is used as
a staging branch for significant changes.

Deploying to staging is not required. It might be useful for previewing
significant changes to the site that require partner review.


## Development

### Prerequisites

- [Ruby 3.1.4](https://www.ruby-lang.org/)
- [Bundler 1.17.x](https://bundler.io/) (we use an older version for Federalist
  compatibility)
    - install via `gem install bundler -v 1.17.3`
    - use version by `bundle _1.17.3_ ...`
- [Node.js 20](https://nodejs.org/)


### Setup

Install Node.js dependencies.

    $ npm install

Install Ruby dependencies ( !WARNING! If you use a mac ensure you install a version manager for ruby to avoid messing up your system ruby installation ).

    $ npm run setup

Run the build.

    $ npm run build

Run the server

    $ npm run start

Open your web browser to [localhost:4000](http://localhost:4000/).

Test the generated site.

    $ npm run test

Check for broken links.

    $ npm run qa


### Broken Links

We run a [weekly QA cron job](https://github.com/GSA/resources.data.gov/actions/workflows/qa.yml) to test for broken links.

Any errors the QA job finds will be added to the [📌 Link Checker Report](https://github.com/GSA/resources.data.gov/issues/811).

False positives, or URLs you wish to ignore can be put in the `.lycheeignore` file. This supports regex matching as well.

This job can also be run locally. Install instructions here: https://lychee.cli.rs/installation/

Then run with args: `lychee --base=https://resources.data.gov .`

### Update dependencies

To update dependencies, you can run `bundle update {dependency}` after running
`npm install`. Then follow all other development steps above to validate site is
working as expected.
