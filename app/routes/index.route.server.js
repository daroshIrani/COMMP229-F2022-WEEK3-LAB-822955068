import { Router } from "express"; // Import the router component from ES -- no need to install full express module here just the Router logic from ES
import { helloWorld } from "../controllers/index.controller.server.js"; // import the function that will be route the controller which will set the data on the page
import { helloWorldHtml } from "../controllers/index.controller.server.js"; // auto complete completes the same way for line 2 as it does 3 and 4
import { helloWorldJSON } from "../controllers/index.controller.server.js"; // remember to add '.js' at the end of the lines because VSCode has to recognize the file as '.js'

const router = Router(); // instantiate router const representing router logic

router.get('/json', helloWorldJSON); // app.use became router.get because router will be taking care of this routing now
router.get('/html', helloWorldHtml); // RESTful language conventions uses 'get' instead of 'use' and the router is getting the URL that is being accessed by the client
router.get('/',helloWorld);          // DItto above lines      

export default router; // exports the router in 'router.use' comands so they can be read by the rest of the folder whenver needed -- default allows us to 
                       // name it as any name in the server.js file 