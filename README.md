[![CircleCI](https://circleci.com/gh/GSA/resources.data.gov.svg?style=svg)](https://circleci.com/gh/GSA/resources.data.gov)

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

- [Ruby 2.6](https://www.ruby-lang.org/)
- [Bundler 1.17.x](https://bundler.io/) (we use an older version for Federalist
  compatibility)
- [Node.js 10](https://nodejs.org/)


### Setup

Install Node.js dependencies.

    $ npm install

Install Ruby dependencies.

    $ npm run setup

Run the build.

    $ npm run build

Run the server

    $ npm start

Open your web browser to [localhost:4000](http://localhost:4000/).

Sanity check the generated site.

    $ npm test

Check for broken links.

    $ npm run qa


### Update dependencies

To update dependencies, you can run `bundle update {dependency}` after running
`npm install`. Then follow all other development steps above to validate site is
working as expected.
