[![CircleCI](https://circleci.com/gh/GSA/resources.data.gov.svg?style=svg)](https://circleci.com/gh/GSA/resources.data.gov)

# resources.data.gov

Resources for open data and enterprise data inventory management.

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

## Netlify

This site uses Netlify to manage its editorial workflow. Content is added and edited in collections via the Netlify interface, which can be accessed by approved contributors at [resources.data.gov/admin](https://resources.data.gov/admin). Collections are managed via the config.yml file in pages/admin. 


## Update Dependencies

To update dependencies, you can run `bundle update {dependency}` after running `npm install`. Then follow all other development steps above to validate site is working as expected.