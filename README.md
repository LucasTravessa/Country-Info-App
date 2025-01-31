## Country Info App

This project is a Full-Stack JavaScript application called the Country Info App.

### Front-End

The front-end of the application is built using Next.js, tRPC, zod and typescript using the t3-stack.

### Back-End

The back-end of the application is powered by Expresss, typescript, zod and swagger.

### Running the Project

1. Copy the `.env.example` file to a `.env` file in both the `web-app` and `back-end` directories.
2. Run `docker compose up` from the root of the project. (this may take a while)
3. Open `http://localhost:80` for the front-end and `http://localhost:8080` for the backend Swagger.

### Running the Project in Development Mode

1. Copy the `.env.example` file to a `.env` file in both the `web-app` and `back-end` directories.
2. Navigate to the `web-app` directory and run `npm install`.
3. In the `web-app` directory, run `npm run dev`.
4. Navigate to the `back-end` directory and run `npm install`.
5. In the `back-end` directory, run `npm run dev`.
6. Open `http://localhost:3000` for the front-end and `http://localhost:8080` for the backend Swagger.

### Future Improvements

- Add more type checks on the back-end.
- Parse data on the web app to ensure that the contract is correct between the web and the back-end.
