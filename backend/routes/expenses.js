const router = require('express').Router();
let Expense = require('../models/expense.model');

router.route('/').get((req, res) => {
    const sortOption = req.query.sort || 'date';

    let sortCriteria = {};
    if (sortOption === 'amount') {
        sortCriteria = { amount: 1 };
    } else if (sortOption === 'alphabetical') {
        sortCriteria = { transaction: 1 };
    } else {
        sortCriteria = { date: -1 };
    }

    Expense.find()
        .sort(sortCriteria) // Apply the sorting criteria
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const transaction = req.body.transaction;    
    const amount = Number(req.body.amount);    
    const date = Date.parse(req.body.date);
    const description = req.body.description;
    
    const newExpense = new Expense ({
        username,
        transaction,
        amount,
        date,
        description
    });

    newExpense.save()
        .then(() => res.json('Expense added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Expense.findById(req.params.id)
        .then(expense => res.json(expense))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Expense.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
  
router.route('/update/:id').post((req, res) => {
    Expense.findById(req.params.id)
        .then(expense => {
            expense.username = req.body.username;
            expense.transaction = req.body.transaction;    
            expense.amount = Number(req.body.amount);    
            expense.date = Date.parse(req.body.date);
            expense.description = req.body.description;
    
            expense.save()
                .then(() => res.json('Expense updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;