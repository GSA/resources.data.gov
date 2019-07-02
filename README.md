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
