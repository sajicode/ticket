# Simple Backend API for ticketing app

## There are five main routes

1. POST localhost:4000/api/ticket
### This is used to add a new ticket to the database

2. POST localhost:4000/api/type/:id
### This is used to add a new tickettype to an already existing ticket

3. PUT localhost:4000/api/ticket/:id
### This is for updating a particular ticket

4. PUT localhost:4000/api/type/:id
### This is for updating a particular tickettype

5. GET localhost:4000/api/ticket
### Used to fetch all tickets in the database


## To run the app on your local machine, clone the repo, cd into the cloned repo and run npm install

## The server can be started by running 'npm start' or 'npm run server'

## The routes can be tested on POSTMAN
