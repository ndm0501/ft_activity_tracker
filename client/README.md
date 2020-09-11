# Activity Details App

The React application is deployed with the help of express server.

## Deployed URL

The application is deployed in the below URL:<br />
[https://actlog.herokuapp.com/](https://actlog.herokuapp.com/)

# ## Available Scripts

## Running Locally

In the project directory, you can run:

### `npm install`

This command will install the dependencies for server app as well as client app.

### `npm run dev`

This command will start the server as well as the client. We have used concurrently to start to concurrent servers at different ports.
Server runs at [http://localhost:5000](http://localhost:5000)
Client runs at [http://localhost:3000](http://localhost:3000) (Click to view it in the browser)

### `npm run lint:fix`

Fixes the linting issues according to the plugin rules.

# Server

This application uses express server. The data is served using express server.

# Assets

This application uses images which are deployed in Amazon S3 Bucket.

# State Management

The application uses Mobx for state management.

# File Structure

`src/assets` is the place having the avatar images.

`src/components` is for the components that are generically useful.

`src/mobx` is for the MobX state management library. It has the application state, and can be managed by any React Components in the whole application.

`src/routes` is the folder which can help us render different screens. For now, the components inside it are just rendering other components, but can be used when expanding the application.

`src/utils` is a folder that has utility functions. Here, we are using few utility functions for date operations.
