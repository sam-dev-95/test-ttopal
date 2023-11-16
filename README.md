## Interview Exercise

Welcome to the Confluent marketing coding challenge. We try to make this project as realistic as possible. if you have any questions please reach out to dshafie@confluent.io.

please do not spend more than a few hours on this project.

theres freedom to architect this application any way you want (organize how you want, style how you want, keep state how you want, components how you want).

the objective of this exercise is to recreate this mock:

#### Figma:

https://www.figma.com/file/gHVTVRBkaUF7oWhi2umhih/careers-dev-test?node-id=0%3A1

#### API:

https://api.lever.co/v0/postings/netflix?mode=json

the mock shows a few job listings, render all the jobs initially.  
the mock does not give an exhaustive list of the drop down categories
please follow the mock for colors, margins, padding.

there are two dropdowns, teams and location:

1. please categorize teams by department/team
2. location will have two groups: United States and International

please organize United States by -> city, state
international -> city, country.

this is shown in the mock. you can use native styles for this dropdown

the filtering functions should work as follows:

1. no filter selected -> show all jobs
2. user clicks on specific location -> only those locations show up in the list
3. user clicks on specific team -> only those teams show up
4. user clicks on specific location and specific team -> only that location + team show up (if nothing maps you can show something along the lines of "no jobs found")

### requirements:

1. the functionality should work
2. the ui should represent the mock

### goals:

1. demonstrate react/javascript knowledge
2. demonstrate css knowledge
3. show application architecture
4. we want to see how you would go about making this small application in react - from component decisions, to styles. there are many correct approaches to do this, do what you feel is best

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
