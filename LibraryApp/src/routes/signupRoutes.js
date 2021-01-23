const express = require ('express');

const signupRouter = express.Router();
function router(nav){

    signupRouter.get('/',(req,res)=>{
        res.render("signup",
        {
            nav,
            title:'Sign Up | Library App',
            head:'Sign Up',
        });
    });

    return signupRouter;
}

module.exports = router;