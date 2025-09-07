# PERN Photo Gallery <!-- omit in toc -->
A photo gallery website that uses the PERN (PostgreSQL, Express, React, Node) stack. React Router is also used for front-end routing.

**Please note:** this was developed as a practice project in 2023 and is no longer maintained. The repository remains publicly accessible as part of my development portfolio, but it may now be affected by broken functionality and/or potential security issues.


## Contents <!-- omit in toc -->
- [Key features](#key-features)
  - [Photo listing pages](#photo-listing-pages)
  - [Photo detail pages](#photo-detail-pages)
  - [Dynamic routing](#dynamic-routing)
  - [Testing](#testing)
  - [Database documentation](#database-documentation)
- [Technologies](#technologies)
  - [Back end](#back-end)
  - [Front end](#front-end)
- [Setup](#setup)
- [FAQs](#faqs)
  - [Why did you build this?](#why-did-you-build-this)
  - [Is this project in active development?](#is-this-project-in-active-development)


## Key features

### Photo listing pages
Photo listing pages are dynamically rendered via requests to back-end API endpoints, which return JSON data that's used to populate the current collection page or homepage.

![Photo listing page example](/readme-images/photo-listing-page.png)

*Relevant code: [front-end photo feed components](front-end/src/features/photos); [photos API endpoints](back-end/routes/photos.js); [collections API endpoints](back-end/routes/collections.js); [database query functions](back-end/db/index.js).*


### Photo detail pages
Photo detail pages are dynamically rendered via requests to a back-end API endpoints, which return JSON data that's used to populate the current photo content and related collection links (all collections that contain the photo).

![Product detail page example](/readme-images/photo-detail-page.png)

*Relevant code: [front-end photo detail page component](front-end/src/features/photos/PhotoDetailPage.js); [photos API endpoints](back-end/routes/photos.js); [collections API endpoints](back-end/routes/collections.js); [database query functions](back-end/db/index.js).*


### Dynamic routing
Front-end URL routing is implemented using React Router v6, utilising dynamic paths (*params*, specifically photo & collection URL slugs) and data retrieval functions (*loaders*) to load content via requests to the back-end API.

*Relevant code: [routing configuration](front-end/src/routing.js); [photo feed component](/front-end/src/features/photos/PhotoFeed.js); [photo detail page component](/front-end/src/features/photos/PhotoDetailPage.js).*


### Testing
Over 20 tests are implemented using Jest, SuperTest, and React Testing Library. Back-end tests utilise a mock database while front-end tests incorporate routing.

*Relevant code: [back-end photos tests](/back-end/routes/photos.js); [back-end collections tests](/back-end/routes/collections.test.js); [front-end tests](/front-end/src/App/App.test.js); [front-end test routers](/front-end/src/testSetup/testRouters.js).*


### Database documentation
The database structure is documented via a [Database Markup Language file](/back-end/db/db-structure.dbml) and visualised in a [diagram](/back-end/db/db-structure-diagram.png).

![Database diagram](/back-end/db/db-structure-diagram.png)


## Technologies

### Back end
* [PostgreSQL](https://www.postgresql.org/)
* [Node.js](https://nodejs.org/en/about)
* [Express v4](https://expressjs.com/) (including several [middleware modules](https://expressjs.com/en/resources/middleware.html))
* [node-postgres](https://node-postgres.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Jest](https://jestjs.io/)
* [SuperTest](https://www.npmjs.com/package/supertest)

### Front end
* [React v18](https://react.dev/)
* [React Router v6](https://reactrouter.com/en/main)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


## Setup
1. Clone/download a local copy of this repository. 
2. Using the command line, navigate to the `/back-end` subdirectory and run `npm install` to install package dependencies (using the `package-lock.json` file).
3. Create the application & test PostgreSQL databases, optionally using the SQL provided in `/back-end/db/db-creation.sql`, using a PostgreSQL client application (e.g. pgAdmin) or the command line (psql).
4. Create and populate the application & test database tables using the SQL provided in `/back-end/db/table-creation.sql` and `/back-end/db/table-population.sql` respectively.
5. In the `/back-end` subdirectory, rename the `example.env` file to `.env`.
6. In the `.env` file, update the values corresponding to the PostgreSQL database configurations as required. Refer to the following documentation for more details:
   - https://node-postgres.com/features/connecting#environment-variables
   - https://www.postgresql.org/docs/current/libpq-envars.html
7. Optional: using the command line, run `npm test` in the `/back-end` subdirectory to run the test suite (all tests should pass if the steps above were successful).
8. Using the command line, run `node index.js` in the `/back-end` subdirectory to start the API server.
9.  Using a new command line window, navigate to the `/front-end` subdirectory and run `npm install` to install package dependencies (using the `package-lock.json` file).
10. In the `/front-end` subdirectory, rename the `example.env` file to `.env`.
11. Optional: using the command line, run `npm test` in the `/front-end` subdirectory to run the test suite (all tests should pass if the steps above were successful).
12. Using the command line, run `npm start` in the `/front-end` subdirectory to start the React app (while the back-end API server is still running via a separate command line window).
13. The application should launch in your browser, but otherwise can be accessed at http://localhost:3000/.


## FAQs

### Why did you build this?
This is one of the practice projects that I completed as part of the Codecademy Full-Stack Engineer career path. I planned and built it independently; the only requirement was to build an application using the PERN stack.

I now have more experience with:

* Database design, table creation, and querying
* Automated testing of Node.js and React applications
* The PERN stack and full-stack web development in general


### Is this project in active development?
No; this was developed as a practice project in 2023 and is no longer maintained. The repository remains publicly accessible as part of my development portfolio, but it may now be affected by broken functionality and/or potential security issues.
