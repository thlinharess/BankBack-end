import express from "express";
import clients from "./clientsRoutes.js"
import bankAccounts from "./AccountRoutes.js"
import savingsAccounts from "./SavingsRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({tittle: "Client list"})
  })

  app.use(
    express.json(),
    clients,
    bankAccounts,
    savingsAccounts
  )
}

export default routes