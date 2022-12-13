import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    id: {type: String},
    numberAccount: {type: String, required: true},
    accountBalance: {type: Number, required: true},
    accountType: {type: String, riquires: true}
  },
  {
    versionKey: false
  }
)

const bankAccounts = mongoose.model('bankAccounts', accountSchema);

export default bankAccounts;