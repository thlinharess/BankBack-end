import  express  from "express";
import SavingsAccountController from "../controllers/savingsController.js";

const router = express.Router();

router
  .get("/savingsAccounts", SavingsAccountController.listSavings)
  .get("/savingsAccounts/search", SavingsAccountController.listSavingsForNumber)
  .get("/savingsAccounts/:id", SavingsAccountController.listSavingsForId)
  .post("/savingsAccounts", SavingsAccountController.registerSavings)
  .put("/savingsAccounts/:id", SavingsAccountController.updateSavings)
  .delete("/savingsAccounts/:id", SavingsAccountController.deleteSavingsAccount)
  
  export default router;   