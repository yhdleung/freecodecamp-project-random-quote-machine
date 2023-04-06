
# Build a Random Quote Machine
Free Code Camp Front End Development Libraries Project: Build a Random Quote Machine  
https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine


## Technical requirements
Build the web app with any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery.


## User requirements
Create a wrapper div#quote-box, horizontally center it

In div#quote-box, create:
- div#text
- div#author
- button#new-quote
- link#tweet-quote

On first load, the app displays:
- a random quote in the div#text
- the random quote's author in div#author

When the button#new-quote is clicked, the app should:
- fetch a new quote and display it in div#text
- fetch the new quote's author and display it in div#author

User can tweet the current quote by clicking on the link#tweet-quote, which should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote, with target="_blank"


## Building the Project
Used Vite as a build tool.
```
npm i --save-dev vite
npm run build
```
Configured `vite.config.js` and `package.json` to deploy on github page.