const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project/projectController");

router
  .get("/", projectController.getProjects)
  .post("/", projectController.addProject);

router.get("/singleproject", projectController.getSingleProject);
router.put("/updateTicketStatus", projectController.updateProjectTicketStatus);
router
  .put("/addTicket", projectController.addProjectTicket)
  .put("/ticket/update", projectController.updateTicketDetails)
  .put("/ticket/delete", projectController.removeTicket);

module.exports = router;
