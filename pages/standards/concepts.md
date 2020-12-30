---
title: Data Standards - Concepts
layout: section
toc: true
primary_nav_section: Data Standards
category_name: Data standards 
---

# Concepts & Definitions

In order to effectively communicate and coordinate the adoption and development of data standards, one must first establish the basic language to describe their fundamental concepts. This page defines some of the most basic data standards terms and concepts as used on this website. 

The universe of data standards is large, varied, and complex. There is no single simple definition that would adequately convey their meaning for all the purposes of this website. Furthermore, data standards are often comprised of smaller component pieces, interchangeable parts or common building blocks that can be mixed and matched for different purposes. For this reason, this website breaks down data standards into a simple hierarchy of concepts. First, the term “standard” is defined specifically to the context of technical specifications for data interoperability, then data standards are separated into more discrete concepts. 

An anatomical unit of a data standard is referred to as a data standard “component.” The documentation for a more holistic data standard specification then assembles multiple components together to form a data standards “package.” However, some data standards initiatives define a wide range of components to be packaged together for different purposes, perhaps in an infinitely variable way. The system of components developed by these initiatives is referred to as a data standards “framework.” These terms are further defined below and accompanied with examples. 

These are not formally standardized terms and definitions, they’re simply words generally used to describe common concepts associated with data standards. They’ve been defined here to establish consistency across this website.  

* [Standard](#standard)
* [Data Standard](#data-standard)
* [Data Standards Component](#data-standards-component)
* [Data Standards Package](#data-standards-package)
* [Data Standards Framework](#data-standards-framework)

## Standard

In the most abstract and generalizable sense, the word “standard” is used to refer to a commonly agreed upon reference (a definition or specification) to allow for consistent measurement, qualification, or exchange of an object, a process, or a unit of information. Given that this concept is fundamental to so many fields that require the coordination of multiple parties, it can have slightly different meanings and connotations in different contexts. At the intersection of technology and policy there are often situations where the use of the word can be confusing or inconsistent.

In government, the word “standard” is often used to refer to a requirement, a compliance measure, or a minimum set of qualification criteria that something must meet. One example is the minimum set of safety criteria or performance measures that a building must be designed to include in order to satisfy a legally established fire code. 

In digital technology, the word “standard” is often used to refer to a common technical specification for how information is described, processed, or transmitted. For example, the HTML and HTTP standards describe how web pages are formatted and transmitted so that all web browsers and website servers work consistently and interoperably. 

For the purposes of this website, the word “standard” is primarily used in this later context.  Here “data standards” are not intended to describe minimum qualification criteria that data should meet, but instead to describe technical specifications that allow for the consistent and interoperable collection and exchange of data in specific environments. 

## Data Standard

For the purposes of this website, a “data standard” is a technical specification that describes how data should be stored or exchanged for the consistent collection and interoperability of that data across different systems, sources, and users. Data standards are typically made up of discrete data standards “components.” Multiple components can be assembled together to describe a more comprehensive data standards “package” and a system or initiative that defines a large but unified collection of components to be used and packaged together for a wide variety of purposes is referred to here as a data standards “framework.”

## Data Standards Component

A data standards component is a discrete unit or subsection of a complete data standards package. This may be a particular anatomical piece of a specific data standards package or it may be defined separately and autonomously to be incorporated into a wide variety of different data standard packages. Common data standards components (ordered by most primitive to most complex) are listed below:

* **Data Type** - A primitive data type is one of the most fundamental principles for defining what type of information a piece of data is. Common data types are: boolean, integer, string, and date.
* **Identifiers** - Identifiers provide a shorthand way to reference a unit of data or a specific entry in a codelist or classification scheme. Typically identifiers are intended to be unique within a local or global context (UIDs, and UUIDs). This can include both UUIDs intended to serve as their own widely used standards as well as commonly used code lists and classification schemes. For example, “`US`” is the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#US) code for the United States of America while `515112` is the [North American Industry Classification System (NAICS)](https://www.naics.com/naics-code-description/?code=515112) code for FM radio stations. 
* **Vocabulary** - A vocabulary establishes standardized terms with consistent semantic definitions. These are typically constrained to a particular namespace or domain. The terms are the machine readable labels for individual data elements or a group of data elements. They can be thought of as the column headings in a spreadsheet of tabular data along with their definitions in a data dictionary. For example, the Dublin Core Metadata Initiative establishes a term and definition for a variety of common metadata elements like “[publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher).” 
* **Schema** - A schema can be a data model or database schema defining relationships between different pieces of information. Schemas can be described using SQL, UML, XSD, or JSON Schema.
* **Format** - The format or “[serialization format](https://en.wikipedia.org/wiki/Serialization#Serialization_formats)” is the syntax, encoding, and file format or media type for storing or transmitting your data. On the web, formats are associated with standardized [media type](https://www.iana.org/assignments/media-types/media-types.xhtml) identifiers, like `application/json`. Common data formats include JSON, CSV, and XML. 
* **API** - An application programming interface (API) is a predefined protocol for reading and/or writing data using a filesystem, a database, or across a network. Common types of data APIs include OBDC and SQL for databases and REST APIs for the web. 


## Data Standards Package 

A data standards package is a specification that articulates the implementation of most of the different components of a full data standard anatomy.  Sometimes this is referred to as an [Application Profile](https://en.wikipedia.org/wiki/Application_profile), but different frameworks and communities have different names for their particular assemblage of components. For example, in the context of NIEM, this is referred to as [Information Exchange Package Documentation (IEPD)](http://niem.github.io/reference/artifacts/messages/iepd/).

## Data Standards Framework 

A data standards framework is a flexible or comprehensive system of reusable data standards components. Data standards frameworks are intended to allow components to be mixed and matched to serve a wide range of use cases and could be assembled to generate a dynamic or near infinite set of data standards packages. Examples of data standards frameworks include the National Information Exchange Model (NIEM), the Dublin Core Metadata Initiative (DCMI), and Schema.org. 


