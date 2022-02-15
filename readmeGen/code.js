const rMe = (response) => {
    return `
# ${response.title}\n

[Repository](${response.repo}) | [Domain](${response.app})

## Table of Contents
- [Description](#description)

- [Utility](#utility)

- [Contributors](#contributors)

- [Inquiries](#inquiries)

- [Installation](#installation)

- [License](#license)



## [Description](#description)
---
<a name="description"></a>
${response.description}.

## [Utility](#utility)
---
<a name="usage"></a>
${response.usage}.

## [Contributors](#contributors)
<a name="contribution"></a>
${response.contribution}.

## [Application Installation](#installation)
<a name="installation"></a>
${response.installation}.

## [Inquiries](#inquiries)
<a name="inquiries"></a>
Feel free to inquire in regard to this project:

- [Github: ${response.authorName}](https://github.com/${response.authorName})

- ${response.email}

To become a contributor, contact:
- ${response.prospect}

## [Installation](#installation)
<a name="installation"></a>
${response.installation}

## [License](#license)
<a name="license"></a>
${response.license}

    `
}

module.exports = rMe;