---
layout: page
title: Open Licenses
permalink: /open-licenses/
redirect_from: /license-examples/
filename: licenses.md
---

The [OPEN Government Data Act](https://www.govinfo.gov/app/details/PLAW-115publ435) (Title II of the Foundations for Evidence-Based Policymaking Act of 2018, P.L. 115-435) requires agencies to make their data publicly available in open, machine-readable formats and to apply open licenses so that if data are made public there are no restrictions on copying, publishing, distributing, transmitting, adapting, or otherwise using the information for any purpose, commercial or non-commercial.

As described below, works created by U.S. Government employees within the scope of their employment default to U.S. Public Domain. However, works produced by outside parties which are created or obtained for use by the U.S. Government may need open licenses applied to them. When information is acquired through a contract, agencies should utilize [appropriate existing clauses](https://www.acquisition.gov/far/subpart-27.4) in the Federal Acquisition Regulation to meet these objectives.

The federal metadata standard for documenting datasets and APIs includes a `license` field defined as *"the license or non-license (i.e. Public Domain) status with which the dataset or API has been published"* and [must be provided as a URL]({{ site.baseurl }}/resources/dcat-us/#license). Guidance and example URLs can be found below for properly documenting the license or non-license status of your agency's data. The current metadata standard documentation is available at [DCAT-US]({{ site.baseurl }}/resources/dcat-us/).

## Definitions

For the purposes of federal open data policy, the term "Open License" is used to refer to any legally binding instrument that grants permission to access, re-use, and redistribute a work with few or no restrictions. While technically not a "license," worldwide public domain dedications such as [Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/) also satisfy this definition. An "Open License" must meet the following conditions:

* *Reuse*. The license must allow for reproductions, modifications and derivative works and permit their distribution under the terms of the original work. The rights attached to the work must not depend on the work being part of a particular package. If the work is extracted from that package and used or distributed within the terms of the work’s license, all parties to whom the work is redistributed should have the same rights as those that are granted in conjunction with the original package.

* *Redistribution*. The license shall not restrict any party from selling or giving away the work either on its own or as part of a package made from works from many different sources. The license shall not require a royalty or other fee for such sale or distribution. The license may require as a condition for the work being distributed in modified form that the resulting work carry a different name or version number from the original work. The rights attached to the work must apply to all to whom it is redistributed without the need for execution of an additional license by those parties.  The license must not place restrictions on other works that are distributed along with the licensed work. For example, the license must not insist that all other works distributed on the same medium are open. If adaptations of the work are made publicly available, these must be under the same license terms as the original work.

* *No Discrimination against Persons, Groups, or Fields of Endeavor*. The license must not discriminate against any person or group of persons. The license must not restrict anyone from making use of the work in a specific field of endeavor. For example, it may not restrict the work from being used in a business, or from being used for research.

## U.S. Government Works

Data and content created by government employees within the scope of their employment are not subject to domestic copyright protection under [17 U.S.C. § 105](http://www.copyright.gov/title17/92chap1.html#105). Government works are by default in the U.S. Public Domain. For existing datasets that already use the legacy U.S. Public Domain label, the following URL may be retained:

    http://www.usa.gov/publicdomain/label/1.0/

**Note:** This legacy URL currently redirects to a general informational page and does not display a formal license document. That is intentional: U.S. government works enter the public domain automatically under 17 U.S.C. § 105, so no license grant is required. The URL serves only as a machine-readable identifier for that statutory status.

Agencies are encouraged to use Creative Commons Zero (CC0) for new datasets, as it provides the same domestic public domain status while also covering international use and links to actual legal text. When CC0 has been applied, use the following URL for the license field:

    https://creativecommons.org/publicdomain/zero/1.0/

## Examples of Open Licenses & Dedications

When agencies purchase data or content from third-party vendors, care must be taken to ensure the information is not hindered by a restrictive, non-open license. In general, such licenses should comply with the [Open Knowledge Definition](http://opendefinition.org/okd/) of an open license. Several examples of open licenses and dedications for use by agencies are listed below:

#### Creative Commons
[Creative Commons](https://creativecommons.org) offers a range of licenses and public domain tools suitable for federal data, from full public domain dedication to attribution-required licenses:

* [CC0 Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/), e.g. `"license":"https://creativecommons.org/publicdomain/zero/1.0/"`
* [CC BY Attribution](https://creativecommons.org/licenses/by/4.0/), e.g. `"license":"https://creativecommons.org/licenses/by/4.0/"`
* [CC BY-SA Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/4.0/), e.g. `"license":"https://creativecommons.org/licenses/by-sa/4.0/"`

#### Open Data Commons
* [Open Data Commons Public Domain Dedication and Licence (PDDL)](https://opendatacommons.org/licenses/pddl/1-0/), e.g. `"license":"https://opendatacommons.org/licenses/pddl/1-0/"`
* [Open Data Commons Attribution License (ODC-By)](https://opendatacommons.org/licenses/by/1-0/), e.g. `"license":"https://opendatacommons.org/licenses/by/1-0/"`
* [Open Data Commons Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/), e.g. `"license":"https://opendatacommons.org/licenses/odbl/1-0/"`

## More Information
* *[Copyright and Other Rights Pertaining to U.S. Government Works](https://www.usa.gov/government-copyright)*
* *[Licensing Policies, Principles, and Resources: Examples of how government has addressed open licensing questions]({{ site.baseurl }}/licensing-resources/)*
