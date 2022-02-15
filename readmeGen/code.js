const rMe = (response) => {
    return `
# ${response.title}\n

[Repository](${response.repo}) | [Domain](${response.app})

## Table of Contents
- [Description](#description)

- [Utility](#usage)

- [Contributors](#contribution)

- [Inquiries](#inquiries)

- [Installation](#installation)

- [License](#license)

---

## [Description](#description)
<a name="description"></a>
${response.description}.

## [Utility](#usage)
<a name="usage"></a>
${response.usage}.

## [Contributors](#contribution)
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