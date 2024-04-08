<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  
## Name aplication AppManagerMovies

## Description
In this application, the solution to this problem is addressed by implementing a hexagonal architecture, where each layer is identified as infrastructure, application, and domain.

In the infrastructure folder, the controllers responsible for communication between the different layers of the project are developed. Data persistence is also configured here, with a JSON file serving as the database. Additionally, a service is created to provide data to the application.

In the application layer, multiple folders were created initially, with the intention of implementing a CRUD solution. However, upon realizing that only sorting criteria and filters were required, work was focused solely on the folder named "find-movies". This folder contains the method calls to the innermost layer.

Business logic is implemented in the domain layer. Here, everything related to adapters, DTOs, entities, repositories, and other components of the business logic is implemented.

To address this development, we used the Node.js stack with the Nest.js framework.


## Installation
To install and run the application in your local environment, follow these steps:

  1. Clon repositoy GitHub:

    ```bash
    git clone https://github.com/TavoCardona/AppMoviesManager.git
  
  2. Navigate to the project directory.
    cd AppMoviesManager

  3. Run the command 'code .', -if you are using Visual Studio Code. 

  4. ```bash
      $ npm install
      ```



## Running the app

```bash
$ npm run start 
```



## Test de app
Open Postman once you have started the server with the previously mentioned command "npm run start"

Usually, the server runs on port 3000.

In Postman, enter this address: "localhost:3000/movies" Method: "POST"

Body that the API receives:
{
    "property": "string",
    "val": "string",
    "sort": "string"
}

property will have values such as search criteria:
MovieProperties {
'popularity'
'year',
'genres',
'actors',
'duration',
}

val: will have values such as actor names, genres, serving as filtering criteria

and sort can have values of "asc" or "desc" depending on the desired sorting order.


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
