import express from "express";
import bankAccountController from "../controllers/accountsController.js";

const router = express.Router();

router
  .get("/bankAccounts", bankAccountController.listAccounts)
  .get("/bankAccounts/search", bankAccountController.listAccountForNumber)
  .get("/bankAccounts/:id", bankAccountController.listAccountForId)
  .post("/bankAccounts", bankAccountController.registerAccount)
  .put("/bankAccounts/:id", bankAccountController.updateAccount)
  .delete("/bankAccounts/:id", bankAccountController.deleteAccount)

export default router;   