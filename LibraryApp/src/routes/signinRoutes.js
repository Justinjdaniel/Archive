const express = require ('express');

const signinRouter = express.Router();
function router(nav){

    signinRouter.get('/',(req,res)=>{
        res.render("signin",
        {
            nav,
            title:'Sign In | Library App',
            head:'Sign In',
        });
    });

    return signinRouter;
}

module.exports = router;