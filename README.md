# React.js API Consumer 🚀

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br />
The project includes extra packages and improved file structure.

## Dependencies that were added to CRA 👷🏼‍♀️

-   axios
-   redux
-   react-redux
-   redux-saga
-   redux-devtools-extension
-   react-router-dom
-   react-router-redux

## Public API 🖼

This project gets its data from Artic EDU (The Art Institute of Chicago) for demo purposes, it's an open API and doesn't require a key.
View its documentation at [Art Institute of Chicago API](https://api.artic.edu/docs/)
**More Public API's can be found [here](https://github.com/public-apis/public-apis#music).**

## Features 🦸

-   Typescript - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
-   Redux - A predictable state container for JavaScript apps.
-   Sagas - An intuitive Redux side effect manager. Easy to manage, easy to test, and executes efficiently.
-   Sass/Scss - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
-   BEM - Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development.
-   ESLint - The pluggable linting utility.
-   Jest - Javascript testing framework, created by developers who created React.

## Routes 🛣

Project's main modules

-   Home page
    > Shows the fetched posts, fetched posts are limited to 20, pagination is should be implemented to fetch more, also, images should be lazy-loaded.
-   Single post page.
    > Post image should be lazy-loaded.
-   Error 404

## Folders and files structure 🗺

```
- src
    - components // reusable react components
        - CircularProgress
        - Header
        - PostItem

        // Each component has the following structure:
        - * ComponentName
            - ComponentName.module.scss
            - ComponentName.test.tsx
            - ComponentName.tsx
            - index.ts

    - hocs
        - withErrorHandler.tsx

    - lib // helpers
        - scripts
            - apis.ts // contains all the API calls
            - axios.ts
            - test-utils.js
            - utils.ts
        - styles
            - abstracts
                - _mixins.scss
                - _variables.scss
            - main.scss

    - routes // main modules, which are react components and might have a redux store
        // It's not named containers because we might have containers that are not pages/routes, so a new folder called containers will be added for them.
        // Each route has the same structure as components but some routes might have a store folder that contains all Redux's related files.
        - ErrorPage
        - HomePage
        - SinglePost
        - * RouteName
            - store
                - actions.spec.ts
                - actions.ts
                - connector.ts // exports Redux's connect HOC
                - constants.ts
                - reducers.spec.ts
                - reducers.ts
                - sagas.spec.ts
                - sagas.ts
            - RouteName.module.scss
            - RouteName.test.tsx
            - RouteName.tsx
            - index.ts
        - index.tsx // contains the main React Router DOM routes, new routes must be added here

    - App.test.tsx
    - App.tsx
    - config.ts // App's config, now it only contains API_URL and POSTS_LIMIT
    - global-reducers.ts // state's reducers, add new reducers here
    - global-sagas.ts // connect routes sagas here
    - index.tsx
    - store.ts // Redux store implementation
```

## How to launch the project 🏁

Install [Node.js](https://nodejs.org/) and then open the Terminal/CMD and navigate to the project's folder.
Run the following command:

```bash
npm insatll
```

### Development evnironment

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Production build

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Testing

```bash
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## `Stay safe 😷`
