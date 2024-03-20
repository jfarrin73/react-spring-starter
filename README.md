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
2. Install frontend dependencies
   ```shell script
   cd frontend
   yarn install
   ```
3. Start Postgres in Docker
   ```shell script
   docker compose up -d
    ```
   
### Run the app
#### Run both the frontend and backend on port 8080
```bash 
./gradlew bootRun
```

You should be able to see the app in a browser at [http://localhost:8080](http://localhost:8080)

#### Run the frontend on port 3000 for hot module reload (HMR)
```
cd frontend
yarn start
```

You should be able to see the app in a browser at [http://localhost:3000](http://localhost:3000) and if you make a change to the frontend code you will see the browser update.

### Run Backend Tests from terminal
```bash
./gradlew test
```

### Run Frontend Tests from terminal
```bash
cd frontend
yarn test
```
