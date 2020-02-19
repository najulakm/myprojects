// const express=require('express')
// var app=new express();
// app.get('/',function(req,res)
// {
//     res.send("Hello");
// });
// app.listen(3000,function()
// {
//     console.log('listening to port 3000');

// });
const express=require('express')
const chalk=require('chalk')
const path=require('path');

var app=new express();
var nav=[{link:'/books',title:'Books'},
{link:'/authors',title:'Authors'}];
var booksRouter=require('./src/routes/bookRoutes.js')(nav);

app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);

// app.get('/',function(req,res)
// {
//     res.sendFile(path.join(__dirname,"src/views/index.html"));

// });
app.set('views','./src/views');
app.set('view engine','ejs');
var nav=[{link:'/books',title:'Books'},
{link:'/authors',title:'Authors'}];
app.get('/',function(req,res)
{ 
    res.render('index',
    {
        nav,
        title:"Library"
    }
);
});


app.listen(3000,function()
{
    console.log('listening to port'+chalk.green('3000'));
});