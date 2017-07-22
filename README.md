
[![Build Status](https://travis-ci.org/elenamorton/database_server.svg?branch=master)](https://travis-ci.org/elenamorton/database_server)
[![CodeClimate](https://codeclimate.com/github/elenamorton/database_server/badges/gpa.svg)](https://codeclimate.com/github/elenamorton/database_server)
[![Test Coverage](https://codeclimate.com/github/elenamorton/database_server/badges/coverage.svg)](https://codeclimate.com/github/elenamorton/database_server/coverage)

# Database server tech test

## Instructions

## Used Technologies
* JavaScript ES6
* Mocha/Chai/Chai-http

## User Stories

```
As a Employer
So as I can develop my business
I would like to have a web server.
```

```
As a Employer
So as I can keep the information
I would like to save the data.
```

```
As a Employer
So as I can retrieve the information
I would like to read the data.
```

## Requirements

Today we will practice a tech test to demonstrate your understanding of web technologies.

Bear in mind that most tech tests do not have a set timeframe. Although we do have a "soft" time limit, imposed mainly by the structure of the week, we are not expecting you to finish within the day - so take your time and focus on writing the best code you can produce.

### The brief

You receive a message from a prospective employer:

"Write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at `somekey`. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

Create a new git repository and write code to fulfill the brief to the best of your ability. We will be looking for clean, well tested code in your choice of technology. In addition, the last sentence of the brief implies that you should consider how the code could easily be extended to add an as-yet-unknown data store.

If you still have time at the end of the day, you can extend the code by adding a data store of your choice.
