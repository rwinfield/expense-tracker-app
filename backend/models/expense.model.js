const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    name: {type: String, required: true},
    member_id: {type: String, required: true},     
    transaction: {type: String, required: true},
    amount: {type: mongoose.Types.Decimal128, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: false}
}, {
    timestamps: true,
    toJSON: {getters: true}
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;