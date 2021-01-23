const express = require ('express');

const addRouter = express.Router();
function router(nav){
    const add =[
        {
            head:'Add a Book',
            title:'Book Title',
            author:'Author',
            genre:'Genre',
            published:'Published',
            about:'About',
            cover:'Book Cover'
        }
    ]

    addRouter.get('/',(req,res)=>{
        res.render("addbook",
        {
            nav,
            title:'Add Book | Library App',
            head:'Add Book',
            add
        });
    });

    return addRouter;
}

module.exports = router;