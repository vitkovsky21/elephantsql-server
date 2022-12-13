module.exports = app => {
  const forums = require("../controllers/forum.controller.js");

  var router = require("express").Router();

  router.post("/", forums.create);

  router.get("/", forums.findAll);

  router.get("/published", forums.findAllPublished);

  router.get("/:id", forums.findOne);

  router.put("/:id", forums.update);

  router.delete("/:id", forums.delete);

  router.delete("/", forums.deleteAll);

  app.use("/api/forums", router);
};
