const express = require('express');
const app = new express();
const nav = [
    {link:'/',name:'Home',active:'active'},
    {link:'/books',name:'Books',active:'active'},
    {link:'/authors',name:'Authors',active:'active'},
    {link:'/addbook',name:'Add Book',active:'active'},
    {signin:'/signin',name:'Sign In'},
    {signup:'/signup',name:'Sign Up'},
    {signout:'/welcome',name:'Sign Out'}
    ];

const indexRouter = require('./src/routes/indexRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const welcomeRouter = require('./src/routes/welcomeRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/',indexRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/welcome',welcomeRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addRouter);

app.listen(5002);
console.log("sever port is 5002");