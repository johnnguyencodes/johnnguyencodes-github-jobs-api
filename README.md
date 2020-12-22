# GitHub Jobs API coding challenge for Egen Solutions
> * Maintained by: `John Nguyen`

* Used React.js to create all HTML elements (virtual DOM) to dynamically display data received from the GitHub's Jobs API by sending GET requests with Axios

* Managed state and utilized lifecycle features with React Hooks

* Created user interface with CSS3, Bootstrap, and React-Strap


## Completed Features
  1. User can view all jobs currently live via the GitHub Jobs API
  2. User can search for jobs based on location, title, company, skill, and can filter for full-time positions.
  3. User can search for jobs based on user's geolocation.
  4. User can view details of a specific job.

## Features Being Implemented
  1. User can load more jobs onto the page, however the current implementation refreshes the page and resets the Window.scrollY position to the top of the page.  Infinite scroll would have presented a cleaner user interface.

## Features To Be Implemented in the Future
  1. The ability to toggle between light and dark mode.
  2. Mobile-responsive design.
  3. Unit testing.

## Live Site
* The live version can be viewed [here](https:johnnguyencodes-github-jobs-api.netlify.com).

## System Requirements
* Ubuntu Linux 18.04 LTS
* Node.js 10
* PostgreSQL 10
* pgweb
* NPM 6


## Set Up Environment
1. Clone the repo

```
git clone https://github.com/johnnguyencodes-githubs-jobs-api

cd johnnguyencodes-github-jobs-api
```
2. Install all dependencies with NPM
```
npm install
```

3. Start the project.  Once started, you can view the application by opening http://localhost:3000 in your browser.
```
npm run dev
```
