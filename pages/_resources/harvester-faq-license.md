---
resource_name: Harvest Error -- License Field

slug: harvester-faq-license

description: How to fix license validation errors caused by free text descriptions or CSS strings in a field that requires a URL.

source: data.gov

category: Skills development

tags:
  - open data
  - data sharing
  - data inventory
  - harvest

guidance_tags: ""

format: ""

details: |

  ### License field errors -- free text instead of a URL

  This error affects about 122 records. It occurs when the `license` field contains a text description instead of a web address pointing to the license document.

  ---

  ### What you see

  ```
  $.license, 'Other (Public Domain)' does not match any of the acceptable formats
  ```

  ---

  ### What this means

  The `license` field must contain a URI -- a web address that points to the license document. The schema does not accept plain text descriptions, legal disclaimer text, or any value that is not a properly formatted URI.

  ---

  ### Common rejected values

  - `Other (Public Domain)` -- a description, not a URI

  - `None` -- not a valid URI

  - Long legal disclaimer text -- not a valid URI

  - CSS font-family strings -- a data entry error, likely a copy-paste from a web form

  ---

  ### What the correct value looks like

  For most US government datasets that are in the public domain, the correct value is:

  ```
  https://creativecommons.org/publicdomain/zero/1.0/
  ```

  If the dataset is released under a specific license, use that license's official URL. For example:

  - Creative Commons Attribution 4.0: `https://creativecommons.org/licenses/by/4.0/`

  - Open Data Commons Attribution: `https://opendatacommons.org/licenses/by/1-0/`

  If the dataset has no applicable license, remove the field or set it to null. Do not use placeholder text.

  ---

  ### If you can edit your metadata directly

  Replace the text value with the appropriate license URI. For most federal datasets, use `https://creativecommons.org/publicdomain/zero/1.0/`.

  If you are not sure which license applies, check with your agency's legal or open data team before selecting one.

  ---

  ### If you cannot edit the metadata yourself

  Contact whoever manages your agency's metadata publishing system and tell them:

  > "The `license` field on our datasets needs to contain a URI -- a web address pointing to the license -- not a text description. For most of our datasets the correct value is `https://creativecommons.org/publicdomain/zero/1.0/`. This is causing validation failures on harvest.data.gov."

  ---

  ### Related pages

  - [Quick reference](/resources/harvester-faq-quick-reference/) -- at-a-glance fix table

  - [FAQ overview](/resources/harvester-faq-overview/) -- all error types

examples: ""

link: ""

layout: resource

toc: true

publish: true
---
