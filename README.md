## Barebone project for creating project with React and Typescript

### About the Project
This project is about how to start developing a react app with typescript.

### Concepts used:
    1. React@17.0.1
    2. Typescript
    3. Webpack@4.41.2
    4. Babel@8.1.0

### Steps to run project locally
1. Run ``` npm install ``` to install the dependencies
2. Run ``` npm start ``` to start the local development server

### Steps to deploy app on nginx through Docker
1. Create a React app as per your need
2. Create a ``` Dockerfile ``` on the root level as per this git repo.
3. Create a ``` .dockerignore ``` to exclude ``` node_modules ```.
4. Run the command ``` docker build -t [your-container-name] . ``` to build your container
5. Run the command ``` docker run -p 3000:80 [your-container-name] ``` to start the application on port 3000.