# penrod-weather

<h3>Outine - Brief Description of Important Files/Directories</h3>
- root

- dist
  - Info about the dist
- e2e
- node_modules
- server
  - api
    - info about api
  - assets
    - If the server required any static assets files they would be contained here.
  - models
    - Location.js
      - Location.js is the mongoose schema for a location object which is exported as a mongoose mdoel.
  - server.conf.json
    - This json contains any uri's/keys that the server will use that we want to secure from the user, so they are stored seperately instead of hard coded. An example of such an item would be the MongoDB connection URI.
  - server.js
    - This is the express server file. This is where express middleware is set, the MongoDB connection is established, the server is set to listen, and the routes are established, including the route to the index.js of the Angular app which is found in the dist directory.
- src

  - app
    - app-routing
      - app-routing.module.ts
        - The module exports the router which has been set to use the routes in routes.ts. This allows the router to be imported into app.module.
      - routes.ts
        - declaration of all the routes
    - components
      - five-day
        - five-day contains the ts, view, and css for the five-day component which is the component that displays a future forecast for each day of the five day forecast
      - weather-frame
        - weather-frame contains the ts, view, and css for the weather-frame component which is the component that displays the current weather for a location
    - pipes
      - Pipes used are used in the app to transform data, this app uses a temp pipe for converting from C to F and vice versa, a pressure pipe for converting millibars to psi, and a wind direction pipe to convert a direction given in degrees into a general cardinal direction.
    - services
      - data
        - config
          - dataConfig.ts is an exported object that contains the key used for making calls to the open weather api and all the routes for the different calls that the app will need to make. This way the routes and key aren't hard coded within the app and can be easily changed.
      - database.service
        - Contains all the logic so that the front end angular app can make calls to the express API to retrieve locations, create locations, and delete locations.
      - weather-api.service
        - Contains all the logic so that the front end angular app can make calls to the Open Weather Map API to retrieve all the necessary weather information.
    - app.component.\*
      - These are the 4 files in the root of the app directory that make up the component which is the main entry component for the app. In this particular app the app.compenent.html sets the layout for the rest of the components in the app, and app.component.ts loads in all the locations so that links to different locations can be loaded into the side navigation.
    - app.module.ts
      - Contains all the module imports and service providers for the app.

- .editorconfig
- .gitignore
- angular.json
- package-lock.json
- package.json
- Procfile
- tsconfig.json
- tslint.json
