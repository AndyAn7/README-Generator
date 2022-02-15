const rMe = (response) => {
    return `
# ${response.title}\n

[Repository](${response.repo}) | [Domain](${response.app})

## Table of Contents
-[Description](#description)

-[Installation](#installation)

-[Contributors](#contribution)

-[Usage](#usage)

-[Inquiries](#inquiries)

-[License](#license)

    `
}