const path = require('path');
const express = require('express');
const secret = require('./config/secret');
const router = express.Router();
const mongoose = require('mongoose')
const colors = require('colors');
// const connectDB = require('./config/db');

const morgan = require("morgan");
const fileupload = require('express-fileupload')


 



mongoose.connect(secret.database, {useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are already connected to the server database")
});


//invoke express
const app = express();

const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

//Body parser
app.use(express.json());

//initialise file upload

//morgan
app.use(morgan('dev'));

app. set('view engine', 'ejs')

//use routes
const pageRoutes = require('./controllers/pageRoutes')
app.use('/', pageRoutes)

const newsRoutes = require('./controllers/newsRoute')
app.use('/news', newsRoutes)

const adminRoutes = require('./controllers/adminRoutes')
app.use('/admin', adminRoutes)

const eventRoutes = require('./controllers/eventRoute')
app.use('/event', eventRoutes);


const hardTechRoutes = require('./controllers/hardTech')
app.use('/hardTech', hardTechRoutes)

const testRoutes = require('./controllers/testimonialRoute')
app.use('/testimonial', testRoutes) 


const ideaRoutes = require('./controllers/ideaRoute')
app.use('/form', ideaRoutes) 

app.use(fileupload());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));



////mount Routers
// app.use('/events', eventRoute);




//url encoder
app.use(express.urlencoded({ extended: false }));




//port setting
const PORT = process.env.PORT || secret.port;
const server = app.listen(PORT, console.log(`server started on port ${PORT}`.yellow.bold));



//HANDLE ERROR
process.on('unhandledRejection', (err, promise) =>{
    console.log(`Error: ${err.message}`.red.bold);
    //close derver & exit process 
    server.close(() => process.exit(1));
  }
  );