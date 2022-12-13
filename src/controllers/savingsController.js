import savingsAccounts from "../models/SavingsAccount.js";

class SavingsAccountController {
    
    static listSavings = (req, res) => {
        savingsAccounts.find((err, savingsAccounts) => {
            res.status(200).json(savingsAccounts)
      })
      }
    
      static listSavingsForId = (req, res) => {
        const id = req.params.id;
    
        savingsAccounts.findById(id)
          .exec((err, savingsAccounts) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Savings Account id not found.`})
          } else {
            res.status(200).send(savingsAccounts);
          }
        })
      }
    
      static registerSavings = (req, res) => {
        let savings = new savingsAccounts(req.body);
    
        savings.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - failed to register savings account.`})
          } else {
            res.status(201).send(savings.toJSON())
          }
        })
      }
    
      static updateSavings = (req, res) => {
        const id = req.params.id;
    
        savingsAccounts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Savings Account updated successfully'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
    
      static deleteSavingsAccount = (req, res) => {
        const id = req.params.id;
    
        savingsAccounts.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Savings Account removed successfully!'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
    
      static listSavingsForNumber = (req, res) => {
        const  numberAccount = req.query.numberAccount
    
        savingsAccounts.find({'numberAccount': numberAccount}, {}, (err, savingsAccounts) => {
          res.status(200).send(savingsAccounts);
    
        })
      }
}

export default SavingsAccountController