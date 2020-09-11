# Activity Details App

The React application is deployed with the help of express server.

## Deployed URL

The application is deployed in the below URL:<br />

# ## Available Scripts

## Running Locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint:fix`

Fixes the linting issues according to the plugin rules.

## File Structure

`client/src/assets` is the place having the avatar images.

`client/src/components` is for the components that are generically useful.

`client/src/mobx` is for the MobX state management library. It has the application state, and can be managed by any React Components in the whole application.

`client/src/routes` is the folder which can help us render different screens. For now, the components inside it are just rendering other components, but can be used when expanding the application.

`client/src/utils` is a folder that has utility functions. Here, we are using few utility functions for date operations.
