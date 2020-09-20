const dataLayer = require('../datalayer/update');
exports.status_change = (req, res, next) => {
   console.log(req.body);
   dataLayer.update(req.body); 
   res.send("success");
}