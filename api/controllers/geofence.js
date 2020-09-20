const dataLayer = require('../datalayer/update');
exports.status_change = (req, res, next) => {
   console.log(req.body);
   dataLayer.update(req.body); 
   res.send("success");
}

exports.get_status = (req, res, next) => {
    dataLayer.get_status((data)=>{
        res.send(data);
    })
   
 }