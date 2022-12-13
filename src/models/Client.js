import mongoose from "mongoose";

const clientSchama = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    bankAccount: {type: mongoose.Schema.Types.ObjectId, ref: 'bankAccounts', required: true},
    savingsAccount: {type: mongoose.Schema.Types.ObjectId, ref: 'savingsAccounts', required: false}
  },
  {
    versionKey : false
  }
);

const clients = mongoose.model('clients', clientSchama);

export default clients;

