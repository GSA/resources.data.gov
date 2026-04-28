# Welcome!

We're so glad you're thinking about contributing to a [open source project of the U.S. government](https://digital.gov/resources/requirements-for-achieving-efficiency-transparency-and-innovation-through-reusable-and-open-source-software/)!  We encourage you to read the CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

## Policies

We want to ensure a welcoming environment for all of our projects. Our staff follow the [TTS Code of Conduct](https://handbook.tts.gsa.gov/about-us/code-of-conduct/) and all contributors should do the same.

## Publishing workflow

This describes the workflow for how edits are incorporated and published to the
site.

1. All changes are submitted through pull requests. Site owners should use
   branches while members of the public should use forks.
1. Each site owner must
   [approve](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
   a pull request before it can be merged.
1. Changes are merged to the `main` branch where they are automatically
   published to [resources.data.gov](https://resources.data.gov)
   and the publishing is done.

## DCAT-US 3.0 documentation workflow

This repository includes a git submodule at `_external/dcat-us` for upstream
DCAT-US 3.0 documentation. The local checkout is configured as sparse checkout
to only include:

- `jsonschema/definitions/`
- `jsonschema/docs/`

Builds merge those upstream markdown files into local pages using:

- `npm run merge-dcat-us-docs`

To update upstream content:

1. Run `git submodule update --remote _external/dcat-us`.
2. Re-apply sparse checkout patterns:
   - `git -C _external/dcat-us sparse-checkout init --no-cone`
   - `printf "/jsonschema/definitions/\n/jsonschema/docs/\n" | git -C _external/dcat-us sparse-checkout set --stdin`
3. Run `npm run merge-dcat-us-docs`.
4. Review generated pages under `pages/_data_standards/dcat-us-3/` and commit.

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you are agreeing to comply with this waiver of copyright interest.
