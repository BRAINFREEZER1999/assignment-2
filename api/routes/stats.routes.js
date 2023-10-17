module.exports = app => {
    const stats = require("../controllers/stats.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", stats.stats);
  
    app.use('/api/stats', router);
};
