# React Spring Starter
A simple starter project for a full stack web app.
### Frontend
`React` `Typescript` `yarn` `Vite` `Vitest`
#### Included frontend packages
`Material UI` `Material Icons` `Axios` `React Router v6`
### Backend
`Java` `Spring` `Gradle`
### Database
`PostgreSQL` `Flyway`

## Getting started
1. Fork and clone this repo
2. Install dependencies
3. Start Postgres in Docker
4. Run the app

### Install Dependencies

1. [Install Docker](https://docs.docker.com/get-docker/)
2. Install `node`
    ```shell script
    brew install node
    ```
3. Install `yarn`
    ```shell script
    npm install --global yarn
    ```
4. Install frontend dependencies
    ```shell script
    cd frontend
    yarn install
    ```
5. Install `java 17`
    ```shell script
    brew update
    brew install openjdk@17
    ```
6. Start `postgres`
    ```shell script
    docker compose up -d
    ```

### Run the app

#### Run both frontend and backend on port 8080
```bash 
./gradlew bootRun
```

#### Run the frontend on port 3000
```
cd frontend
yarn start
```

## Contributing
The current packages will no doubt be out-dated soon.
If you'd like to help keep this starter app up to date or just recommend a change,
feel free to open a PR or submit an issue.