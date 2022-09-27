// {*********//} always use this code signified by this

// Import Third Party Modules after installling them using npm ****************///////
import express from 'express';// imports full content of express into the .js file (do not use ***{express}***)
import logger from 'morgan';
import session from 'express-session';
import cookieParser from 'cookie-parser';

//ES Modules fix for __dirname ******///////
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import routes ************///////
import indexRouter from './app/routes/index.route.server.js'; // called indexRouter (name can be anyting) because it is the only thing that we are exporting from routes folder.



// Instantiate express application
const app = express();//assgning its fucntionailty to tha app constant so we can manipulate its functioality later (express works with connect but express has more features)
                      // Express is an ES module and you have to set "type":"module" in the package.json file under main to tell node.js we are using an ES module, in this case Express

// const objectJson = {"message":"Hello from NodeJS Application as json "};// just an object in json format to use later

// function logger(req,res,next){
//     console.log(req.method, req.url); // logger f'n 
// 
//     next();
// };
// *******************************************
// function helloWorld(req,res,next){// for an MVC structure controller and view is below within this function >>****** Whole function can be considered a controller
//     res.setHeader('Content-Type', 'text/plain');// controller                                               >>****** so we moved it to controllers folder
//     res.end('Hello from NodeJS Application');// view                                                        
//                                             // model is where we hold the data                              
//     next();                                                                                                 
// };                                                                                                          


// function helloWorldHtml(req,res,next){                                                                      >>***** Whole function can be considered a controller
// res.setHeader('Content-Type', 'text/html');                                                                 >>****** So we moved it to controllers folder
// res.end("<h1> Hello from NodeJS Application as HTML <h1>");
// next();
// };

// function helloWorldJSON(req,res,next){                                                                      >>***** WHole function can be considered a controller
// res.setHeader('Content-Type', 'application/json');                                                          >>***** so we moved it to controllers folder
// res.end(JSON.stringify(objectJson,));
// next();
// };


// app.use('/json', helloWorldJSON);                                                                           >>*****  Example of 'route' so moved to routes folder - URL is routed by'/json' and 'helloWorldJSON' is function being called                                                                  
// app.use('/html', helloWorldHtml);                                                                           >>***** DITTO ABOVE COMMENT
// app.use('/',helloWorld);                                                                                    >>***** DITTO ABOVE COMMENT
// **********************************************

//setting up middlewares
// app.set - is setting up a variable from within our app

//setup ViewEngine as EJS *****/////////
app.set('views', path.join(__dirname, 'app/views') ); // from server.js to app folder to views folder
app.set('view engine', 'ejs'); // app.set (<the setting>, <value>)  


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, '/client'))); // Everything on the client and public folder(as the line below) are static files
app.use(express.static(path.join(__dirname, '/public'))) // This is the code that makes the folder 'public' static so that it can be rendered in client end
app.use(session({                                         // DOnt keep session informatio in between executions (best Practices)
    secret:'MySecret',
    saveUninitialized: false,
    resave:false
}));


// Use Routes
app.use('/', indexRouter); // from this server .js file, we import the routing logic whihc is stored in routes, then from routes we import the controller functions (logic) stored in controllers 


app.listen(3000,'10.0.0.39'); // this is how we move code to meet horizontal structure design and wire all up

