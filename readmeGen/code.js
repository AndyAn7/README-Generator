const rMe = (response) => {
    return `
# ${response.title}\n
[![License: ${response.badge}](https://img.shields.io/badge/License-${response.badge}-${response.color}.svg)](https://opensource.org/licenses)

[Repository](${response.repo}) | [Domain](${response.app})

## Table of Contents
- [Description](#description)

- [Language](#language)

- [Utility](#utility)

- [Contributors](#contributors)

- [Inquiries](#inquiries)

- [Installation](#installation)

- [License](#license)



## [Description](#description)
---
<a name="description"></a>
${response.description}.

## [Language Utilized](#language)
---
<a name="language"></a>
${response.language}

## [Utility](#utility)
---
<a name="usage"></a>
${response.usage}.

## [Contributors](#contributors)
---
<a name="contribution"></a>
${response.contribution}.

## [Application Installation](#installation)
---
<a name="installation"></a>
${response.installation}.

## [Inquiries](#inquiries)
---
<a name="inquiries"></a>
Feel free to inquire in regard to this project:

- [Github: ${response.authorName}](https://github.com/${response.authorName})

- ${response.email}

To become a contributor, contact:
- ${response.prospect}

## [Installation](#installation)
---
<a name="installation"></a>
${response.installation}

## [License](#license)
---
<a name="license"></a>
${response.license}

    `
}

module.exports = rMe;
