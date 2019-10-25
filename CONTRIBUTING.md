# Welcome!

We're so glad you're thinking about contributing to a [open source project of the U.S. government](https://code.gov/)! If you're unsure about anything, just ask -- or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

## Policies

We want to ensure a welcoming environment for all of our projects. Our staff follow the [TTS Code of Conduct](https://18f.gsa.gov/code-of-conduct/) and all contributors should do the same.

We adhere to the [18F Open Source Policy](https://github.com/18f/open-source-policy). If you have any questions, just [shoot us an email](mailto:18f@gsa.gov).


## Editing and updating content

[resources.data.gov](https://resources.data.gov/) is a collaborative, open
source project hosted on [GitHub](https://github.com/). Both federal employees
and members of the public are strongly encouraged to improve the project by
contributing.

Fortunately, contributing only takes a few steps. First, log into
[GitHub](https://github.com/login). Find the page you wish to edit on
[resources.data.gov](https://resources.data.gov/). At the bottom of the page,
click the "Help us improve this site on GitHub" to make your edits.

Once you've made your edits, fill out the form at the bottom of the page with
a short description and click "Propose file change" (sometimes called "Commit
changes"). From here you want to submit a pull request so that site owners can
review and approve your changes.  Click "Create pull request" to create the pull
request.

If you get stuck, look through [GitHub's
documentation](https://help.github.com/en/github) or open an
[issue](https://github.com/GSA/resources.data.gov/issues/new). If you're new to
[Markdown](https://www.markdownguide.org), [Jekyll](https://jekyllrb.com), or
[Federalist](https://federalist.18f.gov), some of the technologies that power
the site, we recommend looking through [Federalist's Getting Started with
Jekyll](https://federalist.18f.gov/documentation/getting-started-with-jekyll/).


## Publishing workflow

This describes the workflow for how edits are incorporated and published to the
site.

1. All changes are submitted through pull requests. Site owners should use
   branches while members of the public should use forks.
1. Each site owner must
   [approve](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
   a pull request before it can be merged.
1. Changes are merged to the `develop` branch where they are automatically
   published to [resources-staging.data.gov](https://resources-staging.data.gov)
   (staging) and can be previewed.
1. As frequently as required but at least once a month, GSA should submit
   a "release" pull request that will promote changes on `develop` to `master`.
   Once merged, the content on `master` is automatically published to
   [resources.data.gov](https://resources.data.gov/) (production).


## Branch previews

If you are a site owner of resources.data.gov, you should be added as a collaborator
to this repository. When submitting changes, create a branch instead of a fork.
That way [Federalist](https://federalist.18f.gov) will build a preview link for
your changes.

To view your preview, at the bottom of the pull request are status checks,
including one from Federalist with a "details" link to your preview. For more
information, see the [Federalist
documentation](https://federalist.18f.gov/documentation/previews/).


## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you are agreeing to comply with this waiver of copyright interest.
