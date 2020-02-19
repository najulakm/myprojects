const express=require('express')
var booksRouter=express.Router();
function router(nav)
{


var books=[
    {
        title:"war and piece",
        genre:"Historical fiction",
        author:"Lev Nicholayevich",
    },
    {
        title:"war and piece",
        genre:"Historical fiction",
        author:"Lev Nicholayevich",

    },
];
booksRouter.route('/')
.get((req,res)=>{
    res.render(
        'books',
        {
            nav:[{link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'}],
        title:"Books",books
        }
    );
});
booksRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;
    res.render(
        'book',
        {
            nav,
    title:"Library",
    book:books[id]
        }
    )
});
return booksRouter;
}
module.exports=router;