import React from 'react';
import {Box} from "@mui/material";
import ReactMarkdown from "react-markdown";

const OverviewPage = () =>
    (
        <Box mt={4} p={4} overflow='hidden' sx={{wordBreak: 'break-word'}}>
            <ReactMarkdown>
                {'## Getting Started\n' +
                    '- You should have the project open in intellij and the app running in a browser.\n' +
                    '- Put both windows side by side on your screen. You can use `[ctrl + option + left/right arrow]` if you\'re using Rectangle\n' +
                    '- As you read through this page, open each file and directory in intellij and follow along.\n' +
                    '## File Structure\n' +
                    '- You\'ll find 2 colors for files/directories. depending on your theme, white/black are the files you\'ll be working on, the other directories are files that are generated either by intellij or when your code is built. \n' +
                    '- When you do a `bootRun`, the code actually being executed can be found in the `./build` directory\n' +
                    '- Look through each file in the root directory. It\'s okay if you don\'t know what every file is doing. `build.gradle` and `docker-compose.yml` are two of the important ones.\n' +
                    '### `docker-compose.yml` \n' +
                    '\n' +
                    '- This where we configure external dependencies that our app needs. In this case, we just have 1 container configured - which runs an instance of postgreSQL that our app connects to at startup. You can start and stop the container in your terminal:\n' +
                    '- start: `docker-compose up -d`\n' +
                    '- stop: `docker-compose down`\n' +
                    '\n' +
                    '## Backend\n' +
                    '### `build.gradle`\n' +
                    '- this is where we configure and define the backend of our application. Some things you\'ll find here\n' +
                    '- java dependencies\n' +
                    '- the version and name of the app\n' +
                    '- tasks - these tasks are essentially functions that can be executed from the terminal to do all kinds of things. You\'ll find a few tasks defined like `buildFrontend` `copyFrontend`. These tasks build our frontend code and copy it into the build directory of the backend code so that our backend can actually serve our frontend code also. This allows us to do a `bootRun` and access both the frontend and backend on port 8080 in your browser. This is known as a Monorepo. There are pros and cons to deploying an app as a mono-repo vs deploying your frontend and backend separately.\n' +
                    '### `./src` \n' +
                    '- This is where your backend (java) code lives. You\'ll find `./src/main` and `./src/test` directories which nearly mirror one another. `test` is where we write tests against our production code. `main` is where we write our production code that you see when you run the app.\n' +
                    '### `./src/main/resources/application.yaml`\n' +
                    '- This is the configuration file for our backend. You can configure all kinds of things in this file like the port the app runs on, the connection details for the database or other services, feature flags, logging settings, authentication details. This list goes on, but an important thing about this file is that we can override the values in this file using environment variables which means we can one value set in the file when running locally and when we deploy the app, we can have different values set in production.\n' +
                    '### `./src/main/resources/db/migration`\n' +
                    '- This directory contains database migrations. These are a series of sql commands that are executed against your database at runtime. These migrations are managed by Flyway which is a dependency you\'ll see in build.gradle.\n' +
                    '- Flyway ensures that each migration is only run once.\n' +
                    '- Migrations allow us to incremementally modify the database schema in a way that can be shared across multiple environments (development, staging, production)\n' +
                    '### `./src/main/java/com/example/reactspringstarter/ReactSpringStarterApplication.java`\n' +
                    '- This is the starting point for our java application. This is the first code that gets executed when when running the application. It doesn\'t look like much is going on here, but notice the annotation `@SpringBootApplication` . This is where the magic happens. Spring does all kinds of things behind the scenes for us like making the connection to the database, and doing a component scan which you\'ll learn more about later.\n' +
                    '### `./src/test`\n' +
                    '- Look through the test files here. You should see green play buttons next to some of the test methods/classes. This allows you to run the tests the intellij.\n' +
                    '- You can also use the `./gradlew test` command in terminal to run all tests in the project through the terminal.\n' +
                    '## Frontend\n' +
                    '### `./frontend`\n' +
                    '- This is where your frontend (Typescript/React) code lives.\n' +
                    '- Look through each file in the root here, the most important one for now is `package.json`. This is similar to `build.gradle`, but for the frontend. You\'ll find some configuration details, scripts, dependencies, and devDependencies.\n' +
                    '### `./package.json`\n' +
                    '#### scripts\n' +
                    '-  These are commands you can execute in terminal (when you\'re in the frontend directory) similar to gradle tasks.\n' +
                    '\t-  `yarn start` - this allows you to run just the frontend which can be accessed on port 3000 \n' +
                    '\t-  `yarn test` - this runs all tests in your frontend code\n' +
                    '#### dependencies\n' +
                    '-  These are the external libraries that our frontend uses. `react`, `react-router-dom` and `@mui/material` are some of the important ones to note\n' +
                    '-  You can add other dependencies from the terminal using yarn: `yarn add <package name>`\n' +
                    '#### devDependencies\n' +
                    '- These are more dependencies that we need for our frontend, but they are only needed for development. These dependencies should not be referenced in production code as these dependencies will not be included in the built version of our application. You\'ll find things like `typescript`, `vite`, and several testing libraries here.\n' +
                    '-  You can add other devDependencies from the terminal using yarn: `yarn add -D <package name>`\n' +
                    '### `./index.html`\n' +
                    '- This is the single html file in our single page web application. React is a javascript framework that enables building single page applications. That means that there is only one .html file sent to the browser and we use javascript to manipulate the html and css rendered on that page. This is that file.\n' +
                    '### `./src/index.tsx`\n' +
                    '- This is where we connect React to that single html file. notice: document.getElementById(\'root\')\n' +
                    '- If you go back to `./index.html`, you\'ll find:' +
                    '<div id="root"></div>' +
                    '- React is injecting itself into your html file at this div. This is the start of your React app and is the top node of your hierarchy. You\'ll see this hierarchy represented by `jsx` tags like this `<App />`. All of the other `.tsx` files in the repo are referenced as sub-components of this one. \n' +
                    '- You can hold `cmd` and click on the `<App />` (or click on the text App and press `cmd + B`) to navigate to where the code for App is defined (`./src/App.tsx`)\n' +
                    '- From here you\'ll find the hierarchy continues and you can navigate into `<HomePage/>` and the other Route Elements which each correspond to a page you\'ll see in your browser.\n' +
                    '- Notice the path in `<Route path=\'page\' />`  corresponds to the url in your browser.'
                }
            </ReactMarkdown>
        </Box>
    );

export default OverviewPage;