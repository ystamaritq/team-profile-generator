# Team Profile Generator

> HTML webpage that displays summaries for each team member.
> <br>

</div>

---

### Table of Contents

- [Description](#description)
- [User Stories](#user-stories)
- [Installing / Getting Started](#inslalling-/-getting-started)
  - [MVP](#mvp)
- [Demo](#demo)
- [Project Board](https://github.com/ystamaritq/team-profile-generator/projects "team-profile-generator")

---

## Description

a software engineering team generator command line application (CLI). The application will prompt the user for information about the team manager and then information about the team members.

---

## User Stories

`As a manager I want to generate a webpage that displays my team's basic info so that I have quick access to emails and GitHub profiles`

---

### Installing / Getting Started

To test this project, simply follow these steps:

```
step 1: clone https://github.com/ystamaritq/team-profile-generator.git
step 2: install node https://nodejs.org/en/download/
step 3: npm install
step 4: node app.js

```

---

#### Initial Configuration

No additional setup required.

#### Developing

Below is a summary of the key files for this project and their purpose:

- **app.js** main application entry point
- **package.json** - node package definition
- **Develop/css** - css used by the project
- **Develop/lib** - utilities classes, prompts and utils js files
- **Develop/test** - test cases used by the project
- **Develop/templates** - HTML utilities templates used to generate the webpage

---

#### MVP

- Creating the Classes: `Employee`, `Manager`, `Engineer` ,`Intern`.
- The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole() // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:

- officeNumber

- getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

- github // GitHub username

- getGithub()

- getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

- school

- getSchool()

- getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

- Name

- Role

- ID

- Role-specific property (School, link to GitHub profile, or office number)

---

#### Demo

<img src ="assets\images\readme-imgs\travel-board-gif-3.gif" width = "800px">

<div align="center">

[travel-board](https://cb-group-6-project-1.github.io/travel-board/ "Try it out!") </div>

---

## Tech Stack

| Tools                   | Tech        |
| ----------------------- | ----------- |
| V.S.Code                | HTML        |
| Postman                 | CSS         |
| draw\.io                | Javascript  |
| Browser Developer Tools | AJAX        |
|                         | Jquery      |
|                         | Pure.css    |
|                         | Moment.js   |
|                         | Materialize |

#### APIs

- [Mapbox](https://docs.mapbox.com/api/)
- [PixaBay](https://pixabay.com/api/docs/)
- [Weatherapi.com](https://www.weatherapi.com/)

---

## Team Members

- [Yadira Tamarit](https://github.com/ystamaritq)
- [Stephen Guzman](https://github.com/steveo9219)
- [William Hanna](https://github.com/wrhcodecamp)
- [Joshua Martinez](https://github.com/JDMartinez1531)

---

[Table of Contents](#table-of-contents)

---
