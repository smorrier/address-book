# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Summary of Assignment

My overall approach

I created a contact context to make the api, contacts and more available to the entire app. This context could have set to specific routes if more pages (that had no relevance to contacts) were implemented. I implemented a screen size context (created on a previous project), which allowed me to have a responsive display without the need to media queries. I used styled-components because it removes the use of class names and their issues (duplication, overlap, typos).

What features did I implemented

- Contacts Context
- Responsive UI
- React Router
- Parallel sliced api calls
- GCP deployments

Given more time, what else would I have liked to complete and how long it would have taken me?

- Improve test coverage: I would have liked improved test coverage of my app. I would have liked to tested my api calls to ensure they were called at appropriate times and the right amount of times (especially for concurrent request). Overall I think it would take me 2-3 hours
- Prettier UI (more color, more reponsive spacing): 30 minutes
- Ability to change page size and slice size via the UI: 45 minutes
- Add a name/phone number search for loaded contacts in the contacts page: 15-30 minutes
- Add a loading state to prevent more records from being requested why the previous ones are still loading: 15-30 minutes

Given more time, what else would I have done to make the project more robust?

- In the contacts page, I would have implemented pagination (limiting the number of contacts viewed per page). This would prevent performance issues with too many elements being rendered.
- Improve API error handling. I liked to have re attempted failed requests since randomuser.me had frequent failing requests
