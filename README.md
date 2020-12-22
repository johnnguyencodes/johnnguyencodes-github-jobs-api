# GitHub Jobs API coding challenge for Egen Solutions
> * Maintained by: `John Nguyen`

* Used React.js to create all HTML elements (virtual DOM) to dynamically display data received from the GitHub's Jobs API by sending GET requests with Axios

* Managed state and utilized lifecycle features with React Hooks

* Created user interface with CSS3, Bootstrap, and React-Strap


## Completed Features
  1. User can view all jobs currently live via the GitHub Jobs API
  2. User can search for jobs based on location, title, company, skill, and can filter for full-time positions.
  3. User can view details of a specific job.

## Features Being Implemented
  1. User can load more jobs onto the page, however the current implementation refreshes the page and resets the Window.scrollY position to the top of the page.  Infinite scroll will provide a cleaner user interface.
  2. The app can identify the user's current geolocation to filter job postings by location. However, the current implementation prompts the user to allow access on page load instead of on user gesture.  The app does have checkbox to allow the user to filter jobs by their location.

## Features To Be Implemented
  1. The ability to toggle between light and dark mode.
  2. Mobile-responsive design.
  3. Unit testing.

## Lessons Learned
  1. Accessing the local storage using React.js functions and dynamically display data using React.js virtual DOM functions
  2. Creating a basic yet responsive user interface using React.js and Bootstrap
  3. Leveraging Object Oriented Programming to organize code into components
  4. Creating an API server using Node.js to process requests from and send data to the client
  5. Storing and handling session data using Express session
  6. Experienced the full development process of deploying the web and API server into AWS EC2 and creating a PostgreSQL database

## Live Site
* The live version can be viewed [here](https:johnnguyencodes-github-jobs-api.netlify.com).

### Demos

* Desktop

<img src="https://user-images.githubusercontent.com/61361957/96650366-a3377c80-12e7-11eb-937e-c8c7a744b2ea.gif" width="600" alt="Desktop Demo Gif"/>

* iPhone 6/7/8 - Portrait

<img src="https://user-images.githubusercontent.com/61361957/96650383-a894c700-12e7-11eb-9f54-e2e5770041eb.gif" height="600" alt="iPhone 6/7/8 - Portrait - Demo Gif"/>


* iPhone 6/7/8 - Landscape

<img src="https://user-images.githubusercontent.com/61361957/96650378-a6cb0380-12e7-11eb-9aaf-fab115ca6e4b.gif" width="600" alt="iPhone 6/7/8 - Landscape - Demo Gif"/>

* iPad - Portrait

<img src="https://user-images.githubusercontent.com/61361957/96650375-a6326d00-12e7-11eb-8af1-73f4fe304561.gif" height="600" alt="iPad - Portrait - Demo Gif"/>

* iPad - Landscape

<img src="https://user-images.githubusercontent.com/61361957/96650371-a5014000-12e7-11eb-9b19-635b6baec0f2.gif" width="600" alt="iPad - Landscape - Demo Gif"/>
