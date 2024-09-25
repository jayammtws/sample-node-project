

module.exports = function(app) {
    app.get('/',function(req,res){ 
        res.render('index'); 
    });

    app.post('/' ,(req,res)=>{
        console.log(req.headers.authorization)
        if (req.headers.authorization == 'test'){
            res.status(200).send('authorized')
        }else{
            res.status(401).send('unauthorized')
        }
    })
}