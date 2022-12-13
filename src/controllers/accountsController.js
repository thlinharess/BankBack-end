import bankAccounts from "../models/BankAccount.js";

class  bankAccountController {

  static listAccounts = (req, res) => {
    bankAccounts.find((err, bankAccounts) => {
      res.status(200).json(bankAccounts)
  })
  }

  static listAccountForId = (req, res) => {
    const id = req.params.id;

    bankAccounts.findById(id, (err, bankAccounts) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Bank account id not found.`})
      } else {
        res.status(200).send(bankAccounts);
      }
    })
  }

  static registerAccount = (req, res) => {
    let account = new bankAccounts(req.body);

    account.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - failed to register bank account.`})
      } else {
        res.status(201).send(account.toJSON())
      }
    })
  }

  static updateAccount = (req, res) => {
    const id = req.params.id;

    bankAccounts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'account actualized successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteAccount = (req, res) => {
    const id = req.params.id;

    bankAccounts.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Account removed successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
  static listAccountForNumber = (req, res) => {
    const  numberAccount = req.query.numberAccount

    bankAccounts.find({'numberAccount': numberAccount}, {}, (err, bankAccounts) => {
      res.status(200).send(bankAccounts);

    })
  }

}

export default bankAccountController