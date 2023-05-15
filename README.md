Scenario and Vehicle Simulation Application

This is a simulation application built using React.js that allows users to create, display, update, and delete scenarios and vehicles. The application uses json-server to store data.

Features

Create, display, update, and delete scenarios and vehicles.
Scenarios can have multiple vehicles.
Vehicles can move based on the scenario and vehicle parameters.
Scenarios have the following fields: Scenario id, Scenario name, Time.
Vehicles have the following fields: Vehicle id, Vehicle name, Initial Position X, Initial Position Y, Speed, Direction (Towards, Backwards, Upwards, Downwards).

Installation

Clone the repository: git clone https://github.com/kameshwar44/VehicleScenarioApplication.git
Navigate to the project directory: cd your-repository
Install the dependencies: npm install

Usage

Start the json-server: npm run json-server
Start the React development server: npm start
Open your browser and navigate to http://localhost:3000 to access the application.
Instructions

Home Page

On the home page, you can select a scenario that you have created.
Click the "Start Simulation" button to begin the simulation.
Vehicles will start moving based on their direction and speed until the scenario time elapses.
If a vehicle goes outside the container, it will be hidden.
Adding a Vehicle

Click the "Add Vehicle" button on the sidebar to add a new vehicle.
Fill in the required fields (Vehicle name, Initial Position X, Initial Position Y, Speed, Direction).
Proper validation is implemented to ensure that the positions are not greater than the graph container size.
JSON-Server

The application uses json-server to store data.
The server is started automatically when you run the application (npm start).
The server runs on http://localhost:3003/Scenarios.

Deployment Link - https://vechie-assignment.netlify.app/
