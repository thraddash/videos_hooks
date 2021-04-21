[![Node version][node-shield]][node-url]
[![npm version][npm-shield]][npm-url]
[![GitHub commit activity][commits-shield]][commits-url]

# Youtube Browser App
<img src="https://github.com/thraddash/videos/blob/master/src/images/mockup.png" width="700" title="Mockup">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Starting the App">Starting the App</a></li>

  </ol>
</details>

## About the Project
Create a Youtube browser app in Nodejs.  
User can use search bar to query videos from youtube.  
5 video listing will be displayed on right hand side of the webpage.  
Clicking each video items on the right hand side wil update the video player on the left along with a title and brief description.

### Modules Used
axios  0.21.1  (promise-base HTTP client)  
dotenv 8.2.0   (Youtube api key stored in .env file)  

### Git checkout SHA for build steps
Create Class App  
Create SearchBar component, import to App.js  
Add semantic.min.css stylesheet in public/index.html, search for semantic ui cdn  
Mockup application with ui segment, ui form, ui container in div tags  

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
1. node v14.15.5 installed
2. npm 6.14.11 installed
3. create youtube api key https://console.cloud.google.com/apis/api/youtube  
```
Application restriction:</b> HTTP referrers (website)  
Website restriction:</b> localhost:3000  
```
4. create .env file  
```
REACT_APP_YOUTUBE_KEY = YOUR_YOUTUBE_API_KEY
```
  
### Starting the App

1. Clone the repo
   ```sh
   git clone https://github.com/thraddash/videos.git
   ```
2. npm install
   ```
   install npm modules from package.json
   ```
3. npm start
   ```
   Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
   ``` 
   
<!-- MARKDOWN LINKS & IMAGES -->
[node-shield]: https://img.shields.io/badge/node-v14.15.5-blue
[node-url]: https://nodejs.org/
[npm-shield]: https://img.shields.io/badge/npm-v6.14.11-orange
[npm-url]: https://www.npmjs.com/package/npm-install
[commits-shield]: https://img.shields.io/badge/commits-38-green.svg
[commits-url]: https://img.shields.io/github/commit-activity/y/thraddash/videos
[product-screenshot]: /src/images/mockup.png
