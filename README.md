<!-- omit in toc -->
# Learning React Router | Net Ninja YT 

This is a simple website that I created while learning about React Router.

- [Folder structure](#folder-structure)
- [Overview](#overview)
- [Installation](#installation)
- [Contact Me](#contact-me)


## Folder structure

Demo data folder structure

```bash
📦data
 ┗ 📜db.json
```

src folder structure 👇

```bash
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┗ 📜BreadCrumbs.jsx
 ┣ 📂layouts
 ┃ ┣ 📜CareersLayout.jsx
 ┃ ┣ 📜HelpLayout.jsx
 ┃ ┣ 📜index.js
 ┃ ┗ 📜RootLayout.jsx
 ┣ 📂pages
 ┃ ┣ 📂careers
 ┃ ┃ ┣ 📜CareerDetails.jsx
 ┃ ┃ ┣ 📜CareerError.jsx
 ┃ ┃ ┣ 📜Careers.jsx
 ┃ ┃ ┗ 📜loaderFns.js
 ┃ ┣ 📂error
 ┃ ┃ ┗ 📜NotFound.jsx
 ┃ ┣ 📂help
 ┃ ┃ ┣ 📜Contact.jsx
 ┃ ┃ ┣ 📜contactActionFn.js
 ┃ ┃ ┗ 📜Faq.jsx
 ┃ ┣ 📜About.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┗ 📜index.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
## Overview

Starting with new way of routing using `createBrowserRouter()`, `createRoutesFromElements()` and `RouterProvider`.

I imported the necessary components, layouts, loader functions, and action handlers from various files and sets up the routes using the `createRoutesFromElements` function. The routes are nested within layout components and have associated loaders and error elements. The router configuration is then passed to the `RouterProvider` component, which is rendered by the App component.

- React components and layouts imported from different files.
- Loader functions and action handlers imported from different files.

## Installation

- Clone the GitHub repository.
- Install the dependencies
    ```bash
    npm install
    ```
- Run the following command
    ```bash
    npm run dev
    ```
- Your application will start at <http://localhost:5173/>
- Now you can go and visit the website.

## Contact Me

Dipankar Paul | <dipankarpaul2k@gmail.com>