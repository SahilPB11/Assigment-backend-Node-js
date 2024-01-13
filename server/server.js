// Import the database connection function and the configured Express application

import { app } from "./index.js";

// Retrieve the port number from environment variables
const port = process.env.PORT;

// start the server on the specified port
  app.listen(port, () => console.log(`Server is Working on ${port}`))
