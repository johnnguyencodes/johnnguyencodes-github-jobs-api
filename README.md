# GitHub Jobs API coding challenge for Egen Solutions
> * Maintained by: `John Nguyen`

* Used React.js to create all HTML elements (virtual DOM) to dynamically display data received from the GitHub's Jobs API by sending GET requests with Axios

* Managed state and utilized lifecycle features with React Hooks

* Created user interface with CSS3, Bootstrap, and React-Strap

## Issues
  1. The app utilizes the https://cors-anywhere.herokuapp.com to enable cross-origin requests, which can cause noticeable latency when sending a GET request to the GitHub Jobs API (and can even break the app when it does not work properly).  Configuring a CORS express middleware that works with the current axios.get implementation would solve this issue.

## Completed Features
  1. User can view all jobs currently live via the GitHub Jobs API
  2. User can search for jobs based on location, title, company, skill, and can filter for full-time positions.
  3. User can view details of a specific job.

## Features Being Implemented
  1. User can load more jobs onto the page, however the current implementation refreshes the page and resets the Window.scrollY position to the top of the page.  Infinite scroll would have presented a cleaner user interface.

## Features To Be Implemented in the Future
  1. User can search for jobs based on user's geolocation.
  2. The ability to toggle between light and dark mode.
  3. Mobile-responsive design.
  4. Unit testing.
  5. Implementing a CORS express middleware.  
  6. User can save a job post by utilizing localStorage (Stretch Feature)

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
git clone https://github.com/johnnguyencodes/johnnguyencodes-githubs-jobs-api

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

### Screenshots

* List of Jobs

<img src="https://user-images.githubusercontent.com/61361957/102930554-82a7b200-4451-11eb-9201-30d20ba6bd89.png" alt="list of jobs">

* Job Details

<img src="https://user-images.githubusercontent.com/61361957/102930565-86d3cf80-4451-11eb-9fc4-6f2b8694a0cb.png" alt="job details">
