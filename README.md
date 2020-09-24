# Limehome Hotel App ![Limehome](client/src/icon/limehome_logo.svg)

**Limehome Hotel App** is a web application, that displays Hotels located near a selected area on a map. The application is developed with several frameworks such as *React* for Frontend, *Express API* and *MongoDB* for Backend and deployed on Heroku platform.


## What is included
* *npm* scripts for local development and *Heroku* deployments
* *React App* in folder client
* *Express API* with *MongoDB* in backend folder
* HTTPS only when deployed to Heroku

## Design Consideration
Web application consitutes combination of two npm projects : the Backend server and the Frontend UI. 
There are two *package.json* configurations provided and hence two places to run npm commands:

```
Node server: backend/package.json
React UI: client/package.json
```

## Local Development Setup

Checkout latest code 

`git clone https://github.com/hulekal123/limehome-app.git`

npm command has to be run at two places 

**Run the API server**

Fire-up a terminal and execute following commands :
```
cd backend  #navigate to backend component of solution
npm install #initial setup
npm start   #start the server
```

**Run the React UI**

The React app is configured to proxy backend requests to the local Node server

In a separate terminal from the API server, start the UI:

```
cd client  #navigate to Frontend component of solution
npm install #initial setup
npm start   #start the server
```


Now you have the create React App-app running in http://localhost:3000/ and the API server running in http://localhost:3080.

**Testing**

You can test following three endpoints.
|*METHOD* | *Endpoint*|
|---------|-----------|
| GET   |/api/properties|
|GET  |/api/<BookingId>/bookings|
| POST | /api/bookings (with payload)

You may have to execute following commands

```
cd client  #navigate to Frontend component of solution
npm test   # executes test 
```

## Deployment on Heroku platform

The web application can be accessed from [HERE](https://limehome-app.herokuapp.com/)

Here are commands to deploy the app on Heroku platform
```
heroku create <name-for-your-app>
heroku addons:create mongolab:sandbox
heroku git:remote name-for-your-app
git push heroku master
```
Now you have the software running in https://name-for-your-app.herokuapps.com/. 
It is running in production mode. Open your browser and check the logs with heroku logs.

:rocket:

