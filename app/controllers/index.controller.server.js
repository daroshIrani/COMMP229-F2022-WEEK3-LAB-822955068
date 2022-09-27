// Export is so  that we export the function as part of the controller
// Index controller page controller
export function helloWorld(req,res,next){// for an MVC structure controller and view is below within this function
    res.setHeader('Content-Type', 'text/plain');// controller
    res.end('Hello from NodeJS Application');// view
                                            // model is where we hold the data
    next();
};

export function displayhomePage(req,res,next){
    // removed because 'index.ejs' controls the template for HTML--  res.setHeader('Content-Type', 'text/html');
    // removed because 'index.ejs' controls the template for HTML--  res.end("<h1> Hello from NodeJS Application as HTML <h1>");
    // removed because 'index.ejs' controls the template for HTML--  next();
    
    // HTML code is being rendered on the controller which is going to the ejs template under views (View is rendered by the controller called by the route)
    // the variables added here like 'title' can be used across the whole view folder because of the .render menthod
    res.render('index', {title :'Home'}); // redirect that render works with comes form Express EJS engine --> since we set up view engine in server.js as being EJS --> 
};                                          //  index should be the same name as the file under 'views' becuse it is rendering only the template which will be filled afterwrads

export function helloWorldJSON(req,res,next){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(objectJson,));
    next();
};