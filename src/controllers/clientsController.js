import clients from "../models/Client.js";

class ClientController {

  static listClients = (req, res) => {
    clients.find()
     .populate('bankAccount savingsAccount', 'numberAccount accountType')
      .exec((err, clients) => {
        res.status(200).json(clients)
  })
  }

  static listClientsForId = (req, res) => {
    const id = req.params.id;

    clients.findById(id)
    .populate('bankAccount savingsAccount', 'numberAccount accountType')
      .exec((err, clients) => {
      if(err) {
        res.status(400).send({message: `${err.message} -  Client id not found.`})
      } else {
        res.status(200).send(clients);
      }
    })
  }

  static registerClient = (req, res) => {
    let client = new clients(req.body);

    client.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - failed to register client.`})
      } else {
        res.status(201).send(client.toJSON())
      }
    })
  }

  static updateClient = (req, res) => {
    const id = req.params.id;

    clients.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'client updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteClient = (req, res) => {
    const id = req.params.id;

    clients.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'client removed successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listClientsForName = (req, res) => {
    const name = req.query.name
    
    clients.find({'name': name}, {}, (err, clients) => {
      res.status(200).send(clients);

    })
  }



}

export default ClientController;