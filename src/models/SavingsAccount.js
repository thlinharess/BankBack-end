import mongoose from "mongoose";

const savingsSchema = new mongoose.Schema(
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

const savingsAccounts = mongoose.model('savingsAccounts', savingsSchema);

export default savingsAccounts;

