# node-rest-es6

A sample project demonstrating building RESTful apis on Node.js environment with Express , Babel (using ES6 import/export, async/await).
**The RESTful APIs will be listening on port 5000**

## Getting Started

Covers ["GET", "POST", "PATCH"] requests for the resources CRUD **OWNERS** and **PETS**.
Following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

**-NOTE:** Test cases are written using "Mocha-Chai" to test the APIs.

**-NOTE:** Javascript ES6 syntax has been used with Babel transpilation throughout.

### Prerequisites

1.Nodejs with NPM should be installed on the target machine to get the app up & running for testing/development.

2.In a terminal/cmd do the following basic checks

```
mongo --version
node -v
npm -v
```

### Installing

A step by step to get a development env running and testing.

-Project dependencies

```
1. open terminal/cmd in project root
2. npm install
```

-Test Data

Location: \${appRoot}/data/owners.json

Pets alias key: Dogs=1, Cats=2

```
Dogs=1, Cats=2
```

## Running the tests

-Basic unit test cases are written for the apis. To run application in test mode. Please find test cases written at

Location: \${appRoot}/tests/\*.js

```
1.From the project root terminal run

npm run test

2.Basic testing of apis using

POSTMAN/CURL
```

### Seeding the database

```

```

## Deployment

1.Docker & docker-compose should be installed on the target machine if you wish to containerize/deploy the application. [Docker installation](https://docs.docker.com/install/)

2.Files and settings required for dockerization are present. I.e. Dockerfile and docker-compose.yml

3.Check versions and config after installation

```
sudo docker --version
sudo docker info

sudo docker-compose --version
```

4.Build and deploy from **project root terminal**

Location: \${appRoot}/start.sh

```
1.SIMPLY RUN

start.sh

2.OR MANUALLY

sudo docker-compose build
sudo docker-compose up
```

## Built With

- [Nodejs with express](https://nodejs.org/en/download/) - The framework used for backend apis
- [NPM](https://www.npmjs.com/get-npm) - Dependency Management
- [Mongodb with mongoose ODM](https://docs.mongodb.com/manual/installation/) - As database to connect data persistence
- [Docker](https://docs.docker.com/install/) -For application deployment
- [Mocha-Chai](https://www.chaijs.com/) - For writing test cases

## Contributing

## Versioning

## Authors

- **Ambukesh** - [Connect](https://in.linkedin.com/in/ambukeshmishra)

## License

## Acknowledgments
