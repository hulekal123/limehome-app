Application that shows hotels near a specific location on map with React as frontend,Express API and Mongo as 
backends and Heroku deployments.


### What is included
NPM scripts for local development and Heroku deployments<br />
React App in folder client<br />
Express API backend with mongo db in backend folder<br />
HTTPS only when deployed to Heroku<br />

### Design Points
A combo of two npm projects, the backend server and the frontend UI. So there are two package.json configs and thereforce two places to run npm commands:

Node server: backend/package.json<br />
React UI: client/package.json


### Local Development
git clone https://github.com/hulekal123/limehome-app.git

npm command has to be run at two places 

### Run the API server
In a terminal:

cd backend

#### Initial setup
npm install

#### Start the server
npm start


### Run the React UI
The React app is configured to proxy backend requests to the local Node server

In a separate terminal from the API server, start the UI:

cd client/

#### Initial setup
npm install

#### Start the server
npm start


Now you have the Create React App -app running in http://localhost:3000/ and the API server running in http://localhost:3080.


### Heroku deployments
heroku create name-for-your-app<br />
heroku addons:create mongolab:sandbox<br />
heroku git:remote name-for-your-app<br />
git push heroku master<br />
Now you have the software running in https://name-for-your-app.herokuapps.com/. It is running in production mode. Open your browser and check the logs with heroku logs.
