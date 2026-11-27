# Student e-Journal

A school journal for managing schools, users, subjects and grades. The current version uses Express, EJS, Sequelize and MySQL.

The project is planned for a refactor to Angular and TypeScript. The new version is not yet implemented.

## Refactor plan

The refactor will focus on two roles:

- **Students** will be able to view their subjects, grades and weekly timetable.
- **Teachers** will be able to view their classes and students, and manage grades within their assigned subjects.

Both roles will have a dashboard. The first release is scoped to one school, one class per student, grades from 1 to 6 and a read-only weekly timetable.

The planned stack is Angular and TypeScript for the frontend, Node.js, Express and TypeScript for the API, and Sequelize with MySQL for data storage. The refactor will add database migrations, server-side authorization and tests for key scenarios.

## Original application

The existing application renders EJS views on the server and uses Passport and sessions for login. Its code includes role-based views for users, schools, subjects and grades. Screenshots in [screenshots/](screenshots/) show the original interface.

![Original dashboard](screenshots/Dashboard.jpg)

### Running the original version

> **Database warning:** Starting the original application runs `sequelize.sync({ force: true })`, which drops and recreates its tables. It also inserts demo data automatically. Use a separate, empty local database and do not point it at data you need to keep.

These setup instructions have not been recently verified.

1. Install Node.js and run a local MySQL server.
2. Create an empty database named `schoolacl`. The configuration in [utility/db.js](utility/db.js) connects to `localhost` as `root` with an empty password. Adjust it for your local setup if necessary, and do not commit credentials.
3. From the project root, install dependencies and start the server:

   ```bash
   npm install
   npm start
   ```

4. Open [http://localhost:3010](http://localhost:3010).

The original startup creates demo accounts, including `teacher@example.com` and `student1@example.com`, both with password `test`. These credentials are for local demonstration only.

The current `npm test` script is a placeholder; it does not run a test suite.

## Project layout

- `server.js` — Express routes and server startup.
- `controllers/` and `models/` — application logic and Sequelize models.
- `utility/` — database, authentication and permissions code.
- `views/` and `public/` — EJS templates and static assets.
- `screenshots/` — screenshots of the original application.

## Author

[Jarosław Baumgart](https://github.com/Jaroslaw-Baumgart)
