import express from "express";
import ClientController from "../controllers/clientsController.js";

const router = express.Router();

router
  .get("/clients", ClientController.listClients)
  .get("/clients/search", ClientController.listClientsForName)
  .get("/clients/:id", ClientController.listClientsForId)
  .post("/clients", ClientController.registerClient)
  .put("/clients/:id", ClientController.updateClient)
  .delete("/clients/:id", ClientController.deleteClient)

export default router;   